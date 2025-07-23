---
url: 'https://zhaobc.site/posts/theme/column-layout.md'
---
# 文章分栏布局

如果想要文章分两栏来展示的话，可以借助 CSS 的 [columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns) 来完成。

为了方便直接使用，做了一个 css 文件。

::: code-tabs

@tab column-layout.scss

```scss
@use '@sass-palette/hope-config';

.column-layout {
  &.two-col {
    [vp-content] {
      columns: 2;
    }
  }

  .span-all {
    column-span: all;

    &.center {
      text-align: center;
    }
  }

  .divider {
    column-span: all;
    position: relative;
    display: block;
    height: 1px;
    margin: 1rem;
    border-bottom: 1px var(--vp-c-border) solid;
    transition: border-bottom-color var(--vp-t-color);

    &::before {
      content: '·';
      position: absolute;
      left: 50%;
      transform: translate(-50%) translateY(-50%);
      height: 1rem;
      line-height: 1rem;
      color: var(--vp-c-text);
      background: var(--vp-c-bg);
      width: 2rem;
      text-align: center;
      transition:
        color,
        background var(--vp-t-color);
    }
  }

  .span-none {
    column-span: none;
  }

  @media screen and (max-width: hope-config.$mobile) {
    &.two-col {
      [vp-content] {
        columns: unset;
      }
    }
  }
}
```

:::

使用时，需要在 md 文件的 frontmatter 中指定 `containerClass`。

```md
---
containerClass: 'column-layout two-col'
---
```

`.span-all` 用于跨所有列，同时，使用 `attrs` 功能实现标题的跨列和居中示例：

```md
<div class="span-all">xxx</div>

## 前言 {.span-all .center}

<!-- 上面使用 attrs 功能实现标题的跨列和居中 -->
```

适当使用分割线来分段，以避免阅读不便。

```md
<div class="divider" />
```

文章示例：[点这里](../other/columns-layout-demo.md)
