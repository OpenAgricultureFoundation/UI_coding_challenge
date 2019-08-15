#!/bin/bash

# Set up the python and node environments for local development.

# Get the path to parent directory of this script.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )"/.. && pwd )"
cd $DIR # Go to the project top level dir.

cd $DIR/reactapp
rm -fr node_modules package-lock.json
npm install --save

