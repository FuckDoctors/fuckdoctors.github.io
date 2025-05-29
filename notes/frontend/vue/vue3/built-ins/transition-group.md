---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/built-ins/transition-group.md'
---
# TransitionGroup

`<TransitionGroup>` 是一个内置组件，设计用于呈现一个列表中的元素或组件的插入、移除和顺序改变的动画效果。

## 和 `<Transition>` 的区别

`<TransitionGroup>` 支持和 `<Transition>` 基本相同的 prop、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：

* 默认情况下，它不会渲染一个包装器元素。但你可以通过传入 `tag` 属性来指定一个元素作为包装器元素来渲染。
* 过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换。
* 其中的元素**总是必须**有一个独一无二的 `key` attribute。
* CSS 过渡 class 会被应用在其中的**每一个元素**上，**而不是**这个组的容器上。

## 进入 / 离开过渡

这里是 `<TransitionGroup>` 对一个 `v-for` 列表应用进入 / 离开过渡的示例：

```vue
<TransitionGroup name="list" tag="ul">
  <li v-for="item in list" :key="item">{{ item }}</li>
</TransitionGroup>
```

```css
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
```

::: playground#vue 简单列表过渡
@file App.vue

```vue
<script setup>
import { ref } from 'vue'
import { shuffle as _shuffle } from 'lodash-es'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function shuffle() {
  items.value = _shuffle(items.value)
}

function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <div class="actions">
    <button @click="insert">随机插入</button>
    <button @click="reset">重置</button>
    <button @click="shuffle">打乱</button>
  </div>

  <TransitionGroup tag="ul" name="fade" class="container">
    <li v-for="item in items" :key="item" class="item">
      {{ item }}
      <button class="btn" @click="remove(item)">x</button>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.container {
  position: relative;
  padding: 5px;
  list-style: none;
}
.container .item {
  display: block;
  list-style-type: none;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border: gray 1px dashed;
  background: #f3f3f3;
  box-sizing: border-box;
}
.container .item .btn {
  margin-top: 3px;
  float: right;
}
.container .item::after {
  content: '';
  clear: both;
}

/* 对移动中的元素应用的过渡 */
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.fade-leave-active {
  position: absolute;
}
</style>
```

@import

```json
{
  "imports": {
    "lodash-es": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js"
  }
}
```

:::

## 交错的列表过渡

如果通过 data attribute 用 JavaScript 来执行过渡时，那么我们也可以实现列表中的交错过渡。
首先，我们把某一项的索引作为 DOM 元素上的一个 data attribute 呈现出来。

```vue {11}
<TransitionGroup
  tag="ul"
  :css="false"
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @leave="onLeave"
>
  <!-- prettier-ignore-attribute -->
  <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
    {{ item.msg }}
  </li>
</TransitionGroup>
```

接着，在 JavaScript 钩子中，我们基于这个 data attribute 对该元素执行一个延迟动画：

```js {5}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done,
  })
}
```

::: playground#vue 交错的列表过渡
@file App.vue

```vue
<script setup>
import { computed, ref } from 'vue'
import gsap from 'gsap'

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
]

const query = ref('')

const computedList = computed(() => {
  return list.filter(item => item.msg.toLowerCase().includes(query.value))
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done,
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done,
  })
}
</script>

<template>
  <input v-model="query" />
  <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li
      v-for="(item, index) in computedList"
      :key="item.msg"
      :data-index="index"
    >
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>
```

@import

```json
{
  "imports": {
    "gsap": "https://unpkg.com/gsap?module"
  }
}
```

:::
