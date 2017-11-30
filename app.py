import os
import files

try:
    virtenv = os.path.join(os.environ['OPENSHIFT_PYTHON_DIR'], 'virtenv')
    virtualenv = os.path.join(virtenv, 'bin', 'activate_this.py')
    execfile(virtualenv, dict(__file__=virtualenv))
except KeyError:
    pass
except IOError:
    pass

import cherrypy
import wsgi


def mount(conf):
    def CORS():
        try:
            cherrypy.response.headers["Access-Control-Allow-Origin"] = os.environ['OPENSHIFT_APP_DNS']
        except KeyError:
            pass

    cherrypy.config.update({"tools.staticdir.root": files.get_root()})
    cherrypy.config.update(conf)
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.tree.mount(wsgi.application(), "/", conf)


def start():
    cherrypy.engine.start()
    cherrypy.engine.block()


def end():
    cherrypy.engine.exit()


if __name__ == "__main__":
    mount(os.path.join(files.get_root(), "conf", "server.conf"))
    start()