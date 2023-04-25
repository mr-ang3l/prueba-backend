from django.views.generic import TemplateView


class Redirect(TemplateView):
    template_name = "redirect.html"
