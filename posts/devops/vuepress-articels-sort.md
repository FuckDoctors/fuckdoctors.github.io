---
url: 'https://zhaobc.site/posts/devops/vuepress-articels-sort.md'
---
# VuePress 文章排序问题

## 现象

开发模式下，文章排序没问题，CI（Github Actions/Vercel） 发布后文章排序不对，并且时间线也不对。

## 调查

查看 `vuepress-theme-hope` 后，发现默认按 `frontmatter.date` 和 git 创建时间排序。

`posts` 下的文章都指定了 `date`，没有问题；而 `notes` 下的笔记都没有指定 `date`，想定按 git 创建日期显示，但是貌似按 git 最后更新时间，或者发布时间显示了。

从而推断是 CI 上的问题。

## 对策

由于本工程采用了两个 CI 同时发布，所以需要解决两条路。

* Github Action 发布 Github Pages
* Vercel CI 发布到 Vercel

### Github Actions

查看 Github Actions 发现 `actions/checkout` 默认只取最后一次履历，指定 `fetch-depth: 0` 可以解决该问题。

### Vercel

Vercel 控制面板上没有地方指定 `git clone` 相关内容，查阅文档后，发现 Vercel 默认执行 `git clone --depth=10 (...)`。

> During this time, Vercel performs a "shallow clone" on your Git repository using the command `git clone --depth=10 (...)` and fetches ten levels of git commit history. This means that only the latest ten commits are pulled and not the entire repository history.

但是官方文档里没提到如何更改这个设置。。。

一番搜索后，发现了两种方案：

[How to unshallow repo?](https://github.com/vercel/vercel/discussions/5737)

1. 使用 Github Action 的 `deploy-to-vercel-action` 发布到 Vercel
2. 通过 Vercel 的环境变量 `VERCEL_DEEP_CLONE: true`

第一种感觉有点怪怪的感觉，第二种更简单也更符合我的需求，所以采用了第二种方案。
