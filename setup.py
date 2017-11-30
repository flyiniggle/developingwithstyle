#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='Stylish',
      version='0.1',
      description='professional website for Dan Thompson',
      author='Dan Thompson',
      author_email='d.thompso@yahoo.com',
      packages=find_packages(),
      install_requires=["cherrypy==8.1.2", "nose==1.3.7", "pytest==3.0.1", "colorama==0.3.7", "six==1.10.0"]
     )