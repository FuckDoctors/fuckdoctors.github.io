---
url: 'https://zhaobc.site/posts/docker/command.md'
---
# Docker 常用命令

官方文档：<https://docs.docker.com/engine/reference/commandline>

## docker info

Display system-wide information

## docker inspect

Return low-level information on Docker objects

```bash
docker inspect [OPTIONS] NAME|ID [NAME|ID...]
```

## docker ps

查看运行的 docker 容器

## docker images

查看 docker 镜像

## docker rm

Remove one or more containers

```bash
docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

```bash
# 删除所有已经停止的容器
docker rm $(docker ps -a -q)
```

## docker rmi

Remove one or more images

```bash
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

## docker start

Start one or more stopped containers

```bash
docker start [OPTIONS] CONTAINER [CONTAINER...]
```

## docker stop

Stop one or more running containers

```bash
docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

## docker restart

Restart one or more containers

```bash
docker restart [OPTIONS] CONTAINER [CONTAINER...]
```

## docker port

List port mappings or a specific mapping for the container

```bash
docker port CONTAINER [PRIVATE_PORT[/PROTO]]
```

## docker run

Run a command in a new container

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

## docker exec

Run a command in a running container

```bash
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

进入 docker 容器

```bash
docker exec -it container_name /bin/bash

docker exec -it ubuntu_bash bash
```

执行 docker 容器里的命令

```bash
docker exec -ti my_container sh -c "echo a && echo b"
# 解压文件
docker exec -it container_name tar -vxf a.tar

# 使用docker容器的root用户执行
docker exec -u root <container> <command>
```

## docker cp

Copy files/folders between a container and the local filesystem

```bash
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH
```

## docker commit

Create a new image from a container’s changes

```bash
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
```

## docker build

Build an image from a Dockerfile

```bash
docker build [OPTIONS] PATH | URL | -
```
