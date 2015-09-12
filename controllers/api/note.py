from google.appengine.api import users

import webapp2
import logging
import json

from models.note import Note

class NoteHandler(webapp2.RequestHandler):
    def _create_note(self, user):
        note_data = {
            'title': self.request.get('title'),
            'content': self.request.get('content')
        }
        item_titles = self.request.get('checklist_items').split(',')
        Note.create_note(user, note_data, item_titles)

    def post(self):
        user = users.get_current_user()
        if user is None:
            self.error(401)

        note_data = json.loads(self.request.body)
        note = Note.create_note(user, note_data, note_data['checklist_items'].split(','))

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(note.to_json())
