---
url: 'https://zhaobc.site/notes/other/office/excel-formulas.md'
---
# Excel 公式

## 使用公式查找字符的最后一次出现位置

[定位字符最后一次出现的位置](https://zhuanlan.zhihu.com/p/511190534)

公式

```vb
=SEARCH("@",SUBSTITUTE(查找单元格,"查找字符串","@",LEN(查找单元格)-LEN(SUBSTITUTE(查找单元格,"查找字符串",""))),1)
```

解读

1. 首先需要计算出指定的字符在字符串中出现的次数。

   例如，计算B3单元格中A的出现次数，可以用公式：`LEN(B3)-LEN(SUBSTITUTE(B3,"A",""))` 来实现，即字符串原来的长度减去去掉A字符的长度，则为A字符出现的次数（5次）。

2. 然后用 `Substitute` 函数将最后一次出现的 “A” 替换为新的字符，如替换为 `@`。

   `SUBSTITUTE(B3,"A","@",LEN(B3)-LEN(SUBSTITUTE(B3,"A","")))`

3. 用 `Search` 函数定位 `@` 的位置即可。

类似

[Excel 中查找字符的第一次、最后一次或第 n 次出现位置](https://zh-cn.extendoffice.com/documents/excel/1968-excel-get-the-last-occurrence-of-a-character.html)

## 获取文件扩展名

公式

```vb
=TRIM(RIGHT(SUBSTITUTE(单元格,".",REPT(" ",LEN(单元格))),LEN(单元格)))
```

解读

1. 将对象字符串里的 `.` 替换为字符串长度的空格
2. 截取右侧字符串长度的字符串
3. 去掉多余空格
