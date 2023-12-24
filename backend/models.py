

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

