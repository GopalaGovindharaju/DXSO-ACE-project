from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_file, name='upload_file'),
    path('proname/', views.get_product_names, name='get_product_names'),
    path('custname/', views.get_customer_names, name='get_customer_names'),
    path('pronumber/', views.get_product_numbers, name='get_product_numbers'),
]
 