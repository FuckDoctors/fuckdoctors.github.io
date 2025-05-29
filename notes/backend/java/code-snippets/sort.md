---
url: 'https://zhaobc.site/notes/backend/java/code-snippets/sort.md'
---
# 排序

## 多个字段的排序

```java
Comparator<ADto> comparator = Comparator
  .comparing(ADto::getClass, Comparator.nullsLast(Comparator.naturalOrder()))
  .thenComparing(ADto::getScore, Comparator.nullsLast(Comparator.reverseOrder()))
  .thenComparing(ADto::getName, Comparator.nullsLast(String::compareTo));

list.sort(comparator);
```

## 按语言排序

```java
Comparator<ADto> comparator = Comparator
  .comparing(ADto::getClass, Comparator.nullsLast(Comparator.naturalOrder()))
  .thenComparing(ADto::getScore, Comparator.nullsLast(Comparator.reverseOrder()))
  .thenComparing(ADto::getName, Comparator.nullsLast(Collator.getInstance(Locale.SIMPLIFIED_CHINESE)));

list.sort(comparator);
```
