---
url: 'https://zhaobc.site/notes/backend/java/code-snippets/group-by.md'
---
# Group by 使用

## 多个字段的 Group By

```java
list.stream()
  .filter(item -> item.getDate() <= curDate)
  .collect(Collectors.groupingBy(item -> item.getClass() + "_" + item.getName(),
    Collectors.maxBy(Comparator.comparing(ADto::getScore)))
  .values()
  .stream()
  .collect(Collectors.toList())
  .stream()
  .filter(item -> item.isPresent())
  .map(item -> item.get())
  .collect(Collectors.toList());
```

```java
Map<String, List<AClass>> groupedMap = list.stream()
  .collect(Collectors.groupingBy(a -> a.getClass() + "," + a.getName() + "," + a.getType()),
              LinkedHashMap::new,
              Collectors.toList()));
```
