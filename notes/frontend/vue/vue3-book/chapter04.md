---
url: 'https://zhaobc.site/notes/frontend/vue/vue3-book/chapter04.md'
---
# 第 4 章 响应系统的作用与实现

响应系统是 Vue.js 的重要组成部分，Vue.js 3 采用 Proxy 实现响应式数据。

## 4.1 响应式数据与副作用函数

副作用函数是指会产生副作用的函数。副作用函数的执行会直接或间接影响其他的变量或其他函数的执行。

如下所示：

```js
const state = { text: null }
const obj = { text: 'hello world' }
function effect() {
  state.text = obj.text
  document.body.innerText = obj.text
}
```

effect 执行会读取 obj，并设置 state，以及更改 DOM 元素，这个就是副作用。

但是，obj.text 改了之后，并不会自动执行 effect 函数。

## 4.2 响应式数据的基本实现

观察可以看出：

* 副作用函数 effect 执行时，会出发 obj.text 的**读取**操作
* 修改 obj.text 时，会触发**设置**操作

如果我们能拦截一个对象的读取和设置操作，那么就能做一些额外的操作。

在 ES2015 之前只能通过 Object.defineProperty 函数实现，这也是 Vue.js 2 所采用的方式。在 ES2015+ 中，可以使用代理对象 Proxy 来实现，这也是 Vue.js 3 所采用的方式。

::: note Proxy 示例

::: normal-demo Proxy 示例

```html
<div id="effect-proxy-demo"></div>
<button onclick="changeText()">Change Text</button>
```

```js
// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 effect 添加到副作用函数桶中
    bucket.add(effect)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶中取出来并执行
    bucket.forEach(fn => fn())
    // 返回 true 代表 设置成功
    return true
  },
})

// 副作用函数
function effect() {
  window.document.querySelector('#effect-proxy-demo').innerText = obj.text
}

// 执行副作用函数，触发读取
effect()

function changeText() {
  obj.text = 'hello vue3'
}
```

:::

上述示例，可以达到响应式的结果。

## 4.3 设计一个完善的响应式系统

从上一节中看出，一个响应式系统的工作流如下：

* 当**读取**操作发生时，将副作用收集到桶中
* 当**设置**操作发生时，从桶中取出副作用函数并执行

上节中的副作用函数 effect 硬编码，不合适，我们要做的是，哪怕副作用是匿名函数也能够被正确的收集。
为了实现这一点，我们需要提供一个用来注册副作用函数的机制，如下所示：

::: note 改进后的示例

::: normal-demo 改进后的示例

```html
<div id="effect-proxy-demo2"></div>
<button onclick="changeText()">Change Text</button>
```

```js
// 用一个全局变量存储被注册的副作用函数
let activeEffect

// effect 函数用于注册副作用函数
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数 fn 赋值给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将 activeEffect 中存储的副作用函数收集到桶中
    if (activeEffect) {
      // 新增
      bucket.add(activeEffect)
    }
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶中取出来并执行
    bucket.forEach(fn => fn())
    // 返回 true 代表 设置成功
    return true
  },
})

// 使用 effect 注册副作用函数
effect(() => {
  // 匿名副作用函数
  console.log('effect run') // 会打印 2 次，注册时立即执行了一次，后面更改 obj.notExist 时会再执行一次
  window.document.querySelector('#effect-proxy-demo2').innerText = obj.text
})

function changeText() {
  obj.notExist = 'hello vue3'
}
```

:::

上面代码可以看出，匿名副作用函数内部读取了 obj.text 的值，于是匿名函数与字段 obj.text 之间建立了响应联系。
但是，点击 change text 时，在匿名副作用内并没有读取 obj.notExist 属性的值，所以，理论上字段 obj.notExist 并没有与副作用建立响应联系。
因此，点击按钮时，不应该出发匿名副作用，这是不正确的，为了解决这个问题，我们应该重新设计桶。

在上例中，我们**没有在副作用函数与被操作的目标字段之间建立明确的联系**。当读取属性时，无论读取的是哪一个属性，都会把副作用函数收集到桶中；
当设置属性时，也都会把桶中的副作用函数取出来并执行。解决办法只需要在副作用与被操作的字段直接建立联系。

Set 类型的桶，不能实现这个目的，需要使用 WeakMap 代替 Set 作为桶的数据结构。

::: note WeakMap 类型的桶

