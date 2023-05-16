#!/bin/bash
function add_thumbnail() {
    files=`ls . | grep .html`
    for file in ${files[@]}
    do 
        sed -i '/<body>/a\<div style="display:none;"><img src="https://ruanyf-weekly.plantree.me/thumbnail.jpg" alt=""></div>' ${file}
    done
}

cd ./docs/.vitepress/dist
add_thumbnail

cd weekly
add_thumbnail