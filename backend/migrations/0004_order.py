# Generated by Django 4.2.4 on 2024-01-31 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_dish_price'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('in_progress', 'В процессе'), ('completed', 'Завершено')], default='in_progress', max_length=100)),
                ('delivery_address', models.CharField(max_length=100)),
            ],
        ),
    ]
