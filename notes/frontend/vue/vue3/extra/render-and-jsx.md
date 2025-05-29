---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/extra/render-and-jsx.md'
---
# 渲染函数 & JSX

在绝大多数情况下，Vue 推荐使用模板语法来搭建 HTML。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时渲染函数就派上用场了。

## 基本用法

### 创建 VNodes

Vue 提供了一个 `h()` 函数用于创建 vnodes:

```js
import { h } from 'vue'

const vnode = h(
  'div', // type
  { id: 'foo', class: 'bar' }, // props
  [
    // children
  ]
)
```

`h()` 函数的使用非常灵活：

```js
// 除了类型必填以外，其他的参数都是可选的
h('div')
h('div', { id: 'foo' })

// attribute 和 property 都能在 props 中书写
// Vue 会自动将他们分配到正确的位置
h('div', { class: 'bar', innerHTML: 'hello' })

// props modifiers such as .prop and .attr can be added
// with '.' and `^' prefixes respectively
h('div', { '.name': 'some-name', '^width': '100' })

// 类与样式可以像在模板中一样
// 用数组或对象的形式书写
h('div', { class: [foo, { bar }], style: { color: 'red' } })

// 事件监听器应以 onXxx 的形式书写
h('div', { onClick: () => {} })

// children 可以是一个字符串
h('div', { id: 'foo' }, 'hello')

// 没有 props 时可以省略不写
h('div', 'hello')
h('div', [h('span', 'hello')])

// children 数组可以同时包含 vnodes 与字符串
h('div', ['hello', h('span', 'hello')])
```

### 声明渲染函数

当组合式 API 与模板一起使用时，`setup()` 钩子的返回值是用于暴露数据给模板。然而当我们使用渲染函数时，可以直接把渲染函数返回：

```js
import { h, ref } from 'vue'

export default {
  props: {
    // props
  },
  setup(props) {
    const count = ref(0)

    // 返回渲染函数
    return () => h('div', props.msg + count.value)
  },
}
```

除了返回一个 `vnode`，你还可以返回字符串或数组：

```js
import { h } from 'vue'

export default {
  setup() {
    // 使用数组返回多个根节点
    return () => [h('div'), h('div'), h('div')]
  },
}
```

::: tip
请确保返回的是一个**函数而**不是一个值！setup() 函数在每个组件中只会被调用一次，而返回的渲染函数将会被调用多次。
:::

### Vnodes 必须唯一

```js
function render() {
  const p = h('p', 'hi')
  return h('div', [
    // 啊哦，重复的 vnodes 是无效的
    p,
    p,
  ])
}
```

如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。
比如下面的这个渲染函数就可以完美渲染出 20 个相同的段落：

```js
function render() {
  return h(
    'div',
    Array.from({ length: 20 }).map(() => {
      return h('p', 'hi')
    })
  )
}
```

## JSX / TSX

[JSX](https://facebook.github.io/jsx/) 是 JavaScript 的一个类似 XML 的扩展，有了它，我们可以用以下的方式来书写代码：

```jsx
const vnode = <div>hello</div>
```

在 JSX 表达式中，使用大括号来嵌入动态值：

```js
const vnode = (
  <div id={dynamicId}>
    Hello,
    {username}
  </div>
)
```

### 渲染函数案例

#### `v-if`

模板:

```vue
<div>
  <div v-if="ok">yes
</div>

  <span v-else>
no
</span>
</div>
```

渲染函数 / JSX 语法：

```js
h('div', [ok.value ? h('div', 'yes') : h('span', 'no')])
```

```jsx
<div>{ok.value ? <div>yes</div> : <span>no</span>}</div>
```

#### `v-for`

模板：

```vue
<ul>
  <li v-for="{ id, text } in items" :key="id">{{ text }}</li>
</ul>
```

等价于使用如下渲染函数 / JSX 语法：

```js
h(
  'ul',
  items.value.map(({ id, text }) => {
    return h('li', { key: id }, text)
  })
)
```

```jsx
<ul>
  {items.value.map(({ id, text }) => {
    return <li id={id}>{text}</li>
  })}
</ul>
```

#### `v-on`

以 `on` 开头，并跟着大写字母的 `props` 会被当作事件监听器。比如，`onClick` 与模板中的 `@click` 等价。

```js
h(
  'button',
  {
    onClick(event) {
      // ...
    },
  },
  'click me'
)
```

```jsx
<button
  onClick={event => {
    // ...
  }}
>
  click me
</button>
```

#### 事件修饰符

对于 \`\`.passive`、`.capture`和`.once\` 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面：

实例：

```js
h('input', {
  onClickCapture() {
    // 捕捉模式中的监听器
  },
  onKeyupOnce() {
    // 只触发一次
  },
  onMouseoverOnceCapture() {
    // 单次 + 捕捉
  },
})
```

```jsx
<input
  onClickCapture={() => {}}
  onKeyupOnce={() => {}}
  onMouseoverOnceCapture={() => {}}
