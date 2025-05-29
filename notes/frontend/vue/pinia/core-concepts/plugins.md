---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/core-concepts/plugins.md'
---
# Plugins

Pinia stores can be fully extended thanks to a low level API. Here is a list of things you can do:

* Add new properties to stores
* Add new options when defining stores
* Add new methods to stores
* Wrap existing methods
* Change or even cancel actions
* Implement side effects like Local Storage
* Apply only to specific stores

Plugins are added to the pinia instance with `pinia.use()`.
The simplest example is adding a static property to all stores by returning an object:

```js
import { createPinia } from 'pinia'

// add a property named `secret` to every store that is created after this plugin is installed
// this could be a different file
function SecretPiniaPlugin() {
  return {
    secret: 'the cake is a lie',
  }
}

const pinia = createPinia()
// give the plugin to pinia
pinia.use(SecretPiniaPlugin)

// in another file
const store = useStore()
store.secret // 'the cake is a lie'
```

This is useful to add global objects like the router, modal, or toast managers.

## Introduction

A Pinia plugin is a function that optionally returns properties to be added to a store. It takes one optional argument, a context:

```js
export function myPiniaPlugin(context) {
  context.pinia // the pinia created with `createPinia`
  context.app // the current app created with `createApp` (Vue3 only)
  context.store // the store the plugin is augmenting
  context.options // the options object defining the store passed to `defineStore()`
  // ...
}

pinia.use(myPiniaPlugin)
```

Plugins are only applied to stores **created after** `pinia` is passed to the app, otherwise they won't be applied.

## Augmenting(扩大，增大，增强) a Store

You can add properties to every store by simply returning an object of them in a plugin:

```js
pinia.use(() => ({
  hello: 'world',
}))
```

You can also set the property directly on the store but if possible `use the return version` so they can be automatically tracked by devtools:

```js
pinia.use(({ store }) => {
  store.hello = 'world'
})
```

Note that every store is wrapped with `reactive`, **automatically unwrapping** any `Ref` (`ref()`, `computed()`, ...) it contains:

```js
const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // each store has its individual `hello` property
  store.hello = ref('secret')
  // it gets automatically unwrapped
  store.hello // 'secret'

  // all stores are sharing the value `shared` property
  store.shared = sharedRef
  store.shared // 'shared'
})
```

This is why you can access all computed properties without .value and why they are reactive.

## Adding new state

If you want to add new state properties to a store or properties that are meant to be used during hydration,
you will have to add it in two places:

* On the `store` so you can access it with `store.myState`
* On `store.$state` so it can be used in devtools and, be serialized during SSR.

On top of that, you will certainly have to use a `ref()` (or other reactive API) in order to share the value across different accesses:

```js
import { toRef, ref } from 'vue'

pinia.use(({ store }) => {
  // to correctlly handle SSR, we need to make sure we are not overriding an existing value
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    // hasError is defined within the plugin, so each store has their individual state property
    const hasError = ref(false)
    // setting the variable on `$state`, allows it be serialized during SSR
    store.$state.hasError = hasError
  }

  // we need to transfer the ref from the state to the store,
  // this way both accesses: store.hasError and store.$state.hasError
  // will work and share the same variable
  store.hasError = toRef(store.$state, 'hasError')

  // in this case it's better not to return `hasError` since it
  // will be displayed in the `state` section in the devtools
  // anyway and if we return it, devtools will display it twice.
})
```

## Adding new external properties

When adding external properties, class instances that come from other libraries, or simply things that are not reactive,
you should wrap the object with `markRaw()` before passing it to pinia.

```js
import { markRaw } from 'vue'

import { router } from './router'

pinia.use(store => {
  store.router = markRaw(router)
})
```

## Calling `$subscribe` inside plugins

You can use [`store.$subscribe`](https://pinia.vuejs.org/core-concepts/state.html#subscribing-to-the-state) and [`store.$onAction`](https://pinia.vuejs.org/core-concepts/actions.html#subscribing-to-actions) inside plugins too:

```js
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // react to store changes
  })
  store.$onAction(() => {
    // react to store anctions
  })
})
```

## Adding new options

It is possible to create new options when defining stores to later on consume them from plugins.

For example, you could create a `debounce` option that allows you to debounce any action:

```js
const useSearchStore = defineStore('search', {
  actions: {
    searchContacts() {
      // ...
    }
  }
  // this will be read by a plugin later on
  debounce: {
    // debounce the action searchContacts by 300ms
    searchContacts: 300
  }
})
```

The plugin can then read that option to wrap actions and replace the original ones:

```js
// use any debounce library
import debounce from 'loadash/debounce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // we are overriding the actions with new ones
    return Object.keys(options.debounce).reduce((debounceActions, action) => {
      debounceActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
    })
  }
})
```

Note that custom options are passed as the 3rd argument when using the setup syntax:

```js
defineStore(
  'search',
  () => {
    // ...
  },
  {
    // this will be read by a plugin later on
    debounce: {
      searchContacts: 300,
    },
  }
)
```

## TypeScript

### A Pinia plugin can be typed as follows

```ts
import { PiniaPluginContext } from 'pinia'

export function myPiniaPlugin(context: PiniaPluginContext) {
  // ...
}
```

### Typing new store properties

When adding new properties to stores, you should also extend the `PiniaCustomProperties` interface.

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // by using a setter we can allow string and refs
    set hello(value: string | Ref<string>)
    get hello(): string

    // you can define simpler value too
    simpleNumber: number
  }
}
```

It can then be written and read safely:

```ts
pinia.use(({ store }) => {
  store.hello = 'hola'
  store.hello = ref('hola')

  store.simpleNumber = Math.random()
  // @ts-expect-error: we haven't typed this correctlly
  sotre.simpleNumber = ref<Math.random>
})
```

`PiniaCustomProperties` is a generic type that allows you to reference properties of a store.

```ts
pinia.use(({ options }) => ({ $options options }))
```

We can properly type this by using the 4 generic types of `PiniaCustomProperties:`

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties<Id, S, G, A) {
    $options: {
      id: Id,
      state?: () => s
      options? A
    }

  }
}
```

### Typing new state

When adding new state properties (to both, the `store` and `store.$state`), you need to add the type to `PiniaCustomStateProperties` instead. Differently from `PiniaCustomProperties`, it only receives the State generic:

```ts
import 'pinia'

declare module 'pinia' {
  export interface DefineCustomStateProperties<S> {
    hello: string
  }
}
```

### Typing new creation options

When creating new options for `defineStore()`, you should extend the `DefineStoreOptionsBase`.
Differently from `PiniaCustomProperties`, it only exposes two generics: the State and the Store type, allowing you to limit what can be defined.
For example, you can use the names of the actions:

```ts
import 'pinia'

define module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}
```
