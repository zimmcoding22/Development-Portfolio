from rest_framework import serializers
from .models import *

#convert python object to JSON

class DeckSerializer(serializers.ModelSerializer):

	class Meta:
		model = Deck
		fields = ["name", "cost", "producer", "finish", "image"]

class ProducerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Producer
		fields = ["image", "name"]