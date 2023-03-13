#!/bin/bash

set -x

curl -s -L -O https://github.com/ruanyf/weekly/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/weekly.js > scripts/weekly.json
cp ./weekly-master/docs/issue*.md ./docs/weekly/
