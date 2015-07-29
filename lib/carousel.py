import xml.etree.ElementTree as Tree
import os


class Carousel(object):
    t = Tree.parse(os.path.join('lib', 'resource', 'carousel.xml'))
    root = t.getroot()

    def get_ponies(self):
        ponies = []
        for slide in list(self.root):
            ponies.append([el.text for el in list(slide)])
        return ponies