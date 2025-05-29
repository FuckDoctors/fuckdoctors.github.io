---
url: 'https://zhaobc.site/notes/other/linux/certs.md'
---
# SSL 证书

生成 Apache 所需的 SSL 证书。

```shell
# 生成CA认证机构的证书密钥key
# 需要设置密码，输入两次
openssl genrsa -des3 -out ca.key 2048

# 比如 123456

# 去除密钥里的密码(可选)
# 这里需要再输入一次原来设的密码
openssl rsa -in ca.key -out ca.key

# 用私钥ca.key生成CA认证机构的证书ca.crt
# 其实就是相当于用私钥生成公钥，再把公钥包装成证书
openssl  req -new -x509 -key ca.key -out ca.crt -days 3650
# 这个证书ca.crt有的又称为"根证书",因为可以用来认证其他证书

# 生成自己网站的密钥server.key
openssl genrsa -des3 -out server.key 2048

openssl rsa -in server.key -out server.key

# 比如 123456

# 生成自己网站证书的请求文件
# 如果找外面的CA机构认证，也是发个请求文件给他们
# 这个私钥就包含在请求文件中了，认证机构要用它来生成网站的公钥，然后包装成一个证书
openssl req -new -key server.key -out server.csr

# 使用虚拟的CA认证机构的证书ca.crt，来对自己网站的证书请求文件server.csr进行处理，生成签名后的证书server.crt
# 注意设置序列号和有效期（一般都设1年，这里设了10年）
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days 3650
```
