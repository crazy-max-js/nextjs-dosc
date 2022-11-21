# 动态API路由

:::details 示例
- [Basic API Routes](https://github.com/vercel/next.js/tree/canary/examples/api-routes)
:::

API路由支持[动态路由](/guide/routing/dynamic-routes)，并遵循与`pages`相同的文件命名规则。

例如，API路由`pages/api/post/[pid].js`有以下代码:

```js
export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```

现在，对`/api/post/abc`的请求将以`Post: abc`的文本响应。

### 索引路由和动态API路由

一个非常常见的RESTful模式是这样设置路由:

- `GET api/posts`- 获取一个文章列表，可能已分页
- `GET api/posts/12345`- 获取post id 12345

我们可以用两种方式对此进行建模:

- Option 1:
- `/api/posts.js`
- `/api/posts/[postId].js`
- Option 2:
- `/api/posts/index.js`
- `/api/posts/[postId].js`

两者是等价的。第三个只使用`/api/posts/[postId].js`的选项是无效的，因为动态路由(包括Catch-all路由-见下文)没有`undefined`状态，并且`GET api/posts`在任何情况下都不会匹配`/api/posts/[postId].js`。

### 捕获所有API路由

通过在括号内添加三个点 (`...`)，API Routes可以扩展为捕获所有路径。例如:

- `pages/api/post/[...slug].js`匹配`/api/post/a`，但也匹配`/api/post/a/b`,`/api/post/a/b/c`等等

> **注意**: 你可以使用`slug`以外的名字，比如:`[...param]`

匹配的参数将作为查询参数(在本例中为`slug`)发送到页面，并且它始终是一个数组，因此，路径`/api/post/a`将具有以下`query`对象:

```json
{ "slug": ["a"] }
```

在`/api/post/a/b`的情况下，以及任何其他匹配路径，新的参数将被添加到数组中，像这样:

```json
{ "slug": ["a", "b"] }
```

`pages/api/post/[...slug].js`的API路由可能是这样的:

```js
export default function handler(req, res) {
  const { slug } = req.query
  res.end(`Post: ${slug.join(', ')}`)
}
```

现在，对`/api/post/a/b/c`的请求将以`Post: a, b, c`的文本响应。

### 可选捕获所有API路由

通过在双括号 (`[[...slug]]`)中包含参数，可以使捕获所有的路由成为可选的。

例如,`pages/api/post/[[...slug]].js`将匹配`/api/post`,`/api/post/a`,`/api/post/a/b`等等

catch all和可选的catch all路由之间的主要区别是，在可选的情况下，不带参数的路由也会被匹配(在上面的例子中是`/api/post`)。

`query`对象如下:

```json
{ } // GET `/api/post` (empty object)
{ "slug": ["a"] } // `GET /api/post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /api/post/a/b` (multi-element array)
```

## Caveats

- 预定义API路由优先于动态API路由，动态API路由优先于捕获所有API路由。看看下面的例子:
- `pages/api/post/create.js`- 将匹配`/api/post/create`
- `pages/api/post/[pid].js`- 将匹配`/api/post/1`,`/api/post/abc`等。但不是`/api/post/create`
- `pages/api/post/[...slug].js`- 将匹配`/api/post/1/2`,`/api/post/a/b/c`等。但不是`/api/post/create`,`/api/post/abc`

##  联系

关于下一步的更多信息，我们推荐以下部分:


