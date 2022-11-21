# API路由请求辅助程序

:::details 示例
- [API Routes Request Helpers](https://github.com/vercel/next.js/tree/canary/examples/api-routes-middleware)
- [API Routes with CORS](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors)
:::

API路由提供了内置的请求帮助器，用于解析传入的请求

- `req.cookies`- 包含由请求发送的cookie的对象。默认为`{}`
- `req.query`- 包含[查询字符串](https://en.wikipedia.org/wiki/Query_string)的对象。默认为`{}`
- `req.body`- 包含由`content-type`解析的正文的对象，如果没有发送正文则为`null`。

## 自定义配置

每个API Route都可以导出一个`config`对象来更改默认配置，如下所示:

```js
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
```

`api`对象包括API路由可用的所有配置选项。

`bodyParser`会自动启用。如果你想将body作为`Stream`或使用[`raw-body`](https://www.npmjs.com/package/raw-body)消耗，你可以将此设置为`false`。

禁用自动`bodyParsing`的一个用例是允许你验证一个**webhook**请求的原始主体，例如[来自GitHub](https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks#validating-payloads-from-github)。

```js
export const config = {
  api: {
    bodyParser: false,
  },
}
```

`bodyParser.sizeLimit`是被解析体允许的最大大小，以[bytes](https://github.com/visionmedia/bytes.js)支持的任何格式，如下所示:

```js
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
}
```

`externalResolver`是一个显式标志，它告诉服务器此路由正在由一个外部解析器处理，如likeexpressorconnect。启用此选项将禁用未解析请求的警告。

```js
export const config = {
  api: {
    externalResolver: true,
  },
}
```

`responseLimit`是自动启用的，当API路由的响应体超过4MB时发出警告。

如果你没有在无服务器环境中使用Next.js，并且理解不使用CDN或专用媒体主机的性能影响，你可以将此限制设置为`false`.

```js
export const config = {
  api: {
    responseLimit: false,
  },
}
```

`responseLimit`也可以接受`bytes`支持的字节数或任何字符串格式，例如`1000`,`'500kb'`或`'3mb'`.
此值将是显示警告之前的最大响应大小。默认为4MB。(见上图)

```js
export const config = {
  api: {
    responseLimit: '8mb',
  },
}
```

## 使用TypeScript扩展req/res对象

为了更好的类型安全，不建议扩展`req`和`res`对象。相反，使用函数来处理它们:

```ts
// utils/cookies.ts

import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

// pages/api/cookies.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Calling our pure function using the `res` object, it will add the `set-cookie` header
  // Add the `set-cookie` header on the main domain and expire after 30 days
  setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 })
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end(res.getHeader('Set-Cookie'))
}

export default handler
```

如果你不能避免这些对象被扩展，你必须创建自己的类型来包含额外的属性:

```ts
// pages/api/foo.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { withFoo } from 'external-lib-foo'

type NextApiRequestWithFoo = NextApiRequest & {
  foo: (bar: string) => void
}

const handler = (req: NextApiRequestWithFoo, res: NextApiResponse) => {
  req.foo('bar') // we can now use `req.foo` without type errors
  res.end('ok')
}

export default withFoo(handler)
```

请记住，这是不安全的，因为即使你从导出中删除了`withFoo()`，代码仍然会编译。
