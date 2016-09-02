import xml.etree.ElementTree as Tree


class Carousel(object):
    def __init__(self, location):
        t = Tree.parse(location)
        self.root = t.getroot()

    def get_ponies(self):
        ponies = []
        for slide in list(self.root):
            ponies.append([el.text for el in list(slide)])
        return ponies