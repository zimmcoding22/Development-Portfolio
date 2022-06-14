from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from .models import Deck, Producer
import requests

#send email
def send_simple_message(message_name, message_email, message):
	return requests.post(
		"https://api.mailgun.net/v3/sandbox0993ed0109fb4f639a2567180ae08a01.mailgun.org/messages",
		auth=("api", "5ba44a850a4a730fac6e9d95c2aea252-28d78af2-ef3d2b4e"),
		data={"from": message_email,
			"to": ["jakeziscoding@gmail.com"],
			"subject": "django email test",
			"text": message})


#Create your views here.

def cards_view(request, *args, **kwargs):
	deck_list = Deck.objects.order_by("name")  #Deck.objects.all() to get full unordered queryset
	producers_list = Producer.objects.all()
	return render(request, "cards.html", {"deck_list" : deck_list, "producer_list" : producers_list})
	

def base_view(request, *args, **kwargs):
	if (request.method == "POST"):
		message_name = request.POST["message_name"]
		message_email = request.POST["message_email"]
		message = request.POST["message"]
		send_simple_message(message_name, message_email, message)

		return render(request, "base.html", {"message_name" : message_name})

	else:
		return render(request, "base.html")



