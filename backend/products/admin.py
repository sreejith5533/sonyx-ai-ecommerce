from django.contrib import admin

# Register your models here.


from .models import Category,Brand,Product,ProductImage,ProductSpecification,Banner,SubCategory,Department,ProductSection

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  filter_horizontal = ("section",)



admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(ProductImage)
admin.site.register(ProductSpecification)
admin.site.register(Banner)
admin.site.register(SubCategory)
admin.site.register(Department)
admin.site.register(ProductSection)
