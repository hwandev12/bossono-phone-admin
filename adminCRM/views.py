from django.shortcuts import render
from django.views import generic
from . import models

class Home(generic.ListView):
    template_name = 'layouts/base.html'
    queryset = models.CardPopulate.objects.all()
    context_object_name = 'cards'
