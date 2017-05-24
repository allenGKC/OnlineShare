#！/bash/sh

markdown_dir="markdown"
markdown_folder=""
author=""
github_homepage=""
file_path=""
title=""

function install() {
    cnpm install
}

function MakeOwnFolder() {
    cd $markdown_dir
    echo "请输入你的Markdown文件名。如：PWA/PS等(必填)"
    read markdown_folder
    mkdir $markdown_folder
    cd $markdown_folder
    touch $markdown_folder.md
    file_path=${markdown_folder}"/"${markdown_folder}".md"
    mkdir asset
}

function GetInfo() {
    echo "请输入你的中文姓名：如龚楷椿(必填)"
    read author
    echo "请输入你的github主页：如https://github.com/allenGKC(选填)"
    read github_homepage
    echo "请输入你的页面title：如PS分享(必填)"
    read title
}


function SetInfo() {
    cd "../../"
    jq '{"list":[[.list[]] + [{"author":"'$author'","homepage":"'$github_homepage'","path":"'$file_path'","title":"'$title'"}]][0]}' menu.json > menu1.json
    mv menu.json
    mv menu1.json menu.json
}

function Run() {
    install
    MakeOwnFolder
    GetInfo
    SetInfo
    npm start -- --port=8002
}

Run
