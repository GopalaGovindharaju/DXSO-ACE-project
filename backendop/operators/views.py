from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    data = Customer.objects.all()
    serial = CustomerSerializer(data, many=True)
    return Response(serial.data)