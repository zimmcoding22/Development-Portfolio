from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
#import requests

# Create your views here.


def test_view(request, *args, **kwargs):
	return render(request, "test.html")