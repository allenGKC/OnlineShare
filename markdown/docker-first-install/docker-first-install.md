# Docker填坑指南

> 演讲者:龚楷椿

----

# What is Docker? 
<img src="/markdown/docker-first-install/asset/logo1.jpg" width="800" height="300"><br>
Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。

----

# Why Docker？

----


# 目前状况 
新人入职，签了合同，领了机器，坐到工位，泡一杯袋装红茶，按下开机键，输入密码，
然后，下载 Chrome、Postman、Sublime、盗版 PS、NodeJS、配置 NODE_PATH、安装 cnpm、安装 gulp、安装 webpack。。。此处省略一万个插件。<br>
如果顺利的话你应该已经准备下班了，当然，通常来说都不顺利。<br>
在这个过程中，你可能会遇到网络问题、环境问题、兼容问题、权限问题、配置问题配置问题配置问题配置问题配置问题配置问题配置问题。<br>
So，新人第一周周报：配置环境，熟悉项目<br>

----

# 出现问题 
1. Node版本升级问题导致项目无法运行
2. 杰哥吐血折腾环境，费时费力
3. Docker技术成熟，可以尝试

----

# 开始动手做起来！

----

# 安装方式 
* 安装环境：Macbook+Docker Toolbox(Windows类似)。
* 选择原因：综合前端环境存在Mac与Windows并存的问题。

----
# 安装过程 
1. 下载并安装 Docker Toolbox
2. 下载并运行 Ubuntu 镜像
3. 做常规的初始化工作（换源、安装常用工具）
4. 安装前端开发工具
5. 导出镜像

----

# 理想状态 
* 准备好 Docker Toolbox 安装包和 Ubuntu Image
* 安装 Docker Toolbox
* 打开 Kitematic，注册一个 Docker Hub 账号并登陆
* 在 Kitematic 中点击左下角“DOCKER CLI”打开 Docker 命令行
* 输入命令docker import，从文件夹中直接把 ubuntu 文件拖拽到命令行中
* 输入命令docker images，复制出镜像的 IMAGE ID

----
# 总结与教训 
* Windows上由于种种问题，该方案最终不可行，建议在linux上搭建Docker环境；
* 安装前对于国内镜像的不了解，导致下载耗时耗力；
* 本次只是对Docker的安装进行了初探，对于Docker原理不甚了解，还望多多交流。

----
# 谢谢！




