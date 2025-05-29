---
url: 'https://zhaobc.site/posts/theme/sandpack-plugin.md'
---
# Sandpack 插件

让你的 VuePress 站点中的 Markdown 文件支持 [Sandpack](https://sandpack.codesandbox.io/) 类似的代码案例。

## 缘由

手头的项目刚刚收尾，看知乎一个 React 和 Vue 撕逼问题时，里面提到了最新的 React 的一些新特性，也附上了 React 新的官网 [react.dev](https://react.dev) . 出于好奇点了进去，然后看到了官网的可交互示例，觉得不错，然后看了下源代码，发现是使用的 `sandpack-react`。
看了下 sandpack [官网](https://sandpack.codesandbox.io/)，感觉功能挺强大的，集成到 vuepress 里做代码演示很不错。

然后搜了下关键字 `sandpack vuepress`，找到了 [`vitepress-plugin-sandpack`](https://github.com/jerrywu001/vitepress-plugin-sandpack)，进而找到了 `sandpack-vue3`，再次表示感谢。

您也可以直接使用 [`vitepress-plugin-sandpack`](https://github.com/jerrywu001/vitepress-plugin-sandpack)。

:::warning
截止到目前（2023/9/5），代码提及到 `feat/sandpck` 分支，暂未合并到 `main` 分支，功能和配置可能会有变动。
:::

## 配置

```ts {4}
// cunstomConfig.ts
export const customConfig: CustomConfig = {
  mdEnhance: {
    sandpack: true,
  },
}
```

## 使用

要使用交互演示，你应该使用一个名为 `sandpack#template` 的容器。

在其中，你可以使用 3 个指令：

* `@file FullPathFile` 紧跟文件的代码块，同时也支持文件选项，例如：`@file FullPathFile [active readOnly hidden]`
* `@options` 紧跟一个自定义 "options" 的 javascript 代码块
* `@setup` 紧跟一个自定义 "customSetup" 的 javascript 代码块

## 示例

````md
::: sandpack#vue 带自定义设置的 Vue 示例

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue'

const msg = ref('Hello Playground!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file /src/Comp.vue

```vue
<script setup>
import { useBattery } from '@vueuse/core'
import { ref } from 'vue'

const { charging, level } = useBattery()
</script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
```

@options

```js
{
  activeFile: "/src/Comp.vue",
}
```

@setup

```js
{
  dependencies: {
    "@vueuse/core": "latest",
    "@vueuse/shared": "latest",
    "vue-demi": "latest",
  }
}
```

:::
````

更多内容详见 Hope 网站介绍，本文仅做一个简单记录。
