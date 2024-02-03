from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from . import models

from . import models


class DishInline(admin.StackedInline):
    model = models.Dish
    extra = 0

class OrderItemInline(admin.StackedInline):
    model = models.OrderItem
    extra = 0


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
                    'phone_number',
                    'display_orderitems']
    inlines = [OrderItemInline]
    list_editable = ('status',)


@admin.register(models.OrderItem)
class OrderItemsAdmin(admin.ModelAdmin):
    list_display = ['order',
                    'dish',
                    'quantity'
                    ]


admin.site.register(models.Tag)
