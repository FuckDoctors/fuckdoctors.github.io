---
url: 'https://zhaobc.site/notes/frontend/vue/vue3-book/chapter01.md'
---
# 第 1 章 权衡的艺术

## 1.1 命令式和声明式

从范式上来看，视图层框架通常分为命令式和声明式。

* 命令式**关注过程**
* 声明式**关注结果**

早年流行的 jQuery 是典型的命令式框架，Vue.js 是声明式框架。

例如，我们把下面的这段话翻译成对应的代码：

```txt
- 获取 id 为 app 的 div 标签
- 它的文本内容为 hello world
- 为其绑定点击事件
- 当点击时弹出提示：ok
```

jQuery 代码：

```js
$('#app')
  .text('hello world')
  .on('click', () => {
    alert('ok')
  })
```

原生 JavaScript 代码：

```js
const div = document.querySelector('#app')
div.innerText = 'hello world'
div.addEventListener('click', () => {
  alert('ok')
})
```

以上代码本身是在描述“做事的过程”。

Vue.js 代码：

```vue
<div
  @click="
    () => {
      alert('ok')
    }
  "
>hello world</div>
```

可以看到，我们提供的是一个“结果”，至于如何实现这个“结果”，我们并不关心。实现这个“结果”，是 Vue.js 帮我们实现的，它内部是**命令式**的，而暴露给用户的却更加**声明式**。

## 1.2 性能与可维护性的权衡

命令式和声明式各有优缺点，在框架设计方面，则体现在性能与可维护性的权衡。这里先抛出一个结论：**声明式代码的性能不优于命令式代码的性能**。

**毕竟框架本省就是封装了命令式代码才实现了面向用户的声明式**。

## 1.3 虚拟 DOM 的性能到底如何

性能：**声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗**

如果我们能够**最小化找出差异的性能消耗**，就可以让声明式代码的性能无限接近命令式的性能。

涉及 DOM 的运算要远比 JavaScript 层面的计算性能差。

虚拟 DOM 在创建页面时的性能：**创建 JavaScript 对象的计算量 + 创建真实 DOM 的计算量**

虚拟 DOM 在更新页面时的性能：**创建新的 JavaScript 对象 + Diff + 渲染 HTML 字符串**

## 1.4 运行时和编译时

设计框架的三种选择：

* 纯运行时
* 运行时 + 编译时
* 编译时

设计一个运行时框架，为它提供一个 Render 函数，Render 函数根据用户提供的树形结构的数据对象，渲染成 DOM 元素。

规定树形结构的数据对象如下：

```js
const obj = {
  tag: 'div',
  children: [
    {
      tag: 'span',
      children: 'hello world',
    },
  ],
}
```

每个对象有两个属性：

* tag 代表标签名称
* children 即可以是一个数据组（代表子节点），也可以直接是一个文本（代表文本节点）

Render 函数如下：

```js
function Render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    // 数组，递归调用Render，使用el作为root参数
    obj.children.forEach(child => Render(child, el))
  }

  //  将元素添加到root
  root.appendChild(el)
}
```

使用

```js
Render(obj, document.body)
```

下面内容为代码演示结果

:::normal-demo 运行时 Render 函数示例

```html
<div id="code-demo-render-basic"></div>
```

```js
const obj = {
  tag: 'div',
  children: [
    {
      tag: 'span',
      children: 'hello world',
    },
  ],
}

function Render(obj, root) {
  const el = window.document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = window.document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    // 数组，递归调用Render，使用el作为root参数
    obj.children.forEach(child => Render(child, el))
  }

  //  将元素添加到root
  root.appendChild(el)
}

Render(obj, window.document.querySelector('#code-demo-render-basic'))
```

:::

::: warning
本主题的代码演示采用了 `ShadowRoot` 方式，将代码演示和文档的主 DOM 树分开渲染。
所以，代码中的 `document` 会被定义为 演示代码块的一个 `ShadowRoot` \[^shadowroot]，
`document.createElement` 会报错，没法直接显示代码演示的结果。

本例直接使用了 `window.document` 来强制使用文档的主 DOM ，
为了能看到输出结果，在代码演示的外面，加了一个 id 为 `code-demo-render-basic` 的 `div`。
:::

上面的 Render 函数虽然可以根据树形结构数据渲染内容，但是手写树形结构数据太麻烦，而且不直观，能够用 HTML 标签的方式来描述就好了。

为了满足这个需求，考虑加入编译手段，把 HTML 标签编译成树形结构就可以继续使用 Render 函数了。

于是，可以考虑写一个 Compiler 函数，配合 Render 函数使用。这样我们的框架就编程了**运行时 + 编译时**。

## 1.5 总结

* 讨论了声明式和命令式的区别
* 讨论了虚拟 DOM 的性能
  声明式的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗
* 介绍了运行时和编译时，并且可以看出 Vue.js 3 是一个编译时 + 运行时的框架

\[^shadowroot]: Shadow DOM API 的 [ShadowRoot](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot) 接口是一个 DOM 子树的根节点, 它与文档的主 DOM 树分开渲染。
