---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/extra/animation.md'
---
# 动画技巧

## 基于 CSS class 的动画

对于那些不是正在进入或离开 DOM 的元素，我们可以通过给它们动态添加 CSS class 来触发动画：

::: vue-playground 基于 CSS class 的动画

@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}
</script>

<template>
  <div :class="{ shake: disabled }">
    <button @click="warnDisabled">Click me</button>
    <span v-if="disabled">This feature is disabled.</span>
  </div>
</template>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
```

:::

## 状态驱动的动画

有些过渡效果可以通过动态地插值来实现，例如，在交互时动态地绑定样式到元素，以这个例子为例：

::: vue-playground 状态驱动的动画

@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const x = ref(0)

function onMousemove(e) {
  x.value = e.clientX
}
</script>

<template>
  <div
    :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    class="movearea"
    @mousemove="onMousemove"
  >
    <p>Move your mouse across the div...</p>
    <p>x: {{ x }}</p>
  </div>
</template>

<style scoped>
.movearea {
  transition: 0.3s background-color ease;

  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
}
</style>
```

:::

## 带侦听器的动画

在一些动画创意里，我们可以根据一些数字状态，使用侦听器将任何东西做成动画。例如，我们可以将数字本身变成动画：

::: vue-playground 带侦听器的动画

@file App.vue

```vue
<script setup>
import { reactive, ref, watch } from 'vue'
import gsap from 'gsap'

const number = ref(0)
const tweened = reactive({
  number: 0,
})
watch(number, n => {
  gsap.to(tweened, {
    duration: 0.5,
    number: Number(n) || 0,
  })
})
</script>

<template>
  <div>
    Type a number: <input v-model.number="number" />
    <p>{{ tweened.number.toFixed(0) }}</p>
  </div>
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
