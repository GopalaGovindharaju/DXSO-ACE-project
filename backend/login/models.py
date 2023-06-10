from django.db import models

class Signin(models.Model):
    Emp_Name = models.CharField(max_length=80)
    Emp_Id = models.CharField(max_length=100,primary_key=True)
    Emp_Role = models.CharField(max_length=30)
    
def __str__(self):
    return self.Emp_Name