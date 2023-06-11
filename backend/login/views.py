
from django.shortcuts import render
from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view
from  login.serializers import SigninSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        data = request.data

        Emp_Name = data.get('Emp_Name')
        Emp_Id = data.get('Emp_Id')
        Emp_Role = data.get('Emp_Role')

        emp_detail = Signin(
            Emp_Name=Emp_Name,
            Emp_Id=Emp_Id,
            Emp_Role=Emp_Role
        )
        emp_detail.save()
        return Response("Signed")
    else:
        return Response("Can't Signed")
    
@api_view(['POST'])
def validate_employee(request):
    if request.method == 'POST':
        data = request.data

        Emp_Name = data.get('Emp_Name')
        Emp_Id = data.get('Emp_Id')

        # Assuming you have an Employee model/table
        try:
            employee = Signin.objects.get(Emp_Name=Emp_Name, Emp_Id=Emp_Id)
            Emp_Role = employee.Emp_Role
            return Response(Emp_Role)
        except Signin.DoesNotExist:
            return Response('')