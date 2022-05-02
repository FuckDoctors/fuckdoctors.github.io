import{r as l,o as r,c,a as n,b as a,w as e,F as u,d as s,f as p}from"./app.fdf73c15.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=n("h1",{id:"echarts-\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts-\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" ECharts \u63D2\u4EF6")],-1),m=s("\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u7684 Markdown \u6587\u4EF6\u652F\u6301 "),d={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},A=s("ECharts"),q=s(" \u56FE\u8868\u3002"),g=p(`<p>\u4F7F\u7528\u672C\u63D2\u4EF6\u65F6\uFF0C\u9700\u8981\u81EA\u5DF1\u5B89\u88C5 <code>echarts</code> \u4F9D\u8D56\uFF0C\u672C\u63D2\u4EF6\u4F1A\u5C06 <code>echarts</code> \u52A0\u5230 <code>optimizeDeps</code> \u4E2D\u3002 \u53E6\u5916\uFF0C\u672C\u63D2\u4EF6\u4F7F\u7528\u4E86 <code>vueuse</code>\uFF0C\u7528\u6765\u505A\u5BBD\u5EA6\u81EA\u9002\u5E94\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// customConfig.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> customConfig<span class="token operator">:</span> CustomConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
    echarts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts \u6807\u9898

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u5904\u4E3A\u56FE\u8868\u914D\u7F6E</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u6298\u7EBF\u56FE</h3>`,7),y=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"xAxis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"category"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Mon"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Tue"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Wed"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Thu"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Fri"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Sat"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Sun"'),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"yAxis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"series"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"230"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"224"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"218"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"135"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"147"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"260"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"smooth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),h=p(`<details class="custom-block details"><summary>\u5BF9\u5E94\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u6298\u7EBF\u56FE

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;smooth&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></details><h3 id="\u67F1\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u67F1\u72B6\u56FE" aria-hidden="true">#</a> \u67F1\u72B6\u56FE</h3>`,2),C=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"xAxis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"category"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"Mon"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Tue"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Wed"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Thu"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Fri"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Sat"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Sun"'),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"yAxis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"series"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"70"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"110"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"130"),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"showBackground"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"backgroundStyle"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"color"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(180, 180, 180, 0.2)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br")])],-1),v=p(`<details class="custom-block details"><summary>\u5BF9\u5E94\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u67F1\u72B6\u56FE

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Sun&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token number">150</span><span class="token punctuation">,</span>
        <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token number">70</span><span class="token punctuation">,</span>
        <span class="token number">110</span><span class="token punctuation">,</span>
        <span class="token number">130</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;showBackground&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;backgroundStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(180, 180, 180, 0.2)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></details><h3 id="\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u997C\u56FE" aria-hidden="true">#</a> \u997C\u56FE</h3>`,2),_=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"title"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"text"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Referer of a Website"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"subtext"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Fake Data"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"left"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"center"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"tooltip"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"trigger"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"item"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"legend"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"orient"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vertical"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"left"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"left"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"series"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Access From"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pie"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"radius"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50%"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1048"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Search Engine"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"735"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Direct"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"580"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Email"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"484"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Union Ads"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Video Ads"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"emphasis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"itemStyle"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"shadowBlur"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"shadowOffsetX"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"shadowColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(0, 0, 0, 0.5)"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br")])],-1),f=p(`<details class="custom-block details"><summary>\u5BF9\u5E94\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: echarts ECharts \u997C\u56FE

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Referer of a Website&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subtext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fake Data&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tooltip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;trigger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;legend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;orient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Access From&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;radius&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Search Engine&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Direct&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Email&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Union Ads&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Video Ads&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;emphasis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;itemStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;shadowBlur&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token property">&quot;shadowOffsetX&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;shadowColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.5)&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></details><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2>`,2),x=s("\u76F8\u5173\u8BE6\u60C5\uFF0C\u8BE6\u89C1 "),B={href:"https://echarts.apache.org/zh/option.html",target:"_blank",rel:"noopener noreferrer"},D=s("ECharts"),w=s(" \u6587\u6863.");function S(E,j){const o=l("ExternalLinkIcon"),t=l("MdECharts");return r(),c(u,null,[b,n("p",null,[m,n("a",d,[A,a(o)]),q]),g,a(t,{title:"ECharts \u6298\u7EBF\u56FE",id:"echarts-382ee168",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%2C%0A%20%20%20%20%20%20%22smooth%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"},{default:e(()=>[y]),_:1}),h,a(t,{title:"ECharts \u67F1\u72B6\u56FE",id:"echarts-382ee186",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%22Mon%22%2C%0A%20%20%20%20%20%20%22Tue%22%2C%0A%20%20%20%20%20%20%22Wed%22%2C%0A%20%20%20%20%20%20%22Thu%22%2C%0A%20%20%20%20%20%20%22Fri%22%2C%0A%20%20%20%20%20%20%22Sat%22%2C%0A%20%20%20%20%20%20%22Sun%22%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20120%2C%0A%20%20%20%20%20%20%20%20200%2C%0A%20%20%20%20%20%20%20%20150%2C%0A%20%20%20%20%20%20%20%2080%2C%0A%20%20%20%20%20%20%20%2070%2C%0A%20%20%20%20%20%20%20%20110%2C%0A%20%20%20%20%20%20%20%20130%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22showBackground%22%3A%20true%2C%0A%20%20%20%20%20%20%22backgroundStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22rgba(180%2C%20180%2C%20180%2C%200.2)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"},{default:e(()=>[C]),_:1}),v,a(t,{title:"ECharts \u997C\u56FE",id:"echarts-382ee1a4",config:"%7B%0A%20%20%22title%22%3A%20%7B%0A%20%20%20%20%22text%22%3A%20%22Referer%20of%20a%20Website%22%2C%0A%20%20%20%20%22subtext%22%3A%20%22Fake%20Data%22%2C%0A%20%20%20%20%22left%22%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20%22tooltip%22%3A%20%7B%0A%20%20%20%20%22trigger%22%3A%20%22item%22%0A%20%20%7D%2C%0A%20%20%22legend%22%3A%20%7B%0A%20%20%20%20%22orient%22%3A%20%22vertical%22%2C%0A%20%20%20%20%22left%22%3A%20%22left%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Access%20From%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%22radius%22%3A%20%2250%25%22%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201048%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Search%20Engine%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20735%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Direct%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20580%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Email%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20484%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Union%20Ads%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20300%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Video%20Ads%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22emphasis%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22itemStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22shadowBlur%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadowOffsetX%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadowColor%22%3A%20%22rgba(0%2C%200%2C%200%2C%200.5)%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"},{default:e(()=>[_]),_:1}),f,n("p",null,[x,n("a",B,[D,a(o)]),w])],64)}var M=i(k,[["render",S],["__file","echarts-plugin.html.vue"]]);export{M as default};
