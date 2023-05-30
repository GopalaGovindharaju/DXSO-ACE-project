from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.upload_file, name='upload_file')
]
