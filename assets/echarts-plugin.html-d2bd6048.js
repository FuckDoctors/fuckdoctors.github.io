import{_ as u,r as l,o as d,c as o,a as n,b as e,d as s,e as r,h as i}from"./app-37efb2f8.js";const c={},v=n("h1",{id:"echarts-插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts-插件","aria-hidden":"true"},"#"),e(" ECharts 插件")],-1),m={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,[e("使用本插件时，需要自己安装 "),n("code",null,"echarts"),e(" 依赖，本插件会将 "),n("code",null,"echarts"),e(" 加到 "),n("code",null,"optimizeDeps"),e(" 中。 另外，本插件使用了 "),n("code",null,"vueuse"),e("，用来做宽度自适应。")],-1),b=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[e("本插件已经提交 PR，不需要自己实现，使用 "),n("code",null,"vuepress-theme-hope"),e(" 主题内置即可，这里仅保留记录。")])],-1),h=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),p=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// customConfig.ts"),e(`
`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"const"),e(" customConfig"),n("span",{class:"token operator"},":"),e(" CustomConfig "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),e(`
  mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    echarts`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=i(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // 此处为图表配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图" aria-hidden="true">#</a> 折线图</h3>`,4),k=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts ECharts 折线图

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="柱状图" tabindex="-1"><a class="header-anchor" href="#柱状图" aria-hidden="true">#</a> 柱状图</h3>`,2),f=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts ECharts 柱状图

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图" aria-hidden="true">#</a> 饼图</h3>`,2),E=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts ECharts 饼图

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>`,2),y={href:"https://echarts.apache.org/zh/option.html",target:"_blank",rel:"noopener noreferrer"};function _(x,A){const t=l("ExternalLinkIcon"),a=l("ECharts");return d(),o("div",null,[v,n("p",null,[e("让你的 VuePress 站点的 Markdown 文件支持 "),n("a",m,[e("ECharts"),s(t)]),e(" 图表。")]),q,r(" more "),b,h,p,g,s(a,{id:"echarts-29",config:"eJxtTj0LwjAU3Psrwpsz9FPFzcXNScGhdAj2YQO1kTSRFul/970EpYPLHXfce3fvRAiYDpMeYS9YkHTzE0nBTTm8GzuDjH6rnCK/hpMZQAq4eGS6YhtU55mOVjOdlQvkB2joeuEXMP/veamePv1SI1qNHKtDLIZX9VmVSpEXDHlJkO2kyIqKoNyS3KRN3Ltq6PVAU7/u+DDGdeQ76zGYC2GTLMkHULhAew==",title:"ECharts%20%E6%8A%98%E7%BA%BF%E5%9B%BE"}),k,s(a,{id:"echarts-38",config:"eJxtT7EOgjAQ3fmK5iZNiAGM0bjp4OaEiQNhKNAAkVBTWqUx/Lt3RZHBJn0vr3f3Xu/lMQb9oa872DMSKLW9C1SQcy1KqSz443vBNcf3BM6yBZ/BxQiiqyicqgzRSdVEMdeOTAspTg9kAfZ/zoM36DR1dULVgtoS1zY2z+LDKPBZFCCEG4Qd3i2JkGAdpONvZ/4ZV58VyL2SzyPPb6WSpi2wrJURUzWbKrG2DU1/47GYy0YqMlRlxhchBf8gWEVL2oHO4Jgw9QbvDfcaVXI=",title:"ECharts%20%E6%9F%B1%E7%8A%B6%E5%9B%BE"}),f,s(a,{id:"echarts-47",config:"eJyNkm9rwjAQxt/7KUJgsIGMipbJ3rmpbweT/YHhi9he67E0KUnqJsPvvlxqrboyLKVp7nnyuztyPz3GuEMngd8z2tAWvp3f8WfIwIBhOmOCvcHKogPerz22WjW2ufgENhVONJqELAgJKAeG++COFO60lg7Lo0QG89w7vNeji9YpIQeVtkZt0LPItwHjMBHyPFdYD+ct+APWxz+Cq6b4uBIF9cknSQLWsrnRxR5E1WzLIJbYdOmDRqRYEYnH0VUbTqndBn+cIqgbIStCDaLRuDlykn8BwiRrNlM5KqCy6ycU/w/vbhh34qZoIAntX8aJx1EnZ1YIlJdjRuNRJ+ZFoVZsktrLUcOou6JXTEGfofZ/y8NlQFGuhUW6pRYeJmrhtkeDvRfsWqT660FWNHiD07y19pRlFty7l7vURy11mFmTr8R11Pem8N7GN3+rrFf6Lnu73i/tAceb",title:"ECharts%20%E9%A5%BC%E5%9B%BE"}),E,n("p",null,[e("相关详情，详见 "),n("a",y,[e("ECharts"),s(t)]),e(" 文档.")])])}const C=u(c,[["render",_],["__file","echarts-plugin.html.vue"]]);export{C as default};
