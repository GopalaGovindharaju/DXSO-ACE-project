from django.urls import path, include
from . import views

urlpatterns = [
     path('signin/',views.create_employee, name='create_employee'),
]