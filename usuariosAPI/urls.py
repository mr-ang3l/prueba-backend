from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter(trailing_slash=False)
router.register("usuarios", views.UsuarioView, basename="usuarios")

urlpatterns = router.urls
