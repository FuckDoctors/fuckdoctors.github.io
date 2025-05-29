---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/built-ins/teleport.md'
---
# Teleport 传送门

`<Teleport>` 是一个内置组件，使我们可以将一个组件的一部分模板“传送”到该组件的 DOM 层次结构之外的 DOM 节点中。

## 基本使用

为 `<Teleport>` 指定的目标 `to` 期望接收一个 CSS 选择器字符串或者一个真实的 DOM 节点。这里我们其实就是让 Vue 去“传送这部分模板片段到 `body` 标签下”。

```vue
<button @click="open = true">
Open Modal
</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

你可以点击下面这个按钮，然后通过浏览器的开发者工具，在 `<body>` 标签下找到模态框元素：

::: tip
`<Teleport>` 挂载时，传送门的 to 目标必须是已经存在于 DOM 之中。
理想情况下，这应该是整个 Vue 应用程序之外的一个元素。
如果目标是由 Vue 呈现的另一个元素，你需要确保在 `<Teleport>` 之前挂载该元素。
:::

## 搭配组件使用

`<Teleport>` 只改变了渲染的 DOM 结构，它不会影响组件间的逻辑关系。
也就是说，如果 `<Teleport>` 包含了一个组件，那么该组件始终和这个使用了 `<Teleport>` 的组件保持逻辑上的父子关系。
传入的 props 和触发的事件也会照常工作。

这也意味着来自父组件的注入也会按预期工作，子组件将在 Vue Devtools 中嵌套在父级组件下面，而不是放在实际内容移动到的地方。

## 禁用传送门

在某些场景中，你们可能需要视情况禁用 `<Teleport>`。
举个例子，我们想要在桌面端将一个组件当做浮层来渲染，但在移动端则当作行内组件。
可以对 `<Teleport>` 动态地传入一个 `disabled` prop 来处理这两种不同情况。

```vue
<Teleport :disabled="isMobile">
  <!-- ... -->
</Teleport>
```

## 同一目标上多个传送门

一个常见的应用场景就是写一个可重用的 `<Modal>` 组件，可能同时存在多个实例。
对于此类场景，多个 `<Teleport>` 组件可以将其内容挂载在同一个目标元素上，
而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。

```vue
<Teleport to="#modals">
  <div>A</div>
</Teleport>

<Teleport to="#modals">
  <div>B</div>
</Teleport>
```

渲染结果：

```html
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```
