from django.urls import path
from . import views



from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView,
  TokenVerifyView
)



urlpatterns = [
  path('signup/', views.singup_view, name='signup'),
  path('login/', TokenObtainPairView.as_view(), name='login'),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
  path("logout/", views.logout_view),
  path('profile/', views.profile_view, name='profile'),
  path('addaddress/', views.add_address, name='add_address'),
  path('addresses/', views.get_addresses, name='get_addresses'),
  path('addresses/<int:address_id>/', views.address_details, name='address_details'),
  path('changepassword/', views.change_password, name='change_password'),
  path('stats/', views.stats_count, name='stats_count'),
]