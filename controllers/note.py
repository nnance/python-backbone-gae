from google.appengine.api import users

import webapp2
import jinja2
import logging
import os

from models.note import Note
from models.checklistitem import CheckListItem

path = os.path.dirname(__file__).replace('controllers','templates')
logging.debug(path)
jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(path))


class MainHandler(webapp2.RequestHandler):
    def _render_template(self, template_name, context=None):
        if context is None:
            context = {}

        user = users.get_current_user()
        qry = Note.owner_query(user)
        context['notes'] = qry.fetch()

        template = jinja_env.get_template(template_name)
        return template.render(context)

    def _create_note(self, user):
        note_data = {
            'title': self.request.get('title'),
            'content': self.request.get('content')
        }
        item_titles = self.request.get('checklist_items').split(',')
        Note.create_note(user, note_data, item_titles)

    def get(self):
        user = users.get_current_user()
        if user is not None:
            logout_url = users.create_logout_url(self.request.uri)
            template_context = {
                'user': user.nickname(),
                'logout_url': logout_url,
            }
            self.response.out.write(
                self._render_template('main.html', template_context))
        else:
            login_url = users.create_login_url(self.request.uri)
            self.redirect(login_url)

    def post(self):
        user = users.get_current_user()
        if user is None:
            self.error(401)

        self._create_note(user)

        logout_url = users.create_logout_url(self.request.uri)
        template_context = {
            'user': user.nickname(),
            'logout_url': logout_url,
        }
        self.response.out.write(
            self._render_template('main.html', template_context))
