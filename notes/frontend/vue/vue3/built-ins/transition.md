---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/built-ins/transition.md'
---
# Transition

Vue 提供了两个内置组件，可以帮助你制作基于状态变化的过渡和动画：

* `Transition` 会在一个元素或组件进入和离开 DOM 时应用动画。
* `TransitionGroup` 会在一个元素或组件被插入到 `v-for` 列表中，或是被移动或从其中移除时应用动画。

除了这两个组件，我们也可以通过其他技术手段来应用动画，比如切换 CSS class 或用状态绑定样式来驱动动画。

## `Transition` 组件

它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：

* 由 `v-if` 所带来的条件渲染
* 由 `v-show` 所带来的条件显示
* 由特殊元素 `<component>` 切换的动态组件

最基本的示例：

::: playground#vue transistion 示例
@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
```

:::

::: tip
`<Transition>` 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。
:::

当一个 `Transition` 组件中的元素被插入或移除时，会发生下面这些事情：

1. Vue 会自动检查目标元素是否应用了 CSS 过度或动画。如果是，则一些 CSS 过度 class 会在适当的时机被添加或移除。
2. 如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。
3. 如果没有探测到 CSS 过度或动画，没有提供 JavaScript 钩子，那么 DOM 的插入，删除操作将在浏览器的下一个动画帧上进行。

## 基于 CSS 的过渡

### CSS 过渡 class

一共有 6 个应用于进入与离开过渡效果的 CSS class。

```mermaid
stateDiagram-v2
  direction LR

  state Enter {
    direction LR
    Opacity#58;&nbsp;0<br/><br/>v#45;enter#45;from --> Opacity#58;&nbsp;1<br/><br/>v#45;enter#45;to : v#45;enter#45;active
  }

  state Leave {
    direction LR
    Opacity#58;&nbsp;1<br/><br/>v#45;leave#45;from --> Opacity#58;&nbsp;0<br/><br/>v#45;leave#45;to : v#45;leave#45;active
  }
```

::: tip mermaid escapse
Numbers given are base 10, so `#` can be encoded as `#35;`. It is also supported to use HTML character names.

Because semicolons can be used instead of line breaks to define the markup, you need to use `#59;` to include a semicolon in message text.

冒号 `:` = `#58;`, 空格 `&nbsp;`，换行 `<br />`，减号 `-` = `#45;`
:::

1. `v-enter-from`：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。
2. `v-enter-active`：进入动画的生效状态。应用于整个进入动画阶段。
   在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。
3. `v-enter-to`：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 `v-enter-from` 被移除的同时)，在过渡或动画完成之后移除。
4. `v-leave-from`：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。
5. `v-leave-active`：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。
   这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。
6. `v-leave-to`：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 `v-leave-from` 被移除的同时)，在过渡或动画完成之后移除。

`v-enter-active` 和 `v-leave-active` 给我们提供了为进入和离开动画指定不同速度曲线的能力。

### 为过渡命名

可以通过一个 `name` 属性来声明一种过渡：

```vue
<Transition name="fade">
...
</Transition>
```

对于一个已命名的过渡，它的过渡相关 class 会以其名字而不是 `v` 作为前缀。
比如，上方例子中被应用的 class 将会是 `fade-enter-active` 而不是 `v-enter-active`。这个 "fade" 过渡的 class 应该是这样：

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

### CSS 的 transition

`<Transition>` 一般都会搭配[原生 CSS 过渡](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)一起使用，这个 transition CSS 属性是一个简写形式，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和[速度曲线](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)。

下面是一个更高级的例子，它使用了不同的持续时间和速度曲线来过渡多个 property：

::: playground#vue CSS Transition
@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle Slide + Fade</button>
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
```

:::

### CSS 的 animation

[原生 CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)和 CSS trasition 的应用方式基本上是相同的，只有一点不同，那就是 `*-enter-from` 不是在元素插入后立即移除，而是在一个 `animationend` 事件触发时被移除。

对于大多数的 CSS 动画，我们可以简单地在 `*-enter-active` 和 `*-leave-active` class 下声明它们。下面是一个示例：

::: playground#vue CSS animation
@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

:::

### 自定义过渡 class

你也可以向 `<Transition>` 传递以下的 props 来指定自定义的过渡 class：

* `enter-from-class`
* `enter-active-class`
* `enter-to-class`
* `leave-from-class`
* `leave-active-class`
* `leave-to-class`

你传入的这些 class 会覆盖相应阶段的默认 class 名。这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 [Animate.css](https://daneden.github.io/animate.css/)：

::: playground#vue 自定义过渡 class
@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition
    name="custom-class"
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">hello</p>
  </Transition>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
</style>
```

