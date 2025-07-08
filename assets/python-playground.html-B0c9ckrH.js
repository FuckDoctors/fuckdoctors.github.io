import{_ as u,c,a as r,b as n,h as l,e as s,w as e,f as i,o as d}from"./app-YPujN3X2.js";const h={};function y(g,a){const o=i("RouteLink"),p=i("Playground"),t=i("VPPreview");return d(),c("div",null,[a[9]||(a[9]=r('<h1 id="python-playground-演练场" tabindex="-1"><a class="header-anchor" href="#python-playground-演练场"><span>Python Playground 演练场</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Python Playground 还处于开发阶段，功能尚未完善，将来陆续完善。</p></div><p>简单记录一下近期抽空做的简单的 <a href="https://play-py.zhaobc.site" target="_blank" rel="noopener noreferrer">Python Playground</a>。</p>',3)),n("p",null,[a[1]||(a[1]=s("Python Playground 主要是为了配合")),l(o,{to:"/notes/backend/python/"},{default:e(()=>a[0]||(a[0]=[s("笔记")])),_:1,__:[0]}),a[2]||(a[2]=s("中的示例，基本保持跟 ")),a[3]||(a[3]=n("a",{href:"https://play.vuejs.org",target:"_blank",rel:"noopener noreferrer"},"Vue Playground",-1)),a[4]||(a[4]=s(" 一样的逻辑。"))]),a[10]||(a[10]=n("p",null,"大概思想是将 markdown 中的示例代码直接转为 Playground 中的代码，并可预览执行结果。",-1)),a[11]||(a[11]=n("h2",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例"},[n("span",null,"示例")])],-1)),a[12]||(a[12]=n("p",null,"以下是一些简单的示例。",-1)),a[13]||(a[13]=n("h3",{id:"hello-world",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hello-world"},[n("span",null,"Hello world")])],-1)),l(t,{title:"示例"},{content:e(()=>[l(p,{title:"%E7%A4%BA%E4%BE%8B",link:"https%3A%2F%2Fplay-py.zhaobc.site%3FautoRun%3Dtrue%23eyJtYWluLnB5IjoiaW1wb3J0IG9zXG5cbnByaW50KCdIZWxsbyBweXRob24gcGxheWdyb3VuZCEnKVxuXG5wcmludCgnZW52OiAnLCBvcy5lbnZpcm9uKVxuIiwiZW52IjoiYT1iXG5hMT1iMVxuIiwicmVxdWlyZW1lbnRzLnR4dCI6InBhbmRhc1xubnVtcHlcbiJ9"})]),code:e(()=>a[5]||(a[5]=[n("div",{class:"language-","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,":::playground#python 示例")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file main.py")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```python")]),s(`
`),n("span",{class:"line"},[n("span",null,"import os")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"print('Hello python playground!')")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"print('env: ', os.environ)")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file env")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```shell")]),s(`
`),n("span",{class:"line"},[n("span",null,"a=b")]),s(`
`),n("span",{class:"line"},[n("span",null,"a1=b1")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file requirements.txt")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```txt")]),s(`
`),n("span",{class:"line"},[n("span",null,"pandas")]),s(`
`),n("span",{class:"line"},[n("span",null,"numpy")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@settings")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```json")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "autoRun": true')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,":::")])])])],-1)])),_:1}),a[14]||(a[14]=n("p",null,[s("上面的 "),n("code",null,"@settings"),s(" 用来传一些参数，比如 "),n("code",null,"autoRun"),s(" 自动运行。")],-1)),a[15]||(a[15]=n("h3",{id:"matplotlib-绘图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#matplotlib-绘图"},[n("span",null,"Matplotlib 绘图")])],-1)),a[16]||(a[16]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"加载相关依赖较慢，请耐心等待。")],-1)),l(t,{title:"Matplotlib 绘图"},{content:e(()=>[l(p,{title:"Matplotlib",link:"https%3A%2F%2Fplay-py.zhaobc.site%3FautoRun%3Dtrue%26outputMode%3Dpreview%23eyJtYWluLnB5IjoiaW1wb3J0IG1hdHBsb3RsaWIucHlwbG90IGFzIHBsdFxuaW1wb3J0IG51bXB5IGFzIG5wXG5cbnhwb2ludHMgPSBucC5hcnJheShbMCwgNl0pXG55cG9pbnRzID0gbnAuYXJyYXkoWzAsIDEwMF0pXG5cbnBsdC5wbG90KHhwb2ludHMsIHlwb2ludHMpXG5wbHQuc2hvdygpXG4ifQ%3D%3D"})]),code:e(()=>a[6]||(a[6]=[n("div",{class:"language-","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,":::playground#python Matplotlib")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file main.py")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```python")]),s(`
`),n("span",{class:"line"},[n("span",null,"import matplotlib.pyplot as plt")]),s(`
`),n("span",{class:"line"},[n("span",null,"import numpy as np")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"xpoints = np.array([0, 6])")]),s(`
`),n("span",{class:"line"},[n("span",null,"ypoints = np.array([0, 100])")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"plt.plot(xpoints, ypoints)")]),s(`
`),n("span",{class:"line"},[n("span",null,"plt.show()")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@settings")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```json")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "autoRun": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "outputMode": "preview"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,":::")])])])],-1)])),_:1}),a[17]||(a[17]=n("p",null,[n("code",null,"settings"),s(" 里是自动运行和显示预览。")],-1)),a[18]||(a[18]=n("h3",{id:"plotly-图表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plotly-图表"},[n("span",null,"Plotly 图表")])],-1)),a[19]||(a[19]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"加载相关依赖较慢，请耐心等待。")],-1)),l(t,{title:"Plotly 图表"},{content:e(()=>[l(p,{title:"Plotly",link:"https%3A%2F%2Fplay-py.zhaobc.site%3FautoRun%3Dtrue%26outputMode%3Dpreview%23eyJtYWluLnB5IjoiaW1wb3J0IHBsb3RseS5ncmFwaF9vYmplY3RzIGFzIGdvXG5cbiMg5Yib5bu656S65L6L5pWw5o2uXG54ID0gWzEsIDIsIDMsIDQsIDVdXG55ID0gWzEwLCAxMSwgMTIsIDEzLCAxNF1cblxuIyDliJvlu7rmipjnur%2Flm75cbmZpZyA9IGdvLkZpZ3VyZSgpXG5cbmZpZy5hZGRfdHJhY2UoZ28uU2NhdHRlcih4PXgsIHk9eSwgbW9kZT0nbGluZXMrbWFya2VycycsIG5hbWU9J%2BaVsOaNrue6vycpKVxuXG4jIOabtOaWsOW4g%2BWxgFxuZmlnLnVwZGF0ZV9sYXlvdXQoXG4gICAgdGl0bGU9J%2BS6kuWKqOaKmOe6v%2BWbvicsXG4gICAgeGF4aXNfdGl0bGU9J1gg6L20JyxcbiAgICB5YXhpc190aXRsZT0nWSDovbQnLFxuICAgIGhvdmVybW9kZT0nY2xvc2VzdCdcbilcblxuIyDmmL7npLrlm77ooahcbmZpZy5zaG93KClcbiJ9"})]),code:e(()=>a[7]||(a[7]=[n("div",{class:"language-","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,":::playground#python Plotly")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file main.py")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```python")]),s(`
`),n("span",{class:"line"},[n("span",null,"import plotly.graph_objects as go")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 创建示例数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"x = [1, 2, 3, 4, 5]")]),s(`
`),n("span",{class:"line"},[n("span",null,"y = [10, 11, 12, 13, 14]")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 创建折线图")]),s(`
`),n("span",{class:"line"},[n("span",null,"fig = go.Figure()")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"fig.add_trace(go.Scatter(x=x, y=y, mode='lines+markers', name='数据线'))")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 更新布局")]),s(`
`),n("span",{class:"line"},[n("span",null,"fig.update_layout(")]),s(`
`),n("span",{class:"line"},[n("span",null,"    title='互动折线图',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    xaxis_title='X 轴',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    yaxis_title='Y 轴',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    hovermode='closest'")]),s(`
`),n("span",{class:"line"},[n("span",null,")")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 显示图表")]),s(`
`),n("span",{class:"line"},[n("span",null,"fig.show()")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@settings")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```json")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "autoRun": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "outputMode": "preview"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,":::")])])])],-1)])),_:1}),a[20]||(a[20]=n("h3",{id:"多文件示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多文件示例"},[n("span",null,"多文件示例")])],-1)),l(t,{title:"多文件示例"},{content:e(()=>[l(p,{title:"%E5%A4%9A%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B",link:"https%3A%2F%2Fplay-py.zhaobc.site%3FautoRun%3Dtrue%23eyJtYWluLnB5IjoiZnJvbSB0ZXN0IGltcG9ydCBwcmludF9mdW5jXG5cbnByaW50KCdIZWxsbyBweXRob24gcGxheWdyb3VuZCEnKVxuXG5wcmludF9mdW5jKCdUaGlzIG1lc3NhZ2UgaXMgZnJvbSB0ZXN0LnB5JylcbiIsInRlc3QucHkiOiJkZWYgcHJpbnRfZnVuYyhhcmdzKTpcbiAgcHJpbnQoYXJncylcbiJ9"})]),code:e(()=>a[8]||(a[8]=[n("div",{class:"language-","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,":::playground#python 多文件示例")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file main.py")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```python")]),s(`
`),n("span",{class:"line"},[n("span",null,"from test import print_func")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"print('Hello python playground!')")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"print_func('This message is from test.py')")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@file test.py")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```python")]),s(`
`),n("span",{class:"line"},[n("span",null,"def print_func(args):")]),s(`
`),n("span",{class:"line"},[n("span",null,"  print(args)")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"@settings")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"```json")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "autoRun": true')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"```")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,":::")])])])],-1)])),_:1}),a[21]||(a[21]=r(`<h2 id="开发背景" tabindex="-1"><a class="header-anchor" href="#开发背景"><span>开发背景</span></a></h2><p>为了学习 Python (很遗憾没坚持下来。。) 希望能达到能及时看到代码执行结果的目的，希望加人一个 Python Playground。</p><p>最初调查后，发现 <a href="https://replit.com/" target="_blank" rel="noopener noreferrer">Replit</a> 可达到效果，并且为主题封装了一个简易的 <code>Replit</code> 组件。<br> 但是，好景不长，后续 Replit 不再提过可编辑，可运行的 Python 环境。<br> 所以，换个方向，使用其他方式来达到效果，同时期望使用 Vue Playground 的方式，可传递代码，实用性强。</p><h2 id="开发过程" tabindex="-1"><a class="header-anchor" href="#开发过程"><span>开发过程</span></a></h2><p>开发之前先搜了几个在线 Python 环境，但是不太符合要求，只好自己尝试开发了。</p><ul><li><a href="https://cliprun.com/" target="_blank" rel="noopener noreferrer">cliprun</a> 简洁易用，但是跟我自己的需求不符，不能传入代码。</li><li><a href="https://play-python.asyncmove.com/" target="_blank" rel="noopener noreferrer">Play Python</a> 一个相对完善在线 Python 环境，而且跟 Vue Playground 类似，可以传入代码。<br> 但，遗憾的是，尝试集成到主题时未成功。</li><li><a href="https://github.com/toyai/python-playground" target="_blank" rel="noopener noreferrer">toyai/python-playground</a> 开源，跟 Vue Playground 类似，但是部署需要单独的服务器，而且 Python 版本有点旧。</li></ul><p>鉴于以上种种原因，打算自己开发一个 Python Playground, 需要满足以下要求：</p><ul><li>像 Vue Playground 一样，可以传入代码</li><li>无需单独的服务器部署</li><li>基于 <a href="https://pyodide.org/" target="_blank" rel="noopener noreferrer">Pyodide</a> 开发</li><li>集成 Python LSP, 提高用户体验</li></ul><h3 id="第一步-搭框架" tabindex="-1"><a class="header-anchor" href="#第一步-搭框架"><span>第一步 搭框架</span></a></h3><p>下载 <a href="https://github.com/vuejs/repl" target="_blank" rel="noopener noreferrer">vue-repl</a>，基于它进行魔改。</p><p>工作内容：</p><ul><li>去除 Vue, TypeScript, Import Map 等相关处理</li><li>去除 CodeMirror，仅保留 MonacoEditor</li><li>新增 Python 语言及语法高亮</li></ul><h3 id="第二步-集成-pyodide" tabindex="-1"><a class="header-anchor" href="#第二步-集成-pyodide"><span>第二步 集成 Pyodide</span></a></h3><p>集成 Pyodide, 以便能运行 Python 代码</p><p>工作内容：</p><ul><li>编写 PyodideWorker，完成各种通信</li></ul><p>由于能力水平有限，直接使用了 <a href="https://cliprun.com/" target="_blank" rel="noopener noreferrer">cliprun</a> 的 PyodideWorker，然后稍微修改了一下。<br> 在此感谢 <a href="https://cliprun.com/" target="_blank" rel="noopener noreferrer">cliprun</a> 的出色工作！</p><p>也正是因为使用了 <a href="https://cliprun.com/" target="_blank" rel="noopener noreferrer">cliprun</a> 的代码，所以可能涉及版权问题，不能随意公开代码，分发代码。<br> 当然，自己水平也有限，也不太好意思公开代码。</p><h3 id="第三步-同步文件系统" tabindex="-1"><a class="header-anchor" href="#第三步-同步文件系统"><span>第三步 同步文件系统</span></a></h3><p>Vue Playground 中，可以支持多个 <code>.vue</code>, <code>.js</code> 等文件，这次的 Play Playground 也期望能支持多文件。<br> 为此，需要使用 Pyodide 的文件系统。</p><p>工作内容：</p><ul><li>修改 <code>store.ts</code> 文件，文件增删改时，使用 PyodideWorker，完成 Pyodide 文件系统的同步操作</li></ul><h3 id="第四步-集成-python-lsp" tabindex="-1"><a class="header-anchor" href="#第四步-集成-python-lsp"><span>第四步 集成 Python LSP</span></a></h3><p>通过上面的几步，已经可以完成 Python 代码执行，但是无法像 Vue Playground 那样有代码提示，代码校验。</p><p>为了解决这个问题，需要集成 Python LSP (Language Server Protocol)。<br> LSP Server 又有点犯难，期望直接在浏览器中能用的那种，不需要单独的服务器来部署。</p><p>最终选择了 Pyright 来做 LSP，主要使用了 <a href="https://github.com/erictraut/pyright-playground/" target="_blank" rel="noopener noreferrer">Pyright Playground</a> 的代码。</p><p>工作内容:</p><ul><li>下载 <a href="https://github.com/erictraut/pyright-playground/" target="_blank" rel="noopener noreferrer">Pyright Playground</a> 代码，然后将 server 端作为 LSP Server</li><li>摘取 <a href="https://github.com/erictraut/pyright-playground/" target="_blank" rel="noopener noreferrer">Pyright Playground</a> client 端部分代码，集成到 MonacoEditor 中</li><li>稍微修改 server 端代码，使其适配 Windows 环境</li></ul><p>至此，本地开发中可以使用 Python LSP了，能完成代码提示，代码校验等。</p><h3 id="第五步-部署到-vercel" tabindex="-1"><a class="header-anchor" href="#第五步-部署到-vercel"><span>第五步 部署到 Vercel</span></a></h3><p>由于本人博客主要部署在 Vercel 上，所以本次的 Python Playground 也打算继续部署到 Vercel 上（主要是穷，没钱买服务器 -_-!）。</p><p>由于 <a href="https://github.com/erictraut/pyright-playground/" target="_blank" rel="noopener noreferrer">Pyright Playground</a> 中的 server 端使用 express 作为 Server 来处理 API，本地没问题。</p><p>但是 Vercel 虽然也支持 express，但是试验中发现并不好用，估计是 express + typescript 的问题吧。。。</p><p>为了解决部署到 Vercel 中无法使用 LSP 的问题，打算改写 server 端，使用 Vercel Functions 来处理 API。</p><p>但是 Vercel Functions 的资料感觉很少，没看到怎么处理复杂 API 路径和参数的问题，后来偶然看到了一篇文章介绍了路径和参数的例子才知道怎么处理。<br> 在此表示感谢，但是忘记记录地址了。。。</p><p>大概按以下的逻辑处理:</p><div class="language-txt" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span>api                                 // vercel 要求，必须放到根目录下的 api 文件夹</span></span>
<span class="line"><span>│  hello.ts</span></span>
<span class="line"><span>│  session.ts                       // 处理 /api/session 请求</span></span>
<span class="line"><span>│  status.ts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└─session</span></span>
<span class="line"><span>    │  [sid].ts                     // 处理 /api/session/:sid 请求</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └─[sid]</span></span>
<span class="line"><span>            completion.ts           // 处理 /api/session/:sid/completion 请求</span></span>
<span class="line"><span>            diagnostics.ts</span></span>
<span class="line"><span>            hover.ts</span></span></code></pre></div><p>最后，还需要调整 server 端的 API 处理，原来的 Pyright 中有 session 的管理，<br> 最初创建一个 seesion，后续处理使用其 sessionId 接着处理，已有该 session 的话，直接使用，这样效率高。<br> 但是，Vercel 中，不能执行长时间的请求，也不能使用全局变量，这导致了 session 管理失效，不能正常使用。</p><p>对策，Vercel 环境中，找不到原来的 session 时就新建一个，其实相当于每次都新建 session，这也导致了部署后，代码提示会相对比较慢。</p><h2 id="类似功能" tabindex="-1"><a class="header-anchor" href="#类似功能"><span>类似功能</span></a></h2><p>其他网站已提供现成的功能，可以直接使用。本次开发中也借鉴了它们，再次表示感谢。</p><ul><li><a href="https://play.vuejs.org" target="_blank" rel="noopener noreferrer">Vue Playground</a></li><li><a href="https://cliprun.com/" target="_blank" rel="noopener noreferrer">cliprun</a> Online Python Compiler, IDE, and Interpreter</li><li><a href="https://play-python.asyncmove.com/" target="_blank" rel="noopener noreferrer">Play Python</a> Run code, collaborate in real-time.</li><li><a href="https://pyodide.org/" target="_blank" rel="noopener noreferrer">Pyodide</a> Python distribution for the browser and Node.js based on WebAssembly</li></ul>`,42))])}const P=u(h,[["render",y]]),m=JSON.parse('{"path":"/posts/dev/python-playground.html","title":"Python Playground 演练场","lang":"zh-CN","frontmatter":{"article":true,"isOriginal":true,"star":90,"date":"2025-07-02T00:00:00.000Z","category":["dev","playground"],"tag":["dev","开发","python"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python Playground 演练场\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-07-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-07-05T14:31:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhao Bin\\",\\"url\\":\\"zhaobc.site\\",\\"email\\":\\"hi@zhaobc.site\\"}]}"],["meta",{"property":"og:url","content":"https://www.zhaobc.site/posts/dev/python-playground.html"}],["meta",{"property":"og:site_name","content":"赵斌的小站"}],["meta",{"property":"og:title","content":"Python Playground 演练场"}],["meta",{"property":"og:description","content":"Python Playground 演练场 注意 Python Playground 还处于开发阶段，功能尚未完善，将来陆续完善。 简单记录一下近期抽空做的简单的 Python Playground。 Python Playground 主要是为了配合中的示例，基本保持跟 Vue Playground 一样的逻辑。 大概思想是将 markdown 中的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-05T14:31:01.000Z"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"开发"}],["meta",{"property":"article:tag","content":"dev"}],["meta",{"property":"article:published_time","content":"2025-07-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-05T14:31:01.000Z"}],["meta",{"name":"description","content":"Python Playground, Python 演练场"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.zhaobc.site/rss.xml","title":"赵斌的小站 RSS Feed"}]],"description":"Python Playground 演练场 注意 Python Playground 还处于开发阶段，功能尚未完善，将来陆续完善。 简单记录一下近期抽空做的简单的 Python Playground。 Python Playground 主要是为了配合中的示例，基本保持跟 Vue Playground 一样的逻辑。 大概思想是将 markdown 中的..."},"git":{"createdTime":1751511403000,"updatedTime":1751725861000,"contributors":[{"name":"Zhao Bin","username":"","email":"413853119@qq.com","commits":3}]},"readingTime":{"minutes":5.61,"words":1684},"filePathRelative":"posts/dev/python-playground.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>Python Playground 还处于开发阶段，功能尚未完善，将来陆续完善。</p>\\n</div>\\n<p>简单记录一下近期抽空做的简单的 <a href=\\"https://play-py.zhaobc.site\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Python Playground</a>。</p>\\n<p>Python Playground 主要是为了配合<a href=\\"/notes/backend/python/\\" target=\\"_blank\\">笔记</a>中的示例，基本保持跟 <a href=\\"https://play.vuejs.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue Playground</a> 一样的逻辑。</p>","autoDesc":true}');export{P as comp,m as data};
