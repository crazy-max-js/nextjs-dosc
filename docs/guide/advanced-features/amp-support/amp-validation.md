# AMP验证

AMP页面在开发过程中使用[amphtml-validator](https://www.npmjs.com/package/amphtml-validator)自动验证。错误和警告将出现在您启动Next.js的终端中。

在[静态HTML导出](/docs/advanced-features/static-html-export)过程中也会对页面进行验证，任何警告/错误都将打印到终端。任何AMP错误都将导致导出退出，状态码为`1`因为导出不是有效的AMP。

### 定制验证器

你可以设置自定义AMP验证器`next.config.js`如下所示:

```jsx
module.exports = {
  amp: {
    validator: './custom_validator.js',
  },
}
```

### 跳过AMP验证

要关闭AMP验证，添加以下代码到`next.config.js`

```jsx
experimental: {
  amp: {
    skipValidation: true
  }
}
```
