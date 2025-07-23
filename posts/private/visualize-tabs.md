---
url: 'https://zhaobc.site/posts/private/visualize-tabs.md'
---
# Tab 顺序可视化

业务上有个测试 `tabindex` 是否正确设置的需求，每测试一下留个截图效率太低，
想着用个简单方法把所有的 `tabindex` 一次性展示出来，这样确认起来比较方便。

有人给了两个方案：

1. 将所有元素的 `tabindex` 表示处理，这样可以确认是否跟设计上一致
2. 将页面上的 `Tab` 顺序以图示方式列出来

上述 1 虽然可以显示出来设置的 `tabindex`，但是仍有未设置 `tabindex` 的内容，而且，即使正确设置了 `tabindex`，也不见得最终效果是对的。
上述 2 可以直观的展示 `Tab` 顺序，确认比较方便。

## 实现

下面简单记录一下实现代码。

### 显示所有元素的 `tabindex`

实现方向是列出所有属性里有 `tabindex`，但是不是 `0` 和 `-1` 的项目，然后判断它是否是可视的，隐藏的元素不显示其 `tabindex`。
然后，遍历这些元素，在这些元素左上角显示一个小图标，写上该元素的 `tabindex`。

实现代码：

```js
/**
 * 显示 tabindex
 */
function showTabindex() {
  // 获取显示 tabindex 的元素，然后删除它们
  document.querySelectorAll('*[class=\'tabindex-tooltip\']').forEach(input => {
    document.body.removeChild(input)
  })
  // 遍历设置了 tabindex 的元素，创建显示 tabindex 的小图标元素
  document.querySelectorAll('*[tabindex]:not([tabindex=\'0\'],[tabindex=\'-1\'])').forEach(input => {
    // 有时这个元素虽然没设置隐藏，但是它的父元素可能隐藏了，所以这里保险起见往上找了 6 层
    if (input.hasAttribute('tabindex') && isVisible(input, 6)) {
      // 创建 tabindex 图标元素
      const tooltip = document.createElement('div')
      tooltip.className = 'tabindex-tooltip'
      tooltip.textContent = `${input.getAttribute('tabindex')}`
      document.body.appendChild(tooltip)
      // 获得元素的坐标，然后在元素旁边显示 tabindex
      const rect = input.getBoundingClientRect()
      // 设置图标样式
      tooltip.style.zIndex = 1999
      tooltip.style.backgroundColor = 'yellow'
      tooltip.style.color = 'red'
      tooltip.style.padding = '2px 4px'
      tooltip.style.fontSize = '12px'
      tooltip.style.borderRadius = '4px'
      tooltip.style.whiteSpace = 'nowrap'
      if (isFooterButton(input)) {
        // 如果元素在固定的 footer 里面，将图标也设置为 fixed
        tooltip.style.zIndex = 2001
        tooltip.style.position = 'fixed'
        tooltip.style.left = `${rect.left + window.scrollX}px`
        tooltip.style.bottom = `20px`
      } else {
        // 设置绝对定位
        tooltip.style.position = 'absolute'
        tooltip.style.left = `${rect.left + window.scrollX}px`
        tooltip.style.top = `${rect.top + window.scrollY}px`
      }
    }
  })
}

/**
 * 判断元素是否可视
 *
 * @param el 元素
 * @param upLevel 向上查几层
 */
function isVisible(el, upLevel) {
  const display = window.getComputedStyle(el, null).display
  const visibility = window.getComputedStyle(el, null).visibility

  const elVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse'
  if (elVisible) {
    if (upLevel && el.parentNode) {
      return isVisible(el.parentNode, Number.parseInt(upLevel) - 1)
    } else {
      return elVisible
    }
  } else {
    return elVisible
  }
}
```

## `tabindex` 可视化

实现方向是，按 `Tab` 键顺序列出这些元素，然后将这些元素用线连起来。

这里有两个关键点：

