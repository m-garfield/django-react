from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50, verbose_name='наименование категории')

    # slug = models.SlugField(max_length=100)
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'категория блюд'
        verbose_name_plural = "список категорий блюд"


# class Tag(models.Model):
#     name = models.CharField(max_length=100)
#     slug = models.SlugField(max_length=100)
#
#     def __str__(self):
#         return self.name


class Dish(models.Model):
    DISH_STATUS_CHOICES = [
        ('available', 'Доступно'),
        ('notavailable', 'Недоступно'),
    ]
    name = models.CharField(max_length=50, verbose_name='наименование блюда')
    status = models.CharField(max_length=100, choices=DISH_STATUS_CHOICES, default='available',
                              verbose_name='доступность блюда')
    price = models.PositiveIntegerField(verbose_name='цена')
    image = models.ImageField(upload_to='articles/')
    description = models.CharField(max_length=100, null=True, verbose_name='краткий состав блюда')
    category = models.ForeignKey(Category,
                                 related_name='dish',
                                 on_delete=models.SET_NULL,
                                 null=True,
                                 verbose_name='категория'
                                 )

    # tags = models.ManyToManyField(Tag, related_name='dish')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'блюдо'
        verbose_name_plural = "список блюд"


class Order(models.Model):
    ORDER_STATUS_CHOICES = [
        ('new', 'новый'),
        ('in_progress', 'в процессе'),
        ('in_delivery', 'в доставке'),
        ('completed', 'завершено'),
    ]

    # user = models.ForeignKey(User, on_delete=models.CASCADE) поддумать над пользователем
    # поле для хранения времени создания заказа
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='заказ от')
    # поле для отслеживания статуса заказа
    status = models.CharField(max_length=100, choices=ORDER_STATUS_CHOICES, default='new', verbose_name='статус заказа')
    # поле адреса доставки
    delivery_address = models.CharField(max_length=100, verbose_name='адрес доставки')
    phone_number = models.CharField(max_length=100, null=True, default='ОТСУТСТВУЕТ', verbose_name='телефон для связи')


    def display_orderitems(self):
        return [str(item.dish) + ' : ' + str(item.quantity) + '\n' for item in self.ordered_items.all() if item.dish]

    display_orderitems.short_description = 'заказнные позиции'

    def display_fullprice(self):
        return sum([item.dish.price * item.quantity for item in self.ordered_items.all()])

    display_fullprice.short_description = 'итоговая цена'

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = "список заказов"
        ordering = ('-created_at',)

    def __str__(self):
        return str(self.created_at)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, verbose_name='заказ', related_name='ordered_items', blank=True,
                              on_delete=models.CASCADE)

    dish = models.ForeignKey(Dish, verbose_name='наименование блюда', related_name='ordered_items',
                             blank=True,
                             on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(verbose_name='количество')

    class Meta:
        verbose_name = 'заказанное блюдо'
        verbose_name_plural = "список заказанных позиций"
