# Generated by Django 4.2.1 on 2023-06-01 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0003_alter_orderdetail_batch_control_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetail',
            name='batch_control',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='machines_available',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='order_number',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='product_number',
            field=models.IntegerField(),
        ),
    ]