import unittest

from cherrypy.test import helper

import app


class IntegrationTest(helper.CPWebCase):

    def setup_server():
        app.mount()
    setup_server = staticmethod(setup_server)

    def test_get_index(self):
        self.getPage("/index")
        self.assertStatus('200 OK')

    def test_get_ponies(self):
        self.getPage("/get_ponies")
        self.assertStatus('200 OK')


if __name__ == '__main__':
    unittest.main()