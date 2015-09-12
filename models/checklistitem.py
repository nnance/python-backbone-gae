from google.appengine.ext import ndb


class CheckListItem(ndb.Model):
    title = ndb.StringProperty()
    checked = ndb.BooleanProperty(default=False)

    def to_json(self):
        data = self.to_dict(exclude=['date_created','checklist_items'])
        return json.dumps(data)
