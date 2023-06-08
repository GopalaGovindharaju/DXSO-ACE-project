from django.contrib import admin

from .models import Machine_asset

class Machine_Admin(admin.ModelAdmin):
    list_display = ('machine_name','machine_code','manufacturer','model','machine_type','capacity','purchased_date','last_maintenance_date','next_maintenance_date','status','factory_location','machine_layout')
# Register your models here.
admin.site.register(Machine_asset,Machine_Admin)