from django.urls import path
from . import views

urlpatterns = [
    path('sections/gaming-products/', views.get_gaming_products, name='get_gaming_products'),
    path(
        "category/<slug:slug>/", views.products_by_category, name="products_by_category"
    ),
    path("banners/<str:page>/", views.get_banner, name="banners"),
    path('department/<slug:slug>/categories/', views.home_categories, name='home_categories'),
    path('sections/<slug:slug>/', views.product_by_section, name='product_by_section'),
    path('subcategory/<slug:slug>/', views.products_by_subcategory, name='products_by_subcategory'),
    path('viewproduct/<int:id>/', views.product_details, name='product_details'),
]
