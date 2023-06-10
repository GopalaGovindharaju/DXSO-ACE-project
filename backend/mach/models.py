from django.db import models


class Machine_asset(models.Model):
    machineName = models.CharField(max_length=100)
    machineCode = models.IntegerField()
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    machineType = models.CharField(max_length=100)
    capacity = models.IntegerField()
    purchasedDate = models.DateField()
    lastMaintenanceDate = models.DateField()
    nextMaintenanceDate = models.DateField()
    status = models.CharField(max_length=100)
    factoryLocation = models.CharField(max_length=100)
    machineLocation = models.CharField(max_length=100)   
    
    def __str__(self):
        return self.machine_name
    