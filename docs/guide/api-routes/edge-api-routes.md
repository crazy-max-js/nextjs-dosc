# Edge API路由(测试版)

Edge API路由使你能够使用Next.js构建高性能API。使用[Edge Runtime](/guide/api-reference/edge-runtime)时,它们通常比基于node .js的API Routes更快。这种性能提升确实伴随着[constraints](/guide/api-reference/edge-runtime#unsupported-apis)，比如不能访问本机Node.js APIs. 相反，边缘API路由是建立在标准Web API之上的。

`pages/api`文件夹中的任何文件都映射到`/api/*`，将被视为api端点而不是页面。它们只是服务器端捆绑包，不会增加客户端捆绑包的大小。

## 例子

### 基础

```typescript
export const config = {
  runtime: 'experimental-edge',
}

export default (req) => new Response('Hello world!')
```

### JSON响应

```typescript
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
```

### Cache-Control

```typescript
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}
```

### 查询参数

```typescript
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  return new Response(email)
}
```

### 转发Headers

```typescript
import { type NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const authorization = req.cookies.get('authorization')
  return fetch('https://backend-api.com/api/protected', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })
}
```

## API路由的区别

边缘API路由使用[Edge Runtime](/guide/api-reference/edge-runtime)，而API路由使用[Node.js runtime](/guide/advanced-features/react-18/switchable-runtime).

Edge API路由可以[stream responses](/guide/api-reference/edge-runtime#web-stream-apis)从服务器和运行后缓存的文件(如HTML, CSS, JavaScript) 被访问。服务器端流可以更快地帮助提高性能[时间到第一个字节(TTFB)](https://web.dev/ttfb/).

查看Edge Runtime的[支持的API](/guide/api-reference/edge-runtime)和[不受支持的API](/guide/api-reference/edge-runtime#unsupported-apis)。