1. 按 `Tab` 键顺序列出所有元素
2. 如何在页面上将两个元素连接起来

### 按 `Tab` 键顺序列出所有元素

原来的实现是，获取所有设置了 `tabindex` 属性的可视元素，然后按 `tabindex` 大小排序后来展示。
但是，很多网页没有设置 `tabindex`，这种方法就不通用了。

后来让 DeepSeek 给了一个通用的方案，提问的问题是 *js如何获取可获取tab键的所有项目，并按tab键顺序列出来*。

下面是 DeepSeek 给出的完整解决方案：
在 JavaScript 中获取页面所有可通过 Tab 键聚焦的元素并按 Tab 顺序排序，可以通过以下步骤实现：

```js
function getTabOrderedFocusables(container = document) {
  // 1. 获取所有可能可聚焦的元素
  const selector = [
    'a[href]:not([disabled])',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"]):not([disabled])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]:not([contenteditable="false"])',
    'audio[controls]',
    'video[controls]',
    'summary'
  ].join(', ')

  const elements = Array.from(container.querySelectorAll(selector))

  // 2. 过滤掉不可见/不可用元素
  const visibleFocusables = elements.filter(el => {
    const style = window.getComputedStyle(el)
    const isVisible = style.display !== 'none'
      && style.visibility !== 'hidden'
      && el.offsetWidth > 0
      && el.offsetHeight > 0

    // 特殊处理：隐藏的单选框/复选框
    if (['radio', 'checkbox'].includes(el.type)) {
      return isVisible && (el.checked || el === document.activeElement)
    }

    return isVisible
  })

  // 3. 按 Tab 顺序排序
  const tabOrdered = visibleFocusables.sort((a, b) => {
    // 比较逻辑：
    // 1. 比较 tabindex 值（>0 的元素优先）
    // 2. 相同 tabindex 时比较 DOM 位置
    const aIndex = a.tabIndex
    const bIndex = b.tabIndex

    // 处理未设置 tabindex 的情况（视为 0）
    if (aIndex <= 0 && bIndex <= 0) {
      return 0
    } // 保持原始 DOM 顺序
    if (aIndex <= 0) {
      return 1
    } // b 优先
    if (bIndex <= 0) {
      return -1
    } // a 优先

    // 比较正数 tabindex
    if (aIndex === bIndex) {
      // 相同 tabindex 时比较 DOM 位置
      return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1
    }

    return aIndex - bIndex
  })

  return tabOrdered
}

// 使用示例
const tabOrderedElements = getTabOrderedFocusables()
console.log(tabOrderedElements)
```

#### 关键点说明

1. **选择器详解**：
   * `a[href]`：带链接的 `<a>` 标签
   * `button`, `input`, `select`, `textarea`：表单控件
   * `[tabindex]:not([tabindex="-1"])`：显式设置非负 tabindex 的元素
   * `iframe`, `object`, `embed`：嵌入内容
   * `[contenteditable]`：可编辑元素
   * `audio[controls]`, `video[controls]`：媒体控件
   * `summary`：`<details>` 的摘要元素

2. **过滤逻辑**：
   * 排除 `display: none` 或 `visibility: hidden` 的元素
   * 排除零尺寸元素（`offsetWidth/offsetHeight = 0`）
   * 特殊处理隐藏的单选框/复选框（仅选中或聚焦时有效）

3. **排序规则**：

   ```mermaid
   graph TD
     A[所有可聚焦元素] --> B{tabindex > 0}
     B -- 是 --> C[按 tabindex 升序]
     B -- 否 --> D[保持 DOM 顺序]
     C --> E{相同 tabindex?}
     E -- 是 --> F[按 DOM 位置排序]
     E -- 否 --> G[保持当前顺序]
     D --> H[最终列表]
     F --> H
     G --> H
   ```

