import xml.etree.ElementTree as Tree
import os


class Carousel(object):
    t = Tree.parse(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'resource', 'carousel.xml'))
    root = t.getroot()

    def get_ponies(self):
        ponies = []
        for slide in list(self.root):
            ponies.append([el.text for el in list(slide)])
        return ponies