---
url: 'https://zhaobc.site/posts/theme/echarts-plugin.md'
---
# ECharts 插件

让你的 VuePress 站点的 Markdown 文件支持 [ECharts](https://echarts.apache.org/zh/index.html) 图表。

使用本插件时，需要自己安装 `echarts` 依赖，本插件会将 `echarts` 加到 `optimizeDeps` 中。
另外，本插件使用了 `vueuse`，用来做宽度自适应。

::: warning
本插件已经提交 PR，不需要自己实现，使用 `vuepress-theme-hope` 主题内置即可，这里仅保留记录。
:::

## 配置

```ts {4}
// customConfig.ts
export const customConfig: CustomConfig = {
  mdEnhance: {
    echarts: true,
  },
}
```

## 格式

````md
::: echarts 标题

```json
{
  // 此处为图表配置
}
```

:::
````

## 案例

### 折线图

::: echarts ECharts 折线图

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

:::: details 代码

````md
::: echarts ECharts 折线图

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
````

::::

### 柱状图

::: echarts ECharts 柱状图

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
      "data": [120, 200, 150, 80, 70, 110, 130],
      "type": "bar",
      "showBackground": true,
      "backgroundStyle": {
        "color": "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
```

:::

:::: details 代码

````md
::: echarts ECharts 柱状图

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
      "data": [120, 200, 150, 80, 70, 110, 130],
      "type": "bar",
      "showBackground": true,
      "backgroundStyle": {
        "color": "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
```

:::
````

::::

### 饼图

::: echarts ECharts 饼图

```json
{
  "title": {
    "text": "Referer of a Website",
    "subtext": "Fake Data",
    "left": "center"
  },
  "tooltip": {
    "trigger": "item"
  },
  "legend": {
    "orient": "vertical",
    "left": "left"
  },
  "series": [
    {
      "name": "Access From",
      "type": "pie",
      "radius": "50%",
      "data": [
        {
          "value": 1048,
          "name": "Search Engine"
        },
        {
          "value": 735,
          "name": "Direct"
        },
        {
          "value": 580,
          "name": "Email"
        },
        {
          "value": 484,
          "name": "Union Ads"
        },
        {
          "value": 300,
          "name": "Video Ads"
        }
      ],
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}
```

:::

:::: details 代码

````md
::: echarts ECharts 饼图

```json
{
  "title": {
    "text": "Referer of a Website",
    "subtext": "Fake Data",
    "left": "center"
  },
  "tooltip": {
    "trigger": "item"
  },
  "legend": {
    "orient": "vertical",
    "left": "left"
  },
  "series": [
    {
      "name": "Access From",
      "type": "pie",
      "radius": "50%",
      "data": [
        {
          "value": 1048,
          "name": "Search Engine"
        },
        {
          "value": 735,
          "name": "Direct"
        },
        {
          "value": 580,
          "name": "Email"
        },
        {
          "value": 484,
          "name": "Union Ads"
        },
        {
          "value": 300,
          "name": "Video Ads"
        }
      ],
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}
```

:::
````

::::

## 文档

相关详情，详见 [ECharts](https://echarts.apache.org/zh/option.html) 文档.
