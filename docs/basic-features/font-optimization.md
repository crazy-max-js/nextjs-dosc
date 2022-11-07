# 优化字体

`@next/font`将自动优化您的字体（包括自定义字体）并删除外部网络请求以提高隐私和性能。

## 概述

@next/font包括任何字体文件的内置自动自托管。这意味着由于使用了底层 CSS属性，您可以在零布局偏移的情况下以最佳方式加载 Web 字体。size-adjust

这个新的字体系统还允许您方便地使用所有 Google 字体，同时考虑到性能和隐私。CSS 和字体文件在构建时下载，并与您的其余静态资产一起自托管。浏览器不会向 Google 发送任何请求。

## 用法

要开始，请安装@next/font：

```shell
npm install @next/font
```




