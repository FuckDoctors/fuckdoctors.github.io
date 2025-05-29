---
url: 'https://zhaobc.site/notes/frontend/vue/vue3-book/chapter02.md'
---
# 第 2 章 框架设计的核心要素

## 2.1 提升用户的开发体验

在框架设计和开发过程中，提供友好的警告信息至关重要。

Vue.js 3 中为了方便的在控制台输出 `ref` 数据，提供了自定义的 formatter，在 `initCustomFormatter` 函数中。

在 Chrome 中，打开 DevTools 的设置，勾选 "Console" -> "Enable custom formatters" 开启。

## 2.2 控制框架代码的体积

框架的大小也是衡量框架的标准之一。

Vue.js 3 的源代码中，每个 `warn` 函数的调用都会配合 `__DEV__` 常量的检查，例如：

```js
if (__DEV__ && !res) {
  warn(
    `Failed to mount app: mount target selector "${container}"` returned null.
  )
}
```

Vue.js 使用 rollup.js 对项目进行构建，这里的 `__DEV__` 常量实际上是通过 rollup.js 的插件配置来预定义的，其功能类似于 webpack 中的 DefinePlugin 插件。

针对不同的环境，比如开发环境和生产环境，把 `__DEV__` 替换成 `true` 和 `false` 来控制这块代码的执行与否。
当 `__DEV__` 为 `false` 时，这段代码永远都不会执行，被认为是 dead code, 它不会出现在最终产物中，在构建资源的时候就会被移除。

这样，我们就做到了**在开发环境中为用户提供友好的警告信息的同时，不会增加生产环境代码的体积。**。

## 2.3 框架要做到良好的 Tree-Shaking

简单来说，Tree-Shaking 指的是消除那些永远不会执行的代码，也就是排除 dead code。

想要实现 Tree-Shaking ，必须满足一个条件，即模块必须是 ESM(ES Module) ，因为 Tree-Shaking 依赖 ESM 的静态结构。

使用 rollup 打包 esm:

```js
npx rollup input.js -f esm -o bundle.js
```

这句命令的意思是，以 input.js 文件为入口，输出 ESM，输出的文件叫 bundle.js。

Tree-Shaking 的第二个关键点 —— 副作用。如果一个函数调用会产生副作用，那么就不能将其移除。

简单地说，副作用就是，当调用函数的时候会对外部产生影响，例如修改了全局变量。

而到底会不会产生副作用，只有代码真正运行的时候才会知道。

JavaScript 本身是动态语言，静态地分析 JavaScript 代码很困难，
因此，像 rollup.js 这类的工具会提供一个机制，让我们能明确的告诉 rollup.js：
“放心吧，这段代码不会产生副作用，你可以移除它。”

如下所示：

```js
import { foo } from './utils'
/*#__PURE__*/ foo()
```

注意注释代码 `/*#__PURE__*/`，其作用就是告诉 rollup.js，对应 foo 函数的调用不会产生副作用，你可以放心地对其进行 Tree-Shaking。

因此，在编写框架时，合理使用`/*#__PURE__*/`注释，可以做到更好的 Tree-Shaking，Vue.js 3 中大量使用了该注释。

例如：

```js
export const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS)
```

这样编写代码也不会造成很大的心智负担，因为通常产生副作用的代码都是模块内的顶级调用。

什么是顶级调用？如下所示：

```js
foo() // 顶级调用

function bar() {
  foo() // 函数内调用
}
```

只要 bar 没有被调用，自然不会产生副作用。

## 2.4 框架应该输出怎样的构建产物

在 HTML 中直接使用时，需要输出一种叫 IIFE 格式的资源。

```html
<body>
  <script src="/path/to/vue.js"></script>
  <script>
    const { createApp } = Vue
    // ...
  </script>
</body>
```

IIFE 的全称是 Immediately Invoked Function Expression，即“立即调用的函数表达式”，例如：

```js
;(function () {
  // ...
})()
```

实际上，vue.global.js 文件就是 IIFE 格式的资源，它的代码结构如下所示：

```js
var Vue = (function (exports) {
  // ...
  exports.createApp = createApp
  // ...
  return exports
})({})
```

这样当我们使用 \<script> 标签直接引入 vue.global.js 文件后，全局变量 Vue 就是可用的了。

现在主流浏览器对原生 ESM 支持也都不错，所以，可以直接用\<script type="module">标签引入 ESM 资源。

```js
<script type="module" src="/path/to/vue.esm-browser.js"></script>
```

