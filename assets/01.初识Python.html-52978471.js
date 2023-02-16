import{_ as s,Y as a,Z as e,a1 as i,a8 as t,E as l}from"./framework-ac4816b6.js";const p={},o=t(`<h1 id="初识-python" tabindex="-1"><a class="header-anchor" href="#初识-python" aria-hidden="true">#</a> 初识 Python</h1><h2 id="安装-python-解析器" tabindex="-1"><a class="header-anchor" href="#安装-python-解析器" aria-hidden="true">#</a> 安装 Python 解析器</h2><p>以下以 centos 为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装所需依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span> gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel

<span class="token comment"># 下载源代码并解压</span>
<span class="token function">wget</span> https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tar.xz
xz <span class="token parameter variable">-d</span> Python-3.7.6.tar.xz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.7.6.tar

<span class="token comment"># 编译安装</span>
<span class="token builtin class-name">cd</span> Python-3.7.6
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python37 --enable-optimizations
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看-python-版本" tabindex="-1"><a class="header-anchor" href="#查看-python-版本" aria-hidden="true">#</a> 查看 Python 版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">--version</span>
<span class="token comment"># 或</span>
python3 <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以进入 python 交互环境查看版本号：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>version_info<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>version<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写-python-源代码" tabindex="-1"><a class="header-anchor" href="#编写-python-源代码" aria-hidden="true">#</a> 编写 Python 源代码</h2><p>编写 python 源代码，并使用 <code>.py</code> 作为文件后缀。</p><p>例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># hello.py</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行-python" tabindex="-1"><a class="header-anchor" href="#运行-python" aria-hidden="true">#</a> 运行 Python</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python hello.py
<span class="token comment"># 或</span>
python3 hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码注释" tabindex="-1"><a class="header-anchor" href="#代码注释" aria-hidden="true">#</a> 代码注释</h2><ol><li>单行注释 以#和空格开头的部分</li><li>多行注释 3 个引号开头，3 个引号结尾</li></ol><p>例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">###</span>
这里可以写多行注释
这是第二行注释
<span class="token comment">###</span>
<span class="token comment"># 这是单行注释</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><ul><li>PyCharm</li><li>VS Code</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
这里可以写多行注释，比如：
Version: 0.1
Author: zhaobc
&quot;&quot;&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world!&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># print(&quot;hello, world!&quot;)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;goodbye, world&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function d(c,r){const n=l("Replit");return a(),e("div",null,[o,i(n,{link:"https://replit.com/@FuckDoctors/python-100-days#day-01-15/day-01/hello.py"})])}const v=s(p,[["render",d],["__file","01.初识Python.html.vue"]]);export{v as default};
