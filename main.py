import webapp2
from controllers.note import MainHandler

app = webapp2.WSGIApplication([
    ('/', MainHandler),
], debug=True)
