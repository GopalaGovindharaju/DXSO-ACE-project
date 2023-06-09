from django.db import models

class Signin(models.Model):
    Emp_Name = models.CharField(max_length=80)
    Emp_Id = models.CharField(primary_key=True)
    Emp_Role = models.CharField(max_length=30)
    
def _str_(self):
    return self.Emp_Name