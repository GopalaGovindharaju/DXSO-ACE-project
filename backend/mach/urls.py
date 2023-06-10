from django.urls import path
from . import views

urlpatterns = [ 
     path('', views.get_mach, name='get_mach'),
     path('list/', views.get_mach, name='get_mach'),
     path('save/', views.post_mach, name='post_mach'),
]
