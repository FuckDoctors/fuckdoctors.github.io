---
url: 'https://zhaobc.site/notes/other/linux/gitlab-pages.md'
---
# Gitlab Pages 配置

## Gitlab 配置

`/etc/gitlab/gitlab.rb` :

```ruby
##! Define to enable GitLab Pages
#pages_external_url 'http://192.168.201.16'
pages_external_url 'http://dev.bhh'
gitlab_pages['enable'] = true
```

重新配置 gitlab :

```shell
gitlab-ctl reconfigure
```

## Gitlab Pages 域名访问

`gitlab-pages.conf` 如下：

```conf
server {
  listen *:80;
  server_name  ~^(?<group>.*)\.dev\.bhh$;
  server_tokens off; ## Don't show the nginx version number, a security best practice

  ## Disable symlink traversal
  disable_symlinks on;


  ## Real IP Module Config
  ## http://nginx.org/en/docs/http/ngx_http_realip_module.html

  ## Individual nginx logs for this GitLab vhost
  access_log  /var/log/gitlab/nginx/gitlab_pages_access.log gitlab_access;
  error_log   /var/log/gitlab/nginx/gitlab_pages_error.log;

  # Pass everything to pages daemon
  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto http;

    # Prevent NGINX from caching pages in response to the pages `Cache-Control`
    # header.
    #
    # Browsers already respect this directive and Pages can handle the request
    # volume without help from NGINX.
    #
    # If this changes in the future, ensure `proxy_cache_key` is set to a value
    # like `$scheme$host$request_uri`, as the default value does not take the
    # Pages hostname into account, leading to incorrect responses being served.
    #
    # See https://gitlab.com/gitlab-org/gitlab-pages/issues/73
    proxy_cache off;

    proxy_pass          http://localhost:8090;
  }

  # Define custom error pages
  error_page 403 /403.html;
  error_page 404 /404.html;


}
```

## Gitlab Pages IP 访问

Gitlab Pages 的 nginx 配置文件在 `/var/opt/gitlab/nginx/conf` 下面。

添加一个新的配置文件，名为 `gitlab-pages-ip.conf`，内容如下：

```conf
server {
  listen 8088;
  server_name  192.168.201.16;
  server_tokens off; ## Don't show the nginx version number, a security best practice

  ## Disable symlink traversal
  disable_symlinks on;


  ## Real IP Module Config
  ## http://nginx.org/en/docs/http/ngx_http_realip_module.html

  ## Individual nginx logs for this GitLab vhost
  access_log  /var/log/gitlab/nginx/gitlab_pages_ip_access.log gitlab_access;
  error_log   /var/log/gitlab/nginx/gitlab_pages_ip_error.log;

  # Pass everything to pages daemon
  location / {
    root /var/opt/gitlab/gitlab-rails/shared/pages;
    index index.html;

    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto http;

    # Prevent NGINX from caching pages in response to the pages `Cache-Control`
    # header.
    #
    # Browsers already respect this directive and Pages can handle the request
    # volume without help from NGINX.
    #
    # If this changes in the future, ensure `proxy_cache_key` is set to a value
    # like `$scheme$host$request_uri`, as the default value does not take the
    # Pages hostname into account, leading to incorrect responses being served.
    #
    # See https://gitlab.com/gitlab-org/gitlab-pages/issues/73
    #proxy_cache off;

    #proxy_pass          http://localhost:8090;
  }

#  location ~* ^/(.+)/(.+)/ {
#    root /var/opt/gitlab/gitlab-rails/shared/pages/$1/$2/public;
#    index index.html;
#
#    proxy_cache off;
#  }

#  location ^~ /bbx/wiki/ {
#    root /var/opt/gitlab/gitlab-rails/shared/pages/bbx/wiki/public;
#    index index.html;
#
#    proxy_cache off;
#  }

  location ^~ /wiki {
    #root /var/opt/gitlab/gitlab-rails/shared/pages/bbx/wiki/public;
    alias /var/opt/gitlab/gitlab-rails/shared/pages/bbx/wiki/public;
    index index.html;

    #proxy_cache off;
  }

  # Define custom error pages
  error_page 403 /403.html;
  error_page 404 /404.html;


}
```

::: warning
为了便捷访问 Gitlab Pages，不想多加 `public` 路径，所以自己重写了 `location`。
并且为了能同时使用域名，并且保持域名访问和 IP 访问的 `base` 一致，重写了 `location`。
nginx 中的 `root` 和 `alias` 不同，使用 `root` 时，会再拼上 `location`，会导致加载有问题，所以改用 `alias`。
:::

IP 访问地址：`http://192.168.201.16:8088/bbx/wiki/public/`，需要带 `public` 路径。

## Gitlab Pages Nginx 重启

```shell
gitlab-ctl restart nginx
```

## 开放端口

```shell
firewall-cmd --zone=public --add-port=8088/tcp --permanent
systemctl restart firewalld
```
