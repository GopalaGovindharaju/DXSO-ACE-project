from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # To disable CSRF protection for simplicity in this example
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        return HttpResponse("File received.")
    else:
        return HttpResponse('No file received.')