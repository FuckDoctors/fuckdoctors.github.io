import{_ as e,r as t,o as l,c as p,a as n,b as s,d as i,h as c}from"./app-60cbaeb9.js";const o={},u=n("h1",{id:"waline-部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#waline-部署","aria-hidden":"true"},"#"),s(" Waline 部署")],-1),r={href:"https://waline.js.org/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="独立部署" tabindex="-1"><a class="header-anchor" href="#独立部署" aria-hidden="true">#</a> 独立部署</h2><p>本次使用 Docker 独立部署，以便方便内网使用。</p><h2 id="部署脚本" tabindex="-1"><a class="header-anchor" href="#部署脚本" aria-hidden="true">#</a> 部署脚本</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">waline</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> waline
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lizheming/waline<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgresql
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgresql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8360<span class="token punctuation">:</span><span class="token number">8360</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /srv/waline/data<span class="token punctuation">:</span>/app/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
      <span class="token key atrule">SITE_NAME</span><span class="token punctuation">:</span> <span class="token string">&#39;Site Name&#39;</span>
      <span class="token key atrule">SITE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;http://www.zhaobc.site&#39;</span>
      <span class="token comment">#SECURE_DOMAINS: &#39;example.com&#39;</span>
      <span class="token key atrule">AUTHOR_EMAIL</span><span class="token punctuation">:</span> <span class="token string">&#39;zhbchwin@163.com&#39;</span>
      <span class="token key atrule">PG_DB</span><span class="token punctuation">:</span> waline
      <span class="token key atrule">PG_USER</span><span class="token punctuation">:</span> waline
      <span class="token key atrule">PG_PASSWORD</span><span class="token punctuation">:</span> xxxxxx
      <span class="token key atrule">PG_HOST</span><span class="token punctuation">:</span> postgresql
      <span class="token key atrule">PG_PORT</span><span class="token punctuation">:</span> <span class="token number">5432</span>
      <span class="token key atrule">PG_PREFIX</span><span class="token punctuation">:</span> <span class="token string">&#39;wl_&#39;</span>
      <span class="token key atrule">PG_SSL</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5460<span class="token punctuation">:</span><span class="token number">5432</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /srv/waline/db/pgdata<span class="token punctuation">:</span>/var/lib/postgresql/data
      <span class="token punctuation">-</span> /srv/waline/db/initdb<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> waline
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> xxxxxx
      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> waline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(v,m){const a=t("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[n("a",r,[s("Waline"),i(a)]),s(" 是一款简洁、安全的评论系统。")]),d])}const y=e(o,[["render",k],["__file","deploy-waline.html.vue"]]);export{y as default};
