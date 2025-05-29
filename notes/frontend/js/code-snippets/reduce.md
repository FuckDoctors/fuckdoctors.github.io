---
url: 'https://zhaobc.site/notes/frontend/js/code-snippets/reduce.md'
---
# reduce 使用

## 使用 reduce 切分字符串然后重新拼接

业务上有一个需求，后台传过来一个字符串，里面有括号 `（` `）` 和顿号 `、`，但是在前台展示时，要切分之后给每段文字加链接。
另外，字符串不确认内容，最多包含包含 4 段文字。

示例：

文字 1、（文字 2、文字 3）、文字 4

分隔完上面的文字后，就可以对 `（`, `）`, `、`以外的文字加链接了。

### 代码

```js
function reduceText(val) {
  if (val === null || val.length === 0) {
    return []
  }

  const arr = val.split('、').reduce((pre, cur) => {
    if (cur.includes('（') && cur.includes('）')) {
      // 同时包含左右括号
      let tmp = cur.split('（')
      pre.push(tmp[0])
      pre.push('（')
      tmp = tmp[1].split('）')
      pre.push(tmp[0])
      pre.push('）')
      pre.push(tmp[1])
    } else if (cur.includes('（')) {
      const tmp = cur.split('（')
      pre.push(tmp[0])
      pre.push('（')
      pre.push(tmp[1])
    } else if (cur.includes('）')) {
      const tmp = cur.split('）')
      pre.push(tmp[0])
      pre.push('）')
      pre.push(tmp[1])
    } else {
      pre.push(cur)
    }

    // 按原来的顺序，把顿号也加上
    pre.push('、')

    return pre
  }, [])

  // 删除最后一个顿号
  arr.splice(arr.length - 1, 1)

  // 删除空白元素
  return arr.filter(item => item.length !== 0)
}
```

### 示例

::: normal-demo 使用 reduce 切分字符串然后重新拼接

```js
function reduceText(val) {
  if (val === null || val.length === 0) {
    return []
  }

  const arr = val.split('、').reduce((pre, cur) => {
    if (cur.includes('（') && cur.includes('）')) {
      // 同时包含左右括号
      let tmp = cur.split('（')
      pre.push(tmp[0])
      pre.push('（')
      tmp = tmp[1].split('）')
      pre.push(tmp[0])
      pre.push('）')
      pre.push(tmp[1])
    } else if (cur.includes('（')) {
      const tmp = cur.split('（')
      pre.push(tmp[0])
      pre.push('（')
      pre.push(tmp[1])
    } else if (cur.includes('）')) {
      const tmp = cur.split('）')
      pre.push(tmp[0])
      pre.push('）')
      pre.push(tmp[1])
    } else {
      pre.push(cur)
    }

    // 按原来的顺序，把顿号也加上
    pre.push('、')

    return pre
  }, [])

  // 删除最后一个顿号
  arr.splice(arr.length - 1, 1)

  // 删除空白元素
  return arr.filter(item => item.length !== 0)
}

console.log(reduceText('文字1')) // ["文字1"]
console.log(reduceText('文字1、文字2')) // ["文字1","、","文字2"]
console.log(reduceText('文字1、（文字2）')) // ["文字1","、","（","文字2","）"]
console.log(reduceText('文字1、（文字2、文字3）')) // ["文字1","、","（","文字2","、","文字3","）"]
console.log(reduceText('文字1、（文字2、文字3）、文字4')) // ["文字1","、","（","文字2","、","文字3","）","、","文字4"]
```

:::
