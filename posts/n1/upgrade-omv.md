---
url: 'https://zhaobc.site/posts/n1/upgrade-omv.md'
---
# 更新 OpenMediaVault

很久之前折腾过的 N1 盒子，一直默默运行着，用处不大所以一直没再折腾，最近孩子听课，在家看孩子，想看电视时，拔掉 USB 运行原来的盒子系统，用来做电视盒子。
摸了几次 N1 盒子后才想着是不是该升级一下了，于是又开始了折腾。。

## 简介

之前折腾 newifi-d3 时逛恩山论坛，看到有人折腾 N1 盒子，看着能运行 linux 系统，还能做 NAS 所以从 PDD 上买了一个，同时也从海鲜市场上买了一个移动硬盘，被骗了一个相当老的影片，运行时间长，速度还慢。。

经过折腾，安装了 armbian, docker, nextcloud，理论上可做下载机，小型 NAS，但是没怎么用，偶尔用来做 win 和 macOS 的中转站。
安装 armbian 的过程已经不记得了，网上可搜到很多。

## 遇到的问题和解决办法

### omv 源

omv 比较慢，可以更换清华源：<https://mirrors.tuna.tsinghua.edu.cn/help/openmediavault/>

但是使用 omv-env 命令时报错了，后来手动改的 /etc/apt/source.list 文件。

但是配置完了之后执行 apt update 和 apt upgrade 时报错，导致后面一直升级不成功，再后来又可以 使用 omv-env 命令了，重做了一遍，注意要做签名验证。

过程中遇到的错误： Package openmediavault is not configured yet.

解决办法：

1. 清空或删除 /var/lib/dpkg/info/
2. 执行 apt clean apt autreomove
3. 重新执行 apt upgrade

### Wifi 网络不可用

升级完 omv 后，登录进去提示要重启系统，悲催的是重启完后连不上 N1 了，插拔了几次电源后也不行。
以为是卡在启动了，然后给 N1 插上键盘，插上显示器看了一下，启动正常，可以本机登录，但有个错误写着网络有问题。

看路由器上也没显示 N1 连接 Wifi，执行 armbian-config 看了一下，发现居然没有了 Wifi 选项，试了 nmtui 添加 Wifi 但是还是不行。
按网上资料准备手动填写 /etc/network/interfaces 时，发现上面写着不要手动修改， omv 会覆盖掉，于是准备进 omv 设置网络。

接着给 N1 插上 网线，然后看到 路由器上 N1 上线了，根据 IP 进入了 omv，找到 网络，发现又 WiFi 配置，但是不能点应用，于是修改了下有线网络，点击应用后，稍等一会终于连上 WifFi 了。

### 升级 PHP

升级了一些软件后发现 nextcloud 连不上了，重定向后的地址不对，于是想着干脆升级一下得了。

查询了一下看到官方推荐 PHP8 ，看着现在的 PHP7.3 就想着升级一下。

根据下面的资料，准备升级 PHP：

* [Install PHP 8.1 In Debian 9, 10, and Debian 11](https://www.linuxandubuntu.com/home/install-php-8-1-in-debian-9-10-and-debian-11)
* [Install PHP 8 on Debian 10/Debian 9 – How to do it](https://bobcares.com/blog/install-php-8-on-debian-10/)

```bash
sudo apt install apt-transport-https lsb-release ca-certificates wget -y
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
# wget -qO – https://packages.sury.org/php/apt.gpg | sudo apt-key add –
sudo sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
sudo apt update
sudo apt upgrade -y
```

又报错了： Package php7.3-common is not configured yet.

解决：<https://askubuntu.com/questions/1126823/error-while-installing-php-in-ubuntu>

```bash
sudo rm /var/lib/dpkg/info/php*
sudo apt -f install

# Then again for libapache2-mod-php
sudo rm /var/lib/dpkg/info/libapache2-mod-php*
sudo apt -f install
```

终于升级成功，但是 php -v 还是 7.3 ，发现两个版本共存了。

```bash
ls -la /usr/bin | grep php
```

### 切换 PHP 版本

查看 php 又多个，执行 php8.1 -v 是没问题的，需要修改默认的版本，默认的版本 /etc/alternatives/php

根据以下资料做修改：

* [update-alternatives——linux 软件版本管理命令](https://cloud.tencent.com/developer/article/1532283)
* [How to Switch between Multiple PHP Version on Ubuntu](https://tecadmin.net/switch-between-multiple-php-version-on-ubuntu/)
* [Ubuntu 下轻松实现 PHP 多版本共存](https://www.mf8.biz/ubuntu-multip-php/)

```bash
update-alternatives --install /usr/bin/php php /usr/bin/php8.1 200

update-alternatives --install /usr/bin/php-cgi php-cgi /usr/bin/php-cgi8.1 200

update-alternatives --install /usr/bin/phar phar /usr/bin/phar8.1 200

update-alternatives --install /usr/bin/phar.phar phar.phar /usr/bin/phar8.1.phar 200

# 查看
update-alternatives --display php
# 配置
update-alternatives --config php
```

设置好上面的 update-alternatives 后，查看 php -v 已经切换为 php8.1。

切换 apache 的 php：

```bash
sudo a2dismod php7.3
sudo a2enmod php8.1
sudo service apache2 restart
```

## 升级 NextCloud

### command line

```bash
sudo -u www-data php /var/www/html/nextcloud/updater/updater.phar
```

### Installer

使用 setup-nextcloud.php，放到 /var/www/html 下，并修改 http server 权限：

```bash
chown -R www-data:www-data /var/www/html/
```

报找不到相应的 php module，但是这些 module 已经安装了。。

/etc/php/8.1/mods-available 下 比 /etc/php/7.3/mods-available 下少很多。

接着需要配置 php.ini，php.ini 有多处：

* /etc/php/7.3/apache2/php.ini
* /etc/php/7.3/fpm/php.ini
* /etc/php/7.3/cgi/php.ini
* /etc/php/7.3/cli/php.ini

但 php8.1 中没有 php.ini，上面的 7.3 的 php.ini 中，虽然有写明 extension=xxx.so 这样，但是都是注释掉的状态，extension\_dir 也没有设置。
8.1 默认 extension\_dr:

```bash
php -i | grep -i extension_dir
```

启用哪些模块，可以在 php.ini 中定义，也可以使用命令： [How to enable or disable PHP Modules on Ubuntu](https://tecadmin.net/enable-disable-php-modules-ubuntu/)

* phpenmod – Used to enable modules in PHP
* phpdismod – Used to disable modules in PHP
* phpquery – Used to view status of modules of PHP

```bash
### Syntax
phpenmod MODULE_NAME

### Enable mbstring php module
phpenmod mbstring

### Syntax
phpenmod -v <PHP VERSION> <MODULE NAME>

### Enable module for specific php version
phpenmod -v 5.6 mbstring
phpenmod -v 7.4 mbstring

### Syntax
phpenmod -s <SAPI> <MODULE NAME>

### Enable module for specific SAPI
phpenmod -s cli mbstring
phpenmod -s fpm mbstring
phpenmod -s apache2 mbstring
```

查看 7.3 开启的模块： php7.3 -v，然后根据需要开启 php8.1 的模块

使用 phpenmod 前，需要先在 /etc/php/8.1/mods-available 下建 对应的 .ini 文件。
为了省事，把 /etc/php/7.3/mods-available/\* 复制到 /etc/php/8.1/mods-available 下。

然后重启 apache2, systemctl restart apache2.
