# get-static-props

如果您从页面导出名为 `getStaticProps`（静态站点生成）的函数，Next.js 将使用 `getStaticProps` 返回的道具在构建时预渲染此页面。

```js
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

>请注意，无论呈现类型如何，任何 `props` 都将传递给页面组件，并且可以在初始 HTML 中在客户端查看。 这是为了让页面正确补水。 确保您没有在 `props` 中传递任何不应在客户端上可用的敏感信息。

## 什么时候应该使用 getStaticProps？

在以下情况下，您应该使用 getStaticProps：
- 呈现页面所需的数据在用户请求之前的构建时可用
- 数据来自无头 CMS
- 页面必须预先渲染（用于 SEO）并且速度非常快——getStaticProps生成HTML和JSON文件，这两者都可以被 CDN 缓存以提高性能
- 数据可以公开缓存（不是特定于用户的）。在某些特定情况下，可以通过使用中间件重写路径来绕过这种情况。

## getStaticProps 什么时候运行

getStaticProps始终在服务器上运行，从不在客户端上运行。您可以使用此工具验证内部编写的代码getStaticProps是否已从客户端捆绑包中删除。

- getStaticProps总是在运行`next build`
- getStaticProps使用时在后台运行fallback: true
- getStaticProps使用时在初始渲染之前调用fallback: blocking
- getStaticProps使用时在后台运行revalidate
- getStaticProps使用时在后台按需运行revalidate()

当与Incremental Static Regeneration结合使用时，getStaticProps将在后台运行，同时对陈旧的页面进行重新验证，并将新页面提供给浏览器。

getStaticProps无法访问传入请求（例如查询参数或 HTTP 标头），因为它生成静态 HTML。如果您需要访问页面请求，请考虑使用中间件以及getStaticProps.

## 使用 getStaticProps 从 CMS 获取数据

以下示例显示了如何从 CMS 获取博客文章列表。

```jsx
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

getStaticPropsAPI 参考涵盖了所有可以与getStaticProps.

## 直接写服务端代码

由于getStaticProps只在服务器端运行，它永远不会在客户端运行。它甚至不会包含在浏览器的 JS 包中，因此您可以编写直接数据库查询，而无需将它们发送到浏览器。

这意味着您可以直接在.getStaticPropsgetStaticProps

举个例子。API 路由用于从 CMS 获取一些数据。然后直接从 调用该 API 路由getStaticProps。这会产生额外的调用，从而降低性能。相反，从 CMS 获取数据的逻辑可以通过使用lib/目录来共享。然后它可以与 共享getStaticProps。

```js
// lib/load-posts.js

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts/')
  const data = await res.json()

  return data
}

// pages/blog.js
import { loadPosts } from '../lib/load-posts'

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}
```

或者，如果您不使用 API 路由来获取数据，则可以直接使用fetch()API来获取数据。getStaticProps

要验证 Next.js 从客户端包中消除了什么，您可以使用next-code-elimination tool。

## 静态生成 HTML 和 JSON

当getStaticProps在构建时预渲染页面时，除了页面 HTML 文件之外，Next.js 还会生成一个 JSON 文件，其中包含 running 的结果getStaticProps。

此 JSON 文件将用于通过next/link或的客户端路由next/router。当您导航到使用 预渲染的页面时getStaticProps，Next.js 会获取此 JSON 文件（在构建时预先计算）并将其用作页面组件的道具。这意味着客户端页面转换不会调用getStaticProps，因为仅使用导出的 JSON。

使用增量静态生成时，getStaticProps将在后台执行以生成客户端导航所需的 JSON。您可能会以针对同一页面发出多个请求的形式看到这一点，但是，这是有意为之，对最终用户的性能没有影响。

## 我在哪里可以使用 getStaticProps

getStaticProps只能从页面导出。您不能从非页面文件、_app、_document或_error.

这种限制的原因之一是 React 需要在呈现页面之前拥有所有必需的数据。

此外，您必须将 export作为独立功能使用——如果您将其添加为页面组件的属性，getStaticProps它将不起作用。getStaticProps

> 注意：如果您创建了自定义应用程序，请确保将 传递pageProps给页面组件，如链接文档中所示，否则道具将为空。

## 在开发中的每个请求上运行

在开发中 ( next dev)，getStaticProps将在每个请求上调用。

## 预览模式

您可以使用Preview Mode暂时绕过静态生成并在请求时而不是构建时呈现页面。例如，您可能正在使用无头 CMS，并希望在草稿发布之前对其进行预览。

