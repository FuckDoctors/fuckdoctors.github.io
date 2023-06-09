import{_ as n,o as a,c as s,h as e}from"./app-37efb2f8.js";const t={},i=e(`<h1 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h1><h2 id="更改语言" tabindex="-1"><a class="header-anchor" href="#更改语言" aria-hidden="true">#</a> 更改语言</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos</span>
<span class="token comment"># change locale</span>
<span class="token function">sed</span> <span class="token string">&quot;s/LANG=<span class="token entity" title="\\&quot;">\\&quot;</span>en_US.UTF-8<span class="token entity" title="\\&quot;">\\&quot;</span>/LANG=<span class="token entity" title="\\&quot;">\\&quot;</span>ja_JP.UTF-8<span class="token entity" title="\\&quot;">\\&quot;</span>/&quot;</span> <span class="token parameter variable">-i</span> /etc/locale.conf
localedef <span class="token parameter variable">-i</span> ja_JP <span class="token parameter variable">-f</span> UTF-8 ja_JP.UTF-8

<span class="token comment"># setup env</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /etc/profile</span>
export LANG=ja_JP.UTF-8
export LC_ALL=ja_JP.UTF-8
export LANGUAGE=ja_JP.UTF-8
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function c(o,r){return a(),s("div",null,l)}const p=n(t,[["render",c],["__file","misc.html.vue"]]);export{p as default};
