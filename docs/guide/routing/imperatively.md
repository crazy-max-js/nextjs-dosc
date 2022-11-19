# Imperatively

:::details 示例
- [Using Router](https://github.com/vercel/next.js/tree/canary/examples/using-router)
:::

[`next/link`](/docs/guide/api-reference/next/link)该能够覆盖你的大部分路由需求，但你也可以在没有它的情况下做客户端导航，看看[`next/router`的文档](/docs/guide/api-reference/next/router).

下面的例子展示了如何使用[`useRouter`](/docs/guide/api-reference/next/router#userouter)进行基本的页面导航:

```jsx
import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      Click here to read more
    </button>
  )
}
```
