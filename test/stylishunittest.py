import unittest
import os
from smtplib import SMTPAuthenticationError

import files
from lib.carousel import Carousel
from lib.mailer import Mailer


class StylishUnitTest(unittest.TestCase):
    #Carousel
    def test_get_ponies(self):

        expected_ponies = [["not-a-real-image.jpg", "check out this header", "Check out these words."]]
        ponies_path = os.path.join(files.get_root(), 'test', 'resource', 'test-get-ponies-resource.xml')
        c = Carousel(ponies_path)
        ponies = c.get_ponies()
        self.assertIsInstance(ponies, [].__class__, "Get ponies did not return a list.")
        self.assertListEqual(expected_ponies, ponies, "List {0} did not match expected list {1}".format(ponies, expected_ponies))

    #Email
    def test_clean_input_clean(self):
        message = "This is a contact request."
        m = Mailer()
        cleaned_message = m.clean_input(message)

        self.assertEqual(cleaned_message, message, "clean_input modified an already clean message")

    def test_clean_input_script(self):
        clean_portion = "alert('uh oh')"
        message = "<script type='text/javascript'>%s</script>" % clean_portion
        m = Mailer()
        cleaned_message = m.clean_input(message)

        self.assertEqual(cleaned_message, clean_portion, "Expected clean_input to return {0} but returned {1}".format(clean_portion, cleaned_message))

    def test_write_mail(self):
        m = Mailer()
        message = m.write_mail("me", "me@gmail.com", "This is a message", "111-111-1111")
        expected_message = "From: me\nAddress: me@gmail.com\nTelephone: 111-111-1111\n\nThis is a message"
        self.assertEqual(message, expected_message, "Expected {0} but got {1}".format(expected_message, message))

    def test_connect(self):
        m = Mailer()
        try:
            smtp = m.connect()
            smtp.close()
        except SMTPAuthenticationError:
            self.fail("Could not connect.")


if __name__ == "__main__":
    unittest.main()