from django.db import models
import pandas as pd

# Read the Excel file
<<<<<<< HEAD
df = pd.read_excel("C:/Users/chitr/OneDrive/Desktop/DXSO/DXSO-ACE-project/backend/With G.xlsx", sheet_name="Sheet1", header=2).fillna(0)
=======
df = pd.read_excel("C:/Users/Admin/OneDrive/Desktop/god/DXSO-ACE-project/backend/With G.xlsx", sheet_name="Sheet1", header=2).fillna(0)
>>>>>>> c81110a154022663665687ad3e08474577c5ecc3

# Get the column names and data types from the Excel sheet
column_names = df.columns.tolist()
column_types = df.dtypes.tolist()

# Create the Django model dynamically
class BomDetail(models.Model):
    pass

    def __str__(self):
        return self.Part_Name
    
# Generate the model fields dynamically
for column_name, column_type in zip(column_names, column_types):
    if column_type == int:
        field = models.IntegerField()
    elif column_type == float:
        field = models.FloatField()
    else:
        field = models.CharField(max_length=100)

    column_name_str = str(column_name)
    field.verbose_name = column_name_str.replace("_", " ").title()  # Fix the attribute assignment
    BomDetail.add_to_class(column_name_str, field)  # Use column_name_str as the field name

class OrderDetail(models.Model):
    order_number = models.IntegerField()
    customer_name = models.CharField(max_length=100)
    planner_name = models.CharField(max_length=100)
    deadline = models.DateField()
    batch_control = models.IntegerField()
    product_number = models.IntegerField()
    product_name = models.CharField(max_length=100)
    machines_available = models.IntegerField()
    
    def __str__(self):
        return self.customer_name
    