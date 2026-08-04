from django.urls import path
from . import views

urlpatterns = [
  path('add/', views.add_to_cart, name='add_to_cart'),
  path('cartitems/', views.get_cart_items, name='get_cart_items'),
  path('remove/', views.remove_from_cart, name='remove_from_cart'),
  path('update/', views.update_cart, name='update_cart'),
  path('clear/', views.clear_cart, name='clear_cart'),
  path('summary/', views.get_cart_summary, name='get_cart_summary'),
]