/>
```

对于事件和按键修饰符，可以使用 `withModifiers` 函数：

```js
import { withModifiers } from 'vue'

h('div', {
  onClick: withModifiers(() -> {}, ['self'])
})
```

```jsx
<div onClick={withModifiers(() => {}, ['self'])}></div>
```

### 组件

在给组件创建 `vnode` 时，传递给 `h()` 函数的第一个参数应当是组件的定义。
这意味着使用渲染函数时不再需要注册组件了 —— 可以直接使用导入的组件：

```js
import Foo from './Foo.vue'
import Bar from './Bar.jsx'

function render() {
  return h('div', [h(Foo), h(Bar)])
}
```

```jsx
function render() {
  return (
    <div>
      <Foo />
      <Bar />
    </div>
  )
}
```

不管是什么类型的文件，只要从中导入的是有效的 Vue 组件，`h` 就能正常运作。

动态组件在渲染函数中也可直接使用：

```js
import Foo from './Foo.vue'
import Bar from './Bar.jsx'

function render() {
  return ok.value ? h(Foo) : h(Bar)
}
```

```jsx
function render() {
  return ok.value ? <Foo /> : <Bar />
}
```

如果一个组件是用名字注册的，不能直接导入 (例如，由一个库全局注册)，可以使用 `resolveComponent()` 来解决这个问题。

### 渲染插槽

在渲染函数中，插槽可以通过 `setup()` 的上下文来访问。每个 `slots` 对象中的插槽都是一个返回 `vnodes` 数组的函数：

```js
export default {
  props: ['message'],
  setup(props, { slots }) {
    return () => [
      // 默认插槽
      // <div><slot /></div>
      h('div', slots.default()),

      // 具名插槽
      // <div><slot name="footer" :text="message" /></div>
      h(
        'div',
        slots.footer({
          text: props.message,
        })
      ),
    ]
  },
}
```

等价 JSX 语法：

```jsx
// 默认插槽
<div>{slots.default()}</div>

// 具名插槽
<div>{slots.footer({ text: message })}</div>
```

### 传递插槽

我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，
插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。

```js
// 单个默认插槽

h(MyComponent, () => 'hello')

// 具名插槽
// 注意 null 是必须的
// 以避免 slot 对象被当成 props 处理
h(MyComponent, null, {
  default: () => 'default slot',
  foo: () => h('div', 'foo'),
  bar: () => [h('span', 'one'), h('span', 'two')],
})
```

等价 JSX 语法：

```jsx
// 默认插槽
<MyComponent>
  { () => 'hello' }
</MyComponent>

// 具名插槽
<MyComponent>
  {{
    default: () => 'default slot',
    foo: () => <div>foo</div>,
    bar: () => [
      <span>one</span>,
      <span>two</span>
    ]
  }}
</MyComponent>
```

插槽以函数的形式传递使得它们可以被子组件懒调用。这能确保它被注册为子组件的依赖关系，而不是父组件。这使得更新更加准确及有效。

### 内置组件

诸如 `KeepAlive`、`Transition`、`TransitionGroup`、`Teleport` 和 `Suspense` 等内置组件在渲染函数中必须导入才能使用：

```js
import { KeepAlive, Teleport, Transition, TransitionGroup, h } from 'vue'

export default {
  setup() {
    return () => h(Transition, { mode: 'out-in' } /* ... */)
  },
}
```

### `v-model`

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 props:

```js
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h(SomeComponent, {
        modelValue: props.modelValue,
        'onUpdate:modelValue': value => emit('update:modelValue', value),
      })
  },
}
```

### 自定义指令

可以使用 `withDirectives` 将自定义指令应用于 VNode:

```js
import { h, withDirectives } from 'vue'

// 自定义指令
const pin = {
  mounted() {
    // ...
  },
  updated() {
    // ...
  },
}

// <div v-pin:top.animate="200"></div>
const vnode = withDirectives(h('div'), [[pin, 200, 'top', { animate: true }]])
```

当一个指令是以名称注册并且不能被直接导入时，可以使用 `resolveDirective` 函数来解决这个问题。

### 函数式组件

函数式组件是自身没有任何状态的组件的另一种形式。它们在渲染过程中不会创建组件实例，并跳过常规的组件生命周期。

我们使用的是一个简单函数，而不是一个选项对象，来创建函数式组件。该函数实际上就是该组件的 `render` 函数。

函数式组件的签名与 `setup()` 钩子相同：

```js
function MyComponent(props, { slots, emit, attrs }) {
  // ...
}
```

大多数常规组件的配置选项在函数式组件中都不可用。然而我们还是可以把 `props` 和 `emits` 作为 property 加入，以达到定义它们的目的：

```js
MyComponent.props = ['value']
MyComponent.emits = ['click']
```

如果这个 `props` 选项没有被定义，那么被传入函数的 `props` 对象就会像 `attrs` 一样会包含所有 attribute。
除非指定了 `props` 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。

函数式组件可以像普通组件一样被注册和消费。如果你将一个函数作为第一个参数传入 `h`，它将会被当作一个函数式组件来对待。
