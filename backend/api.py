from rest_framework.views import APIView

from .models import Dish, Order, OrderItem
from rest_framework import viewsets, permissions, status
from .serializers import DishSerializers, OrderSerializer
from rest_framework import generics
from rest_framework.response import Response


class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DishSerializers


class OrderView(APIView):
    def post(self, request):
        data = request.data
        order_items = data.get('order_items', [])
        delivery_address = data.get('delivery_address', '')
        phone_number = data.get('phone_number', '')
        # Create order
        order = Order.objects.create(delivery_address=delivery_address, phone_number=phone_number)
        # Add order items
        for item in order_items:
            dish_id = item.get('dish_id')
            quantity = item.get('quantity')
            if dish_id and quantity:
                dish = Dish.objects.get(id=dish_id)
                OrderItem.objects.create(order=order, dish=dish, quantity=quantity)
        # Return response with created order and items
        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
