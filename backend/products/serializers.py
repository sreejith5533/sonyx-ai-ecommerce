from rest_framework import serializers
from .models import Product,ProductImage,ProductSpecification,Category,Brand,Banner,SubCategory,ProductSection


class CategorySerializer(serializers.ModelSerializer):
  image = serializers.SerializerMethodField()
  class Meta:
    model = Category
    fields = ["id","name","slug","image"]


    def get_image(self, obj):
        print(obj.image.url)  # temporary
        return obj.image.url if obj.image else None




class SubCategorySerializer(serializers.ModelSerializer):
  category = CategorySerializer()
  class Meta:
    model = SubCategory
    fields = ["id","name","category","slug","image","description"]

class ProductSpecificationSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductSpecification
    fields = '__all__'


class ProductSectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductSection
    fields = ["id","name","slug"]





class ProductImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductImage
    fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
  specification = ProductSpecificationSerializer(many=True,read_only=True)
  subcategory = SubCategorySerializer(read_only=True)
  category = CategorySerializer(read_only=True)
  images = ProductImageSerializer(many=True,read_only=True)
  section = ProductSectionSerializer(many=True,read_only=True)
  available_from = serializers.DateTimeField(
    format='%Y-%m-%d %H:%M:%S',
  )
  class Meta:
    model = Product
    fields = '__all__'












class BrandSerializer(serializers.ModelSerializer):
  class Meta:
    model = Brand
    fields = '__all__'





class BannerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Banner
    fields = '__all__'