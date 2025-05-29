---
url: 'https://zhaobc.site/posts/theme/auto-articles.md'
---
# 自动显示当前路径下的文章列表

起因是为了方便管理文章，将文章按目录存放，但是这样存放后，地址栏和导航栏会自动多一层路径。

如果启用了 `AutoCatalog` 功能的话，会自动显示目录，不开启的话，显示会有问题。
`AutoCatalog` 显示的目录不太符合文章的风格，想做成显示文章列表的样子，于是就写了 `AutoArticles` 功能。
同时，验证了一下自定义布局的功能。

## 自定义布局

为了在文章目录下显示文章列表，默认的布局无法实现，因此需要自定义布局。

自定义布局，需要在 `client.ts` 中加入自己的布局。

```ts {9}
import { defineClientConfig } from '@vuepress/client'

import AutoArticleListLayout from './theme/layouts/AutoArticleListLayout'
import AutoArticleList from './theme/components/AutoArticleList'

export default defineClientConfig({
  // You can override or add layouts here
  layouts: {
    AutoArticleListLayout,
  },

  enhance: ({ app, router, siteData }) => {
    app.component('AutoArticleList', AutoArticleList)
  },
})
```

`AutoArticleListLayout` 是自定义布局，用于显示文章列表。
代码如下：

```ts
import { type VNode, defineComponent, h } from 'vue'

import { usePageData } from '@vuepress/client'

import CommonWrapper from '@theme-hope/components/CommonWrapper'
import SkipLink from '@theme-hope/components/SkipLink'
import FadeSlideY from '@theme-hope/components/transitions/FadeSlideY'

import AutoArticleList from '../components/AutoArticleList'

export default defineComponent({
  name: 'AutoArticleListLayout',

  setup() {
    const page = usePageData()

    return (): VNode[] => [
      h(SkipLink),
      h(
        CommonWrapper,
        {
          noSidebar: true,
        },
        {
          default: () => h(FadeSlideY, () => h(AutoArticleList)),
        }
      ),
    ]
  },
})
```

## 文章列表

除了布局外，还需要一个文章列表的组件 `AutoArticleList`。

它的功能是选出当前路径下的文字，然后显示文章列表。
代码如下：

```ts
import { type VNode, computed, defineComponent, h, ref } from 'vue'

import BreadCrumb from '@theme-hope/components/BreadCrumb'
import MarkdownContent from '@theme-hope/components/MarkdownContent'
import DropTransition from '@theme-hope/components/transitions/DropTransition'
import ArticleList from '@theme-hope/modules/blog/components/ArticleList'
import { useArticles } from '@theme-hope/modules/blog/composables/index'

import '../styles/auto-article-list.scss'
import { useRouter } from 'vue-router'
import { usePageData } from '@vuepress/client'

export default defineComponent({
  name: 'AutoArticleList',

  setup() {
    const articles = useArticles()
    const router = useRouter()
    const page = usePageData()

    const currRoute = router.currentRoute

    const currArticles = computed(() => {
      return articles.value.items.filter(
        // 需要去掉本身的路径，不然多渲染一个空的列表
        item =>
          item.path.startsWith(currRoute.value.path) &&
          item.path !== currRoute.value.path
      )
    })

    return (): VNode =>
      h('div', { class: 'page blog' }, [
        h('div', { class: 'blog-page-wrapper' }, [
          h(
            'main',
            {
              class: 'auto-article-list',
              id: 'auto-article-list-main-content',
            },
            [
              h(BreadCrumb),
              h(DropTransition, { appear: true, delay: 0.24 }, () =>
                h(ArticleList, { items: currArticles.value })
              ),
            ]
          ),
        ]),
        h(DropTransition, { appear: true, delay: 0.28 }, () =>
          h(MarkdownContent)
        ),
      ])
  },
})
```

## 使用

为了让路径导航 `BreadCrumb` 能正常渲染出来最后一层，文件夹目录需要加一个 `README.md`，并指定 `title`。

同时，为了让自定义布局生效，需要指定自己的布局。
而且，文字列表页不是文章，需要设置不进行索引。

示例：

```yml
---
title: 主题
layout: AutoArticleListLayout
index: false
article: false
---
```
