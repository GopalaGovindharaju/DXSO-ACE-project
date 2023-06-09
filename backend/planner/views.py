import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
from . models import BomDetail
from rest_framework.decorators import api_view
from Cust_AssetList.models import CustomerAsset
from rest_framework.response import Response

@csrf_exempt  # To disable CSRF protection for simplicity in this example
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        df = pd.read_excel(uploaded_file, skiprows=2)
        BomDetail.objects.all().delete()
        BomDetail.objects.bulk_create([BomDetail(**row) for row in df.to_dict(orient='records')])
        
        return HttpResponse("File received.")
    else:
        return HttpResponse('No file received.')
    
@api_view(['GET'])
def get_product_names(request):
    customer_name = request.GET.get('customerName')
    # Add your logic here to fetch the product names based on the customer name from your database
    customers = CustomerAsset.objects.filter(name=customer_name)
    product_names = customers.values_list('productName', flat=True)
    product_names = list(product_names)

    return Response({'productNames': product_names})

@api_view(['GET'])
def get_customer_names(request):
    customer_names = CustomerAsset.objects.values_list('name', flat=True).distinct()
    customer_names = list(customer_names)
    return Response({'customerNames': customer_names})

@api_view(['GET'])
def get_product_numbers(request):
    product_name = request.GET.get('productName')
    customer_name = request.GET.get('customerName')
    # Add your logic here to fetch the product numbers based on the product name and customer name from your database
    products = CustomerAsset.objects.filter(productName=product_name, name=customer_name)
    product_numbers = products.values_list('productNumber', flat=True)
    product_numbers = list(product_numbers)

    return Response({'productNumbers': product_numbers})

