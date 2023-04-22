from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    apellido_paterno = models.CharField(max_length=255)
    apellido_materno = models.CharField(max_length=255)
    edad = models.IntegerField()
    email = models.EmailField()
    telefono = models.IntegerField()
