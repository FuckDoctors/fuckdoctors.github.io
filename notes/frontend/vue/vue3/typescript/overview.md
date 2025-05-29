---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/typescript/overview.md'
---
# 搭配 TypeScript 使用 Vue

Vue 本身就是用 TypeScript 编写的，所有的 Vue 官方库都自带了类型声明文件，开箱即用。

## 配置 tsconfig.json

通过 create-vue 搭建的项目包含了预先配置好的 tsconfig.json。其底层配置抽象于 @vue/tsconfig 包中。

手动配置 tsconfig.json 时，请留意以下选项：

* `compilerOptions.isolatedModules` 应当设置为 `true`，因为 Vite 使用 esbuild 来转译 TypeScript，并受限于单文件转译的限制。

* 如果你正在使用选项式 API，需要将 `compilerOptions.strict` 设置为 `true` (或者至少开启 `compilerOptions.noImplicitThis`，它是 `strict` 模式的一部分)，才可以获得对组件选项中 `this` 的类型检查。否则 `this` 会被认为是 `any`。

* 如果你在构建工具中配置了路径解析别名，例如 `@/\*` 这个别名被默认配置在了 `create-vue` 项目中，你需要通过 `compilerOptions.paths` 选项为 TypeScript 再配置一遍。

如果你打算在 Vue 中使用 TSX，请将 `compilerOptions.jsx` 设置为 `"preserve"`，并将 `compilerOptions.jsxImportSource` 设置为 `"vue"`。

## 常见使用说明

### `defineComponent()`

为了让 TypeScript 正确地推导出组件选项内的类型，我们需要通过 `defineComponent()` 这个全局 API 来定义组件：

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    this.name // string | undefined
    this.msg // string
    this.count // number
  },
})
```

当没有结合 `<script setup>` 使用组合式 API 时，`defineComponent()` 也支持对传递给 `setup()` 的 `prop` 的推导：

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    props.message // string | undefined
  },
})
```

::: tip
`defineComponent()` 也支持对纯 JavaScript 编写的组件进行类型推导。
:::

## 在单文件组件中的用法

要在单文件组件中使用 TypeScript，需要在 `<script>` 标签上加上 `lang="ts"` 的属性。

```vue
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 1,
    }
  },
})
</script>

<template>
  <!-- 启用了类型检查和自动补全 -->
  {{ count.toFixed(2) }}
</template>
```

`lang="ts"` 也可以用于 `<script setup>`：

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
  <!-- 启用了类型检查和自动补全 -->
  {{ count.toFixed(2) }}
</template>
```

### 模板中的 TypeScript

在使用了 `<script lang="ts">` 或 `<script setup lang="ts">` 后，`<template>` 在绑定表达式中也支持 TypeScript。这对需要在模板表达式中执行类型转换的情况下非常有用。

```vue
<script setup lang="ts">
let x: string | number
</script>

<template>
  <!-- 出错，因为 x 可能是字符串 -->
  {{ x.toFixed(2) }}
</template>
```

可以使用内联类型强制转换解决此问题：

```vue {6}
<script setup lang="ts">
let x: string | number
</script>

<template>
  {{ (x as number).toFixed(2) }}
</template>
```
