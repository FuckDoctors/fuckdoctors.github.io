---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/built-ins/keep-alive.md'
---
# KeepAlive

`<KeepAlive>` 是一个内置组件，使我们可以在动态切换多个组件时视情况缓存组件实例。

## 基本用法

在组件基础章节中，我们已经介绍了动态组件的用法，即使用特殊的 `<component>` 元素：

```vue
<component :is="activeComponent" />
```

默认情况下，一个活跃的组件实例会在切走后被卸载。这会导致它丢失其中所有已变化的状态。

我们是的确想要组件能在非活跃状态时保留它们的状态。要解决这个问题，我们可以用内置的 `<KeepAlive>` 组件将这些动态组件包装起来：

```vue
<!-- 非活跃的组件将会被缓存！ -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

::: playground#vue KeepAlive 基本用法
@file App.vue

```vue
<script setup>
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const current = shallowRef(CompA)
</script>

<template>
  <div class="demo">
    <label><input v-model="current" type="radio" :value="CompA" /> A</label>
    <label><input v-model="current" type="radio" :value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current" />
    </KeepAlive>
  </div>
</template>
```

@file CompA.vue

```vue
<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <p>Current component: A</p>
  <span>Count: {{ counter }}</span>
  <button @click="counter++">+</button>
</template>
```

@file CompB.vue

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('')
</script>

<template>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg" />
</template>
```

:::

## 包含 / 排除

默认情况下，`<KeepAlive>` 会缓存内部的任何组件实例。但我们可以通过 `include` 和 `exclude` prop 来定制该行为。
这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组：

```vue
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view">
</KeepAlive>

<!-- 以正则表达式（需要使用 v-bind） -->
<KeepAlive :include="/a|b/">
  <component :is="view">
</KeepAlive>

<KeepAlive :include="['a', 'b']">
  <component :is="view">
</KeepAlive>
```

::: warning
它会根据组件的 `name` 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项。
:::

## 最大缓存实例数

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。
`<KeepAlive>` 的行为在指定了 `max` 后类似一个 LRU 缓存：
如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

```vue
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

## 缓存实例的生命周期

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。
当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。

一个持续存在的组件可以通过 `onActivated()` 和 `onDeactivated()` 注册相应的两个状态的生命周期钩子：

```vue
<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>
```

请注意：

* `onActivated` 在组件挂载时也会调用，并且 `onDeactivated` 在组件卸载时也会调用。
* 这两个钩子不仅适用于 `<KeepAlive>` 缓存的根组件，也适用于缓存树中的后代组件。
