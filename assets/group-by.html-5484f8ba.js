import{_ as a,r as s,o as p,c as t,d as e,h as o}from"./app-4dfd043d.js";const c={},i=o(`<h1 id="javascript-group-by" tabindex="-1"><a class="header-anchor" href="#javascript-group-by" aria-hidden="true">#</a> Javascript Group By</h1><h2 id="object-数组分组" tabindex="-1"><a class="header-anchor" href="#object-数组分组" aria-hidden="true">#</a> Object 数组分组</h2><p>下面的代码是用来按数组对象的指定属性来排序。</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> groupBy <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> grouped <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>group<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> obj<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      group<span class="token punctuation">[</span>data<span class="token punctuation">]</span> <span class="token operator">=</span> group<span class="token punctuation">[</span>data<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      group<span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token keyword">return</span> group
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> grouped
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>`,6);function u(l,r){const n=s("Playground");return p(),t("div",null,[i,e(n,{key:"771624f1",title:"%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E5%88%86%E7%BB%84",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBA5gJxAVwA4CECeMC8MAUAhgggFwyFiYDaAugDQwDWAppudAgJZhwCU5SjVowAPjDDIANlNwA%2BGAG8AUDBhcAZgWII%2BS1WpihIsRClQsAJrgokAdAivJgLfPjNpBVRiABGAKy9MPRwFFUNDY2gYS0IoQhs-f2pWTFoDCI9Ualj4kTwsnLjCEQB%2BUpg6DMNC3JK7VGQIAAt8JL5qtUcoZAQweCQ0aoBfRkVhjuru3v6sqwNh5QNpvolpKWVF5SjYHRtqA3DDMEIAWxZyAHIAL2bCP2BL%2BmrQU9OuKCuoFmgARieFs81Ec1CdzldbvdfMAAEwAiKvd6fGCXb5-eEwUaHapgi4oyEPDFqREfL4-KBwoGY57pbbgCAgKQsOxSEBwIgkDpRRnM1nsrJYDkIRiXXGXPgdIA"})])}const k=a(c,[["render",u],["__file","group-by.html.vue"]]);export{k as default};