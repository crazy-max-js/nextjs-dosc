# API Routes

:::details 示例
- [Basic API Routes](https://github.com/vercel/next.js/tree/canary/examples/api-routes)
- [API Routes with GraphQL](https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql
- [API Routes with REST](https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest)
- [API Routes with CORS](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors)
:::

API路由提供了一个用Next.js构建**API**的解决方案。

`pages/api`文件夹中的任何文件都映射到`/api/*`，将被视为api端点而不是`page`。它们只是服务器端捆绑包，不会增加客户端捆绑包的大小。

例如，下面的API路由`pages/api/user.js`返回一个`json`响应，状态码为`200`:

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```

> **注意**: API路由将受到`next.config.js`中的[`pageExtensions`配置](/guide/api-reference/next.config.js/custom-page-extensions)的影响。

为了让API路由正常工作，你需要导出一个默认的函数(又名**请求处理程序**)，然后它会接收以下参数:

- `req`: 一个[http.IncomingMessage](https://nodejs.org/api/http.html#class-httpincomingmessage)的实例，再加上[pre-built middlewares](/guide/api-routes/request-helpers)
- `res`: 一个[http.ServerResponse](https://nodejs.org/api/http.html#class-httpserverresponse)的实例，再加上[helper functions](/guide/api-routes/response-helpers)

要在一个API路由中处理不同的HTTP方法，你可以使用`req.method`，像这样:

```js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

要获取API端点，请查看本节开头的任何示例。

## 用例

对于新项目，你可以用API Routes构建你的整个API。如果已有API，则不需要通过API路由将调用转发到该API。API路由的一些其他用例是:

- 屏蔽外部服务的URL(如`/api/secret`而不是`https://company.com/secret-url`)
- 在服务器上使用[环境变量](/guide/basic-features/environment-variables)安全地访问外部服务。

## 说明

- API路由[不指定CORS报头](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)这意味着它们默认是**同源的**。您可以通过使用[CORS请求助手](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors)包装请求处理程序来定制此类行为。
- API路由不能与[`next export`](/guide/advanced-features/static-html-export)一起使用。

## 联系

关于下一步的更多信息，我们推荐以下部分:






