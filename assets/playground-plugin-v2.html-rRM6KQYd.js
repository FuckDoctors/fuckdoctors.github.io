import{_ as u,r as l,c as r,a as n,e as s,h as p,w as a,b as d,d as i,o as k}from"./app-D5yW6ZW2.js";const v={},m=i('<h1 id="playground-插件-v2" tabindex="-1"><a class="header-anchor" href="#playground-插件-v2"><span>Playground 插件 v2</span></a></h1><p>让你的 VuePress 站点中的 Markdown 文件支持 <a href="https://sfc.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue SFC Playground</a> 类似的代码案例。</p><p>同时支持外置和内置两种模式：</p><ul><li>外置模式，通过嵌入<code>iframe</code>的形式来引入 playground.</li><li>内置模式，通过<code>@vue/repl</code>直接渲染出来 playground.</li></ul>',4),g=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[n("code",null,"playground"),s(" 插件已经提交 PR，不需要自己实现，使用 "),n("code",null,"vuepress-theme-hope"),s(" 主题内置即可，这里仅保留记录。")])],-1),b=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置"},[n("span",null,"配置")])],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      playground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用默认配置"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      `),n("span",{class:"token literal-property property"},"playground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用默认配置"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,[s("你也可以使用 "),n("code",null,"PlaygroundOptions"),s(" 自定义你的 playground 配置：")],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      playground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'external'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用外置模式"),s(`
        external`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          base`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://sfc.vuejs.org/'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用 vue sfc playground."),s(`
          defaultImportsMap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'import-map.json'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        internal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          defaultImportsMap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'import-map.json'"),n("span",{class:"token punctuation"},","),s(`
          showCode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不显示代码"),s(`
          showCompileOutput`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不显示 js, css, ssr 面板"),s(`
          showImportMap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 显示 import map"),s(`
          clearConsole`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不清空控制台"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      `),n("span",{class:"token literal-property property"},"playground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'external'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用外置模式"),s(`
        `),n("span",{class:"token literal-property property"},"external"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://sfc.vuejs.org/'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用 vue sfc playground."),s(`
          `),n("span",{class:"token literal-property property"},"defaultImportsMap"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'import-map.json'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"internal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"defaultImportsMap"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'import-map.json'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"showCode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不显示代码"),s(`
          `),n("span",{class:"token literal-property property"},"showCompileOutput"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不显示 js, css, ssr 面板"),s(`
          `),n("span",{class:"token literal-property property"},"showImportMap"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 显示 import map"),s(`
          `),n("span",{class:"token literal-property property"},"clearConsole"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 不清空控制台"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=i(`<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="外置模式" tabindex="-1"><a class="header-anchor" href="#外置模式"><span>外置模式</span></a></h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground 基础用法

::: file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const msg = ref(&#39;Hello World!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h4><p>本示例向你展示如何自定义你的 playground。</p><ul><li>使用你自己的 playground</li><li>使用你自己的 import map</li><li>应用额外的配置到你的 playground</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground 高级用法
::: file App.vue

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

::: file Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
  &lt;el-row class=&quot;mb-4&quot;&gt;
    &lt;el-button&gt;Default&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot;&gt; Primary &lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot;&gt; Success &lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot;&gt; Info &lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot;&gt; Warning &lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot;&gt; Danger &lt;/el-button&gt;
    &lt;el-button&gt;中文&lt;/el-button&gt;
  &lt;/el-row&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: imports import-map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;imports&quot;: {
    &quot;lodash-es&quot;: &quot;https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;mode&quot;: &quot;external&quot;,
  &quot;external&quot;: {
    &quot;base&quot;: &quot;https://vue-sfc-playground.vercel.app/&quot;,
    &quot;options&quot;: {
      &quot;showOutput&quot;: &quot;true&quot;
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置模式" tabindex="-1"><a class="header-anchor" href="#内置模式"><span>内置模式</span></a></h3><h4 id="内置模式-基本用法" tabindex="-1"><a class="header-anchor" href="#内置模式-基本用法"><span>内置模式 基本用法</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground 基础用法
::: file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const msg = ref(&#39;Hello Playground!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;mode&quot;: &quot;internal&quot;
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置模式-高级用法" tabindex="-1"><a class="header-anchor" href="#内置模式-高级用法"><span>内置模式 高级用法</span></a></h4><p>显示 playground 的 JS, CSS, SSR 面板，并显示代码编辑器。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: playground 高级用法
::: file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const msg = ref(&#39;Hello Playground!&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;mode&quot;: &quot;internal&quot;,
  &quot;internal&quot;: {
    &quot;showCode&quot;: &quot;true&quot;,
    &quot;showCompileOutput&quot;: &quot;true&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="markdown-插件代码" tabindex="-1"><a class="header-anchor" href="#markdown-插件代码"><span>Markdown 插件代码</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// playground.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PluginSimple <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;markdown-it&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Token <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;markdown-it/lib/token&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PlaygroundFiles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../shared/playground&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">IMPORT_MAP_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../shared/playground&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./container&#39;</span>

<span class="token keyword">const</span> extensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// export const playground: PluginSimple = (md) =&gt; {</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> playground <span class="token operator">=</span>
  <span class="token punctuation">(</span>defaultImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> PluginSimple <span class="token operator">=&gt;</span>
  md <span class="token operator">=&gt;</span>
    <span class="token function">container</span><span class="token punctuation">(</span>md<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;playground&#39;</span><span class="token punctuation">,</span>
      openRender<span class="token operator">:</span> <span class="token punctuation">(</span>tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> tokens<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span> info
          <span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token comment">// &#39;playground&#39; length</span>
          <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> hashKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">playground-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">hash</span><span class="token punctuation">(</span>hashKey<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

        <span class="token keyword">const</span> codeConfigs<span class="token operator">:</span> PlaygroundFiles <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">let</span> settings<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

        <span class="token keyword">let</span> configKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">let</span> isSettings <span class="token operator">=</span> <span class="token boolean">false</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(i, tokens[i])</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> content<span class="token punctuation">,</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;container_playground_close&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;container_file_open&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> fileName <span class="token operator">=</span> info
              <span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              <span class="token comment">// &#39;file&#39; length</span>
              <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileName <span class="token operator">||</span> fileName<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            configKey <span class="token operator">=</span> fileName
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;container_imports_open&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> fileName <span class="token operator">=</span> info
              <span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              <span class="token comment">// &#39;imports&#39; length</span>
              <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">&amp;&amp;</span> fileName<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              configKey <span class="token operator">=</span> fileName
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              configKey <span class="token operator">=</span> defaultImportMap <span class="token operator">||</span> <span class="token constant">IMPORT_MAP_KEY</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;container_settings_open&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            isSettings <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;inline&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>isSettings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;fence&#39;</span> <span class="token operator">&amp;&amp;</span> info <span class="token operator">===</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              settings <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s+|\\s+$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;fence&#39;</span> <span class="token operator">&amp;&amp;</span> extensions<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> configKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              codeConfigs<span class="token punctuation">[</span>configKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
                lang<span class="token operator">:</span> info<span class="token punctuation">,</span>
                content<span class="token punctuation">,</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>

          <span class="token comment">// set to an unexisit token type</span>
          <span class="token class-name">tokens</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;playground_empty&#39;</span>
          <span class="token comment">// hide token</span>
          tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>codeConfigs<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> settingString <span class="token operator">=</span> settings
          <span class="token operator">?</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>settings<span class="token punctuation">)</span>
          <span class="token operator">:</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;{}&#39;</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;Playground id=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
          title <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      settings=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>settingString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;
      config=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;
      &gt;</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">closeRender</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;&lt;/Playground&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> getPlugin <span class="token operator">=</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> PluginSimple <span class="token operator">=&gt;</span>
  md <span class="token operator">=&gt;</span>
    <span class="token function">container</span><span class="token punctuation">(</span>md<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>
      openRender<span class="token operator">:</span> <span class="token punctuation">(</span>tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> tokens<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span> info<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">let</span> lang <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> content<span class="token punctuation">,</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">container_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_close</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;fence&#39;</span> <span class="token operator">&amp;&amp;</span> extensions<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lang <span class="token operator">=</span> info
            config <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
            <span class="token comment">// break;</span>
          <span class="token punctuation">}</span>

          <span class="token comment">// set to an unexisit token type</span>
          <span class="token class-name">tokens</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_empty</span><span class="token template-punctuation string">\`</span></span>
          <span class="token comment">// hide token</span>
          tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> id=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">hash</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> title=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
          config <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> config=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lang <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> lang=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lang<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">closeRender</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> playFile<span class="token operator">:</span> PluginSimple <span class="token operator">=</span> <span class="token function">getPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PlayFile&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> playSettings<span class="token operator">:</span> PluginSimple <span class="token operator">=</span> <span class="token function">getPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;settings&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PlaySettings&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> playImports<span class="token operator">:</span> PluginSimple <span class="token operator">=</span> <span class="token function">getPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;imports&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PlayImports&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function _(P,S){const c=l("RouteLink"),o=l("CodeTabs");return k(),r("div",null,[m,n("p",null,[s("比 "),p(c,{to:"/posts/theme/playground-plugin.html"},{default:a(()=>[s("v1")]),_:1}),s(" 更强大。")]),d(" more "),g,b,p(o,{id:"33",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:a(({value:t,isActive:e})=>[s("TS")]),title1:a(({value:t,isActive:e})=>[s("JS")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[y]),_:1}),f,p(o,{id:"44",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:a(({value:t,isActive:e})=>[s("TS")]),title1:a(({value:t,isActive:e})=>[s("JS")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[q]),_:1}),x])}const C=u(v,[["render",_],["__file","playground-plugin-v2.html.vue"]]),$=JSON.parse('{"path":"/posts/theme/playground-plugin-v2.html","title":"Playground 插件 v2","lang":"zh-CN","frontmatter":{"isOriginal":true,"article":true,"date":"2022-06-06T00:00:00.000Z","category":["theme","playground"],"tag":["vuepress","theme","markdown","playground"],"head":[["meta",{"name":"description","content":"Vue SFC Playground"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/theme/playground-plugin-v2.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Playground 插件 v2"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 同时支持外置和内置两种模式： 外置模式，通过嵌入iframe的形式来引入 playground. 内置模式，通过@vue/repl直接渲染出来 playground. 比 v1 更强大。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-17T10:48:18.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"theme"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:tag","content":"playground"}],["meta",{"property":"article:published_time","content":"2022-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-17T10:48:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Playground 插件 v2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-17T10:48:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"description":"让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 同时支持外置和内置两种模式： 外置模式，通过嵌入iframe的形式来引入 playground. 内置模式，通过@vue/repl直接渲染出来 playground. 比 v1 更强大。"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"外置模式","slug":"外置模式","link":"#外置模式","children":[]},{"level":3,"title":"内置模式","slug":"内置模式","link":"#内置模式","children":[]}]},{"level":2,"title":"Markdown 插件代码","slug":"markdown-插件代码","link":"#markdown-插件代码","children":[]}],"git":{"createdTime":1654506110000,"updatedTime":1692269298000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":6}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"posts/theme/playground-plugin-v2.md","localizedDate":"2022年6月6日","excerpt":"\\n<p>让你的 VuePress 站点中的 Markdown 文件支持 <a href=\\"https://sfc.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue SFC Playground</a> 类似的代码案例。</p>\\n<p>同时支持外置和内置两种模式：</p>\\n<ul>\\n<li>外置模式，通过嵌入<code>iframe</code>的形式来引入 playground.</li>\\n<li>内置模式，通过<code>@vue/repl</code>直接渲染出来 playground.</li>\\n</ul>\\n<p>比 <a href=\\"/posts/theme/playground-plugin.html\\" target=\\"_blank\\">v1</a> 更强大。</p>\\n","autoDesc":true}');export{C as comp,$ as data};
