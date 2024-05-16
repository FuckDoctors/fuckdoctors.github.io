import{_ as i,r as l,c as o,b as d,h as a,d as s,a as e,e as n,o as u}from"./app-DiFm4OjS.js";const r={},c=s('<h1 id="echarts-插件" tabindex="-1"><a class="header-anchor" href="#echarts-插件"><span>ECharts 插件</span></a></h1><p>让你的 VuePress 站点的 Markdown 文件支持 <a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noopener noreferrer">ECharts</a> 图表。</p><p>使用本插件时，需要自己安装 <code>echarts</code> 依赖，本插件会将 <code>echarts</code> 加到 <code>optimizeDeps</code> 中。<br> 另外，本插件使用了 <code>vueuse</code>，用来做宽度自适应。</p>',3),v=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,[n("本插件已经提交 PR，不需要自己实现，使用 "),e("code",null,"vuepress-theme-hope"),n(" 主题内置即可，这里仅保留记录。")])],-1),m=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置"},[e("span",null,"配置")])],-1),p=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[e("pre",{ts:"",class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// customConfig.ts"),n(`
`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"const"),n(" customConfig"),e("span",{class:"token operator"},":"),n(" CustomConfig "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token punctuation"},"{"),n(`
  mdEnhance`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
    echarts`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=s(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // 此处为图表配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图"><span>折线图</span></a></h3>`,4),q=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: echarts ECharts 折线图

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;xAxis&quot;: {
    &quot;type&quot;: &quot;category&quot;,
    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]
  },
  &quot;yAxis&quot;: {
    &quot;type&quot;: &quot;value&quot;
  },
  &quot;series&quot;: [
    {
      &quot;data&quot;: [150, 230, 224, 218, 135, 147, 260],
      &quot;type&quot;: &quot;line&quot;,
      &quot;smooth&quot;: true
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="柱状图" tabindex="-1"><a class="header-anchor" href="#柱状图"><span>柱状图</span></a></h3>`,2),b=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: echarts ECharts 柱状图

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;xAxis&quot;: {
    &quot;type&quot;: &quot;category&quot;,
    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]
  },
  &quot;yAxis&quot;: {
    &quot;type&quot;: &quot;value&quot;
  },
  &quot;series&quot;: [
    {
      &quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],
      &quot;type&quot;: &quot;bar&quot;,
      &quot;showBackground&quot;: true,
      &quot;backgroundStyle&quot;: {
        &quot;color&quot;: &quot;rgba(180, 180, 180, 0.2)&quot;
      }
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图"><span>饼图</span></a></h3>`,2),g=s(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: echarts ECharts 饼图

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;title&quot;: {
    &quot;text&quot;: &quot;Referer of a Website&quot;,
    &quot;subtext&quot;: &quot;Fake Data&quot;,
    &quot;left&quot;: &quot;center&quot;
  },
  &quot;tooltip&quot;: {
    &quot;trigger&quot;: &quot;item&quot;
  },
  &quot;legend&quot;: {
    &quot;orient&quot;: &quot;vertical&quot;,
    &quot;left&quot;: &quot;left&quot;
  },
  &quot;series&quot;: [
    {
      &quot;name&quot;: &quot;Access From&quot;,
      &quot;type&quot;: &quot;pie&quot;,
      &quot;radius&quot;: &quot;50%&quot;,
      &quot;data&quot;: [
        {
          &quot;value&quot;: 1048,
          &quot;name&quot;: &quot;Search Engine&quot;
        },
        {
          &quot;value&quot;: 735,
          &quot;name&quot;: &quot;Direct&quot;
        },
        {
          &quot;value&quot;: 580,
          &quot;name&quot;: &quot;Email&quot;
        },
        {
          &quot;value&quot;: 484,
          &quot;name&quot;: &quot;Union Ads&quot;
        },
        {
          &quot;value&quot;: 300,
          &quot;name&quot;: &quot;Video Ads&quot;
        }
      ],
      &quot;emphasis&quot;: {
        &quot;itemStyle&quot;: {
          &quot;shadowBlur&quot;: 10,
          &quot;shadowOffsetX&quot;: 0,
          &quot;shadowColor&quot;: &quot;rgba(0, 0, 0, 0.5)&quot;
        }
      }
    }
  ]
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h2><p>相关详情，详见 <a href="https://echarts.apache.org/zh/option.html" target="_blank" rel="noopener noreferrer">ECharts</a> 文档.</p>`,3);function k(y,f){const t=l("ECharts");return u(),o("div",null,[c,d(" more "),v,m,p,h,a(t,{id:"echarts-29",config:"eJxtTj0LwjAU3Psrwpsz9FPFzcXNScGhdAj2YQO1kTSRFul/970EpYPLHXfce3fvRAiYDpMeYS9YkHTzE0nBTTm8GzuDjH6rnCK/hpMZQAq4eGS6YhtU55mOVjOdlQvkB2joeuEXMP/veamePv1SI1qNHKtDLIZX9VmVSpEXDHlJkO2kyIqKoNyS3KRN3Ltq6PVAU7/u+DDGdeQ76zGYC2GTLMkHULhAew==",title:"ECharts%20%E6%8A%98%E7%BA%BF%E5%9B%BE"}),q,a(t,{id:"echarts-38",config:"eJxtT7EOgjAQ3fmK5iZNiAGM0bjp4OaEiQNhKNAAkVBTWqUx/Lt3RZHBJn0vr3f3Xu/lMQb9oa872DMSKLW9C1SQcy1KqSz443vBNcf3BM6yBZ/BxQiiqyicqgzRSdVEMdeOTAspTg9kAfZ/zoM36DR1dULVgtoS1zY2z+LDKPBZFCCEG4Qd3i2JkGAdpONvZ/4ZV58VyL2SzyPPb6WSpi2wrJURUzWbKrG2DU1/47GYy0YqMlRlxhchBf8gWEVL2oHO4Jgw9QbvDfcaVXI=",title:"ECharts%20%E6%9F%B1%E7%8A%B6%E5%9B%BE"}),b,a(t,{id:"echarts-47",config:"eJyNkm9rwjAQxt/7KUJgsIGMipbJ3rmpbweT/YHhi9he67E0KUnqJsPvvlxqrboyLKVp7nnyuztyPz3GuEMngd8z2tAWvp3f8WfIwIBhOmOCvcHKogPerz22WjW2ufgENhVONJqELAgJKAeG++COFO60lg7Lo0QG89w7vNeji9YpIQeVtkZt0LPItwHjMBHyPFdYD+ct+APWxz+Cq6b4uBIF9cknSQLWsrnRxR5E1WzLIJbYdOmDRqRYEYnH0VUbTqndBn+cIqgbIStCDaLRuDlykn8BwiRrNlM5KqCy6ycU/w/vbhh34qZoIAntX8aJx1EnZ1YIlJdjRuNRJ+ZFoVZsktrLUcOou6JXTEGfofZ/y8NlQFGuhUW6pRYeJmrhtkeDvRfsWqT660FWNHiD07y19pRlFty7l7vURy11mFmTr8R11Pem8N7GN3+rrFf6Lnu73i/tAceb",title:"ECharts%20%E9%A5%BC%E5%9B%BE"}),g])}const x=i(r,[["render",k],["__file","echarts-plugin.html.vue"]]),C=JSON.parse('{"path":"/posts/theme/echarts-plugin.html","title":"ECharts 插件","lang":"zh-CN","frontmatter":{"isOriginal":true,"sticky":91,"star":91,"article":true,"date":"2022-05-02T00:00:00.000Z","category":["theme","echarts"],"tag":["vuepress","theme","markdown","echarts"],"head":[["meta",{"name":"description","content":"ECharts 图表"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/theme/echarts-plugin.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"ECharts 插件"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点的 Markdown 文件支持 ECharts 图表。 使用本插件时，需要自己安装 echarts 依赖，本插件会将 echarts 加到 optimizeDeps 中。 另外，本插件使用了 vueuse，用来做宽度自适应。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T03:59:38.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"theme"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:tag","content":"echarts"}],["meta",{"property":"article:published_time","content":"2022-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T03:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ECharts 插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T03:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"description":"让你的 VuePress 站点的 Markdown 文件支持 ECharts 图表。 使用本插件时，需要自己安装 echarts 依赖，本插件会将 echarts 加到 optimizeDeps 中。 另外，本插件使用了 vueuse，用来做宽度自适应。"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"折线图","slug":"折线图","link":"#折线图","children":[]},{"level":3,"title":"柱状图","slug":"柱状图","link":"#柱状图","children":[]},{"level":3,"title":"饼图","slug":"饼图","link":"#饼图","children":[]}]},{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]}],"git":{"createdTime":1651501188000,"updatedTime":1679716778000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":6}]},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"posts/theme/echarts-plugin.md","localizedDate":"2022年5月2日","excerpt":"\\n<p>让你的 VuePress 站点的 Markdown 文件支持 <a href=\\"https://echarts.apache.org/zh/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ECharts</a> 图表。</p>\\n<p>使用本插件时，需要自己安装 <code>echarts</code> 依赖，本插件会将 <code>echarts</code> 加到 <code>optimizeDeps</code> 中。<br>\\n另外，本插件使用了 <code>vueuse</code>，用来做宽度自适应。</p>\\n","autoDesc":true}');export{x as comp,C as data};
