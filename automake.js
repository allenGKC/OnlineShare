#! /usr/bin/env node
var fs = require('fs');
const { exec } = require('child_process');
var inquirer = require('inquirer');
var markdown_dir = "markdown",
    markdown_folder = ""
    content_obj = {};

var questions = [
    {
        type: 'input',
        name: 'author',
        message: '请输入你的中文姓名：如王小明(必填)'
    },
    {
        type: 'input',
        name: 'homepage',
        message: '请输入你的github主页(选填)'
    },
    {
        type: 'input',
        name: 'path',
        message: '请输入你的Markdown文件名：如：PWA,PS等(必填)'
    },
    {
        type: 'input',
        name: 'title',
        message: '请输入你的页面title：如PS分享(必填)'
    }
];

function Main() {
    inquirer.prompt(questions).then( (answers) => {
        markdown_folder = answers.path;
        fs.mkdir(`${markdown_dir}/${markdown_folder}`, 0777, (err) => {
            if (err) throw err;
            fs.open(`${markdown_dir}/${markdown_folder}/${markdown_folder}.md`, 'w+', (err, fd) => {
                if (err) throw err;
                fs.close(fd, (err) => {
                    if (err) throw err;
                });
            });
            fs.mkdir(`${markdown_dir}/${markdown_folder}/asset`,0777, (err) => {
                if (err) throw err;
                answers.path = `${answers.path}/${answers.path}.md`;
                content_obj = answers;
                let menu_obj = require('./menu.json');
                menu_obj.list.push(content_obj);
                let menuJson = JSON.stringify(menu_obj,null, 2);
                fs.writeFileSync('./menu.json', menuJson);
            });
            console.log("process is running on port 8002");
            exec("npm start -- --port=8002", (err) => {
                if (err) throw err;
            });
        });
    });
}

Main();
