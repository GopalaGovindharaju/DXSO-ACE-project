from django.urls import path
from . import views

urlpatterns = [
    
   
     path('machine/', views.get_mach, name='get_mach'),
]
