from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.conf import settings
from .models import Deck, Producer
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from .permissions import CustomPermission
import requests
import os

#send email
def send_simple_message(message_name, message_email, message):
	API_KEY = os.environ.get('MAILGUN_PRIVATE_KEY')
	return requests.post(
		"https://api.mailgun.net/v3/sandbox0993ed0109fb4f639a2567180ae08a01.mailgun.org/messages",
		auth=("api", API_KEY),
		data={"from": message_email,
			"to": ["jakeziscoding@gmail.com"],
			"subject": "portfolio website message!",
			"text": message})


@api_view(["GET"]) #would add POST to this list if API wasn't read only
@permission_classes([CustomPermission])
def cards_api_view(request):
	if (request.method == "GET"):
		print(request.user.id)
		if (request.content_type == "decks"):
			deck_list = Deck.objects.all()
			serializer = DeckSerializer(deck_list, many=True)
			return(JsonResponse({"Decks" : serializer.data}))
		if (request.content_type == "producers"):
			producer_list = Producer.objects.all()
			serializer = ProducerSerializer(producer_list, many=True)
			return(JsonResponse({"Producers" : serializer.data}))
	# in case API url is visited in browser
	return(JsonResponse({"API" : None}))

    #API is read only for now
	# if (request.method == "POST"):
	# 	serializer = DeckSerializer(data=request.data)
	# 	if (serializer.is_valid()):
	# 		serializer.save()
	# 		return()



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

