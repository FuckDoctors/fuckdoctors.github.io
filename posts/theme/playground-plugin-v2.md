---
url: 'https://zhaobc.site/posts/theme/playground-plugin-v2.md'
---
# Playground 插件 v2

让你的 VuePress 站点中的 Markdown 文件支持 [Vue SFC Playground](https://sfc.vuejs.org/) 类似的代码案例。

同时支持外置和内置两种模式：

* 外置模式，通过嵌入`iframe`的形式来引入 playground.
* 内置模式，通过`@vue/repl`直接渲染出来 playground.

比 [v1](./playground-plugin.md) 更强大。

::: warning
`playground` 插件已经提交 PR，不需要自己实现，使用 `vuepress-theme-hope` 主题内置即可，这里仅保留记录。
:::

## 配置

::: code-tabs#config

@tab TS

```ts {8}
// .vuepress/config.ts
import { mdEnhance } from 'vuepress-plugin-md-enhance'

export default {
  plugins: [
    mdEnhance({
      // 配置你的 playground
      playground: true, // 使用默认配置
    }),
  ],
}
```

@tab JS

```js {8}
// .vuepress/config.js
const { mdEnhance } = require('vuepress-plugin-md-enhance')

module.exports = {
  plugins: [
    mdEnhance({
      // 配置你的 playground
      playground: true, // 使用默认配置
    }),
  ],
}
```

:::

你也可以使用 `PlaygroundOptions` 自定义你的 playground 配置：

::: code-tabs#config

@tab TS

```ts {8-21}
// .vuepress/config.ts
import { mdEnhance } from 'vuepress-plugin-md-enhance'

export default {
  plugins: [
    mdEnhance({
      // 配置你的 playground
      playground: {
        mode: 'external', // 使用外置模式
        external: {
          base: 'https://sfc.vuejs.org/', // 使用 vue sfc playground.
          defaultImportsMap: 'import-map.json',
        },
        internal: {
          defaultImportsMap: 'import-map.json',
          showCode: false, // 不显示代码
          showCompileOutput: false, // 不显示 js, css, ssr 面板
          showImportMap: true, // 显示 import map
          clearConsole: false, // 不清空控制台
        },
      },
    }),
  ],
}
```

@tab JS

```js {8-21}
// .vuepress/config.js
const { mdEnhance } = require('vuepress-plugin-md-enhance')

module.exports = {
  plugins: [
    mdEnhance({
      // 配置你的 playground
      playground: {
        mode: 'external', // 使用外置模式
        external: {
          base: 'https://sfc.vuejs.org/', // 使用 vue sfc playground.
          defaultImportsMap: 'import-map.json',
        },
        internal: {
          defaultImportsMap: 'import-map.json',
          showCode: false, // 不显示代码
          showCompileOutput: false, // 不显示 js, css, ssr 面板
          showImportMap: true, // 显示 import map
          clearConsole: false, // 不清空控制台
        },
      },
    }),
  ],
}
```

:::

## 案例

### 外置模式

#### 基本用法

````md
:::: playground 基础用法

::: file App.vue

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::
::::
````

#### 高级用法

本示例向你展示如何自定义你的 playground。

* 使用你自己的 playground
* 使用你自己的 import map
* 应用额外的配置到你的 playground

````md
:::: playground 高级用法
::: file App.vue

```vue
<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue'

const msg = ref('Hello Playground!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />

  <Comp />
</template>
```

::: file Comp.vue

```vue
<template>
  <div>Comp</div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary"> Primary </el-button>
    <el-button type="success"> Success </el-button>
    <el-button type="info"> Info </el-button>
    <el-button type="warning"> Warning </el-button>
    <el-button type="danger"> Danger </el-button>
    <el-button>中文</el-button>
  </el-row>
</template>
```

:::
::: imports import-map.json

```json
{
  "imports": {
    "lodash-es": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js"
  }
}
```

:::
::: settings

```json
{
  "mode": "external",
  "external": {
    "base": "https://vue-sfc-playground.vercel.app/",
    "options": {
      "showOutput": "true"
    }
  }
}
```

:::
::::
````

### 内置模式

#### 内置模式 基本用法

````md
:::: playground 基础用法
::: file App.vue

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('Hello Playground!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::
::: settings

```json
{
  "mode": "internal"
}
```

:::
::::
````

#### 内置模式 高级用法

显示 playground 的 JS, CSS, SSR 面板，并显示代码编辑器。

````md
:::: playground 高级用法
::: file App.vue

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('Hello Playground!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::
::: settings

```json
{
  "mode": "internal",
  "internal": {
    "showCode": "true",
    "showCompileOutput": "true"
  }
}
```

:::
::::
````

## Markdown 插件代码

```ts
// playground.ts
import { hash } from '@vuepress/utils'

import type { PluginSimple } from 'markdown-it'
import type { default as Token } from 'markdown-it/lib/token'
import type { PlaygroundFiles } from '../../shared/playground'
import { IMPORT_MAP_KEY } from '../../shared/playground'
import { container } from './container'

const extensions = ['html', 'js', 'ts', 'vue', 'jsx', 'tsx', 'json']

// export const playground: PluginSimple = (md) => {
export const playground =
  (defaultImportMap?: string): PluginSimple =>
  md =>
    container(md, {
      name: 'playground',
      openRender: (tokens: Token[], index: number): string => {
        const { info } = tokens[index]
        const title = info
          .trimStart()
          // 'playground' length
          .slice(10)
          .trim()

        const hashKey = `${index}-${title}`
        const key = `playground-${hash(hashKey)}`

        const codeConfigs: PlaygroundFiles = {}
        let settings: string | null = null

        let configKey: string | null = null
        let isSettings = false

        for (let i = index; i < tokens.length; i++) {
          // console.log(i, tokens[i])
          const { type, content, info } = tokens[i]

          if (type === 'container_playground_close') {
            break
          }

          if (type === 'container_file_open') {
            const fileName = info
              .trimStart()
              // 'file' length
              .slice(4)
              .trim()

            if (!fileName || fileName.length === 0) {
              continue
            }
            configKey = fileName
          } else if (type === 'container_imports_open') {
            const fileName = info
              .trimStart()
              // 'imports' length
              .slice(7)
              .trim()

            if (fileName && fileName.length > 0) {
              configKey = fileName
            } else {
              configKey = defaultImportMap || IMPORT_MAP_KEY
            }
          } else if (type === 'container_settings_open') {
            isSettings = true
          } else if (type === 'inline') {
            continue
          }

          if (!content) {
            continue
          }

          if (isSettings) {
            if (type === 'fence' && info === 'json') {
              settings = content.replace(/^\s+|\s+$/g, '').replace(/\/+$/, '')
            }
          } else {
            if (type === 'fence' && extensions.includes(info) && configKey) {
              codeConfigs[configKey] = {
                lang: info,
                content,
              }
            }
          }

          // set to an unexisit token type
          tokens[i].type = 'playground_empty'
          // hide token
          tokens[i].hidden = true
        }

        const config = encodeURIComponent(JSON.stringify(codeConfigs))
        const settingString = settings
          ? encodeURIComponent(settings)
          : encodeURIComponent('{}')

        return `<Playground id="${key}" ${
          title ? `title="${encodeURIComponent(title)}" ` : ''
        }
      settings="${settingString}"
      config="${config}"
      >`
      },
      closeRender: () => '</Playground>',
    })

const getPlugin =
  (name: string, component: string): PluginSimple =>
  md =>
    container(md, {
      name,
      openRender: (tokens: Token[], index: number): string => {
        const { info } = tokens[index]
        const title = info.trimStart().slice(name.length).trim()

        let config = ''
        let lang = ''

        for (let i = index; i < tokens.length; i++) {
          const { type, content, info } = tokens[i]

          if (type === `container_${name}_close`) {
            break
          }
          if (!content) {
            continue
          }
          if (type === 'fence' && extensions.includes(info)) {
            lang = info
            config = encodeURIComponent(content)
            // break;
          }

          // set to an unexisit token type
          tokens[i].type = `${name}_empty`
          // hide token
          tokens[i].hidden = true
        }

        return `<${component} id="${name}-${hash(
          `${name}${index}${title}${config}`
        )}" ${title ? ` title="${encodeURIComponent(title)}"` : ''}${
          config ? ` config="${config}"` : ''
        } ${lang ? ` lang="${lang}"` : ''}>`
      },
      closeRender: () => `</${component}>`,
    })

export const playFile: PluginSimple = getPlugin('file', 'PlayFile')
export const playSettings: PluginSimple = getPlugin('settings', 'PlaySettings')
export const playImports: PluginSimple = getPlugin('imports', 'PlayImports')
```
