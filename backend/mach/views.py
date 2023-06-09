from django.shortcuts import render

from django.shortcuts import render
from .models import Machine_asset
from rest_framework.response import Response
from rest_framework.decorators import api_view
from mach.models import Machine_asset
from mach.serializer import MachineSerializer

@api_view(['GET'])
def get_mach(requests):
    data = Machine_asset.objects.all()
    serial = MachineSerializer(data,many=True)
    return Response(serial.data)


