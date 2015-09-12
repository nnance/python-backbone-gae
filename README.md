pyhton-backbone-gae
===================

Example from the Python for Google App Engine book converted to Single Page Application
in Backbone and a Rest API.

Server stack:
* Python
* Google App Engine API for Python
  * App engine authentication
  * NDB Datastore
  * Cloud storage

Client stack:
* Backbone (Jquery, underscore)
* Bootstrap CSS
* Google Cloud Storage client library
* requirejs
* bower

Features:
* Server side data initialized as JS globals in index
* Forms based authentication with Google App Engine
* Authentication support in Rest API
* Uses GAE to store and retrieve attachments and images
