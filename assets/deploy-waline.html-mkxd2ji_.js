import{_ as a,c as s,b as e,d as n,o as t}from"./app-D5yW6ZW2.js";const l={},p=n('<h1 id="waline-部署" tabindex="-1"><a class="header-anchor" href="#waline-部署"><span>Waline 部署</span></a></h1><p><a href="https://waline.js.org/" target="_blank" rel="noopener noreferrer">Waline</a> 是一款简洁、安全的评论系统。</p><h2 id="独立部署" tabindex="-1"><a class="header-anchor" href="#独立部署"><span>独立部署</span></a></h2><p>本次使用 Docker 独立部署，以便方便内网使用。</p>',4),i=n(`<h2 id="部署脚本" tabindex="-1"><a class="header-anchor" href="#部署脚本"><span>部署脚本</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(c,r){return t(),s("div",null,[p,e(" more "),i])}const d=a(l,[["render",o],["__file","deploy-waline.html.vue"]]),k=JSON.parse('{"path":"/posts/docker/deploy-waline.html","title":"Waline 部署","lang":"zh-CN","frontmatter":{"category":["docker"],"tag":["waline","docker"],"description":"Waline 是一款简洁、安全的评论系统。 独立部署 本次使用 Docker 独立部署，以便方便内网使用。","head":[["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/docker/deploy-waline.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Waline 部署"}],["meta",{"property":"og:description","content":"Waline 是一款简洁、安全的评论系统。 独立部署 本次使用 Docker 独立部署，以便方便内网使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T06:12:25.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"waline"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:modified_time","content":"2024-05-14T06:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Waline 部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T06:12:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]]},"headers":[{"level":2,"title":"独立部署","slug":"独立部署","link":"#独立部署","children":[]},{"level":2,"title":"部署脚本","slug":"部署脚本","link":"#部署脚本","children":[]}],"git":{"createdTime":1679915006000,"updatedTime":1715667145000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":2}]},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"posts/docker/deploy-waline.md","localizedDate":"2023年3月27日","excerpt":"\\n<p><a href=\\"https://waline.js.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Waline</a> 是一款简洁、安全的评论系统。</p>\\n<h2>独立部署</h2>\\n<p>本次使用 Docker 独立部署，以便方便内网使用。</p>\\n","autoDesc":true}');export{d as comp,k as data};
