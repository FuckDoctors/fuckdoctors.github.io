---
url: 'https://zhaobc.site/posts/theme/twoslash.md'
---
# 引入 twoslash 插件

::: warning
Hope 主题已经支持了 twoslash 功能，本文可以忽略，此处只是记录一下。
:::

看 `vue-macros` 官网时，看到比较有意思的代码提示功能，才知道是用了 `twoslash` 功能。
它是用的 `@shikijs/vitepress-twoslash` 插件，但是本主题是 `vuepress` 而不是 `vitepress`，有点遗憾。

不过，看了下 `@shikijs/vitepress-twoslash` 的代码，貌似跟 `vitepress` 没有太大关系，随尝试在 `vuepress` 里导入一下试试。

## 配置

具体参考[这里](https://shiki.style/packages/vitepress)。

### 安装依赖

```shell
pnpm add -D @shikijs/vitepress-twoslash
```

### 修改配置

`theme-hope` 主题配置：

```ts {10}
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

export default hopeTheme({
  plugins: {
    shiki: {
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro',
      },
      transformers: [transformerTwoslash()],
    },
  },
})
```

`vuepress` 主题配置：

```ts
// .vuepress/config.ts
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

export default defineClientConfig({
  enhance: ({ app }) => {
    // twoslash
    app.use(TwoslashFloatingVue)
  },
})
```

### 其他修改

不幸的是，上述配置后，未能达到想定的效果。

`v-menu` 被原样输出到 html 中，而没有被渲染为 vue 组件。

原本以为是 `app.use(TwoslashFloatingVue)` 未起作用，后来各自调试后发现不是。
参考了 `vuepress-theme-plume` 后，发现需要处理一下 markdown 的 `v-pre`。

如下所示：

```ts
// .vuepress/theme/index.ts
export default (options: ThemeOptions): Theme => ({
  extendsMarkdownOptions: (options: MarkdownOptions, app: App) => {
    // 注入 floating-vue 后，需要关闭 代码块 的 v-pre 配置
    if ((options as any).vPre !== false) {
      const vPre = isPlainObject((options as any).vPre)
        ? (options as any).vPre
        : { block: true }
      if (vPre.block) {
        ;(options as any).vPre ??= {}
        ;(options as any).vPre.block = false
      }
    }
  },
})
```

但是，这样做会导致有些页面出错，没有 `v-pre` 会导致编译出错。
最后查看了 vuepress 的 `v-pre` 后，发现可以使用 `:no-v-pre` 来避免这个问题。

同时，为了适配 `vuepress` , 将 `@shikijs/vitepress-twoslash` 里的代码复制了一份，然后修改了一点里的组件和 css。

## 使用方法

使用方法：在需要启用 `twoslash` 的地方，同时设置 `:no-v-pre` 和 `twoslash`。

如下所示：

````md
```ts:no-v-pre twoslash
console.log('hello')
//      ^?
```
````

## 示例

### TypeScript 示例

```ts:no-v-pre twoslash
console.log('hello')
//      ^?
```

### Vue 单文件组件示例

```vue:no-v-pre twoslash
<script setup>
import { onMounted, ref } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
