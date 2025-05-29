---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/built-ins/suspense.md'
---
# Suspense

`<Suspense>` 是一个内置组件，用来在组件树中编排异步依赖。它可以在等待组件树下的多个嵌套异步依赖项解析完成时，呈现加载状态。

## 异步依赖

有了 `<Suspense>` 组件后，我们就可以在等待整个多层级组件树中的各个异步依赖获取结果时，在顶层展示出加载中或加载失败的状态。

`<Suspense>` 可以等待的异步依赖有两种：

1. 带有异步 `setup()` 钩子的组件。这也包含了使用 `<script setup>` 时有顶层 `await` 表达式的组件。
2. [异步组件](https://staging-cn.vuejs.org/guide/components/async.html)

### async setup()

组合式 API 中组件的 `setup()` 钩子可以是异步的:

```js
export default {
  async setup() {
    const res = await fetch(...)
    const posts = await res.json()

    return {
      posts
    }
  }
}
```

如果使用 `<script setup>`，那么顶层 `await` 表达式会自动让该组件成为一个异步依赖：

```vue
<script setup>
const res = await fetch(...)
const posts = await res.json()
</script>
```

### 异步组件

异步组件默认就是\*\*"suspensible"\*\*的。这意味着如果组件关系链上有一个 `<Suspense>`，那么这个异步组件就会被当作这个 `<Suspense>` 的一个异步依赖。
在这种情况下，加载状态是由 `<Suspense>` 控制，而该组件自己的加载、报错、延时和超时等选项都将被忽略。

异步组件也可以通过在选项中指定 `suspensible: false` 表明不用 `Suspense` 控制，并让组件始终自己控制其加载状态。

## 加载中状态

`<Suspense>` 组件有两个插槽：`#default` 和 `#fallback`。
两个插槽都只允许一个直接子节点。在可能的时候都将显示默认槽中的节点。否则将显示后备槽中的节点。

```vue
<Suspense>
  <!-- 具有深层异步依赖的组件 -->
  <Dashboard />

  <!-- 在 #fallback 插槽中显示 “正在加载中”  -->
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

在初始渲染时，`<Suspense>` 将在内存中渲染其默认的插槽内容。
如果在这个过程中遇到任何异步依赖，则会进入挂起状态。在挂起状态期间，展示的是后备内容。
当所有遇到的异步依赖都完成后，`<Suspense>` 会进入完成状态，并将展示出默认插槽的内容。

如果在初次渲染时没有遇到异步依赖，`<Suspense>` 会直接进入完成状态。

进入完成状态后，只有当默认插槽的根节点被**替换**时，`<Suspense>` 才会回到挂起状态。组件树中新的更深层次的异步依赖**不会**造成 `<Suspense>` 回退到挂起状态。

发生回退时，后备内容不会立即展示出来。相反，`<Suspense>` 在等待新内容和异步依赖完成时，会展示之前 `#default` 插槽的内容。
这个行为可以通过一个 `timeout` prop 进行配置：
在等待渲染新内容耗时超过 `timeout` 之后，`<Suspense>` 将会切换为展示后备内容。若 `timeout` 值为 `0` 将导致在替换默认内容时立即显示后备内容。

## 事件

除了 `pending` 事件之外，`<suspense>` 组件还有 `resolve` 和 `fallback` 事件。
`pending` 事件是在进入挂起状态时触发。`resolve` 事件是在 `default` 插槽完成获取新内容时触发。`fallback` 事件则是在 `fallback` 插槽展示时触发。

例如，可以使用这些事件在加载新组件时在之前的 DOM 最上层显示一个加载指示器。

## 错误处理

`<Suspense>` 组件自身目前还不提供错误处理，不过你可以使用 `errorCaptured` 选项或者 `onErrorCaptured()` 钩子，在使用到 `<Suspense>` 的父组件中捕获和处理异步错误。

## 和其他组件结合

我们常常会将 `<Suspense>` 和 `<Transition>`、`<KeepAlive>` 等组件结合。要保证这些组件都能正常工作，嵌套的顺序非常重要。

另外，这些组件都通常与 Vue Router 中的 `<RouterView>` 组件结合使用。

```vue
<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition mode="out-in">
      <KeepAlive>
        <Suspense>
          <!-- 主要内容 -->
          <component :is="Component" />

          <!-- 加载中的状态 -->
          <template #fallback>
            <div>正在加载中...</div>
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
```

Vue Router 使用动态导入对[懒加载组件](https://next.router.vuejs.org/guide/advanced/lazy-loading.html)进行了内置支持。
这些与异步组件不同，目前他们不会触发 `<Suspense>`。但是，它们仍然可以有异步组件作为后代，这些组件可以照常触发 `<Suspense>`。
