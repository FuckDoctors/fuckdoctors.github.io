import{_ as l,r as o,o as i,c as p,e as r,a as n,b as s,d as a,h as t}from"./app-4dfd043d.js";const d="/assets/http-https-ssh-6d5cd12b.png",c="/assets/ipv6-settings-b6fced71.png",u={},v=n("h1",{id:"路由器折腾笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#路由器折腾笔记","aria-hidden":"true"},"#"),s(" 路由器折腾笔记")],-1),m=n("h2",{id:"刷机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#刷机","aria-hidden":"true"},"#"),s(" 刷机")],-1),_=n("p",null,"路由器型号为 newifi3-d2，咸鱼上『拣』的垃圾，当然不是免费的，为了 d2 版本挑拣的矿机。",-1),h=n("p",null,"到手后，刷了 breed，然后刷了 padavan，本人小白，所以选了 padavan。",-1),b=n("p",null,"之前很早的时候，newifi1 用过 openwrt，主要看中的是多拨，后来升级带宽，感觉够用了，而且感觉多拨也没怎么提升，padavan 功能整合的挺好就刷了 padavan，所以就一直沿用下来了。",-1),k=n("p",null,"（多拨没提升，估计是我网线的事，原来埋的是百兆线，padavan 上没多拨也是个遗憾吧）",-1),A=n("h2",{id:"padavan-外网访问",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#padavan-外网访问","aria-hidden":"true"},"#"),s(" padavan 外网访问")],-1),E=n("p",null,"路由器刷了 padavan 后感觉功能很强大，但是基本没啥用，但是总想搞事情。",-1),f=n("p",null,"逛恩山论坛后，看到大家在刷翻墙，奈何自己没服务器，只能作罢。还看到大家在搞外网访问，虽然自己没啥用，但是感觉大家在搞，我也想搞搞，而且自己也正好有域名。",-1),P=n("p",null,"但是，之前买的 3 年的域名到期了，看着续费也不便宜（其实是穷。。。），自己不怎么用，所以就不续费了。新注册反而更便宜，那还是新注册个吧，反正之前的域名也没啥用。。。",-1),g=n("p",null,"鉴于上次买的域名时间短，这次想搞个时间长的，省得续费还贵，一次性搞了 10 年，对比了一下虽然腾讯域名比阿里域名便宜一点，但是鉴于腾讯的也不能用 Q 币（正好有闲置），而且之前阿里上的域名也都用过，所以还是选择了阿里。",-1),T=n("p",null,"上面废话了一通，这次回归正题，按以下几点实现外部访问。",-1),x=n("p",null,[s("自己有域名后，可以配合 padavan 的"),n("code",null,"Aliddns"),s("功能解析到域名下。")],-1),C=n("li",null,[s("配置阿里域名，获取 Access Key 的相关信息，使用"),n("code",null,"RAM 用户"),s("，配置了"),n("code",null,"管理云解析（DNS）的权限"),s("和"),n("code",null,"管理域名服务的权限"),s("。")],-1),I=n("code",null,"Aliddns",-1),S={href:"http://192.168.123.1/Advanced_Extensions_aliddns.asp",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"http://192.168.123.1/Advanced_Extensions_aliddns.asp",-1),N=n("p",null,[s("确保开启了路由的"),n("code",null,"HTTP Web 服务")],-1),w={href:"http://192.168.123.1/Advanced_Services_Content.asp",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"http://192.168.123.1/Advanced_Services_Content.asp",-1),D=n("li",null,[s("开启 HTTP & HTTPS 服务，如下所示："),n("br"),n("img",{src:d,alt:"开启HTTP & HTTPS",loading:"lazy"})],-1),H=n("li",null,"此处同时开启了 ssh 服务",-1),F=n("p",null,"使用 frp 实现内网穿透",-1),V={href:"http://192.168.123.1/Advanced_Extensions_frp.asp",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"http://192.168.123.1/Advanced_Extensions_frp.asp",-1),R=n("li",null,[s("配置脚本"),n("code",null,"frp_scripts"),n("br"),s(" 为了简便，这里只说明修改部分。")],-1),U=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ==========客户端配置：==========</span>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> 自己的域名
server_port <span class="token operator">=</span> <span class="token number">7000</span>
token <span class="token operator">=</span> 自己设置一个token，跟服务器端一致即可

<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> http
local_port <span class="token operator">=</span> <span class="token number">80</span> <span class="token comment"># 跟上面HTTP Web服务的的端口保持一致</span>
remote_port <span class="token operator">=</span> 自己设置一个端口 <span class="token comment"># 这里注意一下，一般运营上会屏蔽80端口，使用其他端口。</span>
custom_domains <span class="token operator">=</span> 自己的域名

<span class="token punctuation">[</span>https<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> https
local_port <span class="token operator">=</span> <span class="token number">443</span> <span class="token comment"># 跟上面HTTPS Web服务的的端口保持一致</span>
remote_port <span class="token operator">=</span> https的端口 <span class="token comment"># 自己配置一个https的端口</span>
custom_domains <span class="token operator">=</span> 自己的域名

<span class="token punctuation">[</span>ssh<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
local_port <span class="token operator">=</span> <span class="token number">22</span>
remote_port <span class="token operator">=</span> ssh的端口

<span class="token comment"># ==========服务端配置：==========</span>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>
<span class="token comment"># dashboard 用户名密码，默认都为 admin</span>
dashboard_user <span class="token operator">=</span> admin
dashboard_pwd <span class="token operator">=</span> admin
<span class="token comment"># 通过自定义域名访问部署于内网的 web 服务</span>
<span class="token comment"># https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1</span>
vhost_http_port <span class="token operator">=</span> 供外网访问的http端口，跟上面的http的remote_port保持一致
vhost_https_port <span class="token operator">=</span> 供外网访问的https端口，跟上面的https的remote_port保持一致
token <span class="token operator">=</span> 跟客户端的token保持一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>特别说明 <ul><li>http 的<code>remote_port</code>遇到过一个坑，最初设置的 8080 能正常范围，后来不知啥时候不能访问了，一开始以为配置错了，各种调整依然不行，后来发现设为别的端口就可以，估计是 8080 也被运营商封掉了。。。</li><li>https 的 443 也被运行商封掉了，换用其他端口。</li></ul></li></ul>`,2),z=t("<li><p>配置端口转发</p><ul><li>为了定制更多端口转发，我在<code>外部网络 (WAN) - 端口转发 (UPnP)</code>中自己设的</li><li>也可以在<code>防火墙 - 通用设置</code>中开启</li></ul></li><li><p>SSL 证书<br> 需要启用 https 的话，需要申请免费或购买收费证书，得到正数后，将证书内容填到下面两项内。</p><p>位置：<code>系统管理 - 服务</code></p><p>配置项：</p><ul><li>Server Certificate (required)</li><li>Server Private Key (required)</li></ul></li>",2),L=t('<p>不出意外，就可以外网访问了，如有意外，先检查配置，再网络搜索。</p><h2 id="开启-ipv6-外网访问" tabindex="-1"><a class="header-anchor" href="#开启-ipv6-外网访问" aria-hidden="true">#</a> 开启 IPv6 外网访问</h2><p>运营上已支持 IPv6，路由里也自动获得了 IPv6。</p><ol><li><p>默认配置：<br><img src="'+c+`" alt="IPv6配置" loading="lazy"></p></li><li><p>Aliddns 的<code>顶级域名3[IPv6]</code>配置上，会自动加上 AAAA 记录。</p></li><li><p><code>自定义设置 - 脚本 - 在防火墙规则启动后执行:</code>里加上 IPv6 的防火墙策略</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 所需要的防火墙策略</span>
ip6tables <span class="token parameter variable">-F</span>
ip6tables <span class="token parameter variable">-P</span> INPUT ACCEPT
ip6tables <span class="token parameter variable">-P</span> FORWARD ACCEPT
ip6tables <span class="token parameter variable">-P</span> OUTPUT ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 frp 里配置上 IPv6 的节点。<br> 跟 IPv4 一样，需要注意的是，http/https 可以共用同一个端口，tcp 不能共用同一个端口，需要单独起一个端口供 IPv6 使用，同时端口转发里也加上这个端口。</p></li></ol>`,4);function q(K,M){const e=o("ExternalLinkIcon");return i(),p("div",null,[v,m,_,h,r(" more "),b,k,A,E,f,P,g,T,n("ol",null,[n("li",null,[x,n("ul",null,[C,n("li",null,[s("使用"),I,s("配置。"),n("a",S,[s("配置链接"),a(e)]),s("："),B])])]),n("li",null,[N,n("ul",null,[n("li",null,[n("a",w,[s("配置链接"),a(e)]),s("："),y]),D,H])]),n("li",null,[F,n("ul",null,[n("li",null,[n("a",V,[s("配置链接"),a(e)]),s("："),W]),R]),U]),z]),L])}const Q=l(u,[["render",q],["__file","router-settings.html.vue"]]);export{Q as default};