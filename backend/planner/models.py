from django.db import models





"""import pandas as pd

# Read the Excel file
df = pd.read_excel("E:/Pro/backend/Bom.xlsx", sheet_name="Sheet1", header=2).fillna(0)

# Get the column names and data types from the Excel sheet
column_names = df.columns.tolist()
column_types = df.dtypes.tolist()

# Create the Django model dynamically
class Bom(models.Model):
    pass

# Generate the model fields dynamically
for column_name, column_type in zip(column_names, column_types):
    if column_type == int:
        field = models.IntegerField()
    elif column_type == float:
        field = models.FloatField()
    else:
        field = models.CharField(max_length=100)

    column_name_str = str(column_name)
    field.verbose_name = column_name_str.replace("_", " ")  # Fix the attribute assignment
    Bom.add_to_class(str(column_name), field)
    
for index, row in df.iterrows():
    bom_instance = Bom()
    for column_name in column_names:
        setattr(bom_instance, str(column_name), row[column_name])
    bom_instance.save()
"""