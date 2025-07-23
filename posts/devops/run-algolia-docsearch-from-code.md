---
url: 'https://zhaobc.site/posts/devops/run-algolia-docsearch-from-code.md'
---
# 运行自己的 algolia

使用 Algolia DocSearch 可以实现全文检索，对于搜索信息特别方便。
参考 Hope 提供的[使用 @vuepress/docsearch](https://vuepress-theme-hope.github.io/v2/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-docsearch)。

提交 DocSearch 申请可能需要等待一段时间（我提交申请到最终下来花了 4 天），在申请下来之前，也体验下效果，自己使用旧版的方式爬取了内容。
申请下来之后，使用 Crawler 更方便，所以之前的旧方式就不再用了。为了保留记录，写成一篇文章。

旧方式使用 Github Actions 做定期爬虫：

```yaml
name: Algolia Docsearch Action

on:
  push:
    branches:
      - main
    paths:
      - 'docs/algolia-config-hope.json' # 当配置文件有变时，执行爬虫程序

  schedule:
    - cron: '0 18 * * *' # Runs at 18:00 UTC every day, 02:00 UTC+8

jobs:
  algolia:
    runs-on: ubuntu-latest
    name: algolia-crawler
    steps:
      - uses: actions/checkout@v2
      - name: crawling
        # the `uses' attribute must be a path, a Docker image, or owner/repo@ref
        uses: darrenjennings/algolia-docsearch-action@master
        with:
          algolia_api_key: ${{ secrets.ALGOLIA_API_KEY }}
          algolia_application_id: ${{ secrets.ALGOLIA_APPLICATION_ID }}
          # needs to be inside $GITHUB_WORKSPACE from actions/checkout step
          file: docs/algolia-config-hope.json # 配置文件
```
