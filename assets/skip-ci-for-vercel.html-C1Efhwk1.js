import{_ as t,c as a,a as s,d as e,o as l}from"./app-BVQ-eLbK.js";const n={};function h(p,i){return l(),a("div",null,[i[0]||(i[0]=s(`<h1 id="取消-vercel-发布" tabindex="-1"><a class="header-anchor" href="#取消-vercel-发布"><span>取消 Vercel 发布</span></a></h1><p>在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。<br> 但是，在 vercel 中，这种方法不起作用。</p><p>搜索了一下资料，发现 vercel 中也可以自定义来实现。</p><ul><li><a href="https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel" target="_blank" rel="noopener noreferrer">How do I use the &quot;Ignored Build Step&quot; field on Vercel?</a></li><li><a href="https://github.com/vercel/vercel/discussions/5765" target="_blank" rel="noopener noreferrer">Skip deploys for commits that have [skip-ci] in the name</a></li></ul><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 单独忽略 docs-ci</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># bash -c &#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip (docs-)?ci\\]|\\[(docs-)?ci skip\\]&quot;&#39;</span></span></code></pre></div>`,5)),e(" more "),i[1]||(i[1]=s(`<p>也可以按照上面写的方式，写一个脚本来做。下面是为了留下记录，所以写了一个比较繁琐的脚本：</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># How do I use the &quot;Ignored Build Step&quot; field on Vercel?</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Skip deploys for commits that have [skip-ci] in the name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># https://github.com/vercel/vercel/discussions/5765</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可以在&quot;Ignored Build Step&quot;中直接使用： bash -c &#39;echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;VERCEL_GIT_COMMIT_REF: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;VERCEL_GIT_COMMIT_MESSAGE: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_MESSAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># grep通过返回一个状态值来说明搜索的状态，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果模板搜索成功，则返回0，如果搜索不成功，则返回1，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果搜索的文件不存在，则返回2。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># # 过滤message的第一行是否包含[skip ci]或者[ci skip]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | head -n 1 | grep -iE &quot;\\[skip ci\\]|\\[ci skip\\]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_MESSAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -iE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;\\[skip ci\\]|\\[ci skip\\]&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># echo &quot;$VERCEL_GIT_COMMIT_MESSAGE&quot; | grep -iE &quot;\\[skip (docs-)?ci\\]|\\[(docs-)?ci skip\\]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$?</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]] ; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # Don&#39;t build</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;🛑 - Build cancelled&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # Proceed with the build</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;✅ - Build can proceed&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre></div>`,2))])}const o=t(n,[["render",h],["__file","skip-ci-for-vercel.html.vue"]]),r=JSON.parse(`{"path":"/posts/devops/skip-ci-for-vercel.html","title":"取消 Vercel 发布","lang":"zh-CN","frontmatter":{"article":true,"date":"2022-04-13T00:00:00.000Z","category":["devops"],"tag":["devops","ci/cd"],"head":[["meta",{"name":"description","content":"Vercel 中跳过发布"}],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/devops/skip-ci-for-vercel.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"取消 Vercel 发布"}],["meta",{"property":"og:description","content":"在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。 但是，在 vercel 中，这种方法不起作用。 搜索了一下资料，发现 vercel 中也可以自定义来实现。 How do I use the \\"Ignored ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:tag","content":"ci/cd"}],["meta",{"property":"article:published_time","content":"2022-04-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"取消 Vercel 发布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"]],"gitInclude":[],"description":"在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。 但是，在 vercel 中，这种方法不起作用。 搜索了一下资料，发现 vercel 中也可以自定义来实现。 How do I use the \\"Ignored ..."},"headers":[],"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"posts/devops/skip-ci-for-vercel.md","localizedDate":"2022年4月13日","excerpt":"\\n<p>在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。<br>\\n但是，在 vercel 中，这种方法不起作用。</p>\\n<p>搜索了一下资料，发现 vercel 中也可以自定义来实现。</p>\\n<ul>\\n<li><a href=\\"https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">How do I use the \\"Ignored Build Step\\" field on Vercel?</a></li>\\n<li><a href=\\"https://github.com/vercel/vercel/discussions/5765\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Skip deploys for commits that have [skip-ci] in the name</a></li>\\n</ul>\\n<div class=\\"language-bash\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">bash</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'echo \\"$VERCEL_GIT_COMMIT_MESSAGE\\" | grep -iE \\"\\\\[skip ci\\\\]|\\\\[ci skip\\\\]\\"'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 单独忽略 docs-ci</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># bash -c 'echo \\"$VERCEL_GIT_COMMIT_MESSAGE\\" | grep -iE \\"\\\\[skip (docs-)?ci\\\\]|\\\\[(docs-)?ci skip\\\\]\\"'</span></span></code></pre>\\n</div>","autoDesc":true}`);export{o as comp,r as data};