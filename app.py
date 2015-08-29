import cherrypy
import os

import wsgi


virtenv = os.environ['OPENSHIFT_PYTHON_DIR'] + '/virtenv/'
virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
try:
    execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
    pass


def CORS():
    cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']

cherrypy.config.update({"tools.staticdir.root": os.path.dirname(os.path.abspath(__file__))})
cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
cherrypy.quickstart(wsgi.application(), "/", "conf/server.conf")
