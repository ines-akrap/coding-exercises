#!/usr/bin/python -tt
# Copyright 2010 Google Inc.
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Google's Python Class
# http://code.google.com/edu/languages/google-python-class/

import sys #command line stuff

def main():
  # Get the name from the command line, using 'World' as a fallback.
  Hello(sys.argv[1])

def Hello(name):
  if name == 'Alice' or name == 'Nick':
    name = name + '????'
  else:
    name = name + '!!!'
  print 'Hello', name

# This is the standard boilerplate that calls the main() function.
if __name__ == '__main__':
  main()
