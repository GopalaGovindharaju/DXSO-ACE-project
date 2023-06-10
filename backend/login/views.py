
from django.shortcuts import render
from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view
from  login.serializers import SigninSerializer
from django.http import JsonResponse



def create_employee(request):
    if request.method == "POST":
        emp_name = request.POST.get("empName")
        emp_id = request.POST.get("empId")
        role = request.POST.get("role")

        # Perform any necessary validation or processing here

        # Assuming you have an Employee model
        employee = Signin(Emp_Name=emp_name, Emp_Id=emp_id, Emp_Role=role)
        employee.save()

        return JsonResponse({"message": "Account created successfully"})
    else:
        return JsonResponse({"error": "Invalid request method"})
