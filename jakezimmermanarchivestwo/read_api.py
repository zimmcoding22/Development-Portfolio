import requests

#client read only request to api

endpoint = "http://127.0.0.1:8000/cards/api/"

valid_requests = ["Decks", "Producers"]
while (True):
	which_data = input("request data for Decks or Producers?\n")
	if (which_data in valid_requests):
		break
	else:
		print("request invalid")
		

headers = {"Content-type" : which_data}

response = requests.get(endpoint, headers=headers)
print(response.json())