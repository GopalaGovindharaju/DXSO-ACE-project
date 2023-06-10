from django.contrib import admin
from .models import BomDetail

class BomAdmin(admin.ModelAdmin):
    list_display = ('SL.NO', 'Sub Assy part No', 'REV NO', 'Child Part No', 'Part_Name', 'Quantity', 'Surface Finish', 'Material', 'Qty In Drawing', 'Thickness', 'Width', 'Length', 'Blank Wt', 'Powder Coating Area', 'Powder Usage in Kgs', 'Assembly/Sub part', 'commodity', 'Source', 'Wire Rack/Non Wire Rack Parts', 'Revion No', 'Revision Details', 'Tapping', 'No. Of Bends', 'Clinching /Riveting', 'Welding', 'METAL STAMP ', 'POWDER COATING')

# Register your models here.
admin.site.register(BomDetail, BomAdmin)