import cherrypy
import os

from lib import mailer


virtenv = os.environ['OPENSHIFT_PYTHON_DIR'] + '/virtenv/'
virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
try:
	execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
	pass


class application(object):

	@cherrypy.expose
	def mail(self, name="", email="", telephone="Not provided.", message=""):
		m = mailer.Mailer()
		try:
			m.send_mail(name, email, telephone, message)
			return "1"
		except:
			return "0"

	@cherrypy.expose
	def index(self):
		resource = open(os.path.join("", "index.html"), 'r')
		response_body = resource.read()
		return response_body

if __name__ == "__main__":
	cherrypy.config.update({"tools.staticdir.root": os.path.dirname(os.path.abspath(__file__))})
	cherrypy.quickstart(application(), "/", "conf/server.conf")