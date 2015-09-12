import webapp2
from controllers import main
from controllers import api

app = webapp2.WSGIApplication([
    ('/', main.MainHandler),
    ('^/api/notes/?$', api.note.NoteHandler),
], debug=True)
