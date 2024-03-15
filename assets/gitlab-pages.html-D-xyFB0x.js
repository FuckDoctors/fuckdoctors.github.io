import{_ as e,o as i,c as n,h as a}from"./app-j9Uyr1Kr.js";const s={},l=a(`<h1 id="gitlab-pages-配置" tabindex="-1"><a class="header-anchor" href="#gitlab-pages-配置"><span>Gitlab Pages 配置</span></a></h1><h2 id="gitlab-配置" tabindex="-1"><a class="header-anchor" href="#gitlab-配置"><span>Gitlab 配置</span></a></h2><p><code>/etc/gitlab/gitlab.rb</code> :</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>##! Define to enable GitLab Pages
#pages_external_url &#39;http://192.168.201.16&#39;
pages_external_url &#39;http://dev.bhh&#39;
gitlab_pages[&#39;enable&#39;] = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新配置 gitlab :</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gitlab-pages-域名访问" tabindex="-1"><a class="header-anchor" href="#gitlab-pages-域名访问"><span>Gitlab Pages 域名访问</span></a></h2><p><code>gitlab-pages.conf</code> 如下：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server {
  listen *:80;
  server_name  ~^(?&lt;group&gt;.*)\\.dev\\.bhh$;
  server_tokens off; ## Don&#39;t show the nginx version number, a security best practice

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

    # Prevent NGINX from caching pages in response to the pages \`Cache-Control\`
    # header.
    #
    # Browsers already respect this directive and Pages can handle the request
    # volume without help from NGINX.
    #
    # If this changes in the future, ensure \`proxy_cache_key\` is set to a value
    # like \`$scheme$host$request_uri\`, as the default value does not take the
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-pages-ip-访问" tabindex="-1"><a class="header-anchor" href="#gitlab-pages-ip-访问"><span>Gitlab Pages IP 访问</span></a></h2><p>Gitlab Pages 的 nginx 配置文件在 <code>/var/opt/gitlab/nginx/conf</code> 下面。</p><p>添加一个新的配置文件，名为 <code>gitlab-pages-ip.conf</code>，内容如下：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server {
  listen 8088;
  server_name  192.168.201.16;
  server_tokens off; ## Don&#39;t show the nginx version number, a security best practice

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

    # Prevent NGINX from caching pages in response to the pages \`Cache-Control\`
    # header.
    #
    # Browsers already respect this directive and Pages can handle the request
    # volume without help from NGINX.
    #
    # If this changes in the future, ensure \`proxy_cache_key\` is set to a value
    # like \`$scheme$host$request_uri\`, as the default value does not take the
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为了便捷访问 Gitlab Pages，不想多加 <code>public</code> 路径，所以自己重写了 <code>location</code>。<br> 并且为了能同时使用域名，并且保持域名访问和 IP 访问的 <code>base</code> 一致，重写了 <code>location</code>。<br> nginx 中的 <code>root</code> 和 <code>alias</code> 不同，使用 <code>root</code> 时，会再拼上 <code>location</code>，会导致加载有问题，所以改用 <code>alias</code>。</p></div><p>IP 访问地址：<code>http://192.168.201.16:8088/bbx/wiki/public/</code>，需要带 <code>public</code> 路径。</p><h2 id="gitlab-pages-nginx-重启" tabindex="-1"><a class="header-anchor" href="#gitlab-pages-nginx-重启"><span>Gitlab Pages Nginx 重启</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-ctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开放端口" tabindex="-1"><a class="header-anchor" href="#开放端口"><span>开放端口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8088</span>/tcp <span class="token parameter variable">--permanent</span>
systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[l];function d(r,c){return i(),n("div",null,t)}const v=e(s,[["render",d],["__file","gitlab-pages.html.vue"]]),b=JSON.parse(`{"path":"/notes/other/linux/gitlab-pages.html","title":"Gitlab Pages 配置","lang":"zh-CN","frontmatter":{"category":["linux"],"tag":["gitlab","linux"],"description":"Gitlab Pages 配置 Gitlab 配置 /etc/gitlab/gitlab.rb : 重新配置 gitlab : Gitlab Pages 域名访问 gitlab-pages.conf 如下： Gitlab Pages IP 访问 Gitlab Pages 的 nginx 配置文件在 /var/opt/gitlab/nginx/conf ...","head":[["meta",{"property":"og:url","content":"https://www.zhaobc.site/notes/other/linux/gitlab-pages.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Gitlab Pages 配置"}],["meta",{"property":"og:description","content":"Gitlab Pages 配置 Gitlab 配置 /etc/gitlab/gitlab.rb : 重新配置 gitlab : Gitlab Pages 域名访问 gitlab-pages.conf 如下： Gitlab Pages IP 访问 Gitlab Pages 的 nginx 配置文件在 /var/opt/gitlab/nginx/conf ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-15T05:04:45.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"gitlab"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:modified_time","content":"2024-03-15T05:04:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gitlab Pages 配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-15T05:04:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]]},"headers":[{"level":2,"title":"Gitlab 配置","slug":"gitlab-配置","link":"#gitlab-配置","children":[]},{"level":2,"title":"Gitlab Pages 域名访问","slug":"gitlab-pages-域名访问","link":"#gitlab-pages-域名访问","children":[]},{"level":2,"title":"Gitlab Pages IP 访问","slug":"gitlab-pages-ip-访问","link":"#gitlab-pages-ip-访问","children":[]},{"level":2,"title":"Gitlab Pages Nginx 重启","slug":"gitlab-pages-nginx-重启","link":"#gitlab-pages-nginx-重启","children":[]},{"level":2,"title":"开放端口","slug":"开放端口","link":"#开放端口","children":[]}],"git":{"createdTime":1710479085000,"updatedTime":1710479085000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"notes/other/linux/gitlab-pages.md","localizedDate":"2024年3月15日","excerpt":"\\n<h2>Gitlab 配置</h2>\\n<p><code>/etc/gitlab/gitlab.rb</code> :</p>\\n<div class=\\"language-conf\\" data-ext=\\"conf\\" data-title=\\"conf\\"><pre class=\\"language-conf\\"><code>##! Define to enable GitLab Pages\\n#pages_external_url 'http://192.168.201.16'\\npages_external_url 'http://dev.bhh'\\ngitlab_pages['enable'] = true\\n</code></pre></div>","autoDesc":true}`);export{v as comp,b as data};
