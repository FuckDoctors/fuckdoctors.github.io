---
url: 'https://zhaobc.site/notes/other/tools/gradle.md'
---
# gradle 小提示

## 导出所有依赖包

```groovy
task copyRuntimeDependencies(type: Copy) {
  into '$projectDir/WebContent/WEB-INF/lib'
  from configurations.runtimeClasspath
}
```

## 导出 `WEB-INF/lib` 以外的所有依赖包

```groovy
task copyCompileDependencies(type: Copy) {
  into 'xxx/lib'
  from configurations.compileClasspath
}
```

## 排除特定配置的依赖，如 `providedCompile`

如果 `WEB-INF/lib` 中的 JAR 是通过依赖配置（如 `providedCompile`）管理的，需要过滤掉特定配置：

```shell
# 列出所有配置的依赖，但排除 providedCompile
gradle dependencies --configuration compileClasspath
```
