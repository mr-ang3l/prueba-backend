from rest_framework import serializers
from .models import usuario


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = [
            "id",
            "nombre",
            "apellido_paterno",
            "apellido_materno",
            "edad",
            "email",
            "telefono",
        ]
