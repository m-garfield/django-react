from rest_framework import serializers
from .models import Dish, Category, Order, OrderItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class DishSerializers(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Dish
        fields = ['id', 'name', 'price', 'image', 'category_name', 'description','status']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['dish', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    ordered_items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'created_at', 'status', 'delivery_address', 'phone_number', 'ordered_items']

    def create(self, validated_data):
        ordered_items_data = validated_data.pop('ordered_items')
        order = Order.objects.create(**validated_data)
        for item_data in ordered_items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order
