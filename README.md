前端在线分享平台
==============================
## NAME
OnlineShare

## VERSION
1.0.0-beta

## DESCRIPTION
该平台旨在统一管理前端分享，让大家爱上分享，方便所有同学查看。

## AUTHOR
Allen.Gong<cnyzgkc@163.com>

## INSTALL

1.Windows平台请打开 Git Bash 终端（非cmd.exe）,  Mac平台请打开 terminal.app / iterm2.app 终端  

```
git clone https://github.com/allenGKC/OnlineShare.git

```

2.cd online-share/

3.执行npm install，如果npm install出错，请重试，有可能是网络问题。


## USAGE

1. Windows执行npm start -- --port=8001<br>
   Mac可以直接执行npm start<br>
   如果遇到端口被占用，请切换端口.
2. cd online-share/markdown/ 
3. 新建自己的分享文件夹，注意不要使用中文
4. 在该文件夹下新建自己的md文件和asset文件夹，asset文件夹用于存放图片和其他相关资源
5. 默认分割ppt页面请使用 ----
6. 修改menu.json，请在后面添加自己的信息，homepage可以选填，刷新即可查看编辑效果

```
	{
	  "list": [
	    {
	      "author": "龚楷椿",
	      "homepage": "https://github.com/allenGKC",
	      "path": "docker-first-install/docker-first-install.md",
	      "title": "Docker入坑指南"
	    }
	  ]
	}

```
<strong>写完ppt，别忘了切换到根目录下，提交代码哦~</strong>

## 有好的建议？
如果你对该项目任何修改建议，请RTX 龚楷椿，我会及时修改的，谢谢！

## 参考资料
1. [Markdown 语法说明](http://www.appinn.com/markdown/) 
2. [reveal-js框架](http://lab.hakim.se/reveal-js/#/)