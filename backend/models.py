

from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
# Create your models here.

class Category(MPTTModel):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=100)
    parent = TreeForeignKey(
                                   'self',
                                   related_name="children",
                                   on_delete=models.SET_NULL,
                                   null=True,
                                   blank=True
                            )
    class MPTTMeta:
        order_insertion_by = ['name']
    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    def __str__(self):
        return self.name

class Dish(models.Model):
    name = models.CharField(max_length=50)
    #price = MoneyField(max_digits=10, decimal_places=2, null=True, default_currency='RUB')
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to='articles/')
    category = models.ForeignKey(Category,
                                   related_name='dish',
                                   on_delete=models.SET_NULL,
                                   null=True
                                   )
    tags = models.ManyToManyField(Tag, related_name='dish',)
    def __str__(self):
        return self.name



ORDER_STATUS_CHOICES = (
    'В сборке',
    'Отправлен'
)

class Order(models.Model):
    ORDER_STATUS_CHOICES = [
        ('in_progress', 'В процессе'),
        ('completed', 'Завершено'),
    ]

    #user = models.ForeignKey(User, on_delete=models.CASCADE) поддумать над пользователем
    # поле для хранения времени создания заказа
    created_at = models.DateTimeField(auto_now_add=True)
    # поле для отслеживания статуса заказа
    status = models.CharField(max_length=100, choices=ORDER_STATUS_CHOICES, default='in_progress')
    # поле адреса доставки
    delivery_address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100, null=True, default='Отсутствует')

    def display_orderitems(self):
        """
        Creates a string for the Genre. This is required to display genre in Admin.
        """
        return [str(item.dish) +' : '+ str(item.quantity) + '\n' for item in self.ordered_items.all() if item.dish]

    display_orderitems.short_description = 'orderitems'

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = "Список заказов"
        ordering = ('-created_at',)

    def __str__(self):
        return str(self.created_at)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, verbose_name='Заказ', related_name='ordered_items', blank=True,
                              on_delete=models.CASCADE)

    dish = models.ForeignKey(Dish, verbose_name='Информация блюде', related_name='ordered_items',
                                     blank=True,
                                     on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(verbose_name='Количество')

    class Meta:
        verbose_name = 'Заказанное блюдо'
        verbose_name_plural = "Список заказанных блюд"
