---
url: 'https://zhaobc.site/posts/home/tv.md'
---
# 客厅电视尺寸推荐

本文内容引用自中国电子视像行业协会发布的 T/CVIA-56-2016 《客厅平板电视主流尺寸推荐规范》。

## 人眼最小分辨角

通常将人眼的最小分辨角设为 1 弧分，即 1/3400。

## 人眼视度

好的视觉临感：垂直视角为 20 度，水平视角为 36 度。

## 平板电视最佳观看距离

平板电视的最佳观看距离是指在此观看距离上，屏幕一个像素对人眼的张角正好不大于人眼的最小分辨角，不会产生颗粒感。
同时观看视角约在 36 度附近，有强临场感。
视角太大，会因频繁转动眼球造成疲劳感。

* 观看者正对屏幕，且双眼与电视屏幕中心在同一水平高度
* 视角约在 36 度附近，有强临场感

平板电视机的最佳观看距离可表示为:

颗粒感观看距离: $Lopl= \frac{3400}{Rv} \times H$

上式中，`Rv` 为屏幕垂直方向分辨率，4K 屏幕为 2160，8K 屏幕为 4320；`H` 为屏幕有效显示区域高度，单位为米。

临场感观看距离: $Lop2=H \times \frac{8}{9 \times \tan (18°)}$ (屏幕宽高比为 16:9)
推荐观看距离: $Lop1\<Lop\<Lop2$
最佳观看距离: $Lop=\max (Lop1, Lop2)$

## 客厅尺寸与观看距离

### 客厅静开间尺寸

客厅的建筑开间尺寸 `L` 是相对两面墙体中心的间隔距离，装修后的净开间尺寸必须减去一面墙体的厚度以及抹灰厚度。即，

$$
\text{客厅净开间}=\text{客厅建筑开间}-2 \times \frac{1}{2} \text{墙体厚度}-2 \times \text{抹灰厚度}
$$

通常的墙体厚度为 200mm，抹灰厚度约 25mm。

$$
\text{客厅净开间}=\text{客厅建筑开间}-250mm
$$

### 客厅平均观看距离

#### 电视屏幕距背景墙面的距离

通常情况下，电视屏幕距背景墙面的距离约为 200mm (壁挂式根据实际情况计算)。

#### 人面部距离沙发墙面的最小距离

普通三人沙发，若观看者采用躺坐姿，则面部距离沙发墙面的最小距离约为 500mm。

#### 人面部距离沙发墙面的最大距离

普通三人沙发，若观看者在观看电视节目同时还要在茶几上做事，则面部距离沙发墙面的最大距离约为 1000mm。

#### 人面部距离沙发墙面的平均距离

取平均值约为 750mm。

综上所述，对于普通的客厅，可以选用的观看距离为：

$$
Lop=\text{客厅建筑开间L} - (\text{墙体厚度} + \text{抹灰厚度} + \text{电视与电视墙间距} + \text{平均观看距离})
$$

即

$$
Lop=\text{客厅建筑开间L}-1.2(m)
$$

对于装修和家具摆放有特殊要求的客厅，用户可以实测其观看距离 Lop。

## 平板电视机推荐尺寸

说明: 以下均以当下主流的屏幕宽高比为 16:9 的平板电视作为计算基准对于普通客厅的建筑开间 L，平板电视机的推荐屏幕高度 H 的计算公式为:

$$
H1=(L-1.2) \times \frac{Rv}{3400}
\newline
H2=(L-1.2) \times \frac{9 \times \tan (18°)}{8}
$$

屏幕高度选取尺寸 H 为:

$$
H2 \leq H \leq H1
$$

式中，`L` 为用户客厅的建筑开间，单位为米，`Rv` 为平板电视机屏幕垂向分辨率，`H` 为平板电视可视屏幕高度，单位为米。
`H1`: 最小分辨角对应的屏幕高度；`H2`: 水平 36 度视角对应的屏幕高度。

H2 公式计算思路：

观影示例：

```text
______
|   /
|  /
| /
|/
👁
```

1. 水平视角 36 度，单侧 18 度
2. 已知观看距离 L - 1.2
3. 根据三角函数，$\tan (18°) = \frac{\frac{1}{2} \times \text{电视宽度}}{L-1.2}$
4. 电视宽度:电视高度=16:9

综上可得：

$$
\tan (18°)=\frac{\frac{1}{2} \times (\frac{16}{9} \times \text{电视高度}) }{L-1.2}
\newline
\text{电视高度}=(L-1.2) \times \frac{9}{8} \times \tan (18°)
$$

