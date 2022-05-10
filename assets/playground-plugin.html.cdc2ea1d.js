import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as i,a as n,b as a,w as e,F as b,d as s,f as l,o as m}from"./app.4800fc46.js";const k={},g=n("h1",{id:"playground-\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" Playground \u63D2\u4EF6")],-1),d=s("\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301 "),C={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=s("Vue SFC Playground"),h=s(" \u7C7B\u4F3C\u7684\u4EE3\u7801\u6848\u4F8B\u3002"),y=l(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// cunstomConfig.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> customConfig<span class="token operator">:</span> CustomConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// playground: true,</span>
    playground<span class="token operator">:</span> <span class="token punctuation">{</span>
      base<span class="token operator">:</span> <span class="token string">&#39;https://vue-sfc-playground.vercel.app/&#39;</span><span class="token punctuation">,</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        showOutput<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><code>playground</code> \u8BBE\u4E3A <code>true</code> \u65F6\uFF0C\u542F\u7528\u9ED8\u8BA4\u7684 Playground \u914D\u7F6E\uFF0C\u5373 Vue3 \u5B98\u65B9\u7684 Playground\u3002</li><li><code>playground</code> \u8BBE\u4E3A \u5BF9\u8C61\u65F6\uFF0C\u5219\u4F7F\u7528\u914D\u7F6E\u9879\u6307\u5B9A\u7684\u5185\u5BB9\u6765\u663E\u793A Playground\u3002</li><li>\u53E6\u5916\uFF0C<code>playground</code> \u8FD8\u652F\u6301\u4E2A\u522B\u8BBE\u7F6E <code>base</code> \u548C <code>imports</code>\uFF0C\u7A0D\u540E\u4E3A\u4F60\u4ECB\u7ECD\u3002</li></ul><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p>\u4E3A\u4E86\u7B80\u5355\u65B9\u4FBF\uFF0C\u4F60\u53EA\u9700\u914D\u5408 <code>CodeGroup</code> \u548C <code>CodeGroupItem</code> \u5373\u53EF\u3002 \u6BCF\u4E00\u4E2A <code>CodeGroupItem</code> \u4E3A\u4E00\u4E2A <code>.vue</code> \u6587\u4EF6\u3002</p><p>\u4F7F\u7528 <code>imports</code> \u548C <code>settings</code> \u53EF\u4E3A\u6BCF\u4E2A Playground \u81EA\u5B9A\u4E49\u914D\u7F6E\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><h3 id="\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::::: playground playground demo
:::: code-group
::: code-group-item App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;App&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
:::::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528\u4E2A\u522B\u914D\u7F6E</h3><p>\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684 <code>base</code> \u548C <code>imports</code>\uFF0C\u4EE5 Element Plus \u4E3A\u4F8B\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::::: playground customize playground demo
:::: code-group
::: code-group-item App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;App&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::

::: imports import_map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sfc.vuejs.org/vue.runtime.esm-browser.js&quot;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.run/&quot;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

:::::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B</h3>`,14),q=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Comp "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./Comp.vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello World!'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("{{ msg }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("msg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Comp")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),_=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("Comp"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),f=l(`<details class="custom-block details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::::: playground playground demo
:::: code-group
::: code-group-item App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import Comp from &#39;./Comp.vue&#39;

const msg = ref(&#39;Hello World!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
  &lt;div&gt;
    &lt;Comp /&gt;
  &lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
:::::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></details><h3 id="\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B</h3><p>\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684 <code>base</code> \u548C <code>imports</code>\u3002</p>`,3),E=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-row")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mb-4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Primary"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Danger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s("\u4E2D\u6587"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-row")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-row")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Search"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Edit"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Check"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Message"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Star"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Delete"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"circle"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-row")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  Check`),n("span",{class:"token punctuation"},","),s(`
  Delete`),n("span",{class:"token punctuation"},","),s(`
  Edit`),n("span",{class:"token punctuation"},","),s(`
  Message`),n("span",{class:"token punctuation"},","),s(`
  Search`),n("span",{class:"token punctuation"},","),s(`
  Star`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@element-plus/icons-vue'"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br")])],-1),D=n("p",null,"::: imports import_map.json",-1),w=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"a"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"b"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),A=n("p",null,":::",-1),F=n("p",null,"::: settings",-1),x=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"base"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://element-plus.run/"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),j=n("p",null,":::",-1),B=l(`<details class="custom-block details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::::: playground Element-Plus demo
:::: code-group
::: code-group-item App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-row class=&quot;mb-4&quot;&gt;
    &lt;el-button&gt;Default&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;
    &lt;el-button&gt;\u4E2D\u6587&lt;/el-button&gt;
  &lt;/el-row&gt;
  &lt;el-row&gt;
    &lt;el-button :icon=&quot;Search&quot; circle /&gt;
    &lt;el-button type=&quot;primary&quot; :icon=&quot;Edit&quot; circle /&gt;
    &lt;el-button type=&quot;success&quot; :icon=&quot;Check&quot; circle /&gt;
    &lt;el-button type=&quot;info&quot; :icon=&quot;Message&quot; circle /&gt;
    &lt;el-button type=&quot;warning&quot; :icon=&quot;Star&quot; circle /&gt;
    &lt;el-button type=&quot;danger&quot; :icon=&quot;Delete&quot; circle /&gt;
  &lt;/el-row&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from &#39;@element-plus/icons-vue&#39;
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::

::: imports import_map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://element-plus.run/&quot;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

:::::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div></details>`,1);function S(P,I){const u=t("ExternalLinkIcon"),p=t("CodeGroupItem"),o=t("CodeGroup"),c=t("Playground");return m(),i(b,null,[g,n("p",null,[d,n("a",C,[v,a(u)]),h]),y,a(c,{title:"playground demo",id:"playground-382ee1c8",settings:"%7B%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Cscript%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cnimport%20Comp%20from%20'.%2FComp.vue'%5Cn%5Cnconst%20msg%20%3D%20ref('Hello%20World!')%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ch1%3E%7B%7B%20msg%20%7D%7D%3C%2Fh1%3E%5Cn%20%20%3Cinput%20v-model%3D%5C%22msg%5C%22%20%2F%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3CComp%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22Comp.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%3EComp%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D"},{default:e(()=>[a(o,null,{default:e(()=>[a(p,{title:"App.vue"},{default:e(()=>[q]),_:1}),a(p,{title:"Comp.vue"},{default:e(()=>[_]),_:1})]),_:1})]),_:1}),f,a(c,{title:"Element-Plus demo",id:"playground-382ee205",settings:"%7B%0A%20%20%22base%22%3A%20%22https%3A%2F%2Felement-plus.run%2F%22%0A%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cel-row%20class%3D%5C%22mb-4%5C%22%3E%5Cn%20%20%20%20%3Cel-button%3EDefault%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22primary%5C%22%3EPrimary%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22success%5C%22%3ESuccess%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22info%5C%22%3EInfo%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22warning%5C%22%3EWarning%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22danger%5C%22%3EDanger%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%3E%E4%B8%AD%E6%96%87%3C%2Fel-button%3E%5Cn%20%20%3C%2Fel-row%3E%5Cn%20%20%3Cel-row%3E%5Cn%20%20%20%20%3Cel-button%20%3Aicon%3D%5C%22Search%5C%22%20circle%20%2F%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22primary%5C%22%20%3Aicon%3D%5C%22Edit%5C%22%20circle%20%2F%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22success%5C%22%20%3Aicon%3D%5C%22Check%5C%22%20circle%20%2F%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22info%5C%22%20%3Aicon%3D%5C%22Message%5C%22%20circle%20%2F%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22warning%5C%22%20%3Aicon%3D%5C%22Star%5C%22%20circle%20%2F%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22danger%5C%22%20%3Aicon%3D%5C%22Delete%5C%22%20circle%20%2F%3E%5Cn%20%20%3C%2Fel-row%3E%5Cn%3C%2Ftemplate%3E%5Cn%5Cn%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cnimport%20%7B%5Cn%20%20Check%2C%5Cn%20%20Delete%2C%5Cn%20%20Edit%2C%5Cn%20%20Message%2C%5Cn%20%20Search%2C%5Cn%20%20Star%2C%5Cn%7D%20from%20'%40element-plus%2Ficons-vue'%5Cn%3C%2Fscript%3E%5Cn%22%7D%2C%22import_map.json%22%3A%7B%22lang%22%3A%22json%22%2C%22content%22%3A%22%7B%5Cn%20%20%5C%22a%5C%22%3A%20%5C%22b%5C%22%5Cn%7D%5Cn%22%7D%7D"},{default:e(()=>[a(o,null,{default:e(()=>[a(p,{title:"App.vue"},{default:e(()=>[E]),_:1})]),_:1}),D,w,A,F,x,j]),_:1}),B],64)}var V=r(k,[["render",S],["__file","playground-plugin.html.vue"]]);export{V as default};
