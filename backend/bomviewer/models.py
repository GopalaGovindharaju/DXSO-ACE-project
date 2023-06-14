from django.db import models
import pandas as pd

# Read the Excel file
df = pd.read_excel("bomviewer/With G.xlsx", sheet_name="Sheet1", header=2).fillna(0)

# Get the column names and data types from the Excel sheet
column_names = df.columns.tolist()
column_types = df.dtypes.tolist()

# Create the Django model dynamically
class BomDetail(models.Model):
    pass

    class Meta:
        managed = False

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