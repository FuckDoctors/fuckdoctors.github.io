---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/extra/composition-api.md'
---
# 组合式 API FAQ

## 什么是组合式 API？

组合式 API 是一系列 API 的集合，使我们可以使用函数而不是声明式选项的方式来书写 Vue 组件。
它包含以下 API:

* [响应式 API](https://vuejs.org/api/reactivity-core.html): 例如 `ref()` 和 `reactive()`，使我们可以直接创建响应式状态、计算属性和侦听器。
* [生命周期钩子](https://vuejs.org/api/composition-api-lifecycle.html): 例如，`onMounted()` 和 `onUnmounted()`, 使我们可以在组件的各个生命周期阶段添加逻辑。
* [依赖注入](https://vuejs.org/api/composition-api-dependency-injection.html): 例如 `privide()` 和 `inject()`，使我们可以在使用响应性 API 时，利用 Vue 的依赖注入系统。

组合式 API 是 Vue 3 的内置功能，而要在 Vue 2 中使用，则需要使用 [`@vue/composition-api`](https://github.com/vuejs/composition-api)。

虽然，响应式 API 是基于函数的组合，但是，组合式 API 并不是函数式编程。
组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程更强调数据不可变。

## 为什么要有组合式 API？

* 更好的逻辑复用
* 更灵活的代码组织
* 更好的类型推导
* 更小的打包体积
