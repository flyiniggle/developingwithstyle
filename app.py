import cherrypy
import os

import wsgi


def mount():
    virtenv = os.environ['OPENSHIFT_PYTHON_DIR'] + '/virtenv/'
    virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
    conf = os.path.join(os.path.dirname(os.path.abspath(__file__)), "conf", "server.conf")
    try:
        execfile(virtualenv, dict(__file__=virtualenv))
    except IOError:
        pass


    def CORS():
        cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']

    cherrypy.config.update({"tools.staticdir.root": os.path.dirname(os.path.abspath(__file__))})
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.tree.mount(wsgi.application(), "/", conf)


def start():
    cherrypy.engine.start()


def end():
    cherrypy.engine.exit()

if __name__ == "__main__":
    mount()
    start()