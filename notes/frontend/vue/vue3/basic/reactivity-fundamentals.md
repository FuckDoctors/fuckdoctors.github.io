---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/basic/reactivity-fundamentals.md'
---
# 响应式基础

## 声明响应式状态

我们可以使用 reactive() 函数创建一个响应式对象或数组：

::: vue-playground reactive 示例
@file App.vue

```vue
<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment,
    }
  },
}
</script>

<template>
  <button @click="increment">{{ state.count }}</button>
</template>
```

:::

### `<script setup>`

在 `setup()` 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。
当使用单文件组件（SFC）时，我们可以使用 `<script setup>` 来大幅度地简化代码。

::: vue-playground  示例

@file App.vue

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">{{ state.count }}</button>
</template>
```

:::

### DOM 更新时机

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。
相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 `nextTick()` 这个全局 API。

### 深层响应性

在 Vue 中，状态都是默认深层响应式的。

你也可以直接创建一个浅层响应式对象 `shallowReactive`。它们仅在顶层具有响应性，一般仅在某些特殊场景中需要。

### reactive() 的局限性

`reactive()` API 有两条限制：

1. 仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。
2. 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失。
   同时这也意味着当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，我们会失去响应性。

## 用 `ref()` 定义响应式变量

`reactive()` 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。
为此，Vue 提供了一个 `ref()` 方法来允许我们创建可以使用任何值类型的响应式 `ref`。

`ref()` 将传入参数的值包装为一个带 `.value` 属性的 `ref` 对象：

::: vue-playground ref 示例

@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

:::

```js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

和响应式对象的属性类似，`ref` 的 `.value` 属性也是响应式的。
同时，当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`。

一个包含对象类型值的 `ref` 可以响应式地替换整个对象：

```js
const objectRef = ref({ count: 0 })

// 这是响应式的替换
objectRef.value = { count: 1 }
```

`ref` 被传递给函数或是从一般对象上被解构时，不会丢失响应性：

```js
const obj = {
  foo: ref(1),
  bar: ref(2),
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)

// 仍然是响应式的
const { foo, bar } = obj
```

简言之，`ref()` 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。

这个功能很重要，因为它经常用于将逻辑提取到 **组合函数** 中。

### ref 在模板中的解包

当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 `.value`。

### ref 在响应式对象中的解包

当一个 `ref` 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样：

```js
const count = ref(0)
const state = reactive({ count })

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```

如果将一个新的 `ref` 赋值给一个关联了已有 `ref` 的属性，那么它会替换掉旧的 `ref`：

```js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
```

只有当嵌套在一个深层响应式对象内时，才会发生 `ref` 解包。当其作为浅层响应式对象 `shallowReactive` 的属性被访问时不会解包。

### 数组和集合类型的 ref 解包

跟响应式对象不同，当 `ref` 作为响应式数组或像 `Map` 这种原生集合类型的元素被访问时，不会进行解包。

```js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```
