const e=JSON.parse(`{"key":"v-53b66bcd","path":"/notes/frontend/vue/vue3-book/chapter04.html","title":"第 4 章 响应系统的作用与实现","lang":"zh-CN","frontmatter":{"order":40,"category":["笔记","frontend","vue"],"tag":["vue3"],"description":"第 4 章 响应系统的作用与实现 响应系统是 Vue.js 的重要组成部分，Vue.js 3 采用 Proxy 实现响应式数据。 4.1 响应式数据与副作用函数 副作用函数是指会产生副作用的函数。副作用函数的执行会直接或间接影响其他的变量或其他函数的执行。 如下所示： const state = { text: null } const obj = { text: 'hello world' } function effect() { state.text = obj.text document.body.innerText = obj.text }","head":[["meta",{"property":"og:url","content":"https://www.zhaobc.site/notes/frontend/vue/vue3-book/chapter04.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"第 4 章 响应系统的作用与实现"}],["meta",{"property":"og:description","content":"第 4 章 响应系统的作用与实现 响应系统是 Vue.js 的重要组成部分，Vue.js 3 采用 Proxy 实现响应式数据。 4.1 响应式数据与副作用函数 副作用函数是指会产生副作用的函数。副作用函数的执行会直接或间接影响其他的变量或其他函数的执行。 如下所示： const state = { text: null } const obj = { text: 'hello world' } function effect() { state.text = obj.text document.body.innerText = obj.text }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:49:45.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:49:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 4 章 响应系统的作用与实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:49:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"https://www.zhaobc.site\\"}]}"]]},"headers":[{"level":2,"title":"4.1 响应式数据与副作用函数","slug":"_4-1-响应式数据与副作用函数","link":"#_4-1-响应式数据与副作用函数","children":[]},{"level":2,"title":"4.2 响应式数据的基本实现","slug":"_4-2-响应式数据的基本实现","link":"#_4-2-响应式数据的基本实现","children":[]},{"level":2,"title":"4.3 设计一个完善的响应式系统","slug":"_4-3-设计一个完善的响应式系统","link":"#_4-3-设计一个完善的响应式系统","children":[]},{"level":2,"title":"4.4 分支切换与 cleanup","slug":"_4-4-分支切换与-cleanup","link":"#_4-4-分支切换与-cleanup","children":[]},{"level":2,"title":"4.5 嵌套的 effect 与 effect 栈","slug":"_4-5-嵌套的-effect-与-effect-栈","link":"#_4-5-嵌套的-effect-与-effect-栈","children":[]},{"level":2,"title":"4.6 避免无限递归循环","slug":"_4-6-避免无限递归循环","link":"#_4-6-避免无限递归循环","children":[]},{"level":2,"title":"4.7 调度执行","slug":"_4-7-调度执行","link":"#_4-7-调度执行","children":[]}],"git":{"createdTime":1694162985000,"updatedTime":1694162985000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":14.06,"words":4219},"filePathRelative":"notes/frontend/vue/vue3-book/chapter04.md","localizedDate":"2023年9月8日","excerpt":"<h1> 第 4 章 响应系统的作用与实现</h1>\\n<p>响应系统是 Vue.js 的重要组成部分，Vue.js 3 采用 Proxy 实现响应式数据。</p>\\n<h2> 4.1 响应式数据与副作用函数</h2>\\n<p>副作用函数是指会产生副作用的函数。副作用函数的执行会直接或间接影响其他的变量或其他函数的执行。</p>\\n<p>如下所示：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> state <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">null</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> obj <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'hello world'</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">effect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  state<span class=\\"token punctuation\\">.</span>text <span class=\\"token operator\\">=</span> obj<span class=\\"token punctuation\\">.</span>text\\n  document<span class=\\"token punctuation\\">.</span>body<span class=\\"token punctuation\\">.</span>innerText <span class=\\"token operator\\">=</span> obj<span class=\\"token punctuation\\">.</span>text\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};