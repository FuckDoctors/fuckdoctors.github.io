import{_ as t,r as l,o as i,c as o,a as e,b as n,d as s,e as c,h as r}from"./app-D5ZyTKq7.js";const p={},d=e("h1",{id:"sandpack-插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sandpack-插件"},[e("span",null,"Sandpack 插件")])],-1),u={href:"https://sandpack.codesandbox.io/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"缘由",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#缘由"},[e("span",null,"缘由")])],-1),m={href:"https://react.dev",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"sandpack-react",-1),h=e("br",null,null,-1),g={href:"https://sandpack.codesandbox.io/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"sandpack vuepress",-1),_={href:"https://github.com/jerrywu001/vitepress-plugin-sandpack",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"vitepress-plugin-sandpack",-1),y=e("code",null,"sandpack-vue3",-1),q={href:"https://github.com/jerrywu001/vitepress-plugin-sandpack",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"vitepress-plugin-sandpack",-1),w=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,[n("截止到目前（2023/9/5），代码提及到 "),e("code",null,"feat/sandpck"),n(" 分支，暂未合并到 "),e("code",null,"main"),n(" 分支，功能和配置可能会有变动。")])],-1),C=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置"},[e("span",null,"配置")])],-1),S=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[e("pre",{ts:"",class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// cunstomConfig.ts"),n(`
`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"const"),n(" customConfig"),e("span",{class:"token operator"},":"),n(" CustomConfig "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token punctuation"},"{"),n(`
  mdEnhance`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
    sandpack`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=r(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>要使用交互演示，你应该使用一个名为 <code>sandpack#template</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file FullPathFile</code> 紧跟文件的代码块，同时也支持文件选项，例如：<code>@file FullPathFile [active readOnly hidden]</code></li><li><code>@options</code> 紧跟一个自定义 &quot;options&quot; 的 javascript 代码块</li><li><code>@setup</code> 紧跟一个自定义 &quot;customSetup&quot; 的 javascript 代码块</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: sandpack#vue 带自定义设置的 Vue 示例

@file /src/App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import Comp from &#39;./Comp.vue&#39;

const msg = ref(&#39;Hello Playground!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
  &lt;Comp /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@file /src/Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { useBattery } from &#39;@vueuse/core&#39;
import { ref } from &#39;vue&#39;

const { charging, level } = useBattery()
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;Battery status&lt;/h1&gt;
  &lt;p&gt;Charging: {{ charging }}&lt;/p&gt;
  &lt;p&gt;Level: {{ level * 100 }}%&lt;/p&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@options

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">activeFile</span><span class="token operator">:</span> <span class="token string">&quot;/src/Comp.vue&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

@setup

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@vueuse/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@vueuse/shared&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue-demi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多内容详见 Hope 网站介绍，本文仅做一个简单记录。</p>`,7);function R(P,T){const a=l("ExternalLinkIcon");return i(),o("div",null,[d,e("p",null,[n("让你的 VuePress 站点中的 Markdown 文件支持 "),e("a",u,[n("Sandpack"),s(a)]),n(" 类似的代码案例。")]),v,e("p",null,[n("手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 "),e("a",m,[n("react.dev"),s(a)]),n(" . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，然后看了下源代码，发现是使用的 "),k,n("。"),h,n(" 看了下 sandpack "),e("a",g,[n("官网"),s(a)]),n("，感觉功能挺强大的，集成到 vuepress 里做代码演示很不错。")]),c(" more "),e("p",null,[n("然后搜了下关键字 "),b,n("，找到了 "),e("a",_,[f,s(a)]),n("，进而找到了 "),y,n("，再次表示感谢。")]),e("p",null,[n("您也可以直接使用 "),e("a",q,[x,s(a)]),n("。")]),w,C,S,V])}const B=t(p,[["render",R],["__file","sandpack-plugin.html.vue"]]),Z=JSON.parse('{"path":"/posts/theme/sandpack-plugin.html","title":"Sandpack 插件","lang":"zh-CN","frontmatter":{"isOriginal":true,"article":true,"date":"2023-09-05T00:00:00.000Z","category":["theme","playground"],"tag":["vuepress","theme","markdown","sandpack","codesandbox","playground"],"head":[["meta",{"name":"description","content":"Sandpack Playground"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/theme/sandpack-plugin.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Sandpack 插件"}],["meta",{"property":"og:description","content":"Sandpack 插件 让你的 VuePress 站点中的 Markdown 文件支持 Sandpack 类似的代码案例。 缘由 手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 react.dev . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T03:05:54.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"theme"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:tag","content":"sandpack"}],["meta",{"property":"article:tag","content":"codesandbox"}],["meta",{"property":"article:tag","content":"playground"}],["meta",{"property":"article:published_time","content":"2023-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-03T03:05:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sandpack 插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-03T03:05:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"description":"Sandpack 插件 让你的 VuePress 站点中的 Markdown 文件支持 Sandpack 类似的代码案例。 缘由 手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 react.dev . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，..."},"headers":[{"level":2,"title":"缘由","slug":"缘由","link":"#缘由","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1709435154000,"updatedTime":1709435154000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"posts/theme/sandpack-plugin.md","localizedDate":"2023年9月5日","excerpt":"\\n<p>让你的 VuePress 站点中的 Markdown 文件支持 <a href=\\"https://sandpack.codesandbox.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Sandpack</a> 类似的代码案例。</p>\\n<h2>缘由</h2>\\n<p>手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 <a href=\\"https://react.dev\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">react.dev</a> . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，然后看了下源代码，发现是使用的 <code>sandpack-react</code>。<br>\\n看了下 sandpack <a href=\\"https://sandpack.codesandbox.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网</a>，感觉功能挺强大的，集成到 vuepress 里做代码演示很不错。</p>\\n","autoDesc":true}');export{B as comp,Z as data};
