---
url: 'https://zhaobc.site/notes/other/dev/regex.md'
---
# 正则表达式

## 查找不含指定字符串的行

```txt
^(?!指定字符串).*$
```

可视化

@startregex
title 查找不含指定字符串的行
^(?!指定字符串).\*$
@endregex

::: warning
直接书写 plantuml 会被替换成一个图片，直接在 `[vp-content]` 下面。
主题默认使用 `plugin-photo-swipe` 来浏览图片，它默认的选择器不能选择 `[vp-content]` 直接儿子元素，所以，需要在 plantuml 外面包一层 `div` 才可以。
另外，`<div>` 与 plantuml 内容直接需要空一行，不然 plantuml 不能正确渲染。
:::

需求：查找 MyBatis 的 sqlmap 中未指定 `jdbcType` 的参数。

```txt
// 查找以 # 或 $ 开头，且不含 jdbcType 或包含no 或 offset 或 limit 的行
^.*[#\$]\{(?!.*jdbcType)(?!*.no)(?!offset)(?!limit).*$
```
