from rest_framework import permissions
import json

class CustomPermission(permissions.DjangoModelPermissions):

	#read only API
	def has_permission(self, request, view):
		valid_users = ["jakezimmerman", "AnonymousUser"]
		body_unicode = request.body.decode('utf-8')
		#if api endpoint is requested in browser
		if (body_unicode == ""):
			if (request.user.is_staff):
				return(True)
			else:
				return(False)
		else:
			body = json.loads(body_unicode)
			user = body["user"]
			if (request.method == "GET" and user in valid_users):
				return(True)
			else:
				return(False)

