import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as b,a as n,b as s,w as i,d as e,e as l,r as t}from"./app.a46d32cb.js";const g={},h=n("h1",{id:"playground-\u63D2\u4EF6-v3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-\u63D2\u4EF6-v3","aria-hidden":"true"},"#"),e(" Playground \u63D2\u4EF6 v3")],-1),C=e("\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301 "),f={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},E=e("Vue SFC Playground"),k=e(" \u7C7B\u4F3C\u7684\u4EE3\u7801\u6848\u4F8B\u3002"),A=e("\u4E0E "),y=e("v2"),_=e(" \u76F8\u6BD4\uFF0C\u91CD\u5199\u4E86 Markdown \u63D2\u4EF6\u7684\u903B\u8F91\uFF0C\u51CF\u5C11 container \u5D4C\u5957\u3002"),q=l('<p>\u4F7F\u7528 <code>@file</code>, <code>@imports</code>, <code>@settings</code> \u6765\u4EE3\u66FF\u539F\u6765\u7684 <code>::: file</code>, <code>::: imports</code>, <code>::: settings</code>, \u5176\u4ED6\u672A\u53D8\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2>',2),D=e("\u4E0E "),x=e("v2"),B=e(" \u76F8\u540C\u3002"),F=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { mdEnhance } from 'vuepress-plugin-md-enhance'

export default {
  plugins: [
    mdEnhance({
      // \u914D\u7F6E\u4F60\u7684 playground
      playground: true, // \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E
    }),
  ],
}
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { mdEnhance } = require('vuepress-plugin-md-enhance')

