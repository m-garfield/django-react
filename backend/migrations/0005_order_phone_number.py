# Generated by Django 4.2.4 on 2024-01-31 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='phone_number',
            field=models.CharField(default='Отсутствует', max_length=100),
        ),
    ]
