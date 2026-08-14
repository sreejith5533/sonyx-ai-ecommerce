from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from wishlist.models import Wishlist,WishlistItem
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import (
    SignupSerializer,
    AddAddressSerializer,
    AddressesSerializer,
    EditAddressSerializer,
    ChangePasswordSerializer,
    UserProfileSerializer,
)

from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import UserProfile, Address
from orders.models import Order
from cart.models import Cart, CartItem

# Create your views here.


@api_view(["POST"])
@permission_classes([AllowAny])
def singup_view(request):
    serializer = SignupSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=200)
    return Response(serializer.errors, status=400)





@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data.get("refresh")
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"message": "Logout successful"}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=400)





@api_view(["GET", "PUT"])
@permission_classes([IsAuthenticated])
def profile_view(request):
    profile, created = UserProfile.objects.get_or_create(user=request.user)

    if request.method == "GET":
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    serializer = UserProfileSerializer(profile, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)



    return Response(serializer.errors, status=400)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_address(request):
    serializer = AddAddressSerializer(data=request.data, context={"request": request})

    if serializer.is_valid():
        serializer.save(user=request.user)

        return Response({"message": "Address added successfully"}, status=200)
    return Response(serializer.errors, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_addresses(request):
    addresses = Address.objects.filter(user=request.user)

    serializer = AddressesSerializer(addresses, many=True)

    return Response(serializer.data)


@api_view(["PUT", "GET"])
@permission_classes([IsAuthenticated])
def address_details(request, address_id):
    address = get_object_or_404(Address, user=request.user, id=address_id)

    if request.method == "GET":
        serializer = EditAddressSerializer(address)
        return Response(serializer.data)

    serializer = EditAddressSerializer(address, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def change_password(request):
    serializer = ChangePasswordSerializer(
        data=request.data, context={"request": request}
    )

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Password changed successfully"}, status=200)
    return Response(serializer.errors, status=400)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def stats_count(request):
    user = request.user
    wishlistCount = WishlistItem.objects.filter(wishlist__user=user).count()
    addressCount = Address.objects.filter(user=user).count()
    orderCount =  Order.objects.filter(user=user).count()
    cartCount = CartItem.objects.filter(cart__user=user).count()
    return Response({"wishlistCount": wishlistCount, "addressCount": addressCount, "orderCount": orderCount, "cartCount": cartCount}, status=200)
