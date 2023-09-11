import{_ as t,r as i,o as l,c as o,a as n,b as s,d as a,e as c,h as r}from"./app-60cbaeb9.js";const d={},p=n("h1",{id:"sandpack-插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sandpack-插件","aria-hidden":"true"},"#"),s(" Sandpack 插件")],-1),u={href:"https://sandpack.codesandbox.io/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"缘由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#缘由","aria-hidden":"true"},"#"),s(" 缘由")],-1),m={href:"https://react.dev",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"sandpack-react",-1),b=n("br",null,null,-1),h={href:"https://sandpack.codesandbox.io/",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"sandpack vuepress",-1),_={href:"https://github.com/jerrywu001/vitepress-plugin-sandpack",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"vitepress-plugin-sandpack",-1),y=n("code",null,"sandpack-vue3",-1),q={href:"https://github.com/jerrywu001/vitepress-plugin-sandpack",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"vitepress-plugin-sandpack",-1),C=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[s("截止到目前（2023/9/5），代码提及到 "),n("code",null,"feat/sandpck"),s(" 分支，暂未合并到 "),n("code",null,"main"),s(" 分支，功能和配置可能会有变动。")])],-1),j=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// cunstomConfig.ts"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" customConfig"),n("span",{class:"token operator"},":"),s(" CustomConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    sandpack`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=r(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>要使用交互演示，你应该使用一个名为 <code>sandpack#template</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file FullPathFile</code> 紧跟文件的代码块，同时也支持文件选项，例如：<code>@file FullPathFile [active readOnly hidden]</code></li><li><code>@options</code> 紧跟一个自定义 &quot;options&quot; 的 javascript 代码块</li><li><code>@setup</code> 紧跟一个自定义 &quot;customSetup&quot; 的 javascript 代码块</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: sandpack#vue 带自定义设置的 Vue 示例

@file /src/App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import Comp from &#39;./Comp.vue&#39;

const msg = ref(&#39;Hello Playground!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot;&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多内容详见 Hope 网站介绍，本文仅做一个简单记录。</p>`,7);function B(F,N){const e=i("ExternalLinkIcon");return l(),o("div",null,[p,n("p",null,[s("让你的 VuePress 站点中的 Markdown 文件支持 "),n("a",u,[s("Sandpack"),a(e)]),s(" 类似的代码案例。")]),v,n("p",null,[s("手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 "),n("a",m,[s("react.dev"),a(e)]),s(" . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，然后看了下源代码，发现是使用的 "),k,s("。"),b,s(" 看了下 sandpack "),n("a",h,[s("官网"),a(e)]),s("，感觉功能挺强大的，集成到 vuepress 里做代码演示很不错。")]),c(" more "),n("p",null,[s("然后搜了下关键字 "),g,s("，找到了 "),n("a",_,[f,a(e)]),s("，进而找到了 "),y,s("，再次表示感谢。")]),n("p",null,[s("您也可以直接使用 "),n("a",q,[x,a(e)]),s("。")]),C,j,w,V])}const E=t(d,[["render",B],["__file","sandpack-plugin.html.vue"]]);export{E as default};
