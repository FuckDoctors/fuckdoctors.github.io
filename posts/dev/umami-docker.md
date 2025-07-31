---
url: 'https://zhaobc.site/posts/dev/umami-docker.md'
---
# 内网部署 umami

内网部署了一个 WiKi，为了简便，使用的 VuePress + [Hope 主题](https://theme-hope.vuejs.press/)。
估计是内部试用版的原因，基本上没人看。更主要是除了我自己，也没人往上放东西。。。
不过，本着网站功能齐全的目标，想者加一个统计功能，顺带看看是不是真的只有我一个人在用。。。

## 安装

本着能省则省的原则，首先看了下是否有 docker 版。挺好，有 docker 版，遂采用了 docker 版。

docker compose 文件参考了这里：[使用 Docker 部署 Umami 网站访问统计系统](https://homulilly.com/post/use-docker-deploy-umami.html)

docker 镜像下载折腾了不少时间（没可用的镜像），这里略去不表。。。

启动完了后，看到了自己映射的端口，同时也开放了该端口，但仍然不能访问。
然后使用 `docker logs` 查看了一下，虽然最后显示成功，但是中间有个下载出错了。

由于是内网环境，该服务器没法联网。遂上网搜了一下有无类似 `SCSS` 之类的设置 url 的方式。
找到了一个解决方案：[解决 prisma 国内部署失败](https://blog.bg7zag.com/2852)

遂按照其方式，改造了一下 compose 文件。

```yaml{15-18}
services:
  umami:
    image: umami-software/umami:postgresql-latest
    ports:
      - 11030:3000
    environment:
      # 使用自己的密码替换 <db_passwd>
      DATABASE_URL: postgresql://umami:<db_passwd>@db:5432/umami
      DATABASE_TYPE: postgresql
      # 生成一段随机字符串替换 <app_secret>
      # openssl rand -base64 32
      APP_SECRET: NVHYhP3wYaMM14d8hGFfR3aCCmsSi2+cQ/LKLfV67V0=
      # 下载 prisma 引擎失败
      # https://blog.bg7zag.com/2852
      PRISMA_QUERY_ENGINE_LIBRARY: /tmp/prisma/libquery_engine.so.node
      # PRISMA_QUERY_ENGINE_BINARY: /tmp/prisma/query-engine
      PRISMA_SCHEMA_ENGINE_BINARY: /tmp/prisma/schema-engine
      # PRISMA_FMT_BINARY: /tmp/prisma/prisma-fmt
    volumes:
      - ./prisma/:/tmp/prisma
    depends_on:
      db:
        condition: service_healthy
    init: true
    restart: always
    healthcheck:
      test: [CMD-SHELL, 'curl http://localhost:3000/api/heartbeat']
      interval: 5s
      timeout: 5s
      retries: 5
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      # 与前面生成的 <db_passwd> 一致
      POSTGRES_PASSWORD: <db_passwd>
    volumes:
      # 数据文件保存在 docker-compose.yaml 所在目?下的 data 文件?
      - ./data:/var/lib/postgresql/data
    restart: always
    healthcheck:
      test: [CMD-SHELL, 'pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}']
      interval: 5s
      timeout: 5s
      retries: 5
```

由于下载链接不固定，所以实际做法是每次只让一个变量有效，然后得到它的链接手动下载下来，放到 volumes 下面。
重启多次看效果，哪里出错了改哪里。

经试验，仅需要两个变量即可。其中，`schema-engine` 需要加上执行权限。

## 问题

使用过程中，发现浏览量特别大，而实际并没有那么多。起初不知道什么问题，后来发现浏览量是根据 hash 统计的，同一个页面里 hash 变了的话，浏览量就会增加。

由于部署的 vuepress 并不是单页应用，所以不需要按 hash 统计浏览量。

有两种解决方式，一个是修改 [环境变量](https://umami.is/docs/environment-variables) `REMOVE_TRAILING_SLASH = 1`。

另一个是修改 [跟踪配置](https://umami.is/docs/tracker-configuration) `data-exclude-hash="true"`。