::: normal-demo WeakMap 类型的桶

```html
<div id="effect-proxy-weakmap"></div>
<button onclick="changeText()">Change Text</button>
```

```js
// 元素数据
const data = {
  ok: true,
  text: 'hello world',
}

// 存储副作用的桶
const bucket = new WeakMap()
let activeEffect

const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 添加到桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶中取出并执行
    trigger(target, key)
    return true
  },
})

// 在 get 拦截函数内调用 track 函数追踪变化
function track(target, key) {
  // 没有 activeEffect 直接返回
  if (!activeEffect) return
  // 根据 target 从桶中取得 depsMap，它也是一个 Map 类型，key: effects
  let depsMap = bucket.get(target)
  // 如果不存在 depsMap，则新建一个 Map 与 target 关联
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  // 再根据 key 从 depsMap 中取得 deps，它是一个 Set 类型
  // 里面存储着所有与当前 key 关联的副作用函数：effects
  let deps = depsMap.get(key)
  // 如果 deps 不存在，则同样新建一个 Set 与 key 关联
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  // 最后将当前激活的副作用添加到桶中
  deps.add(activeEffect)
}

// 在 set 拦截函数内调用 trigger 函数出发变化
function trigger(target, key) {
  // 根据 target 从桶中取得 depsMap，它是 key: effects
  const depsMap = bucket.get(target)
  if (!depsMap) return
  // 根据 key 取得所有副作用函数
  const effects = depsMap.get(key)
  // 执行副作用函数
  effects && effects.forEach(fn => fn())
}

// effect 函数用于注册副作用函数
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数 fn 赋值给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

// 使用 effect 注册副作用函数
effect(() => {
  // 匿名副作用函数
  console.log('effect run - weekmap') // 会打印 2 次，注册时立即执行了一次，后面更改 obj.text 时会再执行一次，obj.notExist 不执行
  window.document.querySelector('#effect-proxy-weakmap').innerText = obj.text
})

function changeText() {
  obj.text = 'hello vue3'
  obj.notExist = 'hello vue3'
}
```

:::

从上述代码中可以看出构建数据的方式，分别使用了 WeakMap, Map 和 Set:

* WeakMap 是 target: Map 键值对
* Map 是 target.key: effects （副作用） 键值对

那么，WeakMap 跟 Map 有什么区别呢？

WeakMap 对 key 是弱引用，WeakMap 的 key 是不可枚举的，不影响垃圾回收器的工作。
参考资料：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

::: normal-demo Map 和 WeakMap

请打开控制台查看：

```js
const map = new Map()
const weakmap = new WeakMap()

;(function () {
  const foo = { foo: 1 }
  const bar = { bar: 2 }

  map.set(foo, 1)
  weakmap.set(bar, 2)
})()

// 可以打印出 foo，说明 foo 没有被回收
console.log('map.keys', map.keys().next().value)
// WeakMap 无法获取 key，也就无法获取对象 bar
console.log('weakmap', weakmap)
```

:::

## 4.4 分支切换与 cleanup

什么是分支定义？先看下面的代码：

```js
const data = { ok: true, text: 'hello world' }
const obj = new Proxy(data, {
  /* ... */
})

effect(() => {
  document.body.innerText = obj.ok ? obj.text : 'not'
})
```

上面的三元表达式中，当字段 obj.ok 发送变化时，代码执行的分支就会跟着变化，这就是分支切换。

分支切换可能会产生遗留的副作用函数。上面的代码中，会触发 obj.ok 和 obj.text 的读取操作，所以会收集它们俩对应的副作用函数。

当 obj.ok 修改为 false 时，会触发副作用函数重新执行后，由于此时字段 obj.text 不会被读取，只会执行 obj.ok 的读取操作。
所以，理想情况下，副作用函数不应该被字段 obj.text 所对应的依赖集合收集。

遗留的副作用会导致不必要的更新。

但是上例中，obj.ok 改为 false 时，无论 obj.text 如何变，document.body.innerText 的值始终是 'not' 。
所以，最好的结果是，无论 obj.text 如何变，都不需要重新执行副作用函数。

解决这个问题的思路很简单，就是每次副作用执行时，我们可以先把它从所有与之关联的依赖集合中删除。

当副作用函数执行完毕后，会重新建立联系，但在新的联系中不会包含遗留的副作用函数。

