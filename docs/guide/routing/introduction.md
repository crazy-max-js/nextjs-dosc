# 路由

Next.js拥有基于[页面概念](/docs/guide/basic-features/pages)的文件系统路由器。

当一个文件被添加到`pages`目录中时，它将自动作为路由可用。

`pages`目录中的文件可用于定义最常见的模式。

#### Index routes

路由器会自动将名为`index`的文件路由到目录的根目录。

- `pages/index.js`→`/`
- `pages/blog/index.js`→`/blog`

#### 嵌套路由

路由器支持嵌套文件。如果您创建了一个嵌套的文件夹结构，文件将自动以相同的方式路由。

- `pages/blog/first-post.js`→`/blog/first-post`
- `pages/dashboard/settings/username.js`→`/dashboard/settings/username`

#### 动态路由段

要匹配动态段，可以使用括号语法。这允许您匹配已命名的参数。

- `pages/blog/[slug].js`→`/blog/:slug`(`/blog/hello-world`)
- `pages/[username]/settings.js`→`/:username/settings`(`/foo/settings`)
- `pages/post/[...all].js`→`/post/*`(`/post/2020/id/title`)

> 查看[动态路由文档](/docs/guide/routing/dynamic-routes)了解更多关于它们是如何工作的。

## 页面之间的链接

Next.js路由器允许您在页面之间进行客户端路由转换，类似于单页应用程序。

提供了一个名为`Link`的React组件来完成这种客户端路由转换。

```jsx
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  )
}

export default Home
```

上面的例子使用了多个链接。每一个都将一个路径 (`href`) 映射到一个已知的页面:

- `/`→`pages/index.js`
- `/about`→`pages/about.js`
- `/blog/hello-world`→`pages/blog/[slug].js`

对于使用[静态生成](/docs/guide/basic-features/data-fetching/get-static-props)的页面，默认情况下会预取视口中的任何`<Link />`（最初或通过滚动）（包括相应的数据）。仅当单击`<Link />`时，才会获取[服务器渲染](/docs/guide/basic-features/data-fetching/get-server-side-props)路由的相应数据。

### 链接到动态路径

您还可以使用插值来创建路径，这对于[动态路线段](#dynamic-route-segments)非常有用。例如，要显示已作为道具传递给组件的帖子列表：

```jsx
import Link from 'next/link'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
```

> [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)在示例中用于保持路径 utf-8 兼容。

或者，使用 URL 对象：

```jsx
import Link from 'next/link'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: '/blog/[slug]',
              query: { slug: post.slug },
            }}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
```

现在，我们不使用插值来创建路径，而是在`href`中使用 URL 对象：

- `pathname`是`pages`目录中的页面名称。`/blog/[slug]`在这种情况下。
- `query`是一个带有动态段的对象。`slug`在这种情况下。

## 注入路由器

:::details 示例
- [Dynamic Routing](https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing)
:::

要访问 React 组件中的[`router`object](/docs/guide/api-reference/next/router#router-object)，您可以使用[`useRouter`](/docs/guide/api-reference/next/router#userouter)或[`withRouter`](/docs/guide/api-reference/next/router#withrouter).

一般来说，我们建议使用[`useRouter`](/docs/guide/api-reference/next/router#userouter).

## 学到更多

路由器分为多个部分：




