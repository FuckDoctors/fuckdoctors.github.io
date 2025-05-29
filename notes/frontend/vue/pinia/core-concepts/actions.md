---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/core-concepts/actions.md'
---
# Actions

Actions are the equivalent of methods in components.
They can be defined with the actions property in `defineStore()` and they are perfect to define **business logic**.

Like getters, actions get access to the whole store instance through `this` with full typing (and autocompletion ✨) support.
Unlike getters, `actions` **can be asynchronous**, you can await inside of actions any API call or even other actions!

```js
import { defineStore } from 'pinia'
import { mande } from 'mande'

import { useAuthStore } from './auth-store'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    preferences: null,
  }),

  actions: {
    // async
    async registerUser(login, password) {
      this.userData = await api.post({ login, password })
    },
    async fetchUserPreferences() {
      // use another store
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      }
    },
  },
})
```

If you would prefer not to use Composition API at all, you can use the `mapActions()` helper to map actions properties as methods in your component:

```js
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  methods: {
    // gives access to this.increment() inside the component
    // same as calling from store.increment()
    ...mapActions(useCounterStore, ['increment'])
    // same as above but registers it as this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'doubleCounter' }),
  },
}
```

## Subscribing to actions

It is possible to observe actions and their outcome with `store.$onAction()`.

The callback passed to it is executed **before** the action itself.
`after` handle promises and allows you to execute a function after the action resolves.
In a similar way, onError allows you execute a function if the action throws or rejects.

Here is an example that logs before running actions and after they resolve/reject.

```js
const unsubscribe = someStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as 'someStore'
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or reject
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after(result => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError(error => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// manually remove the listener
unsubscribe()
```

By default, action subscriptions are bound to the component where they are added (if the store is inside a component's `setup()`).
Meaning, they will be automatically removed when the component is unmounted.
If you want to keep them after the component is unmounted,
pass `true` as the second argument to detach the action subscription from the current component:

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // this subscription will be kept after the component is unmounted
    someStore.$onAction(callback, true)
  },
}
```
