from django.db import models

# Create your models here.
class Customer(models.Model):
    part_no = models.IntegerField(primary_key=True)
    cust_name = models.CharField(max_length=50)
    proposal_drawing = models.CharField(max_length=80)
    
    def __str__(self):
        return self.cust_name