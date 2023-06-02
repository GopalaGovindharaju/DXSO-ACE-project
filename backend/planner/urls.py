from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_file, name='upload_file'),
    path('submitForm/', views.upload_detail, name='upload_detail')
]
