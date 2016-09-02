import unittest

from lib.carousel import Carousel


class StylishUnitTest(unittest.TestCase):
    def test_get_ponies(self):
        c = Carousel()
        ponies = c.get_ponies()
        self.assertIsInstance(ponies, [].__class__, "Get ponies did not return a list")


if __name__ == "__main__":
    unittest.main()