import{_ as e,r as t,o as p,c as o,d as s,h as a}from"./app-c6f1707c.js";const i={},l=a(`<h1 id="_04-循环结构" tabindex="-1"><a class="header-anchor" href="#_04-循环结构" aria-hidden="true">#</a> 04.循环结构</h1><p>Python 中循环有两种，<code>for-in</code> 和 <code>while</code>。</p><h2 id="for-in-循环" tabindex="-1"><a class="header-anchor" href="#for-in-循环" aria-hidden="true">#</a> <code>for-in</code> 循环</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
用for循环实现1~100求和
&quot;&quot;&quot;</span>

<span class="token builtin">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">sum</span> <span class="token operator">+=</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>range</code> 用法非常灵活，下面给出了一个例子：</p><ul><li><code>range(101)</code> : 产生 0 到 100 范围的整数，需要注意的是取不到 101。</li><li><code>range(1, 101)</code> : 产生 1 到 100 范围的整数，相当于前面是闭区间，后面是开区间。</li><li><code>range(1, 101, 2)</code> : 产生 1 到 100 范围的奇数，步长是 2。</li><li><code>range(100, 0, -2)</code> : 产生 100 到 0 的偶数，步长是 -2。</li></ul><p>知道了这一点，我们可以用下面的代码来实现 1~100 之间的偶数求和。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
用for循环实现1~100之间的偶数求和
&quot;&quot;&quot;</span>

<span class="token builtin">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">sum</span> <span class="token operator">+=</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> <code>while</code> 循环</h2><p>下面我们通过一个“猜数字”的小游戏来看看如何使用 while 循环。 猜数字游戏的规则是：计算机出一个 1 到 100 之间的随机数，玩家输入自己猜的数字，计算机给出对应的提示信息（大一点、小一点或猜对了）， 如果玩家猜中了数字，计算机提示用户一共猜了多少次，游戏结束，否则游戏继续。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
猜数字游戏
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> random

answer <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
counter <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  counter <span class="token operator">+=</span> <span class="token number">1</span>
  number <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入：&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> number <span class="token operator">&lt;</span> answer<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;大一点&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">elif</span> number <span class="token operator">&gt;</span> answer<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;小一点&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;恭喜你猜对了!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你一共猜了%d次&#39;</span> <span class="token operator">%</span> counter<span class="token punctuation">)</span>
<span class="token keyword">if</span> counter <span class="token operator">&gt;</span> <span class="token number">7</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;需要加油哦~&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>试一试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python day-01-15/day-04/while-demo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),c=a(`<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><p>下面的例子演示了如何通过嵌套的循环来输出一个九九乘法表。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
输出乘法口诀表(九九表)
&quot;&quot;&quot;</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%d * %d = %d&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i <span class="token operator">*</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>试一试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python day-01-15/day-04/9x9-table.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function u(r,d){const n=t("Replit");return p(),o("div",null,[l,s(n,{link:"https://replit.com/@FuckDoctors/python-100-days#day-01-15/day-04/while-demo.py"}),c,s(n,{link:"https://replit.com/@FuckDoctors/python-100-days#day-01-15/day-04/9x9-table.py"})])}const v=e(i,[["render",u],["__file","04.循环结构.html.vue"]]);export{v as default};
