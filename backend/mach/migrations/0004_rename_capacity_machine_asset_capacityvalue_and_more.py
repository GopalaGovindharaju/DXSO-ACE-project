# Generated by Django 4.2.1 on 2023-06-10 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mach', '0003_rename_factory_location_machine_asset_factorylocation_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='machine_asset',
            old_name='capacity',
            new_name='capacityValue',
        ),
        migrations.AddField(
            model_name='machine_asset',
            name='capacityUnit',
            field=models.CharField(default='default_unit', max_length=50),
            preserve_default=False,
        ),
    ]
