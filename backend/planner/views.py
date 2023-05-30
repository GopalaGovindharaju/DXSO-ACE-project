from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd

@csrf_exempt  # To disable CSRF protection for simplicity in this example
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        df = pd.read_excel(uploaded_file, sheet_name="Sheet1", header = 2).fillna(0)
        column_names = df.columns.tolist()
        return HttpResponse(column_names)
    else:
        return HttpResponse('No file received.')