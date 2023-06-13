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
def get_details(request):
    orderid = request.GET.get('orderid')

    # Fetch the row corresponding to the order ID from your database
    order = YourOrderModel.objects.filter(orderid=orderid).first()

    if order:
        # Assuming your order model has the necessary fields, modify the response accordingly
        response_data = {
            'customerName': order.customerName,
            'deadline': order.deadline,
            'requiredHours': order.requiredHours,
            'partNumber': order.partNumber,
            'quantity': order.quantity
        }
        return Response(response_data)
    else:
        return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)
