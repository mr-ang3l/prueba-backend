from django.urls import path
from . import views

urlpatterns = [
    path("", views.UsuariosTemplate.as_view(), name="usuarios template"),
    path("<int:id>", views.DetallesTemplate.as_view(), name="detalles template"),
]
