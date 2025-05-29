---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/typescript/composition-api.md'
---
# TypeScript 与组合式 API

## 为组件的 props 标注类型

## 使用 `<script setup>`

当使用 `<script setup>` 时，`defineProps()` 宏函数支持从它的参数中推导类型：

```vue
<script setup lang="ts">
const props = defineProps({
  foo: {
    type: String,
    required: true,
  },
  bar: Number,
})

props.foo // string
props.bar // number | undefined
</script>
```

这被称之为“运行时声明”，因为传递给 `defineProps()` 的参数会作为运行时的 `props` 选项使用。

然而，通过泛型参数来定义 `props` 的类型通常更直接：

```vue
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

这被称之为“基于类型的声明”。编译器会尽可能地尝试根据类型参数推导出等价的运行时选项。在这种场景下，我们第二个例子中编译出的运行时选项和第一个是完全一致的。

基于类型的声明或者运行时声明可以择一使用，但是不能同时使用。

我们也可以将 props 的类型移入一个单独的接口中：

```vue
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>
```

这同样适用于 Props 从另一个源文件中导入的情况。该功能要求 TypeScript 作为 Vue 的一个 peer dependency。

```vue
<script setup lang="ts">
import type { Props } from './Props'

const props = defineProps<Props>()
</script>
```

## Props 解构默认值

当使用基于类型的声明时，我们失去了为 `props` 声明默认值的能力。这可以通过 `withDefaults` 编译器宏解决：

```ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
```

这将被编译为等效的运行时 props default 选项。此外，`withDefaults` 帮助程序为默认值提供类型检查，并确保返回的 props 类型删除了已声明默认值的属性的可选标志。

::: tip
请注意，可变引用类型 (如数组或对象) 的默认值应封装在函数中，以避免被意外修改或产生外部副作用。这样可以确保每个组件实例都能获得属于自己的默认值副本。
:::

### 非 `<script setup>` 场景下

如果没有使用 `<script setup>`，那么为了开启 props 的类型推导，必须使用 `defineComponent()`。传入 `setup()` 的 props 对象类型是从 props 选项中推导而来。

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    props.message // <-- 类型：string
  },
})
```

### 复杂的 prop 类型

通过基于类型的声明，一个 prop 可以像使用其他任何类型一样使用一个复杂类型：

```vue
<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()
</script>
```

对于运行时声明，我们可以使用 `PropType` 工具类型：

```ts
import type { PropType } from 'vue'

const props = defineProps({
  book: Object as PropType<Book>,
})
```

其工作方式与直接指定 props 选项基本相同：

```ts
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    book: Object as PropType<Book>,
  },
})
```

## 为组件的 emits 标注类型

在 `<script setup>` 中，`emit` 函数的类型标注也可以通过运行时声明或是类型声明进行：

```vue
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])
</script>
```

```vue
<script setup lang="ts">
// 基于选项
const emit = defineEmits({
  change: (id: number) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
    return true
  },
  update: (value: string) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
    return true
  },
})
</script>
```

````vue
<script setup lang="ts">
// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>

```vue
<script setup lang="ts">
// 3.3+: 可选的、更简洁的语法
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
````

类型参数可以是以下的一种：

1. 一个可调用的函数类型，但是写作一个包含调用签名的类型字面量。它将被用作返回的 emit 函数的类型。
2. 一个类型字面量，其中键是事件名称，值是数组或元组类型，表示事件的附加接受参数。上面的示例使用了具名元组，因此每个参数都可以有一个显式的名称。

若没有使用 `<script setup>`，`defineComponent()` 也可以根据 `emits` 选项推导暴露在 setup 上下文中的 emit 函数的类型：

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change'],
  setup(props, { emit }) {
    emit('change') // <-- 类型检查 / 自动补全
  },
})
```

## 为 provide / inject 标注类型

`provide` 和 `inject` 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：

```ts
import { inject, provide } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

const foo = inject(key) // foo 的类型：string | undefined
```

::: tip
建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。
:::

当使用字符串注入 key 时，注入值的类型是 unknown，需要通过泛型参数显式声明：

```ts
const foo = inject<string>('foo') // 类型：string | undefined
```

注意注入的值仍然可以是 `undefined`，因为无法保证提供者一定会在运行时 `provide` 这个值。

当提供了一个默认值后，这个 `undefined` 类型就可以被移除：

```ts
const foo = inject<string>('foo', 'bar') // 类型：string
```

如果你确定该值将始终被提供，则还可以强制转换该值：

```ts
const foo = inject('foo') as string // 类型：string
```

## 为模板引用标注类型

模板引用需要通过一个显式指定的泛型参数和一个初始值 null 来创建：

```vue {4}
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>

<template>
  <input ref="el" />
</template>
```

::: warning
为了严格的类型安全，有必要在访问 `el.value` 时使用可选链或类型守卫。这是因为直到组件被挂载前，这个 `ref` 的值都是初始的 `null`，并且在由于 `v-if` 的行为将引用的元素卸载时也可以被设置为 `null`。
:::

## 为组件模板引用标注类型

有时，你可能需要为一个子组件添加一个模板引用，以便调用它公开的方法。举例来说，我们有一个 `MyModal` 子组件，它有一个打开模态框的方法：

```vue
<!-- MyModal.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isContentShown = ref(false)
const open = () => (isContentShown.value = true)

defineExpose({
  open,
})
</script>
```

为了获取 `MyModal` 的类型，我们首先需要通过 `typeof` 得到其类型，再使用 TypeScript 内置的 `InstanceType` 工具类型来获取其实例类型：

```vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

function openModal() {
  modal.value.open()
}
</script>
```

如果组件的具体类型无法获得，或者你并不关心组件的具体类型，那么可以使用 `ComponentPublicInstance`。这只会包含所有组件都共享的属性，比如 `$el`。

```vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const child = ref<ComponentPublicInstance | null>(null)
</script>
```
