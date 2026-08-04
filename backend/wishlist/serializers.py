from rest_framework import serializers
from .models import Wishlist, WishlistItem
from products.serializers import ProductSerializer


class WishListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Wishlist
    fields = "__all__"


class WishListItemSerializer(serializers.ModelSerializer):
  product = ProductSerializer(read_only=True)

  class Meta:
    model = WishlistItem
    fields = "__all__"


class AddToWishlistSerializer(serializers.Serializer):
  product_id = serializers.IntegerField()


class RemoveFromWishlistSerializer(serializers.Serializer):
  product_id = serializers.IntegerField()
