from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from Cust_AssetList.models import CustomerAsset
from rest_framework.response import Response

@api_view(['GET'])
def get_orderid(request):
    orderid = CustomerAsset.objects.values_list('orderNumber', flat=True).distinct()
    orderid = list(orderid)
    return Response({'orderid': orderid})

@api_view(['GET'])
def get_product_numbers(request):
    product_name = request.GET.get('productName')
    orderid = request.GET.get('orderid')
    # Add your logic here to fetch the product numbers based on the product name and customer name from your database
    products = CustomerAsset.objects.filter(productName=product_name, name=orderid)
    product_numbers = products.values_list('productNumber', flat=True)
    product_numbers = list(product_numbers)

    return Response({'productNumbers': product_numbers})