4. **排序优先级**：
   * 第一优先级：正数 tabindex（从小到大）
   * 第二优先级：DOM 位置（文档流顺序）
   * 未设置 tabindex 的元素视为 tabindex=0，保持原始 DOM 顺序

#### 实际使用场景

```javascript
// 获取模态框内的 Tab 顺序元素
const modal = document.querySelector('#modal')
const modalTabOrder = getTabOrderedFocusables(modal)

// 实现 Tab 键循环
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab') {
    return
  }

  const first = modalTabOrder[0]
  const last = modalTabOrder[modalTabOrder.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    last.focus()
    e.preventDefault()
  } else if (!e.shiftKey && document.activeElement === last) {
    first.focus()
    e.preventDefault()
  }
})

// 打印元素及其 tabindex
console.table(
  tabOrderedElements.map(el => ({
    tag: el.tagName,
    id: el.id || 'N/A',
    tabIndex: el.tabIndex,
    text: `${el.textContent.slice(0, 30)}...`
  }))
)
```

#### 注意事项

1. **动态内容**：页面内容变化时需重新调用函数
2. **Shadow DOM**：需递归处理影子 DOM
3. **框架内容**：`<iframe>` 内的元素需单独处理
4. **CSS 影响**：
   * `visibility: visible` 但被父元素隐藏的元素不会被过滤
   * `opacity: 0` 但尺寸不为零的元素会被包含

#### 浏览器兼容性

* 所有现代浏览器（包括 IE11+）
* IE 需 polyfill `Array.from()` 和 `Node.compareDocumentPosition()`
* 影子 DOM 支持需额外处理

此实现符合 W3C 的 Tab 顺序规范：

1. 正数 `tabindex` 元素（1-32767）按值排序
2. 零 `tabindex` 元素（包括未设置但可聚焦的）按 DOM 顺序
3. 排除 `tabindex=-1` 的元素（只能编程聚焦）

### 页面上连接两个元素

页面上作图可以使用 `canvas` 和 `svg`，这里选择了 `svg`。
得到两个元素的位置后，创建 `svg` 的线就可以连接两个元素了。

参考资料：

* [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG)
* [`<marker>`](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Reference/Element/marker)

`<marker>` 元素定义了在给定 `<path>`、`<line>`、`<polyline>` 或 `<polygon>` 元素上绘制箭头或者多边标记所使用的图形。

可以使用 `marker-start`、`marker-mid` 和 `marker-end` 属性将标记附着到形状上。

