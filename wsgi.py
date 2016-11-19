import os
import json
import cherrypy
from email.errors import MessageError

import files
from lib import mailer, carousel


class application(object):
    m = None

    @cherrypy.expose
    def mail(self, name="", email="", telephone="Not provided.", message=""):
        if not self.m:
            self.m = mailer.Mailer()
        try:
            self.m.send_mail(name, email, telephone, message)
            return "1"
        except MessageError:
            return "0"

    @cherrypy.expose
    def get_ponies(self):
        ponies_path = os.path.join(files.get_root(), 'lib', 'resource', 'carousel.xml')
        c = carousel.Carousel(ponies_path)
        return json.dumps(c.get_ponies())

    @cherrypy.expose
    def index(self):
        resource = open(os.path.join(files.get_root(), "index.html"), 'r')
        response_body = resource.read()
        return response_body

    @cherrypy.expose
    def default(self, *args, **kwargs):
        return self.index()