module.exports = {
  plugins: [
    mdEnhance({
      // \u914D\u7F6E\u4F60\u7684 playground
      playground: true, // \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E
    }),
  ],
}
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("p",null,[e("\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"PlaygroundOptions"),e(" \u81EA\u5B9A\u4E49\u4F60\u7684 playground \u914D\u7F6E\uFF1A")],-1),P=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.ts
import { mdEnhance } from 'vuepress-plugin-md-enhance'

export default {
  plugins: [
    mdEnhance({
      // \u914D\u7F6E\u4F60\u7684 playground
      playground: {
        mode: 'external', // \u4F7F\u7528\u5916\u7F6E\u6A21\u5F0F
        external: {
          base: 'https://sfc.vuejs.org/', // \u4F7F\u7528 vue sfc playground.
          defaultImportsMap: 'import-map.json',
        },
        internal: {
          defaultImportsMap: 'import-map.json',
          showCode: false, // \u4E0D\u663E\u793A\u4EE3\u7801
          showCompileOutput: false, // \u4E0D\u663E\u793A js, css, ssr \u9762\u677F
          showImportMap: true, // \u663E\u793A import map
          clearConsole: false, // \u4E0D\u6E05\u7A7A\u63A7\u5236\u53F0
        },
      },
    }),
  ],
}
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`// .vuepress/config.js
const { mdEnhance } = require('vuepress-plugin-md-enhance')

module.exports = {
  plugins: [
    mdEnhance({
      // \u914D\u7F6E\u4F60\u7684 playground
      playground: {
        mode: 'external', // \u4F7F\u7528\u5916\u7F6E\u6A21\u5F0F
        external: {
          base: 'https://sfc.vuejs.org/', // \u4F7F\u7528 vue sfc playground.
          defaultImportsMap: 'import-map.json',
        },
        internal: {
          defaultImportsMap: 'import-map.json',
          showCode: false, // \u4E0D\u663E\u793A\u4EE3\u7801
          showCompileOutput: false, // \u4E0D\u663E\u793A js, css, ssr \u9762\u677F
          showImportMap: true, // \u663E\u793A import map
          clearConsole: false, // \u4E0D\u6E05\u7A7A\u63A7\u5236\u53F0
        },
      },
    }),
  ],
}
`)]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=l('<h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u5916\u7F6E\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5916\u7F6E\u6A21\u5F0F" aria-hidden="true">#</a> \u5916\u7F6E\u6A21\u5F0F</h3><h4 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h4>',3),H=l(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: playground \u57FA\u7840\u7528\u6CD5

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u9AD8\u7EA7\u7528\u6CD5</h4><p>\u672C\u793A\u4F8B\u5411\u4F60\u5C55\u793A\u5982\u4F55\u81EA\u5B9A\u4E49\u4F60\u7684 playground\u3002</p><ul><li>\u4F7F\u7528\u4F60\u81EA\u5DF1\u7684 playground</li><li>\u4F7F\u7528\u4F60\u81EA\u5DF1\u7684 import map</li><li>\u5E94\u7528\u989D\u5916\u7684\u914D\u7F6E\u5230\u4F60\u7684 playground</li></ul>`,4),M=l(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: playground \u9AD8\u7EA7\u7528\u6CD5
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
    &lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;
    &lt;el-button&gt;\u4E2D\u6587&lt;/el-button&gt;
  &lt;/el-row&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@imports user-imports.json

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u5185\u7F6E\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5F0F" aria-hidden="true">#</a> \u5185\u7F6E\u6A21\u5F0F</h3><h4 id="\u5185\u7F6E\u6A21\u5F0F-\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5F0F-\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u5185\u7F6E\u6A21\u5F0F \u57FA\u672C\u7528\u6CD5</h4>`,3),O=l(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: playground \u57FA\u7840\u7528\u6CD5
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="\u5185\u7F6E\u6A21\u5F0F-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5F0F-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u5185\u7F6E\u6A21\u5F0F \u9AD8\u7EA7\u7528\u6CD5</h4><p>\u663E\u793A playground \u7684 <code>JS</code>, <code>CSS</code>, <code>SSR</code> \u9762\u677F\uFF0C\u5E76\u663E\u793A\u4EE3\u7801\u7F16\u8F91\u5668\u3002</p><p>Playground \u7684 <code>key</code> \u662F\u81EA\u52A8\u4EA7\u751F\u7684\u3002\u5B83\u662F\u57FA\u4E8E\u6807\u9898\u8BA1\u7B97\u7684\u3002 \u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6307\u5B9A\u5B83\uFF0C\u4F7F\u7528 <code>playground#customId</code> \u5F62\u5F0F\u3002</p>`,4),V=l(`<details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: playground#customId \u9AD8\u7EA7\u7528\u6CD5
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function T(L,N){const v=t("ExternalLinkIcon"),o=t("RouterLink"),c=t("CodeTabs"),a=t("Playground");return p(),b("div",null,[h,n("p",null,[C,n("a",f,[E,s(v)]),k]),n("p",null,[A,s(o,{to:"/posts/theme/playground-plugin-v2.html"},{default:i(()=>[y]),_:1}),_]),q,n("p",null,[D,s(o,{to:"/posts/theme/playground-plugin-v2.html"},{default:i(()=>[x]),_:1}),B]),s(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"config"},{tab0:i(({title:d,value:u,isActive:r})=>[F]),tab1:i(({title:d,value:u,isActive:r})=>[w]),_:1}),j,s(c,{data:[{title:"TS"},{title:"JS"}],"tab-id":"config"},{tab0:i(({title:d,value:u,isActive:r})=>[P]),tab1:i(({title:d,value:u,isActive:r})=>[I]),_:1}),S,s(a,{key:"playground-5c40db07",id:"playground-5c40db07",title:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",settings:"%7B%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Cscript%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cn%5Cnconst%20msg%20%3D%20ref('Hello%20World!')%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ch1%3E%7B%7B%20msg%20%7D%7D%3C%2Fh1%3E%5Cn%20%20%3Cinput%20v-model%3D%5C%22msg%5C%22%20%2F%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D"}),H,s(a,{key:"playground-1b25d672",id:"playground-1b25d672",title:"%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95",settings:"%7B%0A%20%20%22mode%22%3A%20%22external%22%2C%0A%20%20%22external%22%3A%20%7B%0A%20%20%20%20%22base%22%3A%20%22https%3A%2F%2Fvue-sfc-playground.vercel.app%2F%22%2C%0A%20%20%20%20%22options%22%3A%20%7B%0A%20%20%20%20%20%20%22showOutput%22%3A%20%22true%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Cscript%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cnimport%20Comp%20from%20'.%2FComp.vue'%5Cn%5Cnconst%20msg%20%3D%20ref('Hello%20Playground!')%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ch1%3E%7B%7B%20msg%20%7D%7D%3C%2Fh1%3E%5Cn%20%20%3Cinput%20v-model%3D%5C%22msg%5C%22%20%2F%3E%5Cn%5Cn%20%20%3CComp%20%2F%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22Comp.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%3EComp%3C%2Fdiv%3E%5Cn%20%20%3Cel-row%20class%3D%5C%22mb-4%5C%22%3E%5Cn%20%20%20%20%3Cel-button%3EDefault%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22primary%5C%22%3EPrimary%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22success%5C%22%3ESuccess%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22info%5C%22%3EInfo%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22warning%5C%22%3EWarning%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%20type%3D%5C%22danger%5C%22%3EDanger%3C%2Fel-button%3E%5Cn%20%20%20%20%3Cel-button%3E%E4%B8%AD%E6%96%87%3C%2Fel-button%3E%5Cn%20%20%3C%2Fel-row%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22user-imports.json%22%3A%7B%22lang%22%3A%22json%22%2C%22content%22%3A%22%7B%5Cn%20%20%5C%22imports%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22lodash-es%5C%22%3A%20%5C%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Flodash-es%404.17.21%2Flodash.min.js%5C%22%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D%7D"}),M,s(a,{key:"playground-b64b18b8",id:"playground-b64b18b8",title:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",settings:"%7B%0A%20%20%22mode%22%3A%20%22internal%22%0A%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Cscript%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cn%5Cnconst%20msg%20%3D%20ref('Hello%20Playground!')%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ch1%3E%7B%7B%20msg%20%7D%7D%3C%2Fh1%3E%5Cn%20%20%3Cinput%20v-model%3D%5C%22msg%5C%22%20%2F%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D"}),O,s(a,{key:"customId",id:"customId",title:"%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95",settings:"%7B%0A%20%20%22mode%22%3A%20%22internal%22%2C%0A%20%20%22internal%22%3A%20%7B%0A%20%20%20%20%22showCode%22%3A%20%22true%22%2C%0A%20%20%20%20%22showCompileOutput%22%3A%20%22true%22%0A%20%20%7D%0A%7D",config:"%7B%22App.vue%22%3A%7B%22lang%22%3A%22vue%22%2C%22content%22%3A%22%3Cscript%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cn%5Cnconst%20msg%20%3D%20ref('Hello%20Playground!')%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ch1%3E%7B%7B%20msg%20%7D%7D%3C%2Fh1%3E%5Cn%20%20%3Cinput%20v-model%3D%5C%22msg%5C%22%20%2F%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D"}),V])}var R=m(g,[["render",T],["__file","playground-plugin-v3.html.vue"]]);export{R as default};
