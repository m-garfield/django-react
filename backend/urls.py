from rest_framework import routers
from .api import DishViewSet

router = routers.DefaultRouter()
router.register('api/backend', DishViewSet, 'Dish')

urlpatterns = router.urls