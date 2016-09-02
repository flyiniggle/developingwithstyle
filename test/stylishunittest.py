import unittest
import os

from lib.carousel import Carousel


class StylishUnitTest(unittest.TestCase):
    def test_get_ponies(self):

        expected_ponies = [["not-a-real-image.jpg", "check out this header", "Check out these words."]]
        ponies_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'resource', 'test-get-ponies-resource.xml')
        c = Carousel(ponies_path)
        ponies = c.get_ponies()
        self.assertIsInstance(ponies, [].__class__, "Get ponies did not return a list.")
        self.assertListEqual(expected_ponies, ponies, "List {0} did not match expected list {1}".format(ponies, expected_ponies))


if __name__ == "__main__":
    unittest.main()