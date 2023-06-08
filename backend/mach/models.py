from django.db import models


class machine_assest(models.Model):
    machine_name = models.CharField(max_length=100)
    machine_code = models.IntegerField()
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    machine_type = models.CharField(max_length=100)
    capacity = models.IntegerField()
    purchased_date = models.DateField()
    last_maintenance_date = models.DateField()
    next_maintenance_date = models.DateField()
    status = models.CharField(max_length=100)
    factory_location = models.CharField(max_length=100)
    machine_layout = models.CharField(max_length=100)   
    
    def __str__(self):
        return self.machine_code
    