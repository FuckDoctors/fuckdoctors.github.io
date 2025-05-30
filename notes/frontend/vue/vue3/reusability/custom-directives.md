---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/reusability/custom-directives.md'
---
# 自定义指令

## 介绍

除了 Vue 内置的一系列指令 (比如 v-model 或 v-show) 之外，Vue 还允许你注册自定义的指令。

我们已经介绍了两种在 Vue 中重用代码的方式：**组件**和**组合式函数**。组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑。另一方面，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

一个自定义指令被定义为一个包含类似于组件的生命周期钩子的对象。钩子接收指令绑定到的元素。下面是一个自定义指令的例子，当一个 input 元素被 Vue 插入到 DOM 中后，它将被聚焦：

::: playground#vue v-focus 指令
@file App.vue

```vue
<script>
const focus = {
  mounted: el => el.focus(),
}

export default {
  directives: {
    // 注册指令，在模板中启用 v-focus
    focus,
  },
}
</script>

<template>
  <input v-focus />
</template>
```

:::

::: playground#vue 组合式 API v-focus 指令
@file App.vue

```vue
<script setup>
// enables v-focus in templates
const vFocus = {
  mounted: el => el.focus(),
}
</script>

<template>
  <input v-focus />
</template>
```

:::

和组件类似，自定义指令在模板中使用前必须先注册。在上面的例子中，我们使用 directives 选项完成了指令的局部注册。

将一个自定义指令全局注册到应用层级也是一种通用的做法：

```js
const app = createApp({})

// 全局注册，使 v-focus 在所有组件中都可用
app.directive('focus', {
  // ...
})
```

::: tip
只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。应该尽可能地通过像 `v-bind` 这样的内置指令以使用声明式的模板，因为这更高效，且对服务端渲染也更友好。
:::

## 指令钩子

一个指令的定义对象可以提供几种钩子函数 (都是可选的)：

```js
const myDirective = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode, preVnode) {
    // see below for details on arguments
  },
  // called right before the element is inserted into the DOM.
  beforeCreated() {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted() {},
  // called before the parent component is updated
  beforeUpdate() {},
  // called before the parent component is updated
  // all of its children have updated
  updated() {},
  // called before the parent component is unmounted
  beforeUnmounted() {},
  // called when the parent component is unmounted
  unmounted() {},
}
```

### 钩子参数

指令的钩子会传递以下几种参数：

* `el`: 指令绑定到的元素。这可以用于直接操作 DOM。
* `binding`: 一个对象，包含以下 property。
  * `value`: 传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值是 2。
  * `oldValue`: 之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
  * `arg`: 传递给指令的参数（如果有的话）。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
  * `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
  * `instance`：使用该指令的组件实例
  * `dir`：指令的定义对象。
* `vnode`: 代表绑定元素的底层 VNode。
* `preVnode`: 之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。

举个例子，像下面这样使用指令：

```vue
<div v-example.foo.bar="baz" />
```

`binding` 参数会是一个这样的对象：

```js
{
  arg: 'foo',
  modifiers: { bar: true },
  value: // baz 的值
  oldValue: // 上一次更新时 baz 的值
}
```

和内置指令类似，自定义指令的参数也可以是动态的：

```vue
<div v-example:[arg]="value" />
```

里指令的参数会基于组件状态 `arg` 属性响应式地更新。

::: note
除了 `el` 外，你应该将这些参数都视为只读的，并一律不更改它们。若你需要在不同的钩子间共享信息，推荐通过元素的 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 实现
:::

### 简化形式

对于自定义指令来说，需要在 `mounted` 和 `updated` 上实现相同的行为、又并不关心其他钩子的情况很常见。此时我们可以将指令定义成一个下面这样的函数：

```vue
<div v-color="color"></div>
```

```js
app.directive('color', (el, binding) => {
  // this will be called for both `mounted` and `updated`
  el.style.color = binding.value
})
```

### 对象字面量

如果你的指令需要多个值，你可以向它传递一个 JavaScript 对象字面量。请记住，指令也可以接收任何合法的 JavaScript 表达式。

```vue
<div v-demo="{ color: 'white', text: 'hello' }"></div>
```

```js
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // "white"
  console.log(binding.value.text) // "hello"
})
```

### 在组件上使用

当在组件上使用自定义指令时，它会始终应用于组件的根节点，和[透传 attributes](https://staging-cn.vuejs.org/guide/components/attrs.html) 类似。

```vue
<MyComponent v-demo="test" />
```

```vue
<!-- MyComponent 模板 -->
<div>
 <!-- v-demo 指令会被应用在此处 -->
  <span>My Component content</span>
</div>
```

需要注意的是组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 `v-bind="$attrs"` 来传递给一个不同的元素。总而言之，**不推荐**在组件上使用自定义指令。
