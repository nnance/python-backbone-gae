import logging
import json
from google.appengine.ext import ndb
from checklistitem import CheckListItem

class Note(ndb.Model):
    title = ndb.StringProperty()
    content = ndb.TextProperty(required=True)
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    checklist_items = ndb.KeyProperty("CheckListItem",
                                      repeated=True)

    @classmethod
    def owner_query(cls, user):
        ancestor_key = ndb.Key("User", user.nickname())
        return cls.query(ancestor=ancestor_key).order(
            -cls.date_created)

    @classmethod
    def owner_fetch(cls, user):
        qry = cls.owner_query(user)
        return qry.fetch()

    @classmethod
    @ndb.transactional
    def create_note(cls, user, note_data, checklist_data):
        note = cls(parent=ndb.Key("User", user.nickname()),
                    title=note_data['title'],
                    content=note_data['content'])
        note.put()

        for item_title in checklist_data:
            item = CheckListItem(parent=note.key, title=item_title)
            item.put()
            note.checklist_items.append(item.key)

        note.put()
        return note

    def to_dict(self):
        return super(Note,self).to_dict(exclude=['date_created','checklist_items'])

    def to_json(self):
        data = self.to_dict()
        return json.dumps(data)
