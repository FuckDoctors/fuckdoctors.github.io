import{_ as a,Z as s,$ as e,a5 as n}from"./framework-f53d5b48.js";const r={},l=n(`<h1 id="ssl-证书" tabindex="-1"><a class="header-anchor" href="#ssl-证书" aria-hidden="true">#</a> SSL 证书</h1><p>生成 Apache 所需的 SSL 证书。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成CA认证机构的证书密钥key</span>
<span class="token comment"># 需要设置密码，输入两次</span>
openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> ca.key <span class="token number">2048</span>

<span class="token comment"># 比如 123456</span>

<span class="token comment"># 去除密钥里的密码(可选)</span>
<span class="token comment"># 这里需要再输入一次原来设的密码</span>
openssl rsa <span class="token parameter variable">-in</span> ca.key <span class="token parameter variable">-out</span> ca.key

<span class="token comment"># 用私钥ca.key生成CA认证机构的证书ca.crt</span>
<span class="token comment"># 其实就是相当于用私钥生成公钥，再把公钥包装成证书</span>
openssl  req <span class="token parameter variable">-new</span> <span class="token parameter variable">-x509</span> <span class="token parameter variable">-key</span> ca.key <span class="token parameter variable">-out</span> ca.crt <span class="token parameter variable">-days</span> <span class="token number">3650</span>
<span class="token comment"># 这个证书ca.crt有的又称为&quot;根证书&quot;,因为可以用来认证其他证书</span>

<span class="token comment"># 生成自己网站的密钥server.key</span>
openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> server.key <span class="token number">2048</span>

openssl rsa <span class="token parameter variable">-in</span> server.key <span class="token parameter variable">-out</span> server.key

<span class="token comment"># 比如 123456</span>

<span class="token comment"># 生成自己网站证书的请求文件</span>
<span class="token comment"># 如果找外面的CA机构认证，也是发个请求文件给他们</span>
<span class="token comment"># 这个私钥就包含在请求文件中了，认证机构要用它来生成网站的公钥，然后包装成一个证书</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr

<span class="token comment"># 使用虚拟的CA认证机构的证书ca.crt，来对自己网站的证书请求文件server.csr进行处理，生成签名后的证书server.crt</span>
<span class="token comment"># 注意设置序列号和有效期（一般都设1年，这里设了10年）</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-set_serial</span> 01 <span class="token parameter variable">-out</span> server.crt <span class="token parameter variable">-days</span> <span class="token number">3650</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[l];function c(t,p){return s(),e("div",null,i)}const m=a(r,[["render",c],["__file","certs.html.vue"]]);export{m as default};
