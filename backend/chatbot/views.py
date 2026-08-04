from django.shortcuts import render
from google import genai
from django.conf import settings
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import ChatbotSerializer
from products.models import Product

# Create your views here.


client = genai.Client(api_key=settings.GEMINI_API_KEY)


@api_view(["POST"])
@permission_classes([AllowAny])
def chatbot_view(request):
    serializer = ChatbotSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    message = serializer.validated_data["message"]

    products = Product.objects.all()


    if "laptops" in message.lower():
        products = products.filter(subcategory__category__slug="laptops")
    
    elif "tv" in message.lower():
        products = products.filter(subcategory__category__slug="tv")
    
    elif "audio" in message.lower():
        products = products.filter(subcategory__category__slug="audio")
    
    elif "camera" in message.lower():
        products = products.filter(subcategory__category__slug="camera")
    
    elif "gaming" in message.lower():
        products = products.filter(section__name="gaming-products")
    else:
        products = Product.objects.all()[:10]

    SYSTEM_PROMPT = """
      You are SONYX AI Shopping Assistant.

      Your job is to help customers shopping on the SONYX website.

      - Recommend electronics.
      - Compare products.
      - Explain specifications.
      - Help with warranties, shipping, and returns.
      - Keep answers short and friendly.
      - Never invent product information.
      """

    product_text = ""

    for product in products:
        product_text += f"""
          Name : {product.name}
          Price : {product.price}
          Brand : {product.brand.name}
          Short Description : {product.short_description}
          Long Description : {product.long_description}
          """
        
    prompt = f"""
      {SYSTEM_PROMPT}

      Products:
      {product_text}

      Customer:
      {message}

      """
    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite", contents=prompt
        )

    except Exception as e:
        return Response({"message": f"Error: {e}"}, status=400)
    return Response({"message": message, "response": response.text})
