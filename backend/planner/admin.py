from django.contrib import admin
from .models import BomDetail
from .models import OrderDetail

class BomAdmin(admin.ModelAdmin):
    list_display = ('SL.NO', 'Sub Assy part No', 'REV NO', 'Child Part No', 'Part_Name', 'Quantity', 'Surface Finish', 'Material', 'Qty In Drawing', 'Thickness', 'Width', 'Length', 'Blank Wt', 'Powder Coating Area', 'Powder Usage in Kgs', 'Assembly/Sub part', 'commodity', 'Source', 'Wire Rack/Non Wire Rack Parts', 'Revion No', 'Revision Details', 'Tapping', 'No. Of Bends', 'Clinching /Riveting', 'Welding', 'METAL STAMP ', 'POWDER COATING')
class OrderAdmin(admin.ModelAdmin):
    list_display=('order_number',
                'customer_name',
                'planner_name',
                'deadline',
                'batch_control',
                'product_number',
                'product_name',
                'machines_available')
    
# Register your models here.
admin.site.register(BomDetail, BomAdmin)
admin.site.register(OrderDetail, OrderAdmin)