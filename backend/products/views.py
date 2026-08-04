from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import (
    ProductSerializer,
    BannerSerializer,
    CategorySerializer,
    SubCategorySerializer,
)
from .models import Product, Banner, Category, SubCategory

# Create your views here.


@api_view(["GET"])
@permission_classes([AllowAny])
def products_by_category(request, slug):



    products = Product.objects.filter(subcategory__category__slug=slug, is_active=True)

    if slug == "tv":
        size = request.GET.get("size")
        resolution = request.GET.getlist("resolution[]")
        refreshRate = request.GET.get("refreshRate")
        price = request.GET.get("price")
        search = request.GET.get("search")

        if size:
            products = products.filter(
                specification__name="screensize", specification__value=size
            )

        if resolution:
            products = products.filter(
                specification__name="resolution", specification__value__in=resolution
            )

        if refreshRate:
            products = products.filter(
                specification__name="refresh-rate", specification__value=refreshRate
            )

        if price:
            products = products.filter(price__lte=price)

        if search:
            products = products.filter(name__icontains=search)

    if slug == "audio":
        category = request.GET.getlist("category[]")
        batterylife = request.GET.get("batterylife")
        brand = request.GET.getlist("brand[]")
        audioprice = request.GET.get("price")
        search = request.GET.get("search")
        price = request.GET.get("price")



        if category:
            products = products.filter(subcategory__slug__in=category)
        

        if batterylife:
            products = products.filter(
                specification__name="batterylife", specification__value=batterylife
            )
    

        if brand:
            products = products.filter(brand__name__in=brand)
        

        if audioprice:
            products = products.filter(price__lte=audioprice)
    

        if search:
            products = products.filter(name__icontains=search)

        


    if slug == "camera":
        cameraType = request.GET.getlist("cameraType[]")
        brand = request.GET.getlist("brand[]")
        videoResolution = request.GET.getlist("videoResolution[]")
        cameraResolution = request.GET.getlist("cameraResolution[]")
        price = request.GET.get("price")
        search = request.GET.get("search")

        if cameraType :
            products = products.filter(
                subcategory__slug__in=cameraType
            )
    

        if brand :
            products = products.filter(
                brand__name__in=brand
            )
        
        if videoResolution :
            products = products.filter(
                specification__name="videoResolution", specification__value__in=videoResolution
            )

        if cameraResolution :
            products = products.filter(
                specification__name="cameraResolution", specification__value__in=cameraResolution
            )

        if price :
            products = products.filter(price__lte=price)
        
        if search :
            products = products.filter(name__icontains=search)
    

    if slug == "laptops":
        brand = request.GET.getlist("brand[]")
        ram = request.GET.getlist("ram[]")
        storage = request.GET.getlist("storage[]")
        processor = request.GET.getlist("processor[]")
        graphics = request.GET.getlist("graphics[]")
        price = request.GET.get("price")
        search = request.GET.get("search")



        if brand:
            products = products.filter(
                brand__name__in=brand
            )
        
        if ram :
            products = products.filter(
                specification__name="RAM", specification__value__in=ram
            )
        if storage:
            products = products.filter(
                specification__name="Storage", specification__value__in=storage
            )
        if processor:
            products = products.filter(
                specification__name="Processor", specification__value__in=processor
            )

        if graphics:
            products = products.filter(
                specification__name="Graphics", specification__value__in=graphics
            )

        if price:
            products = products.filter(price__lte=price)

        if search :
            products = products.filter(name__icontains=search)


    if slug == "accessories":
        category = request.GET.getlist("category[]")
        brand = request.GET.getlist("brand[]")
        connectivity = request.GET.getlist("connectivity[]")
        features = request.GET.getlist("features[]")
        color = request.GET.getlist("color[]")
        price = request.GET.get("price")
        search = request.GET.get("search")



        if category :
            products = products.filter(
                specification__name="category",specification__value__in=category
            )
        
        if brand :
            products = products.filter(
                brand__name__in=brand
            )

        
        if connectivity:
            products = products.filter(
                specification__name="connectivity", specification__value__in=connectivity
            )

        if features :
            products = products.filter(
                specification__name="features", specification__value__in=features
            )
        
        if color :
            products = products.filter(
                specification__name="color", specification__value__in=color
            )

        if price:
            products = products.filter(price__lte=price)

        if search:
            products = products.filter(name__icontains=search)




    serializer = ProductSerializer(products.distinct(), many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def get_gaming_products(request):
    products = Product.objects.filter(section__slug="gaming-products", is_active=True)

    category = request.GET.getlist("category[]")
    connectivity = request.GET.getlist("connectivity[]")
    brand = request.GET.getlist("brand[]")
    price = request.GET.get("price")
    search = request.GET.get("search")


    

    if category:
        products = products.filter(subcategory__slug__in=category)

    if connectivity:
        products = products.filter(
            specification__name="connectivity", specification__value__in=connectivity
        )

    if brand:
        products = products.filter(brand__name__in=brand)
    

    if price:
        products = products.filter(price__lte=price)

    
    if search:
        products = products.filter(name__icontains=search)

    serializer = ProductSerializer(products.distinct(), many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def get_banner(request, page):
    banner = Banner.objects.filter(page=page, is_active=True)
    serializer = BannerSerializer(banner, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def home_categories(request, slug):
    
    categories = Category.objects.filter(department__slug=slug, is_active=True)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def product_by_section(request, slug):
    products = Product.objects.filter(section__slug=slug, is_active=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def products_by_subcategory(request, slug):
    subcategories = SubCategory.objects.filter(category__slug=slug, is_active=True)
    serializer = SubCategorySerializer(subcategories, many=True)
    return Response(serializer.data)




@api_view(["GET"])
@permission_classes([AllowAny])
def product_details(request,id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)