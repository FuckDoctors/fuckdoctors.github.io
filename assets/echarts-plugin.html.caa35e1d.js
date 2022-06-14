import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as u,c as l,a as n,b as s,d as e,e as i}from"./app.e2216a50.js";const r={},c=n("h1",{id:"echarts-\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts-\u63D2\u4EF6","aria-hidden":"true"},"#"),e(" ECharts \u63D2\u4EF6")],-1),v=e("\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u7684 Markdown \u6587\u4EF6\u652F\u6301 "),m={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},q=e("ECharts"),b=e(" \u56FE\u8868\u3002"),p=i(`<p>\u4F7F\u7528\u672C\u63D2\u4EF6\u65F6\uFF0C\u9700\u8981\u81EA\u5DF1\u5B89\u88C5 <code>echarts</code> \u4F9D\u8D56\uFF0C\u672C\u63D2\u4EF6\u4F1A\u5C06 <code>echarts</code> \u52A0\u5230 <code>optimizeDeps</code> \u4E2D\u3002 \u53E6\u5916\uFF0C\u672C\u63D2\u4EF6\u4F7F\u7528\u4E86 <code>vueuse</code>\uFF0C\u7528\u6765\u505A\u5BBD\u5EA6\u81EA\u9002\u5E94\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u672C\u63D2\u4EF6\u5DF2\u7ECF\u63D0\u4EA4 PR\uFF0C\u4E0D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\uFF0C\u4F7F\u7528 <code>vuepress-theme-hope</code> \u4E3B\u9898\u5185\u7F6E\u5373\u53EF\uFF0C\u8FD9\u91CC\u4EC5\u4FDD\u7559\u8BB0\u5F55\u3002</p></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// customConfig.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> customConfig<span class="token operator">:</span> CustomConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
    echarts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts \u6807\u9898

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // \u6B64\u5904\u4E3A\u56FE\u8868\u914D\u7F6E
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u6298\u7EBF\u56FE</h3>`,8),A=i(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u6298\u7EBF\u56FE

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u67F1\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u67F1\u72B6\u56FE" aria-hidden="true">#</a> \u67F1\u72B6\u56FE</h3>`,2),h=i(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u67F1\u72B6\u56FE

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u997C\u56FE" aria-hidden="true">#</a> \u997C\u56FE</h3>`,2),C=i(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u997C\u56FE

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2>`,2),g=e("\u76F8\u5173\u8BE6\u60C5\uFF0C\u8BE6\u89C1 "),k={href:"https://echarts.apache.org/zh/option.html",target:"_blank",rel:"noopener noreferrer"},B=e("ECharts"),_=e(" \u6587\u6863.");function f(y,x){const t=d("ExternalLinkIcon"),a=d("ECharts");return u(),l("div",null,[c,n("p",null,[v,n("a",m,[q,s(t)]),b]),p,s(a,{id:"echarts-382ee16d",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%2C%0A%20%20%20%20%20%20%22smooth%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"ECharts%20%E6%8A%98%E7%BA%BF%E5%9B%BE",type:"json"}),A,s(a,{id:"echarts-382ee18b",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B120%2C%20200%2C%20150%2C%2080%2C%2070%2C%20110%2C%20130%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22showBackground%22%3A%20true%2C%0A%20%20%20%20%20%20%22backgroundStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22rgba(180%2C%20180%2C%20180%2C%200.2)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"ECharts%20%E6%9F%B1%E7%8A%B6%E5%9B%BE",type:"json"}),h,s(a,{id:"echarts-382ee1a9",config:"%7B%0A%20%20%22title%22%3A%20%7B%0A%20%20%20%20%22text%22%3A%20%22Referer%20of%20a%20Website%22%2C%0A%20%20%20%20%22subtext%22%3A%20%22Fake%20Data%22%2C%0A%20%20%20%20%22left%22%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20%22tooltip%22%3A%20%7B%0A%20%20%20%20%22trigger%22%3A%20%22item%22%0A%20%20%7D%2C%0A%20%20%22legend%22%3A%20%7B%0A%20%20%20%20%22orient%22%3A%20%22vertical%22%2C%0A%20%20%20%20%22left%22%3A%20%22left%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Access%20From%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%22radius%22%3A%20%2250%25%22%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201048%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Search%20Engine%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20735%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Direct%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20580%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Email%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20484%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Union%20Ads%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20300%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Video%20Ads%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22emphasis%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22itemStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22shadowBlur%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadowOffsetX%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadowColor%22%3A%20%22rgba(0%2C%200%2C%200%2C%200.5)%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"ECharts%20%E9%A5%BC%E5%9B%BE",type:"json"}),C,n("p",null,[g,n("a",k,[B,s(t)]),_])])}var w=o(r,[["render",f],["__file","echarts-plugin.html.vue"]]);export{w as default};
