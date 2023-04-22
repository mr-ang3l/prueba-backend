from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import UsuarioSerializer
from .models import Usuario


class UsuarioView(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def list(self, request):
        query = request.GET.get("query", None)

        if query == "edad":
            return Response({"mensaje": "Orden por edad"}, status=status.HTTP_200_OK)

        if query == "apellido":
            return Response(
                {"mensaje": "Orden por apellido"}, status=status.HTTP_200_OK
            )

        return Response(
            self.serializer_class(self.queryset, many=True).data,
            status=status.HTTP_200_OK,
        )
