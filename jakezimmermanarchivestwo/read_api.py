import requests

#client read only request to api

#production
endpoint = "https://www.jzarchives.com/cards/api/"
#testing
#endpoint = "http://127.0.0.1:8000/cards/api/"

valid_requests = ["decks", "producers"]
while (True):
	which_data = input("request data for Decks or Producers?\n").lower()
	if (which_data in valid_requests):
		break
	else:
		print("request invalid")

user = input("Enter username: ")
		

headers = {"Content-type" : which_data}

response = requests.get(endpoint, json={"user" : user}, headers=headers)
print(response.json())