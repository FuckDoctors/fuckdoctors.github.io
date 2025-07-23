---
url: 'https://zhaobc.site/posts/dev/docker-jitsi.md'
---
# Jitsi 会议系统升级

## 简介

[Jitsi Meet](https://github.com/jitsi/jitsi-meet) 是一款开源的 Web 会议系统。

## 背景

2019 年时在公司内部搞了一个 Jitsi 会议系统，为了省事，都是搭建 Docker 版的。
少人数时使用下来还可以，后来就一直使用了下来，中间也升级过几次。

最近有同事反应，不能多人在线了，超过2人后，前面的人会自动被踢下线，奇怪的是之前都是可以的，2022 年 8 月 升级后，一直没这个问题。
后来猜测可能是最近浏览器升级导致这个问题。
Jitsi 的版本也确实老了，想着升级一下，看看新版能不能解决这个问题。

## 升级

Docker 版搭建和升级都比较简单，直接下载官方配置好的 yaml 文件，直接执行 `docker compose` 启动即可。

但是往往想象很美好，现实很残酷。。。
这里简单记录一下遇到的坑。

### 准备

参照官方的指南: [Self-Hosting Guide - Docker](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker)

### 修改 `.env` 配置

修改 `.env` 里的 以下配置：

* `PUBLIC_URL`
* `JVB_ADVERTISE_IPS`
* `ETHERPAD_PUBLIC_URL`
* `WHITEBOARD_COLLAB_SERVER_PUBLIC_URL`

### 问题点

#### 无法进入会议

按照之前的设置，`PUBLIC_URL` 配置了服务器的 IP，启动都没问题，但是无法参加会议。

浏览器控制台有 SSL 的错误，原来以为是证书的问题，自己生成了证书，客户端也安装了证书，还是不行。

查阅了一些资料，貌似别人都没问题，最后 `PUBLIC_URL` 改用域名的方式就没问题了。。

#### 白板无法同步

一开始看到 nginx 里配置了 `/socket.io/` 的转发，以为 `WHITEBOARD_COLLAB_SERVER_PUBLIC_URL` 配置要加 `/socket.io/`。
但是这样反而会导致白板无法同步，每个人各自显示各自写的白板。

F12 网络请求里 `/socket.io/` 的消息里有 `invalid namespace`。

白板的 `WHITEBOARD_COLLAB_SERVER_PUBLIC_URL` 不要加 `/socket.io/`，去掉就能协作了。

参考资料：[记socket.io实现websocket长连接,解决 invalid namespace ERROR](https://blog.csdn.net/cheendf/article/details/132276345)

> `socket.io` 如果没有在 options 选项中指定 websocket 建立连接进行 handshake 的路径，则默认为 `/socket.io/`
> 客户端进行连接时 URL只需要写 `ip:port` 或 `域名` 就可以了。

## 配置文件示例

实际用到的配置文件如下：

```shell
#
# Basic configuration options
#

# Directory where all configuration will be stored
CONFIG=~/.jitsi-meet-cfg

# Exposed HTTP port
HTTP_PORT=8000

# Exposed HTTPS port
HTTPS_PORT=8443

# System time zone
#TZ=UTC
TZ=Asia/Shanghai

# add by zhaobc
XMPP_DOMAIN=meet.jitsi
XMPP_SERVER=xmpp.meet.jitsi
XMPP_AUTH_DOMAIN=auth.meet.jitsi
XMPP_BOSH_URL_BASE=http://xmpp.meet.jitsi:5280
XMPP_MUC_DOMAIN=muc.meet.jitsi
XMPP_CROSS_DOMAIN=true
ENABLE_COLIBRI_WEBSOCKET=1
ENABLE_XMPP_WEBSOCKET=1
ENABLE_HSTS=0

# Public URL for the web service (required)
PUBLIC_URL=https://meet.example.com:8443

# Media IP addresses to advertise by the JVB
# This setting deprecates DOCKER_HOST_ADDRESS, and supports a comma separated list of IPs
# See the "Running behind NAT or on a LAN environment" section in the Handbook:
# https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker#running-behind-nat-or-on-a-lan-environment
JVB_ADVERTISE_IPS=192.168.1.1,1.2.3.4

JVB_DISABLE_STUN=true

#
# Etherpad integration (for document sharing)
#

# Set the etherpad-lite URL in the docker local network (uncomment to enable)
ETHERPAD_URL_BASE=http://etherpad.meet.jitsi:9001

# Set etherpad-lite public URL, including /p/ pad path fragment (uncomment to enable)
ETHERPAD_PUBLIC_URL=https://meet.example.com:8443/etherpad/p/

#
# Whiteboard integration
#

# Set the excalidraw-backend URL in the docker local network (uncomment to enable)
WHITEBOARD_COLLAB_SERVER_URL_BASE=http://whiteboard.meet.jitsi

# Set the excalidraw-backend public URL (uncomment to enable)
WHITEBOARD_COLLAB_SERVER_PUBLIC_URL=https://meet.example.com:8443/

#
# Authentication configuration (see handbook for details)
#

# Enable authentication
#ENABLE_AUTH=1

# Enable guest access
ENABLE_GUESTS=1

#
# Docker Compose options
#

# Container restart policy
#RESTART_POLICY=unless-stopped
RESTART_POLICY=always

# Jitsi image version (useful for local development)
#JITSI_IMAGE_VERSION=latest

```

## 启动

```shell
docker compose -f docker-compose.yml -f etherpad.yml -f whiteboard.yml up -d
```

## 停止

```shell
docker compose -f docker-compose.yml -f etherpad.yml -f whiteboard.yml down
```
