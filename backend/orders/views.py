from django.shortcuts import render ,get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import OrderSerializer
from cart.models import Cart
from cart.utils import calculate_cart_total
from .models import Order , OrderItem
# Create your views here.



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_my_orders(request):
  orders = Order.objects.filter(user=request.user)
  serializer = OrderSerializer(orders, many=True)
  return Response(serializer.data)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_order_details(request,order_id):
  order = get_object_or_404(Order,user=request.user,id=order_id)
  serializer = OrderSerializer(order)
  return Response(serializer.data)
















