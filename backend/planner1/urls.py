from django.urls import path
from . import views

urlpatterns = [  
    path('orderid/', views.get_orderid, name='get_orderid'),
    path('details/<int:order_number>/', views.get_details, name='get_details'),
]
 