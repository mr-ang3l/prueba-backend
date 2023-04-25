from django.views.generic import TemplateView


class UsuariosTemplate(TemplateView):
    template_name = "usuarios.html"


class DetallesTemplate(TemplateView):
    template_name = "detalle_usuario.html"
