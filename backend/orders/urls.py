from django.urls import path
from . import views

urlpatterns = [
    path('myorders/', views.get_my_orders, name='get_my_orders'),
    path("<int:order_id>/", views.get_order_details)
]
