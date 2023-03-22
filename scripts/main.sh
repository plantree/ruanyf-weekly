#!/bin/bash

set -x

curl -s -L -O https://github.com/ruanyf/weekly/archive/refs/heads/master.zip
unzip -o master.zip
rm master.zip*
node scripts/weekly.js > scripts/weekly.json
cp -n ./weekly-master/docs/issue*.md ./docs/weekly/
cd ./docs/weekly/ 
# add pv to markdown
files=`ls . | grep issue`
for file in ${files[@]}
do 
    sed -i '3i\<img class="pv" src="https://api.visitor.plantree.me/visitor-badge/pv?namespace=plantree.me&key=ruanyf-weekly/'${file}'">\n' ${file}
done
