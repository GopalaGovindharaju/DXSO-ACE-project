from django.shortcuts import render

from django.shortcuts import render, redirect
from .models import machine_assest

def machine_list(request):
    machines = machine_assest.objects.all()
    return render(request, 'machine_list.html', {'machines': machines})

def machine_detail(request, machine_code):
    machine = machine_assest.objects.get(machine_code=machine_code)
    return render(request, 'machine_detail.html', {'machine': machine})

def machine_create(request):
    if request.method == 'POST':
        machine_name = request.POST.get('machine_name')
        machine_code = request.POST.get('machine_code')
        manufacturer = request.POST.get('manufacturer')
        model = request.POST.get('model')
        machine_type = request.POST.get('machine_type')
        capacity = request.POST.get('capacity')
        purchased_date = request.POST.get('purchased_date')
        last_maintenance_date = request.POST.get('last_maintenance_date')
        next_maintenance_date = request.POST.get('next_maintenance_date')
        status = request.POST.get('status')
        factory_location = request.POST.get('factory_location')
        machine_layout = request.POST.get('machine_layout')

        machine = machine_assest(
            machine_name=machine_name,
            machine_code=machine_code,
            manufacturer=manufacturer,
            model=model,
            machine_type=machine_type,
            capacity=capacity,
            purchased_date=purchased_date,
            last_maintenance_date=last_maintenance_date,
            next_maintenance_date=next_maintenance_date,
            status=status,
            factory_location=factory_location,
            machine_layout=machine_layout
        )
        machine.save()
        return redirect('machine_list')

    return render(request, 'machine_create.html')
