#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='Stylish',
      version='0.1',
      description='professional website for Dan Thompson',
      author='Dan Thompson',
      author_email='d.thompso@yahoo.com',
      packages=find_packages(),
      install_requires=["cherrypy", "nose>=1.3.7", "pytest>=3.0.1", "colorama", "pypiwin32", "six"]
     )