:::

### 同时使用 transition 和 animation

Vue 需要附加事件侦听器，以便知道过渡何时结束。可以是 `transitionend` 或 `animationend`，这取决于你所应用的 CSS 规则。
如果你仅仅使用二者的其中之一，Vue 可以自动探测到正确的类型。

然而在某些场景中，你或许想要在同一个元素上同时使用它们两个。
举个例子，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡。
此时你需要显式地传入 type prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 `animation` 或 `transition`：

```vue
<Transition type="animation">
...
</Transition>
```

### 深层级过渡与显示过渡时间

尽管过渡 class 仅能应用在 `<Transition>` 的直接子元素上，我们还是可以使用深层级的 CSS 选择器，使深层级的元素发生过渡。

```vue
<Transition name="nested">
  <div v-if="show" class="outer">
    <div class="inner">
      Hello
    </div>
  </div>
</Transition>
```

```css
/* 应用于嵌套元素的规则 */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
```

我们甚至可以在嵌套元素上添加一个过渡延迟，这会创建一个交错进入动画序列：

```css {3}
/* 延迟嵌套元素的进入以获得交错效果 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
```

然而，这会带来一个小问题。默认情况下，`<Transition>` 组件会通过监听过渡根元素上的**第一个** `transitionend` 或者 `animationend` 事件来尝试自动判断过渡何时结束。
而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成。

在这种情况下，你可以通过向 `<Transition>` 组件传入 `duration` 属性来显式指定过渡的持续时间 (以毫秒为单位)。总持续时间应该匹配延迟加上内部元素的过渡持续时间：

```vue
<Transition :duration="550">
...
</Transition>
```

如果有必要的话，你也可以用对象的形式传入，分开指定进入和离开所需的时间：

```vue
<Transition :duration="{ enter: 500, leave: 800 }">
...
</Transition>
```

::: playground#vue 深层级过渡与显式过渡时间
@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition :duration="550" name="nested">
    <div v-if="show" class="outer">
      <div class="inner">Hello</div>
    </div>
  </Transition>
</template>

<style scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 50px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
    Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>
```

:::

### 性能考量

你可能注意到我们上面例子中展示的动画所用到的属性大多是 `transform` 和 `opacity` 之类的。用这些属性制作动画非常高效，因为：

1. 他们在动画过程中不会影响到 DOM 结构，因此每一个动画帧都不会触发昂贵的 CSS 布局重新计算。
2. 大多数的现代浏览器都可以在执行 `transform` 动画时利用 GPU 进行硬件加速。

相比之下，像 `height` 或者 `margin` 这样的属性会触发 CSS 布局变动，因此执行它们的动画效果更昂贵，需要谨慎使用。
我们可以在 [CSS-Triggers](https://csstriggers.com/) 这类的网站查询哪些属性会在执行动画时触发 CSS 布局变动。

### JavaScript 钩子

你可以通过监听 `<Transition>` 组件事件的方式在过渡过程中挂上钩子函数：

```vue
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <!-- ... -->
</Transition>
```

```js
// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
function onBeforeEnter(el) {},

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
function onEnter(el, done) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done()
}

// 当进入过渡完成时调用。
function onAfterEnter(el) {}
function onEnterCancelled(el) {}

// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
function onBeforeLeave(el) {}

// 在离开过渡开始时调用
// 用这个来开始离开动画
function onLeave(el, done) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done()
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
function onAfterLeave(el) {}

// 仅在 v-show 过渡中可用
function leaveCancelled(el) {}
```

这些钩子可以与 CSS 过渡或动画结合使用，也可以单独使用。

在使用仅由 JavaScript 执行的动画时，最好是添加一个 `:css="false"` 属性。
这显式地向 Vue 表明跳过对 CSS 过渡的自动探测。除了性能稍好一些之外，还可以防止 CSS 规则意外地干扰过渡。

```vue {3}
<Transition ... :css="false">
 ...
