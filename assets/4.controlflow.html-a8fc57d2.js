const n=JSON.parse(`{"key":"v-cf0a17b0","path":"/notes/backend/python/tutorial/4.controlflow.html","title":"4. 流程控制","lang":"zh-CN","frontmatter":{"category":["笔记","backend"],"tag":["python"],"description":"4. 流程控制 4.1 if 语句 if 语句包含零个或多个 elif 子句及可选的 else 子句。 x = int(input('Please enter an integer: ')) if x &lt; 0: x = 0 print('Negative changed to zero') elif x == 0: print('Zero') elif x == 1: print('Single') else: print('More')","head":[["meta",{"property":"og:url","content":"https://www.zhaobc.site/notes/backend/python/tutorial/4.controlflow.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"4. 流程控制"}],["meta",{"property":"og:description","content":"4. 流程控制 4.1 if 语句 if 语句包含零个或多个 elif 子句及可选的 else 子句。 x = int(input('Please enter an integer: ')) if x &lt; 0: x = 0 print('Negative changed to zero') elif x == 0: print('Zero') elif x == 1: print('Single') else: print('More')"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-12T02:18:09.000Z"}],["meta",{"property":"article:author","content":"Zhao Bin"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:modified_time","content":"2023-06-12T02:18:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4. 流程控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-12T02:18:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"https://www.zhaobc.site\\"}]}"]]},"headers":[{"level":2,"title":"4.1 if 语句","slug":"_4-1-if-语句","link":"#_4-1-if-语句","children":[]},{"level":2,"title":"4.2 for 语句","slug":"_4-2-for-语句","link":"#_4-2-for-语句","children":[]},{"level":2,"title":"4.3 range 函数","slug":"_4-3-range-函数","link":"#_4-3-range-函数","children":[]},{"level":2,"title":"4.4 循环中的 break、continue 语句及 else 子句","slug":"_4-4-循环中的-break、continue-语句及-else-子句","link":"#_4-4-循环中的-break、continue-语句及-else-子句","children":[]}],"git":{"createdTime":1686536289000,"updatedTime":1686536289000,"contributors":[{"name":"Zhao Bin","email":"413853119@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"notes/backend/python/tutorial/4.controlflow.md","localizedDate":"2023年6月12日","excerpt":"<h1> 4. 流程控制</h1>\\n<h2> 4.1 if 语句</h2>\\n<p><code>if</code> 语句包含零个或多个 <code>elif</code> 子句及可选的 <code>else</code> 子句。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>x <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">input</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Please enter an integer: '</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">if</span> x <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n  x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Negative changed to zero'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">elif</span> x <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Zero'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">elif</span> x <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Single'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'More'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};