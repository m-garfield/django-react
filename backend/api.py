from .models import Dish, Order
from rest_framework import viewsets, permissions
from .serializers import DishSerializers, OrderSerializers
from rest_framework import generics


class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DishSerializers


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializers