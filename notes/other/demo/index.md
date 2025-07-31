---
url: 'https://zhaobc.site/notes/other/demo/index.md'
---
# 测试示例

## ECharts 示例

::: echarts echarts demo

```json
{
  "xAxis": {
    "type": "category",
    "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "data": [150, 230, 224, 218, 135, 147, 260],
      "type": "line",
      "smooth": true
    }
  ]
}
```

:::

## Playground 示例

::: playground#vue Playground demo

@file App.vue

```vue
<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <div>
    <Comp />
  </div>
</template>
```

@file Comp.vue

```vue
<template>
  <div>Comp</div>
</template>
```

@import

```json
{
  "imports": {
    "lodash-es": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js"
  }
}
```

:::

::: vue-playground Vue Playground demo

@file App.vue

```vue
<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <div>
    <Comp />
  </div>
</template>
```

@file Comp.vue

```vue
<template>
  <div>Comp</div>
</template>
```

@import

```json
{
  "imports": {
    "lodash-es": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js"
  }
}
```

@setting

```json
{
  "service": "https://play.zhaobc.site"
}
```

:::

## Element-Plus 示例

::: playground#vue Element-Plus demo

@file App.vue

```vue
<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary"> Primary </el-button>
    <el-button type="success"> Success </el-button>
    <el-button type="info"> Info </el-button>
    <el-button type="warning"> Warning </el-button>
    <el-button type="danger"> Danger </el-button>
    <el-button>中文</el-button>
  </el-row>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>
```

@import import\_map.json

```json
{
  "imports": {
    "a": "b"
  }
}
```

@setting

```json
{
  "service": "https://element-plus.run/"
}
```

:::

## Replit Demo

已废弃。

```md
<Replit user="FuckDoctors" repl="Java-Test" file="Main.java" />
```

## Flippy Card
