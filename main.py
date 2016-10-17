#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os, jinja2, logging, datetime

from google.appengine.ext import ndb
from models import MessageData
import webapp2


PARENT_KEY = ndb.Key("Entity", "message_root")

jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
                               autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template("templates/main.html")      
        self.response.write(template.render())
        
        
class QuickSortHandler(webapp2.RequestHandler):
        def get(self):
            template = jinja_env.get_template("templates/quicksort.html")
            self.response.write(template.render())
        
class AboutMeHandler(webapp2.RequestHandler):
        def get(self):
            template = jinja_env.get_template("templates/aboutme.html")
            self.response.write(template.render())

class GAEExamples(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template("templates/gae_examples.html")
        self.response.write(template.render()) 
                 
            
class DropMeALineHandler(webapp2.RequestHandler):
    def post(self):
        name = self.request.get("c_name")
        email = self.request.get("c_email")
        message = self.request.get("c_message")
        logging.error("name == " + str(name))
        logging.error("c_email == " + str(email))
        logging.error("message == " + str(message))
        newUserMessage = MessageData(parent = PARENT_KEY,
                                     name = name,
                                     email = email,
                                     message = message)
        newUserMessage.put()
        self.redirect(self.request.referrer)
        

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    (r'/main.html', MainHandler),
    (r'/quicksort.html', QuickSortHandler),
    (r'/aboutme.html', AboutMeHandler),
    (r'/gae_examples.html', GAEExamples),
    ('/drop_me_a_line', DropMeALineHandler)
    
], debug=False)
























