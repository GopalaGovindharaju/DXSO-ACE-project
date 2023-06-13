from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from Cust_AssetList.models import CustomerAsset
from rest_framework.response import Response
from Cust_AssetList.serializer import CustomerSerializer

@api_view(['GET'])
def get_orderid(request):
    orderid = CustomerAsset.objects.values_list('orderNumber', flat=True).distinct()
    orderid = list(orderid)
    return Response({'orderid': orderid})

@api_view(['GET'])
def get_details(request, order_number):
    try:
        customer = CustomerAsset.objects.get(orderNumber=order_number)
        serializer = CustomerSerializer(customer)
        return Response(serializer.data)
    except CustomerAsset.DoesNotExist:
        return Response({'error': 'Customer not found'})

