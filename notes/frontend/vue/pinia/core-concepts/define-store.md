---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/core-concepts/define-store.md'
---
# Defining a Store

A store is defined using `defineStore()` and that it requires a **unique** name, passed as the first argument:

```js
import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  // other options
})
```

This *name*, also referred as id, is necessary and is used by Pinia to connect the store to the devtools.
Naming the returned function use... is a convention across composables to make its usage idiomatic.

## Using a store

We are *defining* a store because the store won't be created until `useStore()` is called inside of `setup()`:

```js
import { useStore } from '@/store/counter'

export default {
  setup() {
    const store = useStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
```

You can define as many stores as you want and **you should define each store in a different file** to get the most out of pinia (like automatically allow your bundle to code split and TypeScript inference).

Note that store is an object wrapped with `reactive`, meaning there is no need to write `.value` after getters but, like `props` in setup, **we cannot destructure it**:

```js
export default defineComponent({
  setup() {
    const store = userStore()

    // ❌ This won't work because it breaks reactivity
    // it's the same as destructuring from `props`
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // will always be "eduardo"
      name,
      // will always be 2
      doubleCount,
      // this one will be reactive
      doubleValue: computed(() => store.doubleCount),
    }
  },
})
```

::: playground#vue Destructure example

@file App.vue

```vue
<script setup>
import { computed } from 'vue'
import { useStore } from './store.js'

const store = useStore()

let { name, doubleCount } = store
const { increment } = store
const doubleValue = computed(() => store.doubleCount)
</script>

<template>
  <div>Name: {{ name }} &lt;- not reactive</div>
  <div>Double count: {{ doubleCount }} &lt;- not reactive</div>
  <div>Double value: {{ doubleValue }} &lt;- reactive</div>
  <button @click="name = 'bin'">change name</button>
  <button @click="increment">increment</button>
</template>
```

@file store.js

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('test', {
  state: () => ({
    name: 'zhaobc',
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

@setting

```json
{
  "service": "https://play.zhaobc.site"
}
```

:::

In order to extract properties from the store while keeping its reactivity, you need to use `storeToRefs()`.
It will create refs for every reactive property.
Note you can destructure actions directly from the store as they are bound to the store itself too:

```js
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()

    // `name` and `doubleCount` are reactive refs
    // This will also create refs for properties added by plugins
    // but skip any action or non reactive (non ref/reactive) property
    const { name, doubleCount } = storeToRefs(store)
    // the increment action can be just extracted
    const { increment } = store

    return {
      name,
      doubleCount,
      increment,
    }
  },
})
```

::: playground#vue Destructure example using storeToRefs

@file App.vue

```vue
<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from './store.js'

const store = useStore()

const { name, doubleCount } = storeToRefs(store)
const { increment } = store
const doubleValue = computed(() => store.doubleCount)
</script>

<template>
  <div>Name: {{ name }} &lt;- reactive</div>
  <div>Double count: {{ doubleCount }} &lt;- reactive</div>
  <div>Double value: {{ doubleValue }} &lt;- reactive</div>
  <button @click="name = 'bin'">change name</button>
  <button @click="increment">increment</button>
</template>
```

@file store.js

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('test', {
  state: () => ({
    name: 'zhaobc',
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

@setting

```json
{
  "service": "https://play.zhaobc.site"
}
```

:::
