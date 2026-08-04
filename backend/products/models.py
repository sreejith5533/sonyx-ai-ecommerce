from django.db import models

# Create your models here.



class Department(models.Model):
  name = models.CharField(max_length=200)
  slug = models.SlugField(unique=True)

  def __str__(self):
    return self.name
  






class Category(models.Model):

  department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='categories')
  
  name = models.CharField(max_length=100)
  slug = models.SlugField(unique=True)
  image = models.ImageField(upload_to='categories/')
  is_active = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
  


class SubCategory(models.Model):
  category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
  name = models.CharField(max_length=100)
  image = models.ImageField(upload_to='subcategories/')
  description = models.TextField(blank=True, null=True)
  slug = models.SlugField(unique=True)
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return self.name





class Brand(models.Model):
  name = models.CharField(max_length=100)
  logo = models.ImageField(upload_to='brands/')
  description = models.TextField()
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return self.name
  



class ProductSection(models.Model):
  name = models.CharField(max_length=100)
  slug = models.SlugField(unique=True)

  def __str__(self):
    return self.name
  

class Product(models.Model):
  subcategory = models.ForeignKey(
      SubCategory, on_delete=models.CASCADE, related_name='products'
  )
  brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  slug = models.SlugField()
  short_description = models.CharField(max_length=255)
  long_description = models.TextField()
  price = models.DecimalField(max_digits=10, decimal_places=2)
  offer_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
  available_from = models.DateTimeField(blank=True, null=True)
  stock = models.IntegerField()
  thumbnail = models.ImageField(upload_to='products/')
  section = models.ManyToManyField(ProductSection, related_name='products', blank=True)
  is_active = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
  



class ProductImage(models.Model):
  product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
  image = models.ImageField(upload_to="product_images/")
  alt_text = models.CharField(max_length=200,blank=True)
  is_primary = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.product.name} Image"




class ProductSpecification(models.Model):
  product  = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='specification')

  icon = models.CharField(max_length=100)
  name = models.CharField(max_length=100)
  value = models.CharField(max_length=100)

  def __str__(self):
    return self.name  




class Banner(models.Model):
  PAGE_CHOICES = [
      ('home', 'Home'),
      ('tv', 'TV'),
      ('audio', 'Audio'),
      ("camera", "Camera"),
      ("gaming", "Gaming"),
      ("laptop", "Laptop"),
      ("accessories", "Accessories"),
  ]

  page = models.CharField(max_length=30, choices=PAGE_CHOICES,unique=True)
  video = models.FileField(upload_to='banner_videos/')
  poster = models.ImageField(upload_to='banner_posters/',blank=True, null=True)
  is_active = models.BooleanField(default=True)



  def __str__(self):
    return self.page

