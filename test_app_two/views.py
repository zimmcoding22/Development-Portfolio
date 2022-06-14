from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from .models import Deck, Producer

# Create your views here.


def test_view(request, *args, **kwargs):
	deck_list = Deck.objects.order_by("name")
	return render(request, "test.html", {"deck_list" : deck_list})