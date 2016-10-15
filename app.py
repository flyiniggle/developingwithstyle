import os
import files


virtenv = os.path.join(os.environ['OPENSHIFT_PYTHON_DIR'], 'virtenv')
virtualenv = os.path.join(virtenv, 'bin', 'activate_this.py')
conf = os.path.join(files.get_root(), "conf", "server.conf")

try:
    execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
    pass

import cherrypy
from cherrypy import wsgiserver
import wsgi


class Server(object):
    def mount(self):
        def CORS():
            cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']

        cherrypy.config.update({"tools.staticdir.root": files.get_root()})
        cherrypy.config.update(conf)
        cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
        cherrypy.tree.mount(wsgi.application(), "/", conf)
        #self.server = cherrypy.wsgiserver.CherryPyWSGIServer(('127.0.0.1', '8080'), wsgi.application, "/", conf)

    def start(self):
        #self.server.start()
        cherrypy.engine.start()
        cherrypy.engine.block()

    def end(self):
        #self.server.stop()
        cherrypy.engine.exit()


server = Server()


def mount():
    server.mount()


def start():
    server.start()


if __name__ == "__main__":
    mount()
    start()