平板电视的推荐尺寸计算公式：

$$
D1= \frac{H1 \times 1000 \times \sqrt{1 + (\frac{16}{9})^2}} {25.4}
\newline
D2= \frac{H2 \times 1000 \times \sqrt{1 + (\frac{16}{9})^2}} {25.4}
$$

平板电视的选取尺寸为：

$$
D2 \leq D \leq D1
$$

注 1，三角函数：

$$
\text{已知：}
\newline
\frac{W}{H}=\frac{16}{9}
\newline
W^2+H^2=C^2
\newline
\text{求 C：}
\newline
(\frac{16}{9} \times H)^2+ H^2=C^2
\newline
(\frac{16}{9})^2 \times H^2+ H^2=C^2
\newline
H^2 \times (1 + (\frac{16}{9})^2)=C^2
\newline
C=\sqrt{1 + (\frac{16}{9})^2 \times H^2}
$$

注 2，1 英寸 = 2.54 里米。

## 精简版

### 屏幕高度

屏幕高度（单位米）选取 H 为:

$$
\text{4K}
\newline
H1=(L-1.2) \times 0.6353
\newline
\text{8K}
\newline
H1=(L-1.2) \times 1.2706
\newline
\text{视角，临场观感}
\newline
H2=(L-1.2) \times 0.3655
\newline
H2 \leq H \leq H1
$$

### 平板电视尺寸

平板电视的选取尺寸（单位英寸）为：

$$
\text{与高度关系}
\newline
D1= H1 \times 80.3
\newline
D2= H2 \times 80.3
\newline
D2 \leq D \leq D1
$$

### 电视尺寸与开间大小

#### 普通壁挂

$$
\text{4K}
\newline
D1=(L-1.2) \times 0.6353 \times 80.3
\newline
D2=(L-1.2) \times 0.3655 \times 80.3
\newline
\text{4K}
\newline
D1=(L-1.2) \times 51
\newline
D2=(L-1.2) \times 29.3
\newline
D2 \leq D \leq D1
$$

#### 满墙电视柜内嵌

$$
\text{4K}
\newline
D1=(L-1.35) \times 51
\newline
D2=(L-1.35) \times 29.3
\newline
D2 \leq D \leq D1
$$

## 电视尺寸推荐图

以满墙电视柜为例：

::: echarts

```js
function d4kBest(l) {
  return ((l - 1.35) * 29.3).toFixed(0)
}

function d4kMax(l) {
  return ((l - 1.35) * 51.0).toFixed(0)
}

// 开间大小
function generateDataset() {
  const data = []
  const stepSize = 0.5
  const maxSize = 5.5
  let d = 2.5

  while (d <= maxSize) {
    data.push([
      d.toFixed(1), // 开间大小
      d4kBest(d), // 最佳观感
      d4kMax(d), // 最大尺寸
    ])
    d = d + stepSize
  }

  return data
}

const option = {
  title: {
    text: '电视尺寸推荐',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    show: true,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    name: '客厅建筑开间（米）',
    nameLocation: 'middle',
    nameGap: 18,
    nameTextStyle: {
      fontSize: 14,
    },
    type: 'category',
    boundaryGap: false,
    // axisLabel: {
    //   formatter: '{value} 米'
    // }
  },
  yAxis: {
    name: '屏幕尺寸（英寸）',
    nameLocation: 'middle',
    nameGap: 35,
    nameTextStyle: {
      fontSize: 14,
    },
    type: 'value',
    // axisLabel: {
    //   formatter: '{value} 英寸'
    // }
  },
  dataset: {
    dimensions: ['L', '最佳观感尺寸', '最大可视尺寸'],
    source: generateDataset(),
  },
  series: [
    {
      name: '4K 最佳观感',
      type: 'line',
    },
    {
      name: '4K 最大尺寸',
      type: 'line',
    },
  ],
}
```

:::

## 电视尺寸推荐表

中国电子视像行业推荐大小：

| 客厅建筑开间距离（米） | 推荐屏幕尺寸 （4K）         | 推荐屏幕尺寸 （8K） |
| ---------------------- | --------------------------- | ------------------- |
| 2.5-3.0                | **55**, 65                  | 65                  |
| 3.0-3.5                | **65**, 75, 78, 85          | 75                  |
| 3.5-4.0                | **75**, 78, 85, 98          | 98                  |
| 4.0-4.5                | **85**, 98, 110             | 110                 |
| >5.0                   | **98**, **110**, 130 及以上 |                     |

注：粗体为最优推荐尺寸。
