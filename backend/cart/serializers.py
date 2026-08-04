from rest_framework import serializers
from .models import Cart, CartItem
from products.serializers import ProductSerializer


class CartSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cart
    fields = "__all__"


class CartItemSerializer(serializers.ModelSerializer):
  product = ProductSerializer(read_only=True)
  class Meta:
    model = CartItem
    fields = "__all__"



class AddToCartSerializer(serializers.Serializer):
  product_id = serializers.IntegerField()
  quantity = serializers.IntegerField()



class RemoveCartSerializer(serializers.Serializer):
  product_id = serializers.IntegerField()



class UpdateCartSerializer(serializers.Serializer):
  product_id = serializers.IntegerField()
  quantity = serializers.IntegerField()