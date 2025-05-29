---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/reusability/plugins.md'
---
# 插件

## 介绍

插件是一种能为 Vue 添加全局功能的工具代码。我们会这样安装一个插件：

```js
import { createApp } from 'vue'

const app = createApp({})

app.use('myPlugin', {
  // 可选的选项
})
```

它可以是一个拥有 `install()` 方法的对象，或者就简单地只是一个函数，它自己就是安装函数。安装函数接收应用实例和传递给 `app.use()` 的额外选项：

```js
const myPlugin = {
  install(app, options) {
    // 配置此应用
  },
}
```

插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

1. 通过 `app.component()` 和 `app.directive()` 注册一到多个全局组件或自定义指令。
2. 通过 `app.provide()` 使一个资源可被注入进整个应用
3. 向 `app.config.globalProperties` 中添加一些全局实例属性或方法
4. 一个可能上述 3 种都包含的功能库（例如 vue-router）

### 编写一个插件

为了更好地理解如何构建 Vue.js 插件，我们可以试着写一个简单的 i18n (国际化 (Internationalization) 的缩写) 插件。

我们想让整个应用程序有一个按 key 名翻译文本内容的函数，因此我们将它暴露在 `app.config.globalProperties` 上。这个函数接收一个以 . 作为分隔符的 key 字符串，用来在用户提供的翻译字典中查找对应语言的文本。

```js
// plugins/i18n.js
export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = key => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) {
          return o[i]
        }
      }, options)
    }
  },
}
```

该插件希望用户在使用该插件时通过选项传入一个翻译字典对象，所以应该这样使用：

```js
import i18nPlugin from './plugins/i18n.js'

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!',
  },
})
```

```vue
<h1>
{{ $translate('greetings.hello') }}
</h1>
```

### 插件中的 provide / inject

在插件中，我们可以通过 provide 来为插件用户供给一些内容。举个例子，我们可以将 options 参数提供给整个应用，以便各个组件都能使用这个翻译字典对象。

```js {13}
// plugins/i18n.js
export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = key => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) {
          return o[i]
        }
      }, options)
    }

    app.provide('i18n', options)
  },
}
```

现在，插件用户就可以在他们的组件中以 i18n 为 key 注入并访问插件的选项对象了。

```js
<script setup>
  import {inject} from 'vue' const i18n = inject('i18n')
  console.log(i18n.greetings.hello)
</script>
```
