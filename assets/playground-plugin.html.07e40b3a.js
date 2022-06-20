import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as l,c as d,a as n,b as t,d as e,e as c}from"./app.b6dfbc2d.js";const o={},u=n("h1",{id:"playground-\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground-\u63D2\u4EF6","aria-hidden":"true"},"#"),e(" Playground \u63D2\u4EF6")],-1),v=e("\u8BA9\u4F60\u7684 VuePress \u7AD9\u70B9\u4E2D\u7684 Markdown \u6587\u4EF6\u652F\u6301 "),r={href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p=e("Vue SFC Playground"),m=e(" \u7C7B\u4F3C\u7684\u4EE3\u7801\u6848\u4F8B\u3002"),b=c(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// cunstomConfig.ts</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>playground</code> \u8BBE\u4E3A <code>true</code> \u65F6\uFF0C\u542F\u7528\u9ED8\u8BA4\u7684 Playground \u914D\u7F6E\uFF0C\u5373 Vue3 \u5B98\u65B9\u7684 Playground\u3002</li><li><code>playground</code> \u8BBE\u4E3A \u5BF9\u8C61\u65F6\uFF0C\u5219\u4F7F\u7528\u914D\u7F6E\u9879\u6307\u5B9A\u7684\u5185\u5BB9\u6765\u663E\u793A Playground\u3002</li><li>\u53E6\u5916\uFF0C<code>playground</code> \u8FD8\u652F\u6301\u4E2A\u522B\u8BBE\u7F6E <code>base</code> \u548C <code>imports</code>\uFF0C\u7A0D\u540E\u4E3A\u4F60\u4ECB\u7ECD\u3002</li></ul><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><s>\u4E3A\u4E86\u7B80\u5355\u65B9\u4FBF\uFF0C\u4F60\u53EA\u9700\u914D\u5408 <code>CodeGroup</code> \u548C <code>CodeGroupItem</code> \u5373\u53EF\u3002 \u6BCF\u4E00\u4E2A <code>CodeGroupItem</code> \u4E3A\u4E00\u4E2A <code>.vue</code> \u6587\u4EF6\u3002</s></p><p>\u4E3A\u4E86\u7B80\u5355\u65B9\u4FBF\uFF0C\u4F60\u53EA\u9700\u914D\u5408 <code>code-tabs</code> \u548C <code>@tab</code> \u5373\u53EF\u3002 \u6BCF\u4E00\u4E2A <code>@tab</code> \u4E3A\u4E00\u4E2A <code>.vue</code> \u6216 <code>.js</code> \u6587\u4EF6\u3002</p><p>\u4F7F\u7528 <code>imports</code> \u548C <code>settings</code> \u53EF\u4E3A\u6BCF\u4E2A Playground \u81EA\u5B9A\u4E49\u914D\u7F6E\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><h3 id="\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: playground Playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528\u4E2A\u522B\u914D\u7F6E</h3><p>\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684 <code>base</code> \u548C <code>imports</code>\uFF0C\u4EE5 Element Plus \u4E3A\u4F8B\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: playground Customize playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><h3 id="\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E3B\u9898\u9ED8\u8BA4\u914D\u7F6E\u7684\u6848\u4F8B</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: playground Playground demo
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684\u6848\u4F8B</h3><p>\u4F7F\u7528\u4E2A\u522B\u914D\u7F6E\u7684 <code>base</code> \u548C <code>imports</code>\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: playground Element-Plus demo
::: code-tabs
@tab App.vue

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

::: imports user-imports.json

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function g(k,h){const s=a("ExternalLinkIcon");return l(),d("div",null,[u,n("p",null,[v,n("a",r,[p,t(s)]),m]),b])}var f=i(o,[["render",g],["__file","playground-plugin.html.vue"]]);export{f as default};
