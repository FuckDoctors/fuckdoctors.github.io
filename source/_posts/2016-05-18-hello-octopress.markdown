---
layout: post
title: "Hello Octopress"
date: 2016-05-18 21:47:34 +0800
comments: true
categories: [Test, Octopress, Markdown]
---

# **MarkDown语法学习**
---
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

<!--more-->

#### [-]开始的无序列表无序列表
- 项目1
- 项目2
- 项目3

#### [*]开始的无序列表无序列表
* 项目1
* 项目2
* 项目3

#### 有序列表
1. 项目1
2. 项目2
3. 项目3

#### 引用
> 这里是引用。。。

#### 链接
[GitHub](https://github.com)

#### 图片
![图片](http://tva1.sinaimg.cn/crop.0.0.180.180.180/7aa84b53jw1e8qgp5bmzyj2050050aa8.jpg)

#### 粗体&斜体
**这里是粗体**  *这里是斜体*

#### 表格

First Header | Second Header | Third Header
------------ | ------------- | ------------
cell1        | Cell2         | Cell3
Content Cell | Content Cell  | Content Cell

#### 表格的对其方式（使用冒号）
First Header  | Second Header  | Third Header
:------------ | :-------------:| ------------:
cell1         | Cell2          | Cell3
Content Cell  | Content Cell   | Content Cell

#### 换行（两个及以上空格，强制换行？）
  
#### 删除线
~~这是要删除的文字。。。~~

#### 行内代码`ruby`,`git`

#### 代码块：[安装Octopress步骤](http://www.jianshu.com/p/1a117ef0e534)
```
git config --global user.name "name"
git config --global user.email "emailaddress"
cd ~
mkdir git
cd git
git clone git@github.com:name/name.github.io.git 
cd ~/git
git clone git://github.com/imathis/octopress.git octopress
cd octopress
#修改Gemfile中源地址为ruby.taobao.org
bundle install
rake install
rake setup_github_pages 
#输入github.io.git地址
rake generate
rake preview    #在http://localhost:4000
cd source/_deploy
git pull origin master  #先同步一次，否则deploy可能报错
cd ..
rake deploy #该命令首先清空_deploy目录，然后将public目录整个拷贝过来，然后commit到github。_deploy 目录对应着master分支。

#备份source到github
git add .  
git commit -m 'your message'
git push origin source #source 目录下保存了所有的markdown源文件，是博客的原始数据，以及一些模板文件。因此很有必要备份。用上述命令提交到github，这样就用git管理起来了，再也不用担心数据丢失了。
```
