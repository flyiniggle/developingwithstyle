import xml.etree.ElementTree as tree
import os


class Carousel(object):
    t = tree.parse(os.path.join('lib', 'resource', 'carousel.xml'))
    root = t.getroot()

    def get_ponies(self):
        ponies = []
        for slide in list(self.root):
            ponies.append([el.text for el in list(slide)])
        return ponies