from django.urls import path
from rest_framework.routers import SimpleRouter
from .api import DishViewSet, OrderView

router = SimpleRouter()
router.register('api/backend/dish', DishViewSet, 'Dish')
# Удалите регистрацию OrderCreateView здесь
urlpatterns = router.urls + [
    path('api/backend/order/create/', OrderView.as_view(), name='order_create'),
]


