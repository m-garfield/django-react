from django.urls import path
from rest_framework.routers import SimpleRouter
from .api import DishViewSet, OrderCreateView
from .views import order_list
router = SimpleRouter()
router.register('api/backend/dish', DishViewSet, 'Dish')
# Удалите регистрацию OrderCreateView здесь
urlpatterns = router.urls + [
    path('api/backend/order/create/', OrderCreateView.as_view(), name='order_create'),
    path('orders/', order_list, name='order_list'),
]


