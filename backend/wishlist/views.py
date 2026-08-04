from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import (
    WishListSerializer,
    WishListItemSerializer,
    AddToWishlistSerializer,
    RemoveFromWishlistSerializer,
)
from django.contrib.auth.models import User
from .models import Wishlist, WishlistItem
from products.models import Product

# Create your views here.


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_wishlist_items(request):
    user = request.user
    wishlist, created = Wishlist.objects.get_or_create(user=user)

    wishlist_items = wishlist.items.all()
    serializer = WishListItemSerializer(wishlist_items, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_to_wishlist(request):
    serializer = AddToWishlistSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    product_id = serializer.validated_data["product_id"]
    user = request.user

    wishlist, created = Wishlist.objects.get_or_create(user=user)

    product = get_object_or_404(Product, id=product_id)

    if wishlist.items.filter(product=product).exists():
        return Response({"message": "Product already in wishlist"}, status=400)

    WishlistItem.objects.get_or_create(wishlist=wishlist, product=product)

    wishlist.items.add(product)

    wishlist.save()

    return Response({"message": "Product added to wishlist"}, status=200)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def remove_from_wishlist(request):

    serializer = RemoveFromWishlistSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    product_id = serializer.validated_data["product_id"]
    user = request.user

    wishlist, created = Wishlist.objects.get_or_create(user=user)

    product = get_object_or_404(Product, id=product_id)

    WishlistItem.objects.filter(wishlist=wishlist, product=product).delete()

    return Response({"message": "Product removed from wishlist"}, status=200)
