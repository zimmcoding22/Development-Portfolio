from django.db import models

# Create your models here.
class Producer(models.Model):
	image = models.ImageField(null=True, blank=True, upload_to="images/")
	name = models.CharField("producer name", max_length=100)

	def __str__(self):
		return(self.name)


class Deck(models.Model):
	name = models.CharField("deck name", max_length=100)
	cost = models.FloatField()
	producer = models.CharField(max_length=100)
	finish = models.CharField(max_length=100)
	image = models.ImageField(null=True, blank=True, upload_to="images/")

	def __str__(self):
		return(self.name)

