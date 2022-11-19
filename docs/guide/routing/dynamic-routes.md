# 动态路由

:::details 示例
- [Dynamic Routing](https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing)
:::

对于复杂的应用程序，使用预定义路径定义路由并不总是足够的。在Next.js中，你可以在页面中添加括号(`[param]`) 来创建一个动态路由(a.k.a. url slugs, pretty urls, and others).

考虑下面的页面`pages/post/[pid].js`:

```jsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

任何像`/post/1`,`/post/abc`等的路由都将被`pages/post/[pid].js`匹配。 匹配的路径参数将作为查询参数发送到页面，它将与其他查询参数合并。

例如，路由`/post/abc`将有以下`query`对象:

```json
{ "pid": "abc" }
```

类似地，路由`/post/abc?foo=bar`将有以下`query`对象:

```json
{ "foo": "bar", "pid": "abc" }
```

但是，路由参数将覆盖具有相同名称的查询参数。例如，路由`/post/abc?pid=123`将有如下的`query`对象:

```json
{ "pid": "abc" }
```

多个动态路由段的工作方式相同。页面`pages/post/[pid]/[comment].js`将匹配路由`/post/abc/a-comment`，它的`query`对象将是:

```json
{ "pid": "abc", "comment": "a-comment" }
```

动态路由的客户端导航使用[`next/link`](/docs/guide/api-reference/next/link)处理。如果我们想要链接到上面使用的路径，它会是这样的:

```jsx
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/post/abc">Go to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

阅读我们的文档[页面间链接](/docs/guide/routing/introduction#linking-between-pages)了解更多。

### 捕获所有路由

:::details 示例
- [Catch All Routes](https://github.com/vercel/next.js/tree/canary/examples/catch-all-routes)
:::

通过在括号内添加三个圆点 (`...`) ，可以扩展动态路由以捕获所有路径。例如:

- `pages/post/[...slug].js`匹配`/post/a`，但也匹配`/post/a/b`,`/post/a/b/c`等

> **注意**: 你可以使用`slug`以外的名字，比如:`[...param]`

匹配的参数将作为查询参数(在本例中为`slug`) 发送到页面，并且它始终是一个数组，因此，路径`/post/a`将具有以下`query`对象:

```json
{ "slug": ["a"] }
```

在`/post/a/b`的情况下，以及任何其他匹配路径，新的形参将被添加到数组中，像这样:

```json
{ "slug": ["a", "b"] }
```

### 可选捕获所有路由

通过在双括号 (`[[...slug]]`)中包含参数，可以使捕获所有的路由成为可选的。

例如,`pages/post/[[...slug]].js`将匹配`/post`,`/post/a`,`/post/a/b`等。

catch all和可选的catch all路由之间的主要区别是，在可选的情况下，不带参数的路由也会被匹配(在上面的例子中是`/post`).

`query`对象如下:

```json
{ } // GET `/post` (empty object)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

## 说明

- 预定义路由优先于动态路由，动态路由优先于捕获所有路由。看看下面的例子:
- `pages/post/create.js`
- 将匹配`/post/create`
- `pages/post/[pid].js`
- 将匹配`/post/1`,`/post/abc`等.但不是`/post/create`
- `pages/post/[...slug].js`
- 将匹配`/post/1/2`,`/post/a/b/c`等.但不是`/post/create`,`/post/abc`
- 通过[自动静态优化](/docs/guide/advanced-features/automatic-static-optimization)静态优化的页面将在没有提供路由参数的情况下水化，例如`query`将是一个空对象 (`{}`).在水化后，Next.js将触发对应用程序的更新，以在`query`对象中提供路由参数。

## 相关的

关于下一步的更多信息，我们推荐以下部分:




