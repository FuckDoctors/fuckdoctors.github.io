import{_ as e,P as t,a2 as c,U as s,a3 as n,V as o,a4 as l,a8 as p,B as i}from"./framework-89b9b91d.js";const u={},r=s("h1",{id:"运行自己的-algolia",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#运行自己的-algolia","aria-hidden":"true"},"#"),n(" 运行自己的 algolia")],-1),d={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-docsearch",target:"_blank",rel:"noopener noreferrer"},k=p(`<p>提交 DocSearch 申请可能需要等待一段时间（我提交申请到最终下来花了 4 天），在申请下来之前，也体验下效果，自己使用旧版的方式爬取了内容。 申请下来之后，使用 Crawler 更方便，所以之前的旧方式就不再用了。为了保留记录，写成一篇文章。</p><p>旧方式使用 Github Actions 做定期爬虫：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Algolia Docsearch Action

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;docs/algolia-config-hope.json&#39;</span> <span class="token comment"># 当配置文件有变时，执行爬虫程序</span>

  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;0 18 * * *&#39;</span> <span class="token comment"># Runs at 18:00 UTC every day, 02:00 UTC+8</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">algolia</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> algolia<span class="token punctuation">-</span>crawler
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> crawling
        <span class="token comment"># the \`uses&#39; attribute must be a path, a Docker image, or owner/repo@ref</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> darrenjennings/algolia<span class="token punctuation">-</span>docsearch<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">algolia_api_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ALGOLIA_API_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">algolia_application_id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ALGOLIA_APPLICATION_ID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># needs to be inside $GITHUB_WORKSPACE from actions/checkout step</span>
          <span class="token key atrule">file</span><span class="token punctuation">:</span> docs/algolia<span class="token punctuation">-</span>config<span class="token punctuation">-</span>hope.json <span class="token comment"># 配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,h){const a=i("ExternalLinkIcon");return t(),c("div",null,[r,s("p",null,[n("使用 Algolia DocSearch 可以实现全文检索，对于搜索信息特别方便。 参考 Hope 提供的"),s("a",d,[n("使用 @vuepress/docsearch"),o(a)]),n("。")]),l(" more "),k])}const _=e(u,[["render",m],["__file","run-algolia-docsearch-from-code.html.vue"]]);export{_ as default};
