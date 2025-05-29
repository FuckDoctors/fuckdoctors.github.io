---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/intro/intro.md'
---
# Introduction

Pinia (pronounced /piːnjʌ/, like "peenya" in English) is a store library for Vue, it allows you to share a state across components/pages.

* Works for both Vue 2 and Vue 3
* Optional composition API
* The same API for SSR.
* TypeScript support
* Hot module replacement
* Plugins

## Basic example

Create a store:

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

And then you use it in a component:

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    counter.count++

    // with autocompletion
    counter.$patch({ count: counter.count + 1 })
    // or using a action instead
    counter.increment()
  },
}
```

::: playground#vue Basic example

@file App.vue

```vue
<script setup>
import { useCounterStore } from './counterStore.js'

const counter = useCounterStore()
counter.count++

counter.$patch({
  count: counter.count + 1,
})
counter.increment()
</script>

<template>
  <div>Count: {{ counter.count }}</div>
</template>
```

@file counterStore.js

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
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

You can even use a function (similar to a component `setup()`) to define a Store for more advanced use cases:

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return {
    count,
    increment,
  }
})
```

::: playground#vue setup example

@file App.vue

```vue
<script setup>
import { useCounterStore } from './counterStore.js'

const counter = useCounterStore()
counter.count++

counter.$patch({
  count: counter.count + 1,
})
counter.increment()
</script>

<template>
  <div>Count: {{ counter.count }}</div>
</template>
```

@file counterStore.js

```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return {
    count,
    increment,
  }
})
```

@setting

```json
{
  "service": "https://play.zhaobc.site"
}
```

:::

If you are still not into `setup()` and Composition API,
don't worry, Pinia also support a similar set of map helpers like Vuex.
You define stores the same way but then use `mapStores()`, `mapState()`, or `mapActions()`:

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```

::: playground#vue Option API example

@file App.vue

```vue
<script>
import { mapActions, mapState, mapStores } from 'pinia'

import { useCounterStore } from './counterStore.js'
import { useUserStore } from './userStore.js'

export default {
  computed: {
    ...mapStores(useCounterStore, useUserStore),
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
  },
}
</script>

<template>
  <div>
    <div>Hi {{ userStore.name }}, age: {{ userStore.age }}</div>
    <div>Count: {{ count }}, double: {{ double }}</div>
    <button @click="increment">increment</button>
  </div>
</template>
```

@file counterStore.js

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

@file userStore.js

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'zhaobc',
    age: 18,
    isLogin: false,
    roles: [],
  }),
  getters: {
    isAdmin: state => state.roles.includes('admin'),
  },
  actions: {
    login() {
      this.isLogin = true
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

## A more realistic example

Here is a more complete example of the API you will be using with Pinia with types even in JavaScript.

```js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion
      return state.todos.filter(todo => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter(todo => !todo.isFinished)
    },
    /**
     * @returns  {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({
        text,
        id: this.nextId++,
        isFinished: false,
      })
    },
  },
})
```

## Comparison with Vuex

Compared to Vuex, Pinia provides a simpler API with less ceremony, offers Composition-API-style APIs,
and most importantly, has solid type inference support when used with TypeScript.

### Comparison with Vuex 3.x/4.x

> Vuex 3.x is Vuex for Vue 2 while Vuex 4.x is for Vue 3

Pinia API is very different from Vuex ≤4, namely:

* Mutations no longer exist
* TypeScript support
* No more magic strings to inject
* No need to dynamically add stores, they are all dynamic by default
* No more nested structuring of modules, Pinia offers a flat structuring by design
* No namespaced modules. Given the flat architecture of stores, "namespacing" stores is inherent to how they are defined and you could say all stores are namespaced.

For more detailed instructions on how to convert an existing Vuex ≤4 project to use Pinia, see the [Migration from Vuex Guide](https://pinia.vuejs.org/cookbook/migration-vuex.html).
