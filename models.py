from google.appengine.ext import ndb

class MessageData(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
    message = ndb.StringProperty()
    last_touch_date_time = ndb.DateTimeProperty(auto_now=True)