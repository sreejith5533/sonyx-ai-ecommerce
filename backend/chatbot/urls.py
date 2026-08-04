from . import views
from django.urls import path



urlpatterns = [
  path('messages/', views.chatbot_view, name='chatbot'),
]