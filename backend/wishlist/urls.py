from django.urls import path
from . import views

urlpatterns = [
  path('add/', views.add_to_wishlist, name='add_to_wishlist'),
  path('wishlistitems/', views.get_wishlist_items, name='get_wishlist_items'),
  path('remove/', views.remove_from_wishlist, name='remove_from_wishlist'),
]