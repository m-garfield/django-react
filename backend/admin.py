from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from . import models
# Register your models here.
from . import models
# Register your models here.
class DishInline(admin.StackedInline):
    model = models.Dish



@admin.register(models.Category)
class AdminCategory(admin.ModelAdmin):
    list_display = ['name']
    inlines = [DishInline]


@admin.register(models.Dish)
class DishAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'image']

@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['created_at',
    'status',
    'delivery_address',
    'phone_number']
    list_editable = ('status',)


admin.site.register(models.Tag)