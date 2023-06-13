from django.urls import path
from . import views

urlpatterns = [  
    path('orderid/', views.get_orderid, name='get_orderid'),
    path('orderid/details/', views.get_details, name='get_details'),
]
 