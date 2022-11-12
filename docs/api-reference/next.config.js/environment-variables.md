# 环境变量

> 自 [Next.js 9.4](/blog/next-9-4) 发布以来，我们现在对[添加环境变量](/docs/guide/basic-features/environment-variables) 有了更直观、更符合人体工学的体验。试试看！

:::details 示例
- [With env](https://github.com/vercel/next.js/tree/canary/examples/with-env-from-next-config-js)
:::

> 注意：以这种方式指定的环境变量将始终包含在 JavaScript 包中，在环境变量名称前加上`NEXT_PUBLIC_`只有在[通过环境或 .env 文件]（/docs/guide/basic-features/环境变量）。

要将环境变量添加到 JavaScript 包，请打开`next.config.js`并添加`env`配置：

```js
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```

现在您可以在代码中访问 `process.env.customKey`。例如：

```jsx
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>
}

export default Page
```

Next.js 将在构建时将 `process.env.customKey` 替换为 `my-value`。由于 webpack [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) 的性质，试图解构 `process.env` 变量是行不通的。

例如，以下行：

```jsx
return <h1>The value of customKey is: {process.env.customKey}</h1>
```

最终会是：

```jsx
return <h1>The value of customKey is: {'my-value'}</h1>
```
