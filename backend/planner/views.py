from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
from . models import BomDetail

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