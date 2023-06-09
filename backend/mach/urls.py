from django.urls import path
from . import views

urlpatterns = [
    
   
     path('', views.get_mach, name='get_mach'),
]
