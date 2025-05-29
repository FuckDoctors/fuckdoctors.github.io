---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/extra/reactivity-transform.md'
---
# 响应性语法糖

响应性语法糖目前是一个实验性功能，默认是禁用的，需要显式选择使用。

Vue 的响应性语法糖是一个编译时的转换过程，使我们可以像这样书写代码：

## ref vs. 响应式变量

::: playground#vue 响应性语法糖

@file App.vue

```vue
<script setup>
let count = $ref(0)
console.log(count)
function increment() {
  count++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::

这里的这个 `$ref()` 方法是一个编译时的宏命令：它不是一个真实的、在运行时会调用的方法。
而是用作 Vue 编译器的标记，表明最终的 `count` 变量需要是一个响应式变量。

每一个会返回 `ref` 的响应性 API 都有一个相对应的、以 `$` 为前缀的宏函数。包括以下这些 API：

* `ref` -> `$ref`
* `computed` -> `$computed`
* `shallowRef` -> `$shalloRef`
* `customRef` -> `$customRef`
* `toRef` -> `$toRef`

当启用响应性语法糖时，这些宏函数都是全局可用的、无需手动导入。
但如果你想让它更明显，你也可以选择从 `vue/macros` 中引入它们：

```js
import { $ref } from 'vue/macros'

const count = $ref(0)
```

## 通过 `$()` 结构

我们常常会让一个组合函数返回一个含数个 `ref` 的对象，然后解构得到这些 `ref`。对于这种场景，响应性语法糖提供了一个 `$()` 宏：

::: playground#vue 通过 `$()` 结构

@file App.vue

```vue
<script setup>
import { ref } from 'vue'

import { useMouse } from '@vueuse/core'

const { x, y } = $(useMouse())

console.log('useMouse', x, y)

function myCreateRef(num) {
  return ref(num)
}

const count = $(myCreateRef(0))
console.log('count', count)
</script>

<template>
  <div>请查看控制台。</div>
</template>
```

@import

```json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/dist/index.esm.js"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::

## 响应式 props 解构

现在的 `<script setup>` 中对 `defineProps` 宏的使用有两个痛点：

1. 和 `.value` 类似，为了保持响应性，你需要以 `props.x` 的方式访问这些 prop。
   这意味着你不能通过结构 `defineProps`，因为得到的变量不是响应式的，不会更新。
2. 使用基于类型的 `props` 声明时，无法方便地声明这些 prop 的默认值。
   为此，有了 `withDefaults()` API，但使用起来不方便。

有了响应式语法糖，我们就可以在 `defineProps` 时，使用响应式变量相同的结构写法了：

::: playground#vue 响应式 props 解构

@file App.vue

```vue
<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'

interface Props {
  msg: string
  count?: number
  foo?: string
}

// 此次的 Props 解构，会自动编译成 普通的 props 定义，指定默认值
const {
  msg,
  // 设置默认值
  count = 1,
  // 解构时命别名
  // 这里我们将 props.foo 命名未 bar
  foo: bar,
} = defineProps<Props>()

watchEffect(() => {
  console.log(msg, count, bar)
})
</script>

<template>
  <div>请查看编译后的 JS.</div>
</template>
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::

## 保持在函数间的响应性

虽然响应式变量使我们可以不再受 `.value` 的困扰，但它也使得我们在函数间传递响应式变量时可能造成**响应性丢失**的问题。
这可能在以下两种场景中出现：

### 以参数形式传入函数

```js
function trackChange(x: Ref<number>) {
  watch(x, x => {
    console.log('x 改变了！')
  })
}

const count = $ref(0)
trackChange(count) // 无效！
```

上面的例子不会正常工作，因为代码被编译成了这样：

```js
const count = ref(0)
trackChange(count.value)
```

这里的 `count.value` 是以一个 `number` 类型值的形式传入，然而 trackChange 期望接收的是一个真正的 `ref`。
要解决这个问题，可以在将 count 作为参数传入之前，用 `$$()` 包装：

```diff
let count = $ref(0)
- trackChange(count)
+ trackChange($$(count))
```

上面的代码将被编译成：

```js
import { ref } from 'vue'

const count = ref(0)
trackChange(count)
```

我们可以看到，`$$()` 的效果就像是一个转义标识：`$$()` 中的响应式变量不会追加上 `.value`。

### 作为函数返回值

如果将响应式变量直接放在返回值表达式中会丢失掉响应性：

```js
function useMouse() {
  const x = $ref(0)
  const y = $ref(0)

  // 监听 mousemove 事件

  // 不起效！
  return {
    x,
    y,
  }
}
```

上面的语句将被翻译为：

```js
return {
  x: x.value,
  y: y.value,
}
```

为了保持响应性，我们需要返回的是真正的 `ref`，而不是返回时 `ref` 内的值。

我们还是可以使用 `$$()` 来解决这个问题。
在这个例子中，`$$()` 可以直接用在要返回的对象上，
`$$()` 调用时任何对响应式变量的引用都会保留为对相应 `ref` 的引用：

```js
function useMouse() {
  const x = $ref(0)
  const y = $ref(0)

  // 监听 mousemove 事件

  // 修改后起效
  return $$({
    x,
    y,
  })
}
```

### 在已解构的 prop 上使用 `$$()`

`$$()` 适用于已解构的 prop，因为它们也是响应式的变量。编译器会高效地通过 `toRef` 来做转换：

```js
const { count } = defineProps<{ count: number }>()

passAsRef($$(count))
```

编译结果为：

```js
setup(props) {
  const __props_count = toRef(props, 'count')
  passAsRef(__props_count)
}
```

## 显式启用

响应性语法糖目前默认是关闭状态，需要你显式选择[启用](https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in)。
