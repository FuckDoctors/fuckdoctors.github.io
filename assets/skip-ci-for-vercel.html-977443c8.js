import{_ as t,r as o,o as c,c as l,a as s,b as n,d as a,e as p,h as i}from"./app-4c5aeddb.js";const r={},d=s("h1",{id:"取消-vercel-发布",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#取消-vercel-发布","aria-hidden":"true"},"#"),n(" 取消 Vercel 发布")],-1),u=s("p",null,"在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。 但是，在 vercel 中，这种方法不起作用。",-1),m=s("p",null,"搜索了一下资料，发现 vercel 中也可以自定义来实现。",-1),v={href:"https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/vercel/vercel/discussions/5765",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;&#39;</span>
<span class="token comment"># 单独忽略 docs-ci</span>
<span class="token comment"># bash -c &#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip (?:docs-)*ci\\]|\\[(?:docs-)*ci skip\\]&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=i(`<p>也可以按照上面写的方式，写一个脚本来做。下面是为了留下记录，所以写了一个比较繁琐的脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># How do I use the &quot;Ignored Build Step&quot; field on Vercel?</span>
<span class="token comment"># https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel</span>

<span class="token comment"># Skip deploys for commits that have [skip-ci] in the name</span>
<span class="token comment"># https://github.com/vercel/vercel/discussions/5765</span>
<span class="token comment"># 可以在&quot;Ignored Build Step&quot;中直接使用： bash -c &#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;VERCEL_GIT_COMMIT_REF: <span class="token variable">$VERCEL_GIT_COMMIT_REF</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VERCEL_GIT_COMMIT_MESSAGE: <span class="token variable">$VERCEL_GIT_COMMIT_MESSAGE</span>&quot;</span>

<span class="token comment"># grep通过返回一个状态值来说明搜索的状态，</span>
<span class="token comment"># 如果模板搜索成功，则返回0，如果搜索不成功，则返回1，</span>
<span class="token comment"># 如果搜索的文件不存在，则返回2。</span>
<span class="token comment"># # 过滤message的第一行是否包含[skip ci]或者[ci skip]</span>
<span class="token comment"># echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | head -n 1 | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$VERCEL_GIT_COMMIT_MESSAGE</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-iE</span> <span class="token string">&quot;\\[skip ci\\]|\\[ci skip\\]&quot;</span>
<span class="token comment"># echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip (?:docs-)*ci\\]|\\[(?:docs-)*ci skip\\]&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token comment"># Don&#39;t build</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;🛑 - Build cancelled&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">else</span>
  <span class="token comment"># Proceed with the build</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;✅ - Build can proceed&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(E,q){const e=o("ExternalLinkIcon");return c(),l("div",null,[d,u,m,s("ul",null,[s("li",null,[s("a",v,[n('How do I use the "Ignored Build Step" field on Vercel?'),a(e)])]),s("li",null,[s("a",k,[n("Skip deploys for commits that have [skip-ci] in the name"),a(e)])])]),b,p(" more "),h])}const M=t(r,[["render",_],["__file","skip-ci-for-vercel.html.vue"]]);export{M as default};