要将一个副作用函数从所有与之关联的依赖集合中移除，需要明确有哪些依赖集合中包含它，因此，我们要重新设计副作用函数。

```js
// 用一个全局变量存储被注册的副作用函数
let activeEffect
function effect(fn) {
  const effectFn = () => {
    // 调用 cleanup 函数完成清除工作
    cleanup(effectFn)
    // 当 effectFn 执行时，将其设为当前激活的副作用函数
    activeEffect = effectFn
    fn()
  }
  // effectFn.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

function track(target, key) {
  // 没有 activeEffect 直接返回
  if (!activeEffect) return
  // 根据 target 从桶中取得 depsMap，它也是一个 Map 类型，key: effects
  let depsMap = bucket.get(target)
  // 如果不存在 depsMap，则新建一个 Map 与 target 关联
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  // 再根据 key 从 depsMap 中取得 deps，它是一个 Set 类型
  // 里面存储着所有与当前 key 关联的副作用函数：effects
  let deps = depsMap.get(key)
  // 如果 deps 不存在，则同样新建一个 Set 与 key 关联
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  // 把当前激活的副作用函数添加到依赖集合 deps 中
  deps.add(activeEffect)
  // deps 就是一个与当前副作用函数存在联系的依赖集合
  // 将其添加到 activeEffect.deps 数组中
  activeEffect.deps.push(deps)
}

function cleanup(effectFn) {
  // 遍历 effectFn 的 deps 数组
  for (let i = 0; i < effectFn.deps.length; i++) {
    // deps 是依赖集合
    const deps = effectFn.deps[i]
    // 将 effectFn 从依赖集合中移除
    deps.delete(effectFn)
  }
  // 最后需要重置 effectFn.deps 数组
  effectFn.deps.length = 0
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) {
    return
  }
  const effects = depsMap.get(key)
  // effects && effects.forEach(fn => fn()) // 删除，这个会导致死循环

  // 构造一个新的集合 effectToRun 然后变量它，用来遍历删除，避免死循环
  const effectToRun = new Set(effects)
  effectToRun.forEach(effectFn => effectFn())
}
```

在 trigger 中我们遍历 effects 集合，它是一个 Set 集合，当执行副作用函数时，会调用 cleanup 进行清除，实际上是从 effects 中将当前副作用函数剔除。
但是副作用函数的执行会导致其重新被收集，此时对于 effects 的遍历仍在进行，会引起死循环。

剪短的代码来表达：

```js
const set = new Set([1])

set.forEach(item => {
  set.delete(1)
  set.add(1)
  console.log('遍历中')
})
```

语言规范中对此有明确的说明：在调用 forEach 遍历 Set 集合时，如果一个值已经被访问过了，但该值被删除并重新添加到集合，
如果此时 forEach 遍历没有结束，那么该值会重新被访问。

因此，上面的代码会无限循环。解决办法也很简单，构造领一个 Set 集合并遍历它：

```js
const set = new Set([1])

const newSet = new Set(set)
newSet.forEach(item => {
  set.delete(1)
  set.add(1)
  console.log('遍历中')
})
```

::: note 分支切换与 cleanup demo 运行结果

::: normal-demo 分支切换与 cleanup demo

```html
<div id="effect-branch-cleanup"></div>
<button onclick="changeText()">Change Text</button>
<input
  type="checkbox"
  checked="obj.ok"
  onclick="changeOk(event.target.checked)"
/>Change OK
```

