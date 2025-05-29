---
url: 'https://zhaobc.site/notes/frontend/vue/pinia/intro/get-started.md'
---
# Get Started

## Installation

Create a pinia (the root store) and pass it to the app:

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

If you are using Vue 2, you also need to install a plugin and inject the created pinia at the root of the app:

```js
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // other options
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on the same page
  pinia,
})
```

## What is a Store?

A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree.

In other words, **it hosts global state**.
It's a bit like a component that is always there and that everybody can read off and write to.

It has **three concepts**, the **state**, **getters** and **actions** and it's safe to assume these concepts are the equivalent of **data**, **computed** and **methods** in components.

## When should I use a Store

A store should contain data that can be accessed throughout your application. This includes data that is used in many places, e.g. User information that is displayed in the navbar, as well as data that needs to be preserved through pages, e.g. a very complicated multi-step form.

Not all applications need access to a global state, but if yours need one, Pinia will make your life easier.
