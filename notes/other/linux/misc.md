---
url: 'https://zhaobc.site/notes/other/linux/misc.md'
---
# 杂项

## 更改语言

```shell
# centos
# change locale
sed "s/LANG=\"en_US.UTF-8\"/LANG=\"ja_JP.UTF-8\"/" -i /etc/locale.conf
localedef -i ja_JP -f UTF-8 ja_JP.UTF-8

# setup env
cat << EOF >> /etc/profile
export LANG=ja_JP.UTF-8
export LC_ALL=ja_JP.UTF-8
export LANGUAGE=ja_JP.UTF-8
EOF
```

## 更改主机名

```shell
hostnamectl set-hostname Xxx
```

注意：主机名带 `.` 的话，会忽略 `.` 之后的内容。
比如 `201.23` 会变为 `201`。

## 开发防火墙端口

### 查看端口

```shell
firewall-cmd --list-ports
```

### 添加端口

```shell
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

### 重启防火墙

```shell
firewall-cmd --reload
```
