from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import AddToCartSerializer, CartItemSerializer, RemoveCartSerializer,UpdateCartSerializer
from django.contrib.auth.models import User
from .models import Cart
from products.models import Product
from decimal import Decimal
from .utils import calculate_cart_total
# Create your views here.


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    serializer = AddToCartSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    product_id = serializer.validated_data["product_id"]
    quantity = serializer.validated_data["quantity"]

    user = request.user

    cart, created = Cart.objects.get_or_create(user=user)

    product = get_object_or_404(Product, id=product_id)
    cart_item, created = cart.items.get_or_create(
        product=product, defaults={"quantity": quantity}
    )

    if not created:
        cart_item.quantity += quantity
        cart_item.save()

    return Response({"message": "Product added to cart"}, status=200)




@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_cart_items(request):
    user = request.user
    cart = get_object_or_404(Cart, user=user)
    cart_items = cart.items.all()
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)



@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def remove_from_cart(request):
    
    serializer = RemoveCartSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    product_id = serializer.validated_data["product_id"]
    user = request.user

    cart = get_object_or_404(Cart,user=user)

    product = get_object_or_404(Product, id=product_id)

    cart.items.filter(product=product).delete()

    return Response({"message": "Product removed from cart"}, status=200)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_cart(request):
    serializer = UpdateCartSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=400)
    
    product_id = serializer.validated_data["product_id"]
    quantity = serializer.validated_data["quantity"]
    user = request.user

    cart = get_object_or_404(Cart,user=user)

    product = get_object_or_404(Product, id=product_id)

    cart_item = cart.items.get(product=product)

    cart_item.quantity = quantity
    cart_item.save()

    return Response({"message": "Product quantity updated in cart"}, status=200)



@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def clear_cart(request):
    user = request.user

    cart = get_object_or_404(Cart,user=user)

    cart.items.all().delete()

    return Response({"message": "Cart cleared"}, status=200)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_cart_summary(request):
    
    user = request.user

    cart = get_object_or_404(Cart,user=user)

    cart_items = cart.items.all()

    summary = calculate_cart_total(cart_items)

    return Response(summary, status=200)


