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
import wsgi


def mount():
    def CORS():
        cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']

    print 'port %d' % os.environ['OPENSHIFT_APP_SERVER_PORT']
    cherrypy.config.update({"tools.staticdir.root": files.get_root()})
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.tree.mount(wsgi.application(), "/", conf)


def start():
    cherrypy.engine.start()


def end():
    cherrypy.engine.exit()

if __name__ == "__main__":
    mount()
    start()