import os
import cherrypy
from email.errors import MessageError

from lib import mailer


class application(object):

    @cherrypy.expose
    def mail(self, name="", email="", telephone="Not provided.", message=""):
        m = mailer.Mailer()
        try:
            m.send_mail(name, email, telephone, message)
            return "1"
        except MessageError:
            return "0"

    @cherrypy.expose
    def index(self):
        resource = open(os.path.join("", "index.html"), 'r')
        response_body = resource.read()
        return response_body
