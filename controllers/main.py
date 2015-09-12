from google.appengine.api import users

import webapp2
import jinja2
import logging
import os
import json

from models.note import Note

path = os.path.dirname(__file__).replace('controllers','templates')
logging.debug(path)

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(path))

class MainHandler(webapp2.RequestHandler):
    def _render_template(self, template_name, context=None):
        template = jinja_env.get_template(template_name)
        return template.render(context)

    def _user_to_dict(self, user):
        return {
            'nickname': user.nickname(),
            'email': user.email(),
            'logout_url': users.create_logout_url(self.request.uri)
        }

    def get(self):
        user = users.get_current_user()
        notes = Note.owner_fetch(user)
        if user is not None:
            template_context = {
                'json': json,
                'user': self._user_to_dict(user),
                'notes': map(lambda note: note.to_dict(), notes)
            }
            self.response.out.write(
                self._render_template('main.html', template_context))
        else:
            login_url = users.create_login_url(self.request.uri)
            self.redirect(login_url)
