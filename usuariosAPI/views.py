from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status


class UsuarioView(viewsets.ViewSet):
    def list(self, request):
        return Response({"mensaje: Lista de usuarios"}, status.HTTP_200_OK)

    def create(self, request):
        return Response({"mensaje: Usuario creado"}, status.HTTP_201_CREATED)

    def update(self, request, pk):
        return Response({"mensaje: Usuario actualizado"}, status.HTTP_200_OK)

    def retrieve(self, request, pk):
        return Response({"mensaje: Usuario individual"}, status.HTTP_200_OK)

    def partial_update(self, request, pk):
        return Response({"mensaje: Usuario actualizado"}, status.HTTP_200_OK)

    def destroy(self, request, pk):
        return Response({"mensaje: Usuario eliminado"}, status.HTTP_200_OK)
