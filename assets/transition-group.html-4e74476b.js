import{_ as c,r as e,o as l,c as i,d as t,h as o,a as n,b as a}from"./app-4dfd043d.js";const p={},u=o(`<h1 id="transitiongroup" tabindex="-1"><a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a> TransitionGroup</h1><p><code>&lt;TransitionGroup&gt;</code> 是一个内置组件，设计用于呈现一个列表中的元素或组件的插入、移除和顺序改变的动画效果。</p><h2 id="和-transition-的区别" tabindex="-1"><a class="header-anchor" href="#和-transition-的区别" aria-hidden="true">#</a> 和 <code>&lt;Transition&gt;</code> 的区别</h2><p><code>&lt;TransitionGroup&gt;</code> 支持和 <code>&lt;Transition&gt;</code> 基本相同的 prop、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：</p><ul><li>默认情况下，它不会渲染一个包装器元素。但你可以通过传入 <code>tag</code> 属性来指定一个元素作为包装器元素来渲染。</li><li>过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换。</li><li>其中的元素<strong>总是必须</strong>有一个独一无二的 <code>key</code> attribute。</li><li>CSS 过渡 class 会被应用在其中的<strong>每一个元素</strong>上，<strong>而不是</strong>这个组的容器上。</li></ul><h2 id="进入-离开过渡" tabindex="-1"><a class="header-anchor" href="#进入-离开过渡" aria-hidden="true">#</a> 进入 / 离开过渡</h2><p>这里是 <code>&lt;TransitionGroup&gt;</code> 对一个 <code>v-for</code> 列表应用进入 / 离开过渡的示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TransitionGroup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ul<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TransitionGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list-enter-active,
.list-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.list-enter-from,
.list-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=n("h2",{id:"交错的列表过渡",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#交错的列表过渡","aria-hidden":"true"},"#"),a(" 交错的列表过渡")],-1),b=n("p",null,[a("如果通过 data attribute 用 JavaScript 来执行过渡时，那么我们也可以实现列表中的交错过渡。"),n("br"),a(" 首先，我们把某一项的索引作为 DOM 元素上的一个 data attribute 呈现出来。")],-1),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{html:"",class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("TransitionGroup")]),a(`
  `),n("span",{class:"token attr-name"},"tag"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ul"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},":css"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@before-enter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onBeforeEnter"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@enter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onEnter"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@leave"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onLeave"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- prettier-ignore-attribute -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item, index) in computedList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.msg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    {{ item.msg }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("TransitionGroup")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,"接着，在 JavaScript 钩子中，我们基于这个 data attribute 对该元素执行一个延迟动画：",-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onEnter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("el"),n("span",{class:"token punctuation"},","),a(" done")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  gsap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"to"),n("span",{class:"token punctuation"},"("),a("el"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1.6em'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"delay"),n("span",{class:"token operator"},":"),a(" el"),n("span",{class:"token punctuation"},"."),a("dataset"),n("span",{class:"token punctuation"},"."),a("index "),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"0.15"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"onComplete"),n("span",{class:"token operator"},":"),a(" done"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function k(G,m){const s=e("Playground");return l(),i("div",null,[u,t(s,{key:"3473809e",title:"%E7%AE%80%E5%8D%95%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHNodWZmbGUgYXMgX3NodWZmbGUgfSBmcm9tICdsb2Rhc2gtZXMnXG5cbmNvbnN0IGdldEluaXRpYWxJdGVtcyA9ICgpID0%2BIFsxLCAyLCAzLCA0LCA1XVxuY29uc3QgaXRlbXMgPSByZWYoZ2V0SW5pdGlhbEl0ZW1zKCkpXG5sZXQgaWQgPSBpdGVtcy52YWx1ZS5sZW5ndGggKyAxXG5cbmNvbnN0IGluc2VydCA9ICgpID0%2BIHtcbiAgY29uc3QgaSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLnZhbHVlLmxlbmd0aClcbiAgaXRlbXMudmFsdWUuc3BsaWNlKGksIDAsIGlkKyspXG59XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBpdGVtcy52YWx1ZSA9IGdldEluaXRpYWxJdGVtcygpXG59XG5cbmNvbnN0IHNodWZmbGUgPSAoKSA9PiB7XG4gIGl0ZW1zLnZhbHVlID0gX3NodWZmbGUoaXRlbXMudmFsdWUpXG59XG5cbmNvbnN0IHJlbW92ZSA9IGl0ZW0gPT4ge1xuICBjb25zdCBpID0gaXRlbXMudmFsdWUuaW5kZXhPZihpdGVtKVxuICBpZiAoaSA%2BIC0xKSBpdGVtcy52YWx1ZS5zcGxpY2UoaSwgMSlcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU%2BXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI%2BXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJpbnNlcnRcIj7pmo%2FmnLrmj5LlhaU8L2J1dHRvbj5cbiAgICA8YnV0dG9uIEBjbGljaz1cInJlc2V0XCI%2B6YeN572uPC9idXR0b24%2BXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJzaHVmZmxlXCI%2B5omT5LmxPC9idXR0b24%2BXG4gIDwvZGl2PlxuXG4gIDxUcmFuc2l0aW9uR3JvdXAgdGFnPVwidWxcIiBuYW1lPVwiZmFkZVwiIGNsYXNzPVwiY29udGFpbmVyXCI%2BXG4gICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtXCIgY2xhc3M9XCJpdGVtXCI%2BXG4gICAgICB7eyBpdGVtIH19XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwicmVtb3ZlKGl0ZW0pXCI%2BeDwvYnV0dG9uPlxuICAgIDwvbGk%2BXG4gIDwvVHJhbnNpdGlvbkdyb3VwPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5jb250YWluZXIgLml0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBib3JkZXI6IGdyYXkgMXB4IGRhc2hlZDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jb250YWluZXIgLml0ZW0gLmJ0biB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRhaW5lciAuaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIOWvueenu%2BWKqOS4reeahOWFg%2Be0oOW6lOeUqOeahOi%2Fh%2Ba4oSAqL1xuLmZhZGUtbW92ZSwgLyogYXBwbHkgdHJhbnNpdGlvbiB0byBtb3ZpbmcgZWxlbWVudHMgKi9cbi5mYWRlLWVudGVyLWFjdGl2ZSxcbi5mYWRlLWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xufVxuLmZhZGUtZW50ZXItZnJvbSxcbi5mYWRlLWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC4wMSkgdHJhbnNsYXRlKDMwcHgsIDApO1xufVxuLyog56Gu5L%2Bd5bCG56a75byA55qE5YWD57Sg5LuO5biD5bGA5rWB5Lit5Yig6ZmkXG4gIOS7peS%2Bv%2BiDveWkn%2Bato%2BehruWcsOiuoeeul%2Benu%2BWKqOeahOWKqOeUu%2BOAgiAqL1xuLmZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwibG9kYXNoLWVzXCI6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9sb2Rhc2gtZXNANC4xNy4yMS9sb2Rhc2gubWluLmpzXCJcbiAgfVxufSJ9"}),d,b,r,g,I,t(s,{key:"6f85728e",title:"%E4%BA%A4%E9%94%99%E7%9A%84%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5jb25zdCBsaXN0ID0gW1xuICB7IG1zZzogJ0JydWNlIExlZScgfSxcbiAgeyBtc2c6ICdKYWNraWUgQ2hhbicgfSxcbiAgeyBtc2c6ICdDaHVjayBOb3JyaXMnIH0sXG4gIHsgbXNnOiAnSmV0IExpJyB9LFxuICB7IG1zZzogJ0t1bmcgRnVyeScgfSxcbl1cblxuY29uc3QgcXVlcnkgPSByZWYoJycpXG5cbmNvbnN0IGNvbXB1dGVkTGlzdCA9IGNvbXB1dGVkKCgpID0%2BIHtcbiAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5tc2cudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS52YWx1ZSkpXG59KVxuXG5jb25zdCBvbkJlZm9yZUVudGVyID0gZWwgPT4ge1xuICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICBlbC5zdHlsZS5oZWlnaHQgPSAwXG59XG5cbmNvbnN0IG9uRW50ZXIgPSAoZWwsIGRvbmUpID0%2BIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgaGVpZ2h0OiAnMS42ZW0nLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lLFxuICB9KVxufVxuXG5jb25zdCBvbkxlYXZlID0gKGVsLCBkb25lKSA9PiB7XG4gIGdzYXAudG8oZWwsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBkZWxheTogZWwuZGF0YXNldC5pbmRleCAqIDAuMTUsXG4gICAgb25Db21wbGV0ZTogZG9uZSxcbiAgfSlcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwicXVlcnlcIiAvPlxuICA8VHJhbnNpdGlvbkdyb3VwXG4gICAgdGFnPVwidWxcIlxuICAgIDpjc3M9XCJmYWxzZVwiXG4gICAgQGJlZm9yZS1lbnRlcj1cIm9uQmVmb3JlRW50ZXJcIlxuICAgIEBlbnRlcj1cIm9uRW50ZXJcIlxuICAgIEBsZWF2ZT1cIm9uTGVhdmVcIlxuICA%2BXG4gICAgPGxpXG4gICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY29tcHV0ZWRMaXN0XCJcbiAgICAgIDprZXk9XCJpdGVtLm1zZ1wiXG4gICAgICA6ZGF0YS1pbmRleD1cImluZGV4XCJcbiAgICA%2BXG4gICAgICB7eyBpdGVtLm1zZyB9fVxuICAgIDwvbGk%2BXG4gIDwvVHJhbnNpdGlvbkdyb3VwPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwiZ3NhcFwiOiBcImh0dHBzOi8vdW5wa2cuY29tL2dzYXA%2FbW9kdWxlXCJcbiAgfVxufSJ9"})])}const Z=c(p,[["render",k],["__file","transition-group.html.vue"]]);export{Z as default};