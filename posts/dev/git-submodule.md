---
url: 'https://zhaobc.site/posts/dev/git-submodule.md'
---
# git submodule 使用

## 为什么

本仓库代码是公开的，但是有时候又想保存一些个人私有资料，又希望跟本站一起发布。
Hope 主题已具备加密访问功能，剩下的就是怎么保存私有的 MD 文件了。
此时想到了 git submodule，将私有仓库作为本仓库的一个文件夹，然后通过 git submodule 关联过来，
这时候再跟本站一起发布应该可以达到想要的效果。

## 使用

### 事先设置

先设置 `submodule.recurse`，以便使用 `git clone`, `git pull` 时同步更新子模块。

```shell
git config --global submodule.recurse true
```

### 添加子模块

::: warning
私有仓库作为子模块的话，本地使用的话，建议使用 `SSH` 协议，不然更新起来比较麻烦，得使用 `PAT`。
:::

比如，本站想把一个私有仓库 `https://github.com/FuckDoctors/private-notes`，放到 `docs/posts/private` 下面。

先进到 `docs/posts` 下面，然后执行下面的命令。

```shell
git submodule add -b main git@github.com:FuckDoctors/private-notes.git private
```

上面 `-b main` 是指定了 `main` 分支。

小插曲，一开始不知怎么回事，`git submodule add` 老不成功，即使使用了 `-f` 也不行，`git submodule deinit` 也不行。
后来手动删除了 `.git/modules` 文件夹，然后重新执行 `git submodule add` 就可以了。

执行成功后，会自动生成一个 `.gitmodules` 文件，大概长下面这样。

```txt
[submodule "docs/posts/private"]
  path = docs/posts/private
  url = git@github.com:FuckDoctors/private-notes.git
  branch = main
```

同时，`docs/posts` 下面会多一个 `private` 文件夹。

### 更新一个子模块

进到子模块目录 `docs/posts/private` ，然后执行下面的命令。

```shell
git submodule update --remote
```

### 更新所有子模块

```shell
git submodule foreach git pull
# 或
git submodule update --recursive --remote
```

### 删除子模块

```shell
git submodule deinit [<path>]
git rm [<path>]
rm -rf .git/modules/[<path>]
```

### 列出子模块

```shell
git submodule
```

### 列出子模块状态

```shell
git submodule status
```

### 更改子模块的 url

新版 git 可以直接使用下面的命令：

```shell
git submodule set-url <path> <newurl>
```

旧版的话，需要删除子模块，然后重新添加。

## 包含私有子模块发布

当仓库中含有私有的子模块时，需要指定一个只读的 `PAT`，然后使用 `HTTPS` 方式来访问。

### Github Action

[actions/checkout](https://github.com/actions/checkout) 本身就支持子模块。

```yaml
- uses: actions/checkout@v4
  with:
    # Personal access token (PAT) used to fetch the repository. The PAT is configured
    # with the local git config, which enables your scripts to run authenticated git
    # commands. The post-job step removes the PAT.
    #
    # We recommend using a service account with the least permissions necessary. Also
    # when generating a new PAT, select the least scopes necessary.
    #
    # [Learn more about creating and using encrypted secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
    #
    # Default: ${{ github.token }}
    token: ''

    # Whether to checkout submodules: `true` to checkout submodules or `recursive` to
    # recursively checkout submodules.
    #
    # When the `ssh-key` input is not provided, SSH URLs beginning with
    # `git@github.com:` are converted to HTTPS.
    #
    # Default: false
    submodules: true
```

### Vercel

Vercel 貌似暂不支持私有子模块。[Build Features for Customizing Deployments](https://vercel.com/docs/builds/build-features#git-submodules)

> On Vercel, you can deploy Git submodules with a Git provider as long as the submodule is publicly accessible through the HTTP protocol. Git submodules that are private or requested over SSH will fail during the Build step. However, you can reference private repositories formatted as npm packages in your package.json file dependencies.

可以在 Vercel Checkout 完了之后，更改子模块的原来的 `SSH` 协议的 url 为 带有 `PAT` 的 `HTTPS`，或者删除子模块重新创建。

可以参考这篇文章：[How to Deploy a Project with Private Git Submodules to Vercel](https://www.ytyng.com/en/blog/how-to-deploy-project-to-vercel-includes-private-submodules)

## 参考资料

* [Github Actions: submodule 下公私有仓库授权和通信](https://zhuanlan.zhihu.com/p/408319831)
* [git-submodule](https://git-scm.com/docs/git-submodule)
* [Using Git Submodules for Private Content](https://www.taniarascia.com/git-submodules-private-content/)
* [How to use private Git submodules](https://docs.readthedocs.com/platform/stable/guides/private-submodules.html)
