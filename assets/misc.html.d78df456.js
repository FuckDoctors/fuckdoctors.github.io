import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.a46d32cb.js";const t={},i=a(`<h1 id="\u6742\u9879" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879" aria-hidden="true">#</a> \u6742\u9879</h1><h2 id="\u66F4\u6539\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u8BED\u8A00" aria-hidden="true">#</a> \u66F4\u6539\u8BED\u8A00</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># centos</span>
<span class="token comment"># change locale</span>
<span class="token function">sed</span> <span class="token string">&quot;s/LANG=<span class="token entity" title="\\&quot;">\\&quot;</span>en_US.UTF-8<span class="token entity" title="\\&quot;">\\&quot;</span>/LANG=<span class="token entity" title="\\&quot;">\\&quot;</span>ja_JP.UTF-8<span class="token entity" title="\\&quot;">\\&quot;</span>/&quot;</span> -i /etc/locale.conf
localedef -i ja_JP -f UTF-8 ja_JP.UTF-8

<span class="token comment"># setup env</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /etc/profile</span>
export LANG=ja_JP.UTF-8
export LC_ALL=ja_JP.UTF-8
export LANGUAGE=ja_JP.UTF-8
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function l(o,r){return s(),e("div",null,c)}var u=n(t,[["render",l],["__file","misc.html.vue"]]);export{u as default};
