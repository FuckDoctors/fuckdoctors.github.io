import{_ as i,r as a,o as l,c as t,a as n,b as e,d,e as c,h as o}from"./app-4dfd043d.js";const u={},v=n("h1",{id:"playground-插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-插件","aria-hidden":"true"},"#"),e(" Playground 插件")],-1),r={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[n("code",null,"playground"),e(" 插件已经提交 PR，不需要自己实现，使用 "),n("code",null,"vuepress-theme-hope"),e(" 主题内置即可，这里仅保留记录。")])],-1),m=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// cunstomConfig.ts"),e(`
`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"const"),e(" customConfig"),n("span",{class:"token operator"},":"),e(" CustomConfig "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),e(`
  mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// playground: true,"),e(`
    playground`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      base`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'https://vue-sfc-playground.vercel.app/'"),n("span",{class:"token punctuation"},","),e(`
      option`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        showOutput`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=o(`<ul><li><code>playground</code> 设为 <code>true</code> 时，启用默认的 Playground 配置，即 Vue3 官方的 Playground。</li><li><code>playground</code> 设为 对象时，则使用配置项指定的内容来显示 Playground。</li><li>另外，<code>playground</code> 还支持个别设置 <code>base</code> 和 <code>imports</code>，稍后为你介绍。</li></ul><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p><s>为了简单方便，你只需配合 <code>CodeGroup</code> 和 <code>CodeGroupItem</code> 即可。<br> 每一个 <code>CodeGroupItem</code> 为一个 <code>.vue</code> 文件。</s></p><p>为了简单方便，你只需配合 <code>code-tabs</code> 和 <code>@tab</code> 即可。<br> 每一个 <code>@tab</code> 为一个 <code>.vue</code> 或 <code>.js</code> 文件。</p><p>使用 <code>imports</code> 和 <code>settings</code> 可为每个 Playground 自定义配置。</p><p>使用方法如下：</p><h3 id="使用主题默认配置" tabindex="-1"><a class="header-anchor" href="#使用主题默认配置" aria-hidden="true">#</a> 使用主题默认配置</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: playground Playground demo
::: code-tabs
@tab App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;App&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@tab Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用个别配置" tabindex="-1"><a class="header-anchor" href="#使用个别配置" aria-hidden="true">#</a> 使用个别配置</h3><p>使用个别配置的 <code>base</code> 和 <code>imports</code>，以 Element Plus 为例。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: playground Customize playground demo
::: code-tabs
@tab App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;App&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@tab Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: imports import_map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;imports&quot;: {
    &quot;vue&quot;: &quot;https://sfc.vuejs.org/vue.runtime.esm-browser.js&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;base&quot;: &quot;https://element-plus.run/&quot;
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="使用主题默认配置的案例" tabindex="-1"><a class="header-anchor" href="#使用主题默认配置的案例" aria-hidden="true">#</a> 使用主题默认配置的案例</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: playground Playground demo
::: code-tabs
@tab App.vue

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

@tab Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用个别配置的案例" tabindex="-1"><a class="header-anchor" href="#使用个别配置的案例" aria-hidden="true">#</a> 使用个别配置的案例</h3><p>使用个别配置的 <code>base</code> 和 <code>imports</code>。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: playground Element-Plus demo
::: code-tabs
@tab App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script lang=&quot;ts&quot; setup&gt;
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from &#39;@element-plus/icons-vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;el-row class=&quot;mb-4&quot;&gt;
    &lt;el-button&gt;Default&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot;&gt; Primary &lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot;&gt; Success &lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot;&gt; Info &lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot;&gt; Warning &lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot;&gt; Danger &lt;/el-button&gt;
    &lt;el-button&gt;中文&lt;/el-button&gt;
  &lt;/el-row&gt;
  &lt;el-row&gt;
    &lt;el-button :icon=&quot;Search&quot; circle /&gt;
    &lt;el-button type=&quot;primary&quot; :icon=&quot;Edit&quot; circle /&gt;
    &lt;el-button type=&quot;success&quot; :icon=&quot;Check&quot; circle /&gt;
    &lt;el-button type=&quot;info&quot; :icon=&quot;Message&quot; circle /&gt;
    &lt;el-button type=&quot;warning&quot; :icon=&quot;Star&quot; circle /&gt;
    &lt;el-button type=&quot;danger&quot; :icon=&quot;Delete&quot; circle /&gt;
  &lt;/el-row&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: imports import-map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;imports&quot;: {
    &quot;a&quot;: &quot;b&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;base&quot;: &quot;https://element-plus.run/&quot;
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function k(h,q){const s=a("ExternalLinkIcon");return l(),t("div",null,[v,n("p",null,[e("让你的 VuePress 站点中的 Markdown 文件支持 "),n("a",r,[e("Vue SFC Playground"),d(s)]),e(" 类似的代码案例。")]),c(" more "),p,m,b,g])}const f=i(u,[["render",k],["__file","playground-plugin.html.vue"]]);export{f as default};