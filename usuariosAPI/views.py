from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.views.generic import TemplateView
from .serializers import UsuarioSerializer
from .models import Usuario


def algoritmo_ordenamiento(arr, query):
    lenght = len(arr)

    for i in range(lenght):
        for j in range(0, lenght - i - 1):
            if getattr(arr[j], query) > getattr(arr[j + 1], query):
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


class UsuarioView(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def list(self, request):
        query = request.GET.get("query", None)
        queryset = Usuario.objects.all()

        if query != None:
            return Response(
                self.serializer_class(
                    algoritmo_ordenamiento(list(queryset), query), many=True
                ).data,
                status=status.HTTP_200_OK,
            )

        else:
            return Response(
                self.serializer_class(queryset, many=True).data,
                status=status.HTTP_200_OK,
            )
