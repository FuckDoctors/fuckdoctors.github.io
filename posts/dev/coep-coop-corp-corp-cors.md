---
url: 'https://zhaobc.site/posts/dev/coep-coop-corp-corp-cors.md'
---
# 跨源隔离和跨域资源共享

在开发 [Python Playground](https://play-py.zhaobc.site) 时遇到了跨域资源共享的问题，尤其是把它嵌入到本站时，导致了一些功能无法正常工作。

## 相关术语

在解决这些过程中，遇到了一些专业术语，这里简单记录一下。

* [`Cross-Origin-Opener-Policy` (*COOP*)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
* [`Cross-Origin-Embedder-Policy` (*COEP*)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
* [`Cross-Origin-Resource-Policy` (*CORP*)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy)
* [Cross-Origin Resource Sharing (*CORS*)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CORS)
* [`Content-Security-Policy` (*CSP*)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CSP)

## SharedArrayBuffer 相关

Python Playground 中用到了 [`SharedArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)，它需要一定的[安全需求](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#%E5%AE%89%E5%85%A8%E9%9C%80%E6%B1%82)。

MDN 中对 [`SharedArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) 有详细的说明。

::: tip
对于顶级文档，需要设置两个标头来实现你网站的跨源隔离：

`Cross-Origin-Opener-Policy` 设置为 `same-origin`（来保护你的源站点免受攻击）
`Cross-Origin-Embedder-Policy` 设置为 `require-corp` 或 `credentialless`（保护受害者免受你的源站点的影响）

为了验证跨源隔离是否生效，你可以测试窗口和 worker 上下文中的 `Window.crossOriginIsolated` 或 `WorkerGlobalScope.crossOriginIsolated` 属性。

嵌套文档和专用 worker 线程也需要将 `Cross-Origin-Embedder-Policy` 标头设置为同样的值。
对于同源嵌套文档和子资源，不需要进行任何其他更改。
同站（但跨源）嵌套文档和子资源需要将 `Cross-Origin-Resource-Policy` 标头设置为 `same-site`。
而它们的跨源（和跨站点）的对应部分也需要将同样的标头设置为 `cross-origin`。

请注意，将 `Cross-Origin-Resource-Policy` 标头设置为除 `same-origin` 之外的任何值，都会使资源暴露于潜在的攻击中，比如幽灵漏洞。
:::

::: warning
`credentialless` 目前还有[浏览器兼容性问题](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)。

Safari 和多数移动端浏览器目前不支持 `credentialless`。
:::

## 相关设置

基于以上信息，将主站（也就是本站）的 headers 做了一下设置。

* 正常 PC 浏览器

  ```txt
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: credentialless
  Cross-Origin-Resource-Policy: cross-origin
  ```

* 移动端浏览器

  ```txt
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Resource-Policy: cross-origin
  ```

* Safari

  ```txt
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Resource-Policy: cross-origin
  ```

`vite` 中设置如下 ：

```js
export default defineConfig({
  plugins: [
    vue(),
    // 在 server.headers 中设置貌似不起作用，在 plugins 中可以起作用。
    // Support Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy on dev server
    // https://github.com/vitejs/vite/issues/3909#issuecomment-934044912
    {
      name: 'configure-response-headers',
      configureServer: server => {
        server.middlewares.use((_req, res, next) => {
          // Cross-Origin-Embedder-Policy 浏览器兼容性
          // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
          const userAgent = _req.headers['user-agent']?.toLowerCase() || ''
          if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
            // safari
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
          } else {
            res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless')
          }
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
          next()
        })
      },
    },
  ],

  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
});
```

`vercel.json` 设置：

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cross-Origin-Embedder-Policy",
          "value": "credentialless"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Cross-Origin-Resource-Policy",
          "value": "cross-origin"
        }
      ]
    },
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "User-Agent",
          "value": {
            "re": ".*(iPhone|iPad|iPod|iOS|Android).*"
          }
        }
      ],
      "headers": [
        {
          "key": "Cross-Origin-Embedder-Policy",
          "value": "require-corp"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Cross-Origin-Resource-Policy",
          "value": "cross-origin"
        }
      ]
    },
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "User-Agent",
          "value": {
            "re": "^(?=.*Safari)(?!.*Chrome).*$"
          }
        }
      ],
      "headers": [
        {
          "key": "Cross-Origin-Embedder-Policy",
          "value": "require-corp"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Cross-Origin-Resource-Policy",
          "value": "cross-origin"
        }
      ]
    }
}
```

## 副作用

* 设置了 `COEP` 后，会阻塞 `CORS` 导致引入的外部资源无法加载，需要单独指定 `crossorigin`。
  尤其是 外部的 CDN资源，CSS, 图片，视频，等资源。

  ```html
  <img src="https://example.com/image.jpg" crossorigin="anonymous">
  ```

  但是，一些外部资源动态追加的资源无法控制，导致无法加载。比如，百度统计， clarity 统计。

  Safari 浏览器会无法加载 CDN 资源，导致图标无法正常显示。
  哪位朋友知道如何解决的话，忘不吝赐教。

* 设置了 `COEP` 后，`iframes` 会无法加载。需要指定 `sandbox="allow-scripts allow-same-origin" credentialless` 属性。
