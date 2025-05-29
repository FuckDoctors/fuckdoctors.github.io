---
url: 'https://zhaobc.site/notes/frontend/vue/vue3/basic/template-syntax.md'
---
# 模板语法

## 文本插值

```vue
<span>
Message: {{ msg }}
</span>
```

## 原始 HTML

```vue
<p>
Using v-html directive: <span v-html="rawHtml"></span>
</p>
```

## Attribute 绑定

想要响应式地绑定一个 attribute，应该使用 v-bind 指令：

```vue
<div v-bind:id="dynamicId"></div>
```

因为 v-bind 非常常用，我们提供了特定的简写语法：

```vue
<div :id="dynamicId"></div>
```

动态绑定多个值:

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：

```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}
```

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上：

```vue
<div v-bind="objectOfAttrs"></div>
```

## 指令 Directives

指令是带有 `v-` 前缀的特殊 attribute。

### 参数 Arguments

某些指令会需要一个“参数”，在指令名后通过一个冒号（`:`）隔开做标识。
例如用 `v-bind` 指令来响应式地更新一个 HTML attribute：

```vue
<a v-bind:href="url">
 ...
</a>

<!-- 简写 -->
<a :href="url">
 ...
</a>
```

这里 `href` 就是一个参数，它告诉 `v-bind` 指令将表达式 `url` 的值绑定到元素的 `href` attribute 上。

另一个例子是 `v-on` 指令，它将监听 DOM 事件：

```vue
<a v-on:click="doSomething">
 ...
</a>

<!-- 简写 -->
<a @click="doSomething">
 ...
</a>
```

### 动态参数

同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号(`[]`)内：

```vue
<a v-bind:[attributeName]="url">
 ...
</a>

<!-- 简写 -->
<a :[attributeName]="url">
 ...
</a>
```

### 修饰符 Modifiers

修饰符是以点(`.`)开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。
例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`：

```vue
<form @submit.prevent="onSubmit">
 ...
</form>
```