```js
// 存储副作用的桶
const bucket = new WeakMap()
// 用一个全局变量存储被注册的副作用函数
let activeEffect

function effect(fn) {
  const effectFn = () => {
    // 调用 cleanup 函数完成清除工作
    cleanup(effectFn)
    // 当 effectFn 执行时，将其设为当前激活的副作用函数
    activeEffect = effectFn
    fn()
  }
  // effectFn.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

function track(target, key) {
  // 没有 activeEffect 直接返回
  if (!activeEffect) return
  // 根据 target 从桶中取得 depsMap，它也是一个 Map 类型，key: effects
  let depsMap = bucket.get(target)
  // 如果不存在 depsMap，则新建一个 Map 与 target 关联
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  // 再根据 key 从 depsMap 中取得 deps，它是一个 Set 类型
  // 里面存储着所有与当前 key 关联的副作用函数：effects
  let deps = depsMap.get(key)
  // 如果 deps 不存在，则同样新建一个 Set 与 key 关联
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  // 把当前激活的副作用函数添加到依赖集合 deps 中
  deps.add(activeEffect)
  // deps 就是一个与当前副作用函数存在联系的依赖集合
  // 将其添加到 activeEffect.deps 数组中
  activeEffect.deps.push(deps)
}

function cleanup(effectFn) {
  // 遍历 effectFn 的 deps 数组
  for (let i = 0; i < effectFn.deps.length; i++) {
    // deps 是依赖集合
    const deps = effectFn.deps[i]
    // 将 effectFn 从依赖集合中移除
    deps.delete(effectFn)
  }
  // 最后需要重置 effectFn.deps 数组
  effectFn.deps.length = 0
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) {
    return
  }
  const effects = depsMap.get(key)
  // effects && effects.forEach(fn => fn()) // 删除，这个会导致死循环

  // 构造一个新的集合 effectToRun 然后变量它，用来遍历删除，避免死循环
  const effectToRun = new Set(effects)
  effectToRun.forEach(effectFn => effectFn())
}

// 元素数据
const data = {
  ok: true,
  text: 'hello world',
}

const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 添加到桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶中取出并执行
    trigger(target, key)
    return true
  },
})

// 使用 effect 注册副作用函数
effect(() => {
  // 匿名副作用函数
  console.log('effect run - branch-cleanup')
  window.document.querySelector('#effect-branch-cleanup').innerText = obj.ok
    ? obj.text
    : 'not'
})

function changeText() {
  obj.text = 'hello vue3'
  obj.notExist = 'hello vue3'
}

function changeOk(val) {
  obj.ok = val
}
```

:::

## 4.5 嵌套的 effect 与 effect 栈

effect 是可以发生嵌套的，例如：

```js
effect(function effectFn1() {
  effect(function effectFn2() {
    /* ... */
  })
})
```

effectFn1 里嵌套了 effectFn2，什么场景会有呢？比如，Foo 组件有 effect，Foo 组件里调用了 Bar 组件， Bar 里有 effect 的话，就会发送 effect 嵌套。

但是，前面的代码中，全局变量 activeEffect 只能存储一个，有嵌套时不能正确的恢复外层的副作用函数。

为了解决这个问题，我们需要一个副作用栈 effectStack，在副作用函数执行时，将当前副作用函数压入栈中，待副作用函数执行完毕后将其从栈中弹出，并始终让 activeEffect 指向栈顶的副作用函数。
代码如下：

```js
// 用一个全局变量存储被注册的副作用函数
let activeEffect
// effect 栈
let effectStack = []

function effect(fn) {
  const effectFn = () => {
    // 调用 cleanup 函数完成清除工作
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    // 在调用副作用函数之前，将当前副作用函数压入栈中
    effectStack.push(effectFn)
    fn()
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，
    // 并把 activeEffect 还原为之前的值
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // effectFn.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}
```

## 4.6 避免无限递归循环

当有如下的代码时，会发生无限递归循环：

```js
const data = { foo: 1 }
const obj = new Proxy(data, {
  /* ... */
})

effect(() => obj.foo++)
// 上句相当于
effect(() => {
  obj.foo = obj.foo + 1
})
```

在副作用中，既读取 obj.foo，又设置 obj.foo，读取会触发 track 操作，将副作用函数放入桶中；设置会触发 trigger，从桶中取出副作用函数并执行。

但问题是该副作用函数正在执行中，还没执行完毕，就要开始下一次的执行。这将会导致无限递归调用自己，产生栈溢出。

通过分析发现，读取和设置操作是在同一个副作用函数内进行的。不管是 track 收集的副作用函数，还是 trigger 执行的副作用函数都是 activeEffect。
基于此，我们可以加个条件，**如果 trigger 执行的副作用函数与当前正在执行的副作用函数相同，则不触发执行**，如下所示：

```js
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) {
    return
  }
  const effects = depsMap.get(key)

  // 构造一个新的集合 effectToRun 然后变量它，用来遍历删除，避免死循环
  const effectsToRun = new Set()
  effects &&
    effects.forEach(effectFn => {
      if (effectFn !== activeEffectFn) {
        // 如果 trigger 执行的副作用函数与当前正在执行的副作用函数相同，则不触发执行
        effectsToRun.add(effectFn)
      }
    })
  effectsToRun.forEach(effectFn => effectFn())
}
```

## 4.7 调度执行
