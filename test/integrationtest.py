import os
import files

import cherrypy
from cherrypy.test import helper

import app


def CORS():
    cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']


class IntegrationTest(helper.CPWebCase):
    def setup_server():

        app.mount(os.path.join(files.get_root(), "test", "test.server.conf"))
    setup_server = staticmethod(setup_server)

    def test_get_index(self):
        self.getPage("/index")
        self.assertStatus('200 OK')

    def test_get_ponies(self):
        self.getPage("/get_ponies")
        self.assertStatus('200 OK')

    def test_mail(self):
        self.getPage("/mail", body="{'name':'test', 'email':'test', 'message':'test'}")
        self.assertStatus('200 OK')
