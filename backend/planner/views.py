import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
from . models import BomDetail
from . models import OrderDetail

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
    
@csrf_exempt
def upload_detail(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)

        order_number = data.get('order_number')
        customer_name = data.get('customer_name')
        planner_name = data.get('planner_name')
        deadline = data.get('deadline')
        batch_control = data.get('batch_control')
        product_number = data.get('product_number')
        product_name = data.get('product_name')
        machines_available = data.get('machines_available')

        order_detail = OrderDetail(
            customer_name=customer_name,
            order_number=order_number,
            planner_name=planner_name,
            deadline=deadline,
            batch_control=batch_control,
            product_number=product_number,
            product_name=product_name,
            machines_available=machines_available
        )
        order_detail.save()
        return HttpResponse("Form submitted.")
    else:
        return HttpResponse("Failed form submission.")