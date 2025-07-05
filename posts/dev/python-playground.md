---
url: 'https://zhaobc.site/posts/dev/python-playground.md'
---
# Python Playground 演练场

::: warning
Python Playground 还处于开发阶段，功能尚未完善，将来陆续完善。
:::

简单记录一下近期抽空做的简单的 [Python Playground](https://play-py.zhaobc.site)。

Python Playground 主要是为了配合[笔记](../../notes/backend/python/)中的示例，基本保持跟 [Vue Playground](https://play.vuejs.org) 一样的逻辑。

大概思想是将 markdown 中的示例代码直接转为 Playground 中的代码，并可预览执行结果。

## 示例

以下是一些简单的示例。

### Hello world

:::: preview 示例

:::playground#python 示例

@file main.py

```python
import os

print('Hello python playground!')

print('env: ', os.environ)
```

@file env

```shell
a=b
a1=b1
```

@file requirements.txt

```txt
pandas
numpy
```

@settings

```json
{
  "autoRun": true
}
```

:::
::::

上面的 `@settings` 用来传一些参数，比如 `autoRun` 自动运行。

### Matplotlib 绘图

::: tip
加载相关依赖较慢，请耐心等待。
:::

:::: preview Matplotlib 绘图

:::playground#python Matplotlib

@file main.py

```python
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0, 6])
ypoints = np.array([0, 100])

plt.plot(xpoints, ypoints)
plt.show()
```

@settings

```json
{
  "autoRun": true,
  "outputMode": "preview"
}
```

:::
::::

`settings` 里是自动运行和显示预览。

### Plotly 图表

::: tip
加载相关依赖较慢，请耐心等待。
:::

:::: preview Plotly 图表

:::playground#python Plotly

@file main.py

```python
import plotly.graph_objects as go

# 创建示例数据
x = [1, 2, 3, 4, 5]
y = [10, 11, 12, 13, 14]

# 创建折线图
fig = go.Figure()

fig.add_trace(go.Scatter(x=x, y=y, mode='lines+markers', name='数据线'))

# 更新布局
fig.update_layout(
    title='互动折线图',
    xaxis_title='X 轴',
    yaxis_title='Y 轴',
    hovermode='closest'
)

# 显示图表
fig.show()
```

@settings

```json
{
  "autoRun": true,
  "outputMode": "preview"
}
```

:::
::::

### 多文件示例

:::: preview 多文件示例

:::playground#python 多文件示例

@file main.py

```python
from test import print_func

print('Hello python playground!')

print_func('This message is from test.py')
```

@file test.py

```python
def print_func(args):
  print(args)
```

@settings

```json
{
  "autoRun": true
}
```

:::
::::

## 开发背景

为了学习 Python (很遗憾没坚持下来。。) 希望能达到能及时看到代码执行结果的目的，希望加人一个 Python Playground。

最初调查后，发现 [Replit](https://replit.com/) 可达到效果，并且为主题封装了一个简易的 `Replit` 组件。
但是，好景不长，后续 Replit 不再提过可编辑，可运行的 Python 环境。
所以，换个方向，使用其他方式来达到效果，同时期望使用 Vue Playground 的方式，可传递代码，实用性强。

## 开发过程

开发之前先搜了几个在线 Python 环境，但是不太符合要求，只好自己尝试开发了。

* [cliprun](https://cliprun.com/) 简洁易用，但是跟我自己的需求不符，不能传入代码。
* [Play Python](https://play-python.asyncmove.com/) 一个相对完善在线 Python 环境，而且跟 Vue Playground 类似，可以传入代码。
  但，遗憾的是，尝试集成到主题时未成功。
* [toyai/python-playground](https://github.com/toyai/python-playground) 开源，跟 Vue Playground 类似，但是部署需要单独的服务器，而且 Python 版本有点旧。

鉴于以上种种原因，打算自己开发一个 Python Playground, 需要满足以下要求：

* 像 Vue Playground 一样，可以传入代码
* 无需单独的服务器部署
* 基于 [Pyodide](https://pyodide.org/) 开发
* 集成 Python LSP, 提高用户体验

### 第一步 搭框架

下载 [vue-repl](https://github.com/vuejs/repl)，基于它进行魔改。

工作内容：

* 去除 Vue, TypeScript, Import Map 等相关处理
* 去除 CodeMirror，仅保留 MonacoEditor
* 新增 Python 语言及语法高亮

### 第二步 集成 Pyodide

集成 Pyodide, 以便能运行 Python 代码

工作内容：

* 编写 PyodideWorker，完成各种通信

由于能力水平有限，直接使用了 [cliprun](https://cliprun.com/) 的 PyodideWorker，然后稍微修改了一下。
在此感谢 [cliprun](https://cliprun.com/) 的出色工作！

也正是因为使用了 [cliprun](https://cliprun.com/) 的代码，所以可能涉及版权问题，不能随意公开代码，分发代码。
当然，自己水平也有限，也不太好意思公开代码。

### 第三步 同步文件系统

Vue Playground 中，可以支持多个 `.vue`, `.js` 等文件，这次的 Play Playground 也期望能支持多文件。
为此，需要使用 Pyodide 的文件系统。

工作内容：

* 修改 `store.ts` 文件，文件增删改时，使用 PyodideWorker，完成 Pyodide 文件系统的同步操作

### 第四步 集成 Python LSP

通过上面的几步，已经可以完成 Python 代码执行，但是无法像 Vue Playground 那样有代码提示，代码校验。

为了解决这个问题，需要集成 Python LSP (Language Server Protocol)。
LSP Server 又有点犯难，期望直接在浏览器中能用的那种，不需要单独的服务器来部署。

最终选择了 Pyright 来做 LSP，主要使用了 [Pyright Playground](https://github.com/erictraut/pyright-playground/) 的代码。

工作内容:

* 下载 [Pyright Playground](https://github.com/erictraut/pyright-playground/) 代码，然后将 server 端作为 LSP Server
* 摘取 [Pyright Playground](https://github.com/erictraut/pyright-playground/) client 端部分代码，集成到 MonacoEditor 中
* 稍微修改 server 端代码，使其适配 Windows 环境

至此，本地开发中可以使用 Python LSP了，能完成代码提示，代码校验等。

### 第五步 部署到 Vercel

由于本人博客主要部署在 Vercel 上，所以本次的 Python Playground 也打算继续部署到 Vercel 上（主要是穷，没钱买服务器 -\_-!）。

由于 [Pyright Playground](https://github.com/erictraut/pyright-playground/) 中的 server 端使用 express 作为 Server 来处理 API，本地没问题。

但是 Vercel 虽然也支持 express，但是试验中发现并不好用，估计是 express + typescript 的问题吧。。。

为了解决部署到 Vercel 中无法使用 LSP 的问题，打算改写 server 端，使用 Vercel Functions 来处理 API。

但是 Vercel Functions 的资料感觉很少，没看到怎么处理复杂 API 路径和参数的问题，后来偶然看到了一篇文章介绍了路径和参数的例子才知道怎么处理。
在此表示感谢，但是忘记记录地址了。。。

大概按以下的逻辑处理:

```txt
api                                 // vercel 要求，必须放到根目录下的 api 文件夹
│  hello.ts
│  session.ts                       // 处理 /api/session 请求
│  status.ts
│
└─session
    │  [sid].ts                     // 处理 /api/session/:sid 请求
    │
    └─[sid]
            completion.ts           // 处理 /api/session/:sid/completion 请求
            diagnostics.ts
            hover.ts
```

最后，还需要调整 server 端的 API 处理，原来的 Pyright 中有 session 的管理，
最初创建一个 seesion，后续处理使用其 sessionId 接着处理，已有该 session 的话，直接使用，这样效率高。
但是，Vercel 中，不能执行长时间的请求，也不能使用全局变量，这导致了 session 管理失效，不能正常使用。

对策，Vercel 环境中，找不到原来的 session 时就新建一个，其实相当于每次都新建 session，这也导致了部署后，代码提示会相对比较慢。

## 类似功能

其他网站已提供现成的功能，可以直接使用。本次开发中也借鉴了它们，再次表示感谢。

* [Vue Playground](https://play.vuejs.org)
* [cliprun](https://cliprun.com/) Online Python Compiler, IDE, and Interpreter
* [Play Python](https://play-python.asyncmove.com/) Run code, collaborate in real-time.
* [Pyodide](https://pyodide.org/) Python distribution for the browser and Node.js based on WebAssembly