除了可以直接使用\<script>标签引入外，还可以在 Node.js 中通过 require 语句引用：

```js
const Vue = require('vue')
```

## 2.5 特性开关

在设计框架时，框架会给用户提供诸多特性或功能。
比如，我们提供了 A, B, C 三个特性给用户，同时还提供了 a, b, c 三个对应的特性开关，
用户可以通过设置 a, b, c 为 true 或 false 来开启或关闭对应的特性。

这样会带来很多好处：

* 对于用户关闭的特性，利用 Tree-Shaking 减小打包体积
* 该机制为框架设计带来了灵活性，通过特性开关任意为框架添加新的特性，而不担心资源体积变大。
  同时，当框架升级时，也可以通过特性开关来支持遗留 API 。

怎么实现特性开关呢？原理和上文提到的`__DEV__`常量一样，本质上是利用 rollup.js 的预定义常量插件来实现。

## 2.6 错误处理

框架错误处理机制的好坏，直接决定了用户应用程序的健壮性，还决定了用户开发时处理错误的心智负担。

异常处理，可以通过 `try...catch` 来让用户自己处理，但这样会增加用户的负担，那么我们可以做统一异常处理。

例如下面的代码：

```js
export default {
  foo(fn) {
    try {
      fn && fn()
    } catch (e) {
      // ...
    }
  },
  bar(fn) {
    try {
      fn && fn()
    } catch (e) {
      // ...
    }
  },
}
```

上面的每个函数都加了 `try...catch` ,实际上，我们可以更进一步将错误处理封装为一个函数，假设叫它 callWithErrorHandling:

```js
export default {
  foo(fn) {
    callWithErrorHandling(fn)
  },
  bar(fn) {
    callWithErrorHandling(fn)
  },
}

function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    console.log(e)
  }
}
```

可以看到，代码变得简洁多了。但简洁不是目的，这么做真正的好处是，我们能为用户提供统一的错误处理接口，如下所示：

```js
let handleError = null
export default {
  foo(fn) {
    callWithErrorHandling(fn)
  },
  // 用户可以调用改函数注册统一的错误处理函数
  registerErrorHandler(fn) {
    handleError = fn
  },
}
function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    // 将捕获的错误传递给用户的错误处理程序
    handleError(e)
  }
}
```

我们提供了 registerErrorHandler 函数，用户可以用它来注册错误处理程序。

这样用户侧的代码就会变的非常简洁且健壮：

```js
import utils from 'utils'
// 注册错误处理程序
utils.registerErrorHandler(e => {
  console.log(e)
})
utils.foo(() => {
  // ...
})
utils.bar(() => {
  // ...
})
```

这时，错误处理的能力完全由用户控制，用户可以选择忽略错误，也可以调用上报程序，将错误上报给监控系统。

实际上，这就是 Vue.js 的原理，可以在源码中搜索到 callWithErrorHandling 函数。
另外，在 Vue.js 中，我们也可以注册统一的错误处理函数：

```js
import App from 'App.vue'
const app = createApp(App)
app.config.errorHandler = () => {
  // 错误处理程序
}
```

## 2.7 良好的 TypeScript 类型支持

框架使用 TS 编写，不等于对 TS 类型友好，其实这是两件完全不同的事。示例如下：

```ts
function foo(val: any) {
  return val
}
const res = foo('str')
```

当调用 foo 函数时，如果传递了参数'str'，按照之前的分析，得到的结果 res 也应该是字符串类型，然而并不是。
为了达到理想状态，我们只需要对 foo 函数做简单的修改即可：

```ts
function foo<T extends any>(val: T): T {
  return val
}
```

在写框架时，为了做到完善的 TS 类型支持很不容易，许岙付出相当大的努力。

## 2.8 总结

* 框架设计需要提供友好的警告信息至关重要
* 利用 Tree-Shaking 和 构建工具预定义常量的能力，实现代码体积的可控性
* 可以利用 `/*#__PURE__*/`来辅助构建工具进行 Tree-Shaking
* 框架需要提供多种输出产物
  * IIFE 格式 立即执行的函数表达式
  * ESM 格式
    * esm-browser.js 用于浏览器
    * esm-bundler.js 用于打包工具
* 框架会提供多种能力或功能，处于灵活性和兼容性的考虑，可以通过特性开关来实现
* 框架需要为用户提供统一的错误处理接口
* 做到完事的类型支持，需要花费很多的时间和精力
