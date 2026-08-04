from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
  phone = models.CharField(max_length=10, blank=True, null=True)
  profile_image = models.ImageField(upload_to='profile_images', blank=True, null=True)
  gender = models.CharField(max_length=10, choices=[
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other')
  ],blank=True, null=True)
  dob = models.DateField(blank=True, null=True)
  email = models.EmailField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.user.username





class Address(models.Model):
  id = models.AutoField(primary_key=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='addresses')
  full_name = models.CharField(max_length=100)
  phone = models.CharField(max_length=10)
  house_name = models.CharField(max_length=100,blank=True, null=True)
  street_address = models.CharField(max_length=255)
  city = models.CharField(max_length=100)
  state = models.CharField(max_length=100)
  pincode = models.CharField(max_length=10)
  country = models.CharField(max_length=100)
  address_type = models.CharField(
    max_length=20,
    choices=[
      ("home","Home"),
      ("work", "Work"),
      ("other", "Other"),
    ],
    default="home"
  )
  landmark = models.CharField(max_length=100, blank=True, null=True)
  is_default = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f"{self.full_name} - {self.city}"

  