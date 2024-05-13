import{_ as u,r as i,o as d,c as v,a as n,b as s,d as l,w as e,e as m,h as p}from"./app-BOAI8os0.js";const g={},b=n("h1",{id:"playground-插件-v3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-插件-v3"},[n("span",null,"Playground 插件 v3")])],-1),k={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=p("<p>使用 <code>@file</code>, <code>@imports</code>, <code>@settings</code> 来代替原来的 <code>::: file</code>, <code>::: imports</code>, <code>::: settings</code>, 其他未变。</p>",1),y=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[n("code",null,"playground"),s(" 插件已经提交 PR，不需要自己实现，使用 "),n("code",null,"vuepress-theme-hope"),s(" 主题内置即可，这里仅保留记录。")])],-1),f=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置"},[n("span",null,"配置")])],-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      playground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用默认配置"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuepress-plugin-md-enhance'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 配置你的 playground"),s(`
      `),n("span",{class:"token literal-property property"},"playground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 使用默认配置"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,[s("你也可以使用 "),n("code",null,"PlaygroundOptions"),s(" 自定义你的 playground 配置：")],-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=p(`<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="外置模式" tabindex="-1"><a class="header-anchor" href="#外置模式"><span>外置模式</span></a></h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: playground 基础用法

@file App.vue

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h4><p>本示例向你展示如何自定义你的 playground。</p><ul><li>使用你自己的 playground</li><li>使用你自己的 import map</li><li>应用额外的配置到你的 playground</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: playground 高级用法
@file App.vue

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

@file Comp.vue

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

@imports import-map.json

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;imports&quot;: {
    &quot;lodash-es&quot;: &quot;https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

@settings

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置模式" tabindex="-1"><a class="header-anchor" href="#内置模式"><span>内置模式</span></a></h3><h4 id="内置模式-基本用法" tabindex="-1"><a class="header-anchor" href="#内置模式-基本用法"><span>内置模式 基本用法</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: playground 基础用法
@file App.vue

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

@settings

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;mode&quot;: &quot;internal&quot;
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置模式-高级用法" tabindex="-1"><a class="header-anchor" href="#内置模式-高级用法"><span>内置模式 高级用法</span></a></h4><p>显示 playground 的 <code>JS</code>, <code>CSS</code>, <code>SSR</code> 面板，并显示代码编辑器。</p><p>Playground 的 <code>key</code> 是自动产生的。它是基于标题计算的。<br> 你也可以自己指定它，使用 <code>playground#customId</code> 形式。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: playground#customId 高级用法
@file App.vue

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

@settings

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function P(S,T){const r=i("ExternalLinkIcon"),o=i("RouteLink"),c=i("CodeTabs");return d(),v("div",null,[b,n("p",null,[s("让你的 VuePress 站点中的 Markdown 文件支持 "),n("a",k,[s("Vue SFC Playground"),l(r)]),s(" 类似的代码案例。")]),n("p",null,[s("与 "),l(o,{to:"/posts/theme/playground-plugin-v2.html"},{default:e(()=>[s("v2")]),_:1}),s(" 相比，重写了 Markdown 插件的逻辑，减少 container 嵌套。")]),h,m(" more "),y,f,n("p",null,[s("与 "),l(o,{to:"/posts/theme/playground-plugin-v2.html"},{default:e(()=>[s("v2")]),_:1}),s(" 相同。")]),l(c,{id:"24",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[q]),tab1:e(({value:a,isActive:t})=>[_]),_:1}),w,l(c,{id:"35",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[x]),tab1:e(({value:a,isActive:t})=>[j]),_:1}),C])}const V=u(g,[["render",P],["__file","playground-plugin-v3.html.vue"]]),A=JSON.parse('{"path":"/posts/theme/playground-plugin-v3.html","title":"Playground 插件 v3","lang":"zh-CN","frontmatter":{"isOriginal":true,"sticky":94,"star":94,"article":true,"date":"2022-06-06T00:00:00.000Z","category":["theme","playground"],"tag":["vuepress","theme","markdown","playground"],"head":[["meta",{"name":"description","content":"Vue SFC Playground"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/theme/playground-plugin-v3.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Playground 插件 v3"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 与 v2 相比，重写了 Markdown 插件的逻辑，减少 container 嵌套。 使用 @file, @imports, @settings 来代替原来的 ::: file, ::: imports, ::: settings,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T13:38:33.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"theme"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:tag","content":"playground"}],["meta",{"property":"article:published_time","content":"2022-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-13T13:38:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Playground 插件 v3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-13T13:38:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"description":"让你的 VuePress 站点中的 Markdown 文件支持 Vue SFC Playground 类似的代码案例。 与 v2 相比，重写了 Markdown 插件的逻辑，减少 container 嵌套。 使用 @file, @imports, @settings 来代替原来的 ::: file, ::: imports, ::: settings,..."},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"外置模式","slug":"外置模式","link":"#外置模式","children":[]},{"level":3,"title":"内置模式","slug":"内置模式","link":"#内置模式","children":[]}]}],"git":{"createdTime":1715607513000,"updatedTime":1715607513000,"contributors":[{"name":"ZhaoBin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"posts/theme/playground-plugin-v3.md","localizedDate":"2022年6月6日","excerpt":"\\n<p>让你的 VuePress 站点中的 Markdown 文件支持 <a href=\\"https://sfc.vuejs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue SFC Playground</a> 类似的代码案例。</p>\\n<p>与 <a href=\\"/posts/theme/playground-plugin-v2.html\\" target=\\"_blank\\">v2</a> 相比，重写了 Markdown 插件的逻辑，减少 container 嵌套。</p>\\n<p>使用 <code>@file</code>, <code>@imports</code>, <code>@settings</code> 来代替原来的 <code>::: file</code>, <code>::: imports</code>, <code>::: settings</code>, 其他未变。</p>\\n","autoDesc":true}');export{V as comp,A as data};
