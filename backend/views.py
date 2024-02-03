from django.shortcuts import render
from rest_framework import generics
from .models import Order
from .serializers import OrderSerializers


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializers

# Create your views here.

def order_list(request):
    orders = Order.objects.all()
    return render(request, 'backend/orders.html', {'orders': orders})
