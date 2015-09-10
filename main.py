import webapp2
from controllers.note import NoteHandler

app = webapp2.WSGIApplication([
    ('/', NoteHandler),
], debug=True)
