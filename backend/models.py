

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
    phone_number = models.CharField(max_length=100, null=False, default='Отсутствует')
    def __str__(self):
        return f"Order #{self.pk}"
