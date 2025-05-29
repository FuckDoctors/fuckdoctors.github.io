---
url: 'https://zhaobc.site/notes/frontend/js/code-snippets/group-by.md'
---
# Javascript Group By

## Object 数组分组

下面的代码是用来按数组对象的指定属性来排序。

### 代码

```ts
export const groupBy = (arr: any[], key: string): any[] | null => {
  if (arr) {
    const grouped = arr.reduce((group: any, obj: any) => {
      const data = obj[key]
      group[data] = group[data] ?? []
      group[data].push(obj)
      return group
    }, {})

    return grouped
  }

  return null
}
```

### 示例

::: playground#ts 对象数组分组

@file index.ts

```ts
const groupBy = (arr: any[], key: string): any[] | null => {
  if (arr) {
    const grouped = arr.reduce((group: any, obj: any) => {
      const data = obj[key]
      group[data] = group[data] ?? []
      group[data].push(obj)
      return group
    }, {})

    return grouped
  }

  return null
}

const arr = [
  {
    name: 'zhaobc',
    commit: 'test1',
  },
  {
    name: 'zhaobc2',
    commit: 'test1',
  },
  {
    name: 'zhaobc',
    commit: 'test2',
  },
]

console.log(arr)
console.log(groupBy(arr, 'name'))
```

:::
