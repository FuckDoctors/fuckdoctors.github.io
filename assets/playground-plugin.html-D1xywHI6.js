import{_ as a,r as l,o as i,c as t,a as n,b as e,d,e as o,h as c}from"./app-DD0G0ouy.js";const u={},r=n("h1",{id:"playground-插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-插件"},[n("span",null,"Playground 插件")])],-1),v={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[n("code",null,"playground"),e(" 插件已经提交 PR，不需要自己实现，使用 "),n("code",null,"vuepress-theme-hope"),e(" 主题内置即可，这里仅保留记录。")])],-1),m=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置"},[n("span",null,"配置")])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// cunstomConfig.ts"),e(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=c(`<ul><li><code>playground</code> 设为 <code>true</code> 时，启用默认的 Playground 配置，即 Vue3 官方的 Playground。</li><li><code>playground</code> 设为 对象时，则使用配置项指定的内容来显示 Playground。</li><li>另外，<code>playground</code> 还支持个别设置 <code>base</code> 和 <code>imports</code>，稍后为你介绍。</li></ul><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p><s>为了简单方便，你只需配合 <code>CodeGroup</code> 和 <code>CodeGroupItem</code> 即可。<br> 每一个 <code>CodeGroupItem</code> 为一个 <code>.vue</code> 文件。</s></p><p>为了简单方便，你只需配合 <code>code-tabs</code> 和 <code>@tab</code> 即可。<br> 每一个 <code>@tab</code> 为一个 <code>.vue</code> 或 <code>.js</code> 文件。</p><p>使用 <code>imports</code> 和 <code>settings</code> 可为每个 Playground 自定义配置。</p><p>使用方法如下：</p><h3 id="使用主题默认配置" tabindex="-1"><a class="header-anchor" href="#使用主题默认配置"><span>使用主题默认配置</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground Playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用个别配置" tabindex="-1"><a class="header-anchor" href="#使用个别配置"><span>使用个别配置</span></a></h3><p>使用个别配置的 <code>base</code> 和 <code>imports</code>，以 Element Plus 为例。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground Customize playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="使用主题默认配置的案例" tabindex="-1"><a class="header-anchor" href="#使用主题默认配置的案例"><span>使用主题默认配置的案例</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground Playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用个别配置的案例" tabindex="-1"><a class="header-anchor" href="#使用个别配置的案例"><span>使用个别配置的案例</span></a></h3><p>使用个别配置的 <code>base</code> 和 <code>imports</code>。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground Element-Plus demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(k,y){const s=l("ExternalLinkIcon");return i(),t("div",null,[r,n("p",null,[e("让你的 VuePress 站点中的 Markdown 文件支持 "),n("a",v,[e("Vue SFC Playground"),d(s)]),e(" 类似的代码案例。")]),o(" more "),p,m,b,g])}const f=a(u,[["render",h],["__file","playground-plugin.html.vue"]]),P=JSON.parse('{"path":"/posts/theme/playground-plugin.html","title":"Playground 插件","lang":"zh-CN","frontmatter":{"isOriginal":true,"article":true,"date":"2022-05-02T00:00:00.000Z","category":["theme","playground"],"tag":["vuepress","theme","markdown","playground"],"head":[["meta",{"name":"description","content":"Vue SFC Playground"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/theme/playground-plugin.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Playground 插件"}],["meta",{"property":"og:description","content":"Playground 插件 让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 注意 playground 插件已经提交 PR，不需要自己实现，使用 vuepress-theme-hope 主题内置即可，这里仅保留记录。 配置 playground 设为 true 时，启用默认的 Pl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-15T06:59:06.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"theme"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:tag","content":"playground"}],["meta",{"property":"article:published_time","content":"2022-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-15T06:59:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Playground 插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-15T06:59:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"description":"Playground 插件 让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 注意 playground 插件已经提交 PR，不需要自己实现，使用 vuepress-theme-hope 主题内置即可，这里仅保留记录。 配置 playground 设为 true 时，启用默认的 Pl..."},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"使用主题默认配置","slug":"使用主题默认配置","link":"#使用主题默认配置","children":[]},{"level":3,"title":"使用个别配置","slug":"使用个别配置","link":"#使用个别配置","children":[]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"使用主题默认配置的案例","slug":"使用主题默认配置的案例","link":"#使用主题默认配置的案例","children":[]},{"level":3,"title":"使用个别配置的案例","slug":"使用个别配置的案例","link":"#使用个别配置的案例","children":[]}]}],"git":{"createdTime":1710485946000,"updatedTime":1710485946000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"posts/theme/playground-plugin.md","localizedDate":"2022年5月2日","excerpt":"\\n<p>让你的 VuePress 站点中的 Markdown 文件支持 <a href=\\"https://sfc.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue SFC Playground</a> 类似的代码案例。</p>\\n","autoDesc":true}');export{f as comp,P as data};
