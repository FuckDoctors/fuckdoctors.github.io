const e=JSON.parse(`{"key":"v-22244572","path":"/notes/frontend/vue/vue3/reusability/plugins.html","title":"插件","lang":"zh-CN","frontmatter":{"order":30,"icon":"vue","category":["笔记","frontend","vue"],"tag":["vue3"],"description":"插件 介绍 插件是一种能为 Vue 添加全局功能的工具代码。我们会这样安装一个插件： import { createApp } from 'vue' const app = createApp({}) app.use('myPlugin', { // 可选的选项 })","head":[["meta",{"property":"og:url","content":"https://www.zhaobc.site/notes/frontend/vue/vue3/reusability/plugins.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"插件"}],["meta",{"property":"og:description","content":"插件 介绍 插件是一种能为 Vue 添加全局功能的工具代码。我们会这样安装一个插件： import { createApp } from 'vue' const app = createApp({}) app.use('myPlugin', { // 可选的选项 })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-18T16:33:52.000Z"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:modified_time","content":"2023-02-18T16:33:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-18T16:33:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"编写一个插件","slug":"编写一个插件","link":"#编写一个插件","children":[]},{"level":3,"title":"插件中的 provide / inject","slug":"插件中的-provide-inject","link":"#插件中的-provide-inject","children":[]}]}],"git":{"createdTime":1676738032000,"updatedTime":1676738032000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":2.13,"words":640},"filePathRelative":"notes/frontend/vue/vue3/reusability/plugins.md","localizedDate":"2023年2月18日","excerpt":"<h1> 插件</h1>\\n<h2> 介绍</h2>\\n<p>插件是一种能为 Vue 添加全局功能的工具代码。我们会这样安装一个插件：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> createApp <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n\\n<span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> <span class=\\"token function\\">createApp</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'myPlugin'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 可选的选项</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};