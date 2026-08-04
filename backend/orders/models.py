from django.db import models
from django.conf import settings
from products.models import Product
from cart.models import Cart

# Create your models here.


class Order(models.Model):
  PAYMENT_METHODS = [
    ("razorpay", "Razorpay"),
    ("cod", "Cash on Delivery"),
    ("upi", "UPI"),
    ("card", "Card"),
    ("netbanking", "Netbanking")
  ]

  PAYMENT_STATUS = [
    ("pending", "Pending"),
    ("paid", "Paid"),
    ("failed", "Failed"),
    ("refunded", "Refunded")
  ]

  DELIVERY_STATUS = [
    ("placed","Order Placed"),
    ("confirmed","Order Confirmed"),
    ("packed","Order Packed"),
    ("shipped","Order Shipped"),
    ("out_for_delivery","Out for Delivery"),
    ("delivered","Delivered"),
    ("cancelled","Order Cancelled")
  ]


  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

  cart = models.ForeignKey(Cart, on_delete=models.CASCADE)

  total_amount = models.DecimalField(max_digits=10, decimal_places=2)

  payment_id = models.CharField(max_length=255,blank=True, null=True)

  razorpay_order_id = models.CharField(max_length=255,blank=True, null=True)


  payment_method = models.CharField(
    max_length=20,
    choices=PAYMENT_METHODS,
    default='razorpay'
  )

  delivery_status = models.CharField(
    max_length=20,
    choices=DELIVERY_STATUS,
    default='placed'
  )


  payment_status = models.CharField(
    max_length=20,
    choices=PAYMENT_STATUS,
    default='pending'
  )






  ordered = models.BooleanField(default=False)

  delivered_at = models.DateTimeField(blank=True, null=True)

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)





class OrderItem(models.Model):
  order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
  product = models.ForeignKey(Product, on_delete=models.CASCADE)

  quantity = models.PositiveIntegerField()

  price = models.DecimalField(max_digits=10, decimal_places=2)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)