```js
// svg 命名空间
const svgNS = 'http://www.w3.org/2000/svg';
/**
 * 在 svg 中，画一条线
 */
const addSVGLine = (svg, x1, y1, x2, y2) => {
  let line = document.createElementNS(svgNS, 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('style', 'stroke:red;stroke-width:2');
  // 元素上绘制箭头
  line.setAttribute('marker-end', 'url(#arrow)');
  svg.appendChild(line);
}

/**
 * 添加箭头 marker
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/SVG/Reference/Element/marker
 */
const addArrow = (p) => {
  const arrow = document.createElementNS(svgNS, 'marker');
  arrow.setAttribute('id', 'arrow');
  arrow.setAttribute('viewBox', '0 0 10 10');
  arrow.setAttribute('refX', '5');
  arrow.setAttribute('refY', '5');
  arrow.setAttribute('markerWidth', '6');
  arrow.setAttribute('markerHeight', '6');
  arrow.setAttribute('orient', 'auto-start-reverse');
  arrow.setAttribute('stroke', 'red');
  
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
  path.setAttribute('stroke', 'red');
  path.setAttribute('fill', 'red');
  arrow.appendChild(path);
  
  p.appendChild(arrow);
};

/**
 * 创建 svg 里的 defs 元素
 */
const createDefs = () => {
  const defs = document.createElementNS(svgNS, 'defs');
  return defs;
};

/**
 * 可视化 tab 顺序
 */
function visualizeTab() {
  // 页面上有显示 tab 顺序的 svg 的话，先删掉。
  let existingSvg = document.getElementById('tabindex-visualizer');
  if (existingSvg)
      existingSvg.remove();
  
  // 创建 svg，覆盖整个窗口，这样能覆盖到整个页面。
  let svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;');
  svg.style.width = document.documentElement.scrollWidth || document.body.scrollWidth;
  svg.style.height = document.documentElement.scrollHeight || document.body.scrollHeight;
  svg.setAttribute('id', 'tabindex-visualizer');
  
  // 创建 defs
  const defs = createDefs();
  // 将箭头 marker 添加到 defs 中
  addArrow(defs);
  // 将 defs 添加到 svg 中
  svg.appendChild(defs);
  
  const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollY2 = document.documentElement.scrollTop || document.body.scrollTop;
  
  // 将 svg 添加到页面中
  document.body.appendChild(svg);

  // 获得按 tab 顺序排好序的可聚焦元素
  let inputs = getTabOrderedFocusables();

  // 遍历这些元素，然后两者之间使用箭头线连接起来
  let curr;
  let next;
  inputs.forEach((input,index)=>{
    // 表示判定
    curr = input;
    if (index < inputs.length - 1) {
      next = inputs[index + 1];
      // 得到两个元素的坐标
      let rect1 = curr.getBoundingClientRect();
      let rect2 = next.getBoundingClientRect();
      if (isFooterButton(curr)) {
          // 在固定的 footer 中时，设置一下纵向的偏移
          scrollY = (document.documentElement.scrollHeight || document.body.scrollHeight) - rect1.top - 40;
      }
      if (isFooterButton(next)) {
          // 在固定的 footer 中时，设置一下纵向的偏移
          scrollY2 = (document.documentElement.scrollHeight || document.body.scrollHeight) - rect2.top - 40;
      }
      // 以两个元素的中心点为两个端点，将两个元素连接起来。
      addSVGLine(svg, rect1.left + rect1.width / 2 + scrollX, rect1.top + rect1.height / 2 + scrollY, rect2.left + rect2.width / 2 + scrollX, rect2.top + rect2.height / 2 + scrollY2);
    }
  });
}
```

## chrome/edge 扩展插件

为了方便使用，可以将它做成一个浏览器扩展插件。

插件目录结构：

```txt
UITEST-ADDONS
│  manifest.json              // <- 配置插件说明，权限等
│
├─content-scripts
│      content-script.js      // <- 这个 js 会被注入到各个页面中，接收来自 popup 里的通知，然后做相应的处理
│
├─icons                       // <- 插件图标
│      z-48x48.png
│
└─popup
        popup.html            // <- 弹出框内容，里面是插件的界面
        script.js             // <- 将插件的操作通知到 content-scripts
```

示例代码：

::: code-tabs

@tab manifest.json

```json
{
  "name": "插件名",
  "version": "0.0.2",
  "manifest_version": 3,
  "description": "插件名描述",
  "icons": {
    "48": "icons/z-48x48.png"
  },
  "permissions": [
    "tabs",
    "activeTab"
  ],
  "action": {
    "default_popup": "popup/popup.html"
  },
  "content_scripts": [
    {
      "matches": [ 
        "<all_urls>"
      ],
      "js": [
        "content-scripts/content-script.js"
      ]
    }
  ]
}
```

@tab script.js

```js
const btnVisualizeTab = document.querySelector('#btnVisualizeTab');
if (btnVisualizeTab) {
  btnVisualizeTab.onclick = () => chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, { flag: 'visualizeTab' });
  });
}
```

@tab content-script.js

```js
chrome.runtime.onMessage.addListener(function(req, sender, res) {
  const flg = req.flag;
  if (flg === 'showTabindex') {
    showTabindex();
  } else if (flg === 'visualizeTab') {
    visualizeTab();
  }
}

// functions
```
