import os
import json
import cherrypy
from email.errors import MessageError

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
        c = carousel.Carousel()
        return json.dumps(c.get_ponies())

    @cherrypy.expose
    def index(self):
        resource = open(os.path.join("", "index.html"), 'r')
        response_body = resource.read()
        return response_body
