---
url: 'https://zhaobc.site/posts/docker/deploy-waline.md'
---
# Waline 部署

[Waline](https://waline.js.org/) 是一款简洁、安全的评论系统。

## 独立部署

本次使用 Docker 独立部署，以便方便内网使用。

## 部署脚本

```yml
# docker-compose.yml
version: '3'

services:
  waline:
    container_name: waline
    image: lizheming/waline:latest
    restart: always
    links:
      - postgresql
    depends_on:
      - postgresql
    ports:
      - 8360:8360
    volumes:
      - /srv/waline/data:/app/data
    environment:
      TZ: 'Asia/Shanghai'
      SITE_NAME: 'Site Name'
      SITE_URL: 'http://www.zhaobc.site'
      #SECURE_DOMAINS: 'example.com'
      AUTHOR_EMAIL: 'zhbchwin@163.com'
      PG_DB: waline
      PG_USER: waline
      PG_PASSWORD: xxxxxx
      PG_HOST: postgresql
      PG_PORT: 5432
      PG_PREFIX: 'wl_'
      PG_SSL: false

  postgresql:
    container_name: postgres
    image: postgres:latest
    restart: always
    ports:
      - 5460:5432
    volumes:
      - /srv/waline/db/pgdata:/var/lib/postgresql/data
      - /srv/waline/db/initdb:/docker-entrypoint-initdb.d
    environment:
      POSTGRES_USER: waline
      POSTGRES_PASSWORD: xxxxxx
      POSTGRES_DB: waline
```
