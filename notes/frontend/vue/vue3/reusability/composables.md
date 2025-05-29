---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/reusability/composables.md'
---
# 组合式函数

## 什么是“组合式函数”？

在 Vue 应用的概念中，“组合式函数”是一个利用 Vue 组合式 API 来封装和复用**有状态逻辑**的函数。

当构建前端应用时，我们常常需要复用公共任务的逻辑，可以封装为**无状态的逻辑**。有状态逻辑负责管理会随时间而变化的状态。

## 鼠标跟踪器示例

如果我们想在多个组件中复用这个相同的逻辑，我们可以把这个逻辑以一个组合式函数的形式提取到外部文件中。

::: playground#vue 鼠标跟踪器示例
@file App.vue

```vue
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position is at {{ x }}, {{ y }}</template>
```

@file mouse.js

```js
import { onMounted, onUnmounted, ref } from 'vue'

// 按照惯例，组合式函数名以 use 开头
export function useMouse() {
  // 被组合式封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时改变其管理的状态
  const update = event => {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  // expose managed state as return value
  return { x, y }
}
```

:::

如你所见，核心逻辑一点都没有被改变，我们做的只是把它移到一个外部函数中去，并返回需要暴露的状态。
然而更酷的一点是，你还可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。
这使得我们可以像使用多个组件组合成整个应用一样，用多个较小且逻辑独立的单元来组合形成复杂的逻辑。
实际上，这正是我们决定将实现了这一设计模式的 API 集合命名为组合式 API 的原因。

举个例子，我们可以将添加和清除 DOM 事件监听器的逻辑放入一个组合式函数中：

::: playground#vue 鼠标跟踪器示例 嵌套调用
@file App.vue

```vue
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position is at {{ x }}, {{ y }}</template>
```

@file mouse.js

```js
import { onMounted, onUnmounted, ref } from 'vue'
import { useEventListener } from './event.js'

// 按照惯例，组合式函数名以 use 开头
export function useMouse() {
  // 被组合式封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', event => {
    x.value = event.pageX
    y.value = event.pageY
  })

  // expose managed state as return value
  return { x, y }
}
```

@file event.js

```js
import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
```

:::

## 异步状态示例

`useMouse()` 组合式函数没有接收任何参数，因此让我们再来看一个需要接收一个参数的组合式函数示例。
在做异步数据请求时，我们常常需要处理不同的状态：加载中、加载成功和加载失败。

::: playground#vue 异步状态示例
@file App.vue

```vue
<script setup>
import { computed, ref } from 'vue'
import { useFetch } from './useFetch.js'

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1')
const url = computed(() => baseUrl + id.value)

const { data, error, retry } = useFetch(url)
</script>

<template>
  Load todo id:
  <button v-for="i in 5" @click="id = i">
    {{ i }}
  </button>

  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">
    Data Loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>
```

@file useFetch.js

```js
import { isRef, ref, unref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null

    // unref() unwraps potential refs
    fetch(unref(url))
      .then(res => res.json())
      .then(json => (data.value = json))
      .error(err => (error.value = err))
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    // 避免监听器的额外开销
    doFetch()
  }

  return { data, error, retry: doFetch }
}
```

:::

这个版本的 useFetch() 现在同时可以接收静态的 URL 字符串和 URL 字符串的 ref。
当通过 isRef() 检测到 URL 是一个动态 ref 时，它会使用 watchEffect() 启动一个响应式的 effect。
该 effect 会立刻执行一次，并在此过程中将 URL 的 ref 作为依赖进行跟踪。
当 URL 的 ref 发生改变时，数据就会被重置，并重新请求。

## 约定和最佳实践

### 命名

组合式函数约定用驼峰命名法命名，并以 `use` 作为开头。

### 输入参数

尽管其响应性不依赖 ref，组合式函数仍可接收 ref 参数。如果编写的组合式函数会被其他开发者使用，你最好在处理输入参数时兼容 ref 而不只是原始的值。unref() 工具函数会对此非常有帮助：

```js
import { unref } fron 'vue'

function useFeature(maybeRef) {
  // 若 maybeRef 确实是一个 Ref，则返回它的 value
  // 否则，maybeRef 原样返回
  const value = unref(maybeRef)
}
```

如果你的组合式函数在接收 ref 为参数时会产生响应式 effect，请确保使用 `watch()` 显示地监听次 ref, 或者在 `watchEffect()` 中调用 `unref()` 来正确地追踪。

### 返回值

你可能已经注意到了，我们一直在组合式函数中使用 ref() 而不是 reactive()。我们推荐的约定是组合式函数始终返回 `ref` 对象，这样该函数在组件中解构之后仍可以保持响应性：

```js
// x 和 y 是两个 ref 对象
const { x, y } = useMouse()
```

从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，ref 则可以维持这一响应性连接。

如果你更希望以对象 `property` 的形式从组合式函数中返回状态，你可以将要返回的对象用 `reactive()` 包装，这样其中的 ref 会被自动解包，例如：

```js
const mouse = reactive(useMouse())
// mouse.x 链接到了原来的 x ref
console.log(mouse.x)
```

```vue
Mouse position is at: {{ mouse.x }}, {{ mouse.y }}
```

### 副作用

在组合式函数中的确可以执行副作用 (例如：添加 DOM 事件监听器或者请求数据)，但请注意以下规则：

* 如果你在一个应用中使用了服务器端渲染 (SSR)，请确保在后置加载的声明钩子上执行 DOM 相关的副作用，例如：onMounted()。
  这些钩子仅会在浏览器中使用，因此可以确保能访问到 DOM。
* **确保在 onUnmounted() 时清理副作用。**
  举个例子，如果一个组合式函数设置了一个事件监听器，它就应该在 onUnmounted() 中被移除 (就像我们在 useMouse() 示例中看到的一样)。
  当然也可以像之前的 useEventListener() 示例那样，使用一个组合式函数来自动帮你做这些事。

### 使用限制

组合式函数在 `<script setup>` 或 `setup()` 钩子中，应始终被同步地调用。在某些场景下，你也可以在像 `onMounted()` 这样的生命周期钩子中使用他们。

这些是 Vue 得以确定当前活跃的组件实例的条件。有能力对活跃的组件实例进行访问是必要的，以便：

1. 可以在组合式函数中注册生命周期钩子
2. 计算属性和监听器可以连接到当前组件实例，以便在组件卸载时处理掉。

::: tip
`<script setup>` 是唯一在调用 `await` 之后仍可调用组合式函数的地方。编译器会在异步操作之后自动为你恢复当前活跃的组件实例。
:::

### 为更好的代码组织抽取组合式函数

抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。
组合式 API 会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数：

```vue
<script setup>
import { useFeatureA } from './featureA.js'
import { useFeatureB } from './featureB.js'
import { useFeatureC } from './featureC.js'

const { foo, bar } = useFeatureA()
const { baz } = useFeatureB(foo)
const { quz } = useFeatureC(baz)
</script>
```

### 在选项式 API 中使用组合式函数

如果你正在使用选项式 API，组合式函数必须在 `setup()` 中调用。且其返回的绑定必须在 `setup()` 中**返回**，以便暴露给 this 及其模板：

```js
import { useMouse } from './mouse.js'
import { useFetch } from './fetch.js'

export default {
  setup() {
    const { x, y } = useMouse()
    const { data, error } = useFetch('xx')

    return { x, y, data, error }
  },
  mounted() {
    // setup 中暴露的 property，可以通过 this 访问
    console.log(this.x)
  },
}
```
