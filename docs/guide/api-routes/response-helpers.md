# API路由响应辅助程序

[服务器响应对象](https://nodejs.org/api/http.html#http_class_http_serverresponse), (通常缩写为`res`) 包含一组类似express .js的助手方法，以改善开发人员的体验并提高创建新API端点的速度。

包括的辅助工具是:

- `res.status(code)`- 设置状态码的函数`code`必须是有效的[HTTP状态码](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- `res.json(body)`- 发送JSON响应。`body`必须是[可序列化对象](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)- `res.send(body)`- Sends the HTTP response.`body`can be a`string`, an`object`or a`Buffer`- `res.redirect([status,] path)`- Redirects to a specified path or URL.`status`must be a valid[HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). If not specified,`status`defaults to "307" "Temporary redirect".- `res.revalidate(urlPath)`-[Revalidate a page on demand](/docs/guide/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation)using`getStaticProps`.`urlPath`must be a`string`.

## 设置响应的状态码

在向客户端发送响应时，可以设置响应的状态码。

下面的示例将响应的状态代码设置为`200`(`OK`) ，并返回一个`message`属性，其值为`Hello from Next.js!`的JSON响应:

```js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

## 发送JSON响应

当向客户端发送响应时，你可以发送一个JSON响应，这必须是一个[序列化对象](https://developer.mozilla.org/en-US/docs/Glossary/Serialization).
在真实的应用程序中，您可能希望根据请求端点的结果让客户机知道请求的状态。

下面的示例发送一个带有状态代码`200`(`OK`) 的JSON响应和异步操作的结果。它包含在try catch块中，以处理可能发生的任何错误，并捕获适当的状态代码和错误消息并发送回客户端:

```js
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
```

## 发送HTTP响应

发送HTTP响应与发送JSON响应的工作方式相同。唯一的区别是响应体可以是`string`、`object`或`Buffer`。

下面的示例发送一个带有状态码`200`(`OK`)和异步操作结果的HTTP响应。

```js
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```

## 重定向到指定的路径或URL

以表单为例，您可能希望在客户端提交表单后将其重定向到指定的路径或URL。

如果表单成功提交，下面的例子将客户端重定向到`/`路径:

```js
export default async function handler(req, res) {
  const { name, message } = req.body
  try {
    await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```

## 添加TypeScript类型

你可以通过从`next`中导入`NextApiRequest`和`NextApiResponse`类型使你的响应处理程序更加类型安全，除此之外，你还可以输入你的响应数据:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

> 注意:`NextApiRequest`的主体为`any`，因为客户端可能包含任何有效载荷。在使用主体之前，应该在运行时验证主体的类型/形状。

要查看更多使用类型的例子，请查看[TypeScript文档](/docs/guide/basic-features/typescript#api-routes).

如果你更喜欢在真实的项目结构中查看你的例子，你可以查看我们的例子库:

- [API基本路由](https://github.com/vercel/next.js/tree/canary/examples/api-routes)
- [使用REST的API路由](https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest)
