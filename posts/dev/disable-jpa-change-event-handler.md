---
url: 'https://zhaobc.site/posts/dev/disable-jpa-change-event-handler.md'
---
# 禁用 JPA Project Change Event Handler

有时 eclipse 右下角一直有 JPA Project Change Event Handler (waiting) 导致 eclipse 很慢，而且项目中不需要 JPA 时，它也一直出现。
本文可以去掉它。

早在 2021 年时，就遇到过这个问题，当时也是搜了好久才去掉了它。为了以后方便，本文记录一下解决办法。

参考：[eclipse-jpa-project-change-event-handler-waiting](https://stackoverflow.com/questions/19649847/eclipse-jpa-project-change-event-handler-waiting)

## 方法一

本人使用的是方法一。

TO TURN OFF JPA Project Change Event Handler (waiting)

1. Do suspend the validations for JPA from menu `Window > Preferences > Validation`.
2. Go to `[Installation directory]\eclipse\configuration\org.eclipse.equinox.simpleconfigurator`. Make sure no instance of Eclipse is running.
3. Edit `bundles.info` (use notepad++ or wordpad or notepad)
4. You have to remove or comment out the lines that has `org.eclipse.jpt.jpa.*`.

Launch the eclipse and there you go, you won't see those troublesome "JPA Project Change Event Handler (waiting)" message in your elipse's console.

## 方法二

网上常见的方法，移除 jpa 相关插件。

```bat
@echo off
set eclipse_dir=C:\eclipse_luna

cd %eclipse_dir%

mkdir disabled
mkdir disabled\features
mkdir disabled\plugins

move plugins\org.eclipse.jpt.* disabled\plugins
for /f %%i in ('dir "%eclipse_dir%\features\org.eclipse.jpt.*" /ad /b') do (
    move "%eclipse_dir%\features\%%i" "%eclipse_dir%\disabled\features\%%i"
)
```
