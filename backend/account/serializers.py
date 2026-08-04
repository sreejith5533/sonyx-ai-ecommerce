from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Address
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password


class SignupSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "confirmPassword"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        if data["password"] != data["confirmPassword"]:
            raise serializers.ValidationError(
                {"message": "Password and Confirm Password did not match"}
            )

        if User.objects.filter(username=data["username"]).exists():
            raise serializers.ValidationError({"message": "Username already exists"})

        if User.objects.filter(email=data["email"]).exists():
            raise serializers.ValidationError({"message": "Email already exists"})

        

        return data

    def create(self, validated_data):
        validated_data.pop("confirmPassword")
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = User.objects.filter(email=data["email"]).first()

        if user is None:
            raise serializers.ValidationError("User does not exist")

        authenticate_user = authenticate(
            username=user.username, password=data["password"]
        )

        if authenticate_user is None:
            raise serializers.ValidationError({"message": "User does not exist"})

        data["user"] = user
        return data


class AddAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        exclude = ["user"]

    def validate_phone(self, value):
        if len(value) != 10 or not value.isdigit():
            raise serializers.ValidationError("Phone number should be 10 digits")
        return value

    def validate_pincode(self, value):
        if len(value) != 6 or not value.isdigit():
            raise serializers.ValidationError("Pincode should be 6 digits")
        return value

    def validate(self, data):
        user = self.context["request"].user

        if data.get("isPrimary"):
            Address.objects.filter(user=user, isPrimary=True).update(isPrimary=False)

        return data


class AddressesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class EditAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class ChangePasswordSerializer(serializers.Serializer):
    oldPassword = serializers.CharField(write_only=True)
    newPassword = serializers.CharField(write_only=True)
    confirmPassword = serializers.CharField(write_only=True)

    def validate(self, data):
        user = self.context["request"].user
        if not user.check_password(data["oldPassword"]):
            raise serializers.ValidationError({"message": "Old Password did not match"})

        if data["newPassword"] != data["confirmPassword"]:
            raise serializers.ValidationError(
                {"message": "Password and Confirm Password did not match"}
            )

        return data

    def update(self):
        user = self.context["request"].user
        user.set_password(self.validated_data["newPassword"])
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):

    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    email = serializers.EmailField(source="user.email")
    class Meta:
        model = UserProfile
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone",
            "gender",
            "dob",
            "profile_image",
        ]
    def update(self,instance,validated_data):
        user_data = validated_data.pop("user", {})
        user = instance.user
        user.first_name = user_data.get("first_name", user.first_name)
        user.last_name = user_data.get("last_name", user.last_name)
        user.email = user_data.get("email", user.email)
        user.save()

        for attr, value in validated_data.items():
          setattr(instance, attr, value)

        instance.save()
        return instance
