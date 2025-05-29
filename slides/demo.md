---
url: 'https://zhaobc.site/slides/demo.md'
---
@slidestart

## 幻灯片演示

一个简单的幻灯片演示与各种小贴士。

> 作者 Mr.Hope. 请滚动鼠标滚轮进入下一页

***

## 标注幻灯片

[👇](#/1/1)

\--

## 标注幻灯片

使用 `---` 标注水平幻灯片

在水平幻灯片中使用 `--` 分割垂直幻灯片

使用 `<!-- .slide: ... -->` 在幻灯片上添加属性

使用 `<!-- .element: ... -->` 在前一个 HTML 元素上添加属性

***

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

\--

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

### 这是一个 H3

标题默认会自动转换为大写。

这是一个有着 **粗体**, *斜体*, ~~删除线~~ 文字并包含 [一个链接](https://mrhope.site) 的段落，并且它会自动换行。所以你无需担心它的长度。

\--

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

列表默认为 `inline-block`

* 项目
* 项目
* 项目

1. 项目 1
2. 项目 2
3. 项目 3

\--

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

在你启用 `highlight` 插件后，代码块会自动高亮。

```js
const a = 1
```

\--

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

在你启用 `math` 插件后，你也可以使用 TEX 格式使用数学公式。

$$
J(\theta\_0,\theta\_1) = \sum\_{i=0}
$$

\--

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

⚠**请注意**: 表格和分割线，以及所有不在 Markdown 标准语法中的内容均不受支持。

***

## 布局

\--

## 布局

👆 `r-fit-text` class 会让文字在不超出幻灯片范围的情况下尽可能大。

\--

## 布局

![Logo](/logo.svg)

👆 `r-stretch` class 帮助你控制注入图片或视频的大小，使它们填充满幻灯片垂直方向上的剩余空间。

\--

## 布局

### 背景

你可以通过向特定幻灯片添加 `data-background` 属性自定义幻灯片背景.

***

## 动画片段

\--

## 动画片段

动画片段用于高亮或显隐幻灯片中的元素。

你需要在元素上添加 `fragment` 和动画 class。

\--

## 动画片段

### 动画 class

* `fade-in`

- `fade-out`

* `fade-up`

- `fade-down`

* `fade-left`

- `fade-right`

* `fade-in-then-out`

- `fade-in-then-semi-out`

\--

## 动画片段

### 动画 class

* `grow`

- `shrink`

* `strike`

- `highlight-red`

* `highlight-green`

- `highlight-blue`

* `highlight-current-red`

- `highlight-current-green`

* `highlight-current-blue`

\--

## 动画片段

### 多个动画片段

你可以按照顺序包裹一个 HTML 元素使其拥有多个动画片段

\--

## 动画片段

### 顺序

你可以使用 `data-fragment-index` 属性改变元素的动画顺序。

不同元素可以有相同的动画顺序。

* 最后显示

- 第二个显示

* 第一个显示

- 第二个显示

***

## 渐变

\--

## 渐变

Transition 可以通过配置中的 `transition` 选项全局设置，也可以通过在特定幻灯片添加 `data-transition` 属性局部设置.

可能的值:

* none
* fade
* slide

- convex
- concave
- zoom

\--

## 渐变

### 过渡动画

你可以在相邻的幻灯片上添加 `data-auto-animate` 使相同的 HTML 元素产生过渡动画效果。

***

## 功能

\--

## 功能

### 代码

通过启用 `highlight` 插件，你可以对代码块进行高亮。

你可以使用 `[a-b|c-d]` 语法来分布高亮特定行。

```js [1-2|3|4]
let a = 1
let b = 2
let c = x => 1 + 2 + x
c(3)
```

\--

## 功能

### 预览模式

按下 `Esc` 或 `O` 即可在幻灯片获得焦点时进入预览模式。

\--

## 功能

### 全屏模式

按下 `F` 或 `F11` 即可在幻灯片获得焦点时进入全屏模式。

\--

## 功能

### 缩放

按下 `alt` (Linux 上使用 `ctrl`) 的同时点击幻灯片的任何元素，即可以向此元素进行放大。

再次点击即可缩小。

***

## 结束

@slideend