</Transition>
```

在有了 `:css="false"` 后，我们就自己全权负责控制什么时候过渡结束了。
这种情况下对于 `@enter` 和 `@leave` 钩子来说，回调函数 `done` 就是必须的。否则，钩子将被同步调用，过渡将立即完成。

可以使用 [GreenSock](https://greensock.com/), [Anime.js](https://animejs.com/), 或者 [Motion One](https://motion.dev/) 等库来执行动画。

::: playground#vue JavaScript 钩子
@file App.vue

```vue
<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref(true)

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
  })
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done,
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)',
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  })
}
</script>

<template>
  <button @click="show = !show">Toggle</button>

  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div v-if="show" class="gsap-box" />
  </Transition>
</template>

<style>
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
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

### 可重用过渡

得益于 Vue 的组件系统，过渡是可以被重用的。要创建一个可被重用的过渡，我们需要为 `<Transition>` 组件创建一个包装组件，并向内传入插槽内容:

```vue
<template>
  <Transition name="my-transition">
    <slot />
  </Transition>
</template>
```

现在 `MyTransition` 可以在导入后像内置组件那样使用了：

```vue
<MyTransition>
  <div v-if="show">hello</div>
</MyTransition>
```

### 出现时过渡

如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 `appear` attribute：

```vue
<Transition appear>
  <!-- ... -->
</Transition>
```

### 元素间过渡

除了通过 `v-if` / `v-show` 切换一个元素，我们也可以通过 `v-if` / `v-else` / `v-else-if` 在几个组件间进行切换过：

```vue
<Transition>
  <button v-if="docState === 'saved'">Edit</button>
  <button v-if="docState === 'edited'">Save</button>
  <button v-if="docState === 'editing'">Cancel</button>
</Transition>
```

### 过渡模式

在之前的例子中，进入和离开的元素都是在同时开始动画的，并且我们必须将它们设为 `position: absolute` 以避免二者同时存在时出现的布局问题。

然而，在某些场景中这可能不是个好的方案，或者并不能符合行为预期。
我们可能想要先执行离开动画，然后在其完成**之后**再执行元素的进入动画。
手动编排这样的动画是非常复杂的，好在我们可以通过向 `<Transition>` 传入一个 `mode` prop 来实现这个行为：

```vue
<Transition mode="out-in">
  <!-- ... -->
</Transition>
```

### 组件间过渡

`<Transition>` 也可以用在动态组件之间：

```vue
<Transition name="fade" mode="out-in">
  <component :is="activeComponent"></component>
</Transition>
```

::: playground#vue 组件间过渡 & 动态过渡
@file App.vue

```vue
<script setup>
import { ref, shallowRef } from 'vue'

import CompA from './CompA.vue'
import CompB from './CompB.vue'

const activeComponent = shallowRef(CompA)
const transitionName = ref('fade')
</script>

<template>
  <div>
    <div class="selector">
      <label>
        <input
          v-model="activeComponent"
          type="radio"
          name="comp"
          :value="CompA"
        />
        A
      </label>
      <label>
        <input
          v-model="activeComponent"
          type="radio"
          name="comp"
          :value="CompB"
        />
        B
      </label>
    </div>
    <div class="comps">
      <Transition :name="transitionName" mode="out-in">
        <component :is="activeComponent" />
      </Transition>
    </div>
    <div class="effect">
      <label>
        <input
          v-model="transitionName"
          type="radio"
          name="transition"
          value="fade"
        />
        fade
      </label>
      <label>
        <input
          v-model="transitionName"
          type="radio"
          name="transition"
          value="slide"
        />
        slide
      </label>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity,
    transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100px);
}

.slide-leave-to {
  transform: translateX(-100px);
}

.comps {
  overflow: hidden;
}
</style>
```

@file CompA.vue

```vue
<template>
  <div>Component A</div>
</template>
```

@file CompB.vue

```vue
<template>
  <div>Component B</div>
</template>
```

:::
