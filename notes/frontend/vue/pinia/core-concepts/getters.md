---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/core-concepts/getters.md'
---
# Getters

Getters are exactly the equivalent of computed values for the state of a Store.
They can be defined with the getters property in `defineStore()`.
They receive the state as the first parameter to encourage the usage of arrow function:

we can get access to the whole store instance through `this` when defining a regular function,
but it is necessary to define the type of the return type (in TypeScript).

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // Passing arguments to getters
    doubleCount(state) {
      return state.counter * 2
    },
    // the return **must** be explicitly set
    doublePlusOne(): number {
      // autocompletion and typings for the whole store
      // Accessing other getters
      return this.doubleCount + 1
    },
  },
})
```

To use another store getters, you can directly use it inside of the getter:

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```
