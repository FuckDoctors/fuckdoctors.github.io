import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as a}from"./app.a46d32cb.js";const i={},c=a(`<h1 id="ssl-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#ssl-\u8BC1\u4E66" aria-hidden="true">#</a> SSL \u8BC1\u4E66</h1><p>\u751F\u6210 Apache \u6240\u9700\u7684 SSL \u8BC1\u4E66\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210CA\u8BA4\u8BC1\u673A\u6784\u7684\u8BC1\u4E66\u5BC6\u94A5key</span>
<span class="token comment"># \u9700\u8981\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u8F93\u5165\u4E24\u6B21</span>
openssl genrsa -des3 -out ca.key <span class="token number">2048</span>

<span class="token comment"># \u6BD4\u5982 123456</span>

<span class="token comment"># \u53BB\u9664\u5BC6\u94A5\u91CC\u7684\u5BC6\u7801(\u53EF\u9009)</span>
<span class="token comment"># \u8FD9\u91CC\u9700\u8981\u518D\u8F93\u5165\u4E00\u6B21\u539F\u6765\u8BBE\u7684\u5BC6\u7801</span>
openssl rsa -in ca.key -out ca.key

<span class="token comment"># \u7528\u79C1\u94A5ca.key\u751F\u6210CA\u8BA4\u8BC1\u673A\u6784\u7684\u8BC1\u4E66ca.crt</span>
<span class="token comment"># \u5176\u5B9E\u5C31\u662F\u76F8\u5F53\u4E8E\u7528\u79C1\u94A5\u751F\u6210\u516C\u94A5\uFF0C\u518D\u628A\u516C\u94A5\u5305\u88C5\u6210\u8BC1\u4E66</span>
openssl  req -new -x509 -key ca.key -out ca.crt -days <span class="token number">3650</span>
<span class="token comment"># \u8FD9\u4E2A\u8BC1\u4E66ca.crt\u6709\u7684\u53C8\u79F0\u4E3A&quot;\u6839\u8BC1\u4E66&quot;,\u56E0\u4E3A\u53EF\u4EE5\u7528\u6765\u8BA4\u8BC1\u5176\u4ED6\u8BC1\u4E66</span>

<span class="token comment"># \u751F\u6210\u81EA\u5DF1\u7F51\u7AD9\u7684\u5BC6\u94A5server.key</span>
openssl genrsa -des3 -out server.key <span class="token number">2048</span>

openssl rsa -in server.key -out server.key

<span class="token comment"># \u6BD4\u5982 123456</span>

<span class="token comment"># \u751F\u6210\u81EA\u5DF1\u7F51\u7AD9\u8BC1\u4E66\u7684\u8BF7\u6C42\u6587\u4EF6</span>
<span class="token comment"># \u5982\u679C\u627E\u5916\u9762\u7684CA\u673A\u6784\u8BA4\u8BC1\uFF0C\u4E5F\u662F\u53D1\u4E2A\u8BF7\u6C42\u6587\u4EF6\u7ED9\u4ED6\u4EEC</span>
<span class="token comment"># \u8FD9\u4E2A\u79C1\u94A5\u5C31\u5305\u542B\u5728\u8BF7\u6C42\u6587\u4EF6\u4E2D\u4E86\uFF0C\u8BA4\u8BC1\u673A\u6784\u8981\u7528\u5B83\u6765\u751F\u6210\u7F51\u7AD9\u7684\u516C\u94A5\uFF0C\u7136\u540E\u5305\u88C5\u6210\u4E00\u4E2A\u8BC1\u4E66</span>
openssl req -new -key server.key -out server.csr

<span class="token comment"># \u4F7F\u7528\u865A\u62DF\u7684CA\u8BA4\u8BC1\u673A\u6784\u7684\u8BC1\u4E66ca.crt\uFF0C\u6765\u5BF9\u81EA\u5DF1\u7F51\u7AD9\u7684\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6server.csr\u8FDB\u884C\u5904\u7406\uFF0C\u751F\u6210\u7B7E\u540D\u540E\u7684\u8BC1\u4E66server.crt</span>
<span class="token comment"># \u6CE8\u610F\u8BBE\u7F6E\u5E8F\u5217\u53F7\u548C\u6709\u6548\u671F\uFF08\u4E00\u822C\u90FD\u8BBE1\u5E74\uFF0C\u8FD9\u91CC\u8BBE\u4E8610\u5E74\uFF09</span>
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days <span class="token number">3650</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[c];function r(d,t){return n(),e("div",null,l)}var o=s(i,[["render",r],["__file","certs.html.vue"]]);export{o as default};
