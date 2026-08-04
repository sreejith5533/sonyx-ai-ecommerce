from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
import razorpay
from razorpay.errors import SignatureVerificationError
from django.conf import settings
from cart.models import Cart
from cart.utils import calculate_cart_total
import traceback
from orders.models import Order, OrderItem
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.


client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_order(request):
    cart = get_object_or_404(Cart, user=request.user)

    cart_items = cart.items.all()

    summary = calculate_cart_total(cart_items)

    total_amount = summary["total"]

    amount = int(total_amount * 100)



    order_data = {
        "amount": amount,
        "currency": "INR",
        "receipt": f"order_{request.user.id}",
        "payment_capture": 1,
    }

    order = client.order.create(data=order_data)

    return Response(
        {
            "order_id": order["id"],
            "amount": order["amount"],
            "currency": order["currency"],
            "key": settings.RAZORPAY_KEY_ID,
        }
    )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def verify_payment(request):
    payment_id = request.data["razorpay_payment_id"]
    order_id = request.data["razorpay_order_id"]
    signature = request.data["razorpay_signature"]

    try:
        client.utility.verify_payment_signature(
            {
                "razorpay_order_id": order_id,
                "razorpay_payment_id": payment_id,
                "razorpay_signature": signature,
            }
        )

        cart = get_object_or_404(Cart, user=request.user)

        cart_items = cart.items.all()

        summary = calculate_cart_total(cart_items)

        order = Order.objects.create(
            user=request.user,
            cart=cart,
            total_amount=summary["total"],
            payment_method=request.data.get("payment_method", "razorpay"),
            payment_status="paid",
            payment_id=payment_id,
            razorpay_order_id=order_id,
            delivery_status="placed",
            ordered=True,
        )

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
            )

        cart.items.all().delete()
        calculate_cart_total(cart_items)

        try:
            send_mail(
                subject="Order Confirmed - SONYX Electronics",
                message=f"""
Hi {request.user.first_name or request.user.username},

Thank you for shopping with SONYX Electronics!

Your order has been placed successfully.

Order ID: {order.razorpay_order_id}
Payment ID: {payment_id}
Payment Method: {order.payment_method.title()}
Payment Status: {order.payment_status.title()}
Delivery Status: {order.delivery_status.title()}
Total Amount: ₹{order.total_amount}

Your order is now being processed.

Thank you for choosing SONYX Electronics.

Regards,
SONYX Electronics Team
""",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[request.user.email],
                fail_silently=False,
            )

        except Exception as e:
            print("Error sending email:", e)

        return Response({"message": "Payment verified successfully"}, status=200)
    except SignatureVerificationError:
        return Response({"message": "Payment verification failed"}, status=400)

    except Exception as e:
        traceback.print_exc()
        return Response({"message": str(e)}, status=400)
