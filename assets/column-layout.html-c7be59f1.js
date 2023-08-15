import{_ as u,r as a,o as r,c as k,a as n,b as s,d as t,e as d,w as e,h as m}from"./app-07be652c.js";const v={},b=n("h1",{id:"文章分栏布局",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文章分栏布局","aria-hidden":"true"},"#"),s(" 文章分栏布局")],-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"为了方便直接使用，做了一个 css 文件。",-1),y=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token keyword"},"@use"),s(),n("span",{class:"token string"},"'@sass-palette/hope-config'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token selector"},".column-layout "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s(".two-col ")]),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},".theme-hope-content "),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},"columns"),n("span",{class:"token punctuation"},":"),s(" 2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".span-all "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"column-span"),n("span",{class:"token punctuation"},":"),s(" all"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s(".center ")]),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".divider "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"column-span"),n("span",{class:"token punctuation"},":"),s(" all"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 1px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 1rem"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 1px "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--border-color"),n("span",{class:"token punctuation"},")"),s(" solid"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" border-bottom-color "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--color-transition"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s("::before ")]),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'·'"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),s("-50%"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),s("-50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 1rem"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 1rem"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--text-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--bg-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 2rem"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" color"),n("span",{class:"token punctuation"},","),s(" background "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--color-transition"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".span-none "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"column-span"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(" screen "),n("span",{class:"token operator"},"and"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" hope-config."),n("span",{class:"token variable"},"$mobile"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s(".two-col ")]),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token selector"},".theme-hope-content "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},"columns"),n("span",{class:"token punctuation"},":"),s(" unset"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=m(`<p>使用时，需要在 md 文件的 frontmatter 中指定 <code>containerClass</code>。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">containerClass</span><span class="token punctuation">:</span> <span class="token string">&#39;column-layout two-col&#39;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.span-all</code> 用于跨所有列，同时，使用 <code>attrs</code> 功能实现标题的跨列和居中示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span-all<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>xxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token title important"><span class="token punctuation">##</span> 前言 {.span-all .center}</span>

<span class="token comment">&lt;!-- 上面使用 attrs 功能实现标题的跨列和居中 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>适当使用分割线来分段，以避免阅读不便。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>divider<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function f(x,w){const o=a("ExternalLinkIcon"),c=a("CodeTabs"),l=a("RouterLink");return r(),k("div",null,[b,n("p",null,[s("如果想要文章分两栏来展示的话，可以借助 CSS 的 "),n("a",g,[s("columns"),t(o)]),s(" 来完成。")]),h,d(" more "),t(c,{id:"10",data:[{id:"column-layout.scss"}]},{title0:e(({value:p,isActive:i})=>[s("column-layout.scss")]),tab0:e(({value:p,isActive:i})=>[y]),_:1},8,["data"]),_,n("p",null,[s("文章示例："),t(l,{to:"/posts/other/columns-layout-demo.html"},{default:e(()=>[s("点这里")]),_:1})])])}const q=u(v,[["render",f],["__file","column-layout.html.vue"]]);export{q as default};
