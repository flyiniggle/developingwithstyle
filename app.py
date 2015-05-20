import cherrypy
import os

import wsgi


virtenv = os.environ['OPENSHIFT_PYTHON_DIR'] + '/virtenv/'
virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
try:
	execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
	pass

cherrypy.config.update({"tools.staticdir.root": os.path.dirname(os.path.abspath(__file__))})
cherrypy.quickstart(wsgi.application, "/", "conf/server.conf")