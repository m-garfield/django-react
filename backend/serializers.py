from rest_framework import serializers
from .models import Dish


class DishSerializers(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = '__all__'

