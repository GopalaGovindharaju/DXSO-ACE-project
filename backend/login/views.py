from django.shortcuts import render
from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view
from  login.serializers import SigninSerializer

@api_view(['GET'])
def get_signin(requests):
    data = Signin.objects.all()
    serial =SigninSerializer(data,many=True)
    return Response(serial.data)



