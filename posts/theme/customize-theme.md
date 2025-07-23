---
url: 'https://zhaobc.site/posts/theme/customize-theme.md'
---
# 自定义主题

本站使用功能强大的 [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh) 主题，主题简洁，markdown 插件功能丰富。
同时，`vuepress-theme-hope` 提供了完善的文档，以及 QQ 交流群，作者 [Mr.Hope](https://github.com/Mister-Hope) 更新频率高，问题反馈处理也很及时。

使用 `vuepress-theme-hope` 时，发现了一些小问题，自己重写了一点 `css`，根据文档可以替换组件，或者继承主题实现自己的主题。
最开始修改过的导航栏跟博主信息的间距问题，文章置顶图标，已经提过 `PR` 不需要再自定义了。
下面介绍一下自定义的部分。

## 自定义侧边栏文字

::: warning
已不再使用自定义的侧边栏，使用 `vuepress-theme-hope` 主题默认的侧边栏，这里仅保留记录。

原因：懒，升级主题时不用自己维护修改了。
:::

侧边栏可以使用主题的自动生成功能直接生成，但是目录下的 `README.md` 生成时，目录菜单跟 `README.md` 的侧边栏文字显示是一致的，感官上有些重复。
另外，记录笔记时，想生成那种跟书本一样，`README.md` 生成**前言**或**目录**的样子。所以自己重写了侧边栏生成的处理。

做法是重写 `theme/node/sidebar.ts`，在生成 `README.md` 的 `title` 时读取自定义的 `frontmatter.sidebarText`。
由于主题提供的可替换组件里没有这个组件，为了让主题读取自己自定义的处理，使用了 `onPrepared` 钩子函数。

## 增加自己的 markdown 插件

::: warning
`echarts`, `playground` 插件已经提交 PR，不需要自己实现，使用 `vuepress-theme-hope` 主题内置即可，这里仅保留记录。
:::

`vuepress-theme-hope` 的 `md-enhance` 已经提供了很多开箱即用的插件，如果有不满足的话，可以自己编写。
本站增加了下面的插件：

* [echarts](./echarts-plugin.md)
  主题内置了 `chart` 图表，使用 `chart.js` 做图表，但是国内 `echarts` 使用的还是挺多的，刚好用过一点，所以仿照 `chart`，编写了一个 `echarts` 图表。
* [playground](./playground-plugin-v3.md)
  主题内置的 `demo` 挺好的，对于记录笔记，展示代码片段很方便。
  但是，只能使用 `export default { // ... }` 形式，不支持 `script setup` 语法糖，
  于是借鉴了 `Vue3` 官方 Playground 以及 Element Plus 的代码示例简单做了一个 markdown 的 `playground`。
