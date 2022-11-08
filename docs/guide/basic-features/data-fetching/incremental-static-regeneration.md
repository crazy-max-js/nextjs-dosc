# ISR (Incremental Static Regeneration)

::: details 例子
- [Next.js 商务](https://nextjs.org/commerce)
- [GitHub 反应演示](https://reactions-demo.vercel.app/)
- [静态推文演示](https://static-tweet.vercel.app/)
:::

::: details 版本历史
| 版本  | 变化 |
| ------------- | ------------- |
| `v12.2.0`  | 按需 ISR 稳定  |
| `v12.1.0`  | 添加了按需 ISR（测试版）。  |
| `v12.0.0`  | 添加了机器人感知 ISR 后备。  |
| `v9.5.0`  | 添加了基本路径。  |
:::

Next.js 允许您在构建站点后创建或更新静态页面。增量静态重新生成 (ISR) 使您能够在每页的基础上使用静态生成，**而无需重建整个站点**。使用 ISR，您可以在扩展到数百万页的同时保留静态的优势。

要使用 ISR，请将 `revalidate` prop 添加到 `getStaticProps` ：

```jsx
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Blog
```

当对在构建时预渲染的页面发出请求时，它将最初显示缓存的页面。

- 在初始请求之后和 10 秒之前对页面的任何请求也会被缓存并且是瞬时的。
- 在 10 秒窗口之后，下一个请求仍将显示缓存（陈旧）页面
- Next.js 在后台触发页面的重新生成。
- 页面生成成功后，Next.js 将使缓存失效并显示更新的页面。如果后台重新生成失败，旧页面仍将保持不变。 

当对尚未生成的路径发出请求时，Next.js 将在第一个请求时服务器渲染页面。未来的请求将从缓存中提供静态文件。Vercel 上的 ISR全局持久化缓存并处理回滚。

> 注意：检查您的上游数据提供者是否默认启用了缓存。您可能需要禁用（例如useCdn: false），否则重新验证将无法提取新数据来更新 ISR 缓存。当 CDN 返回标头时，缓存可以发生在 CDN（对于被请求的端点）Cache-Control。

## 按需重新验证

如果您将revalidate时间设置为60，所有访问者将在一分钟内看到您网站的相同生成版本。使缓存无效的唯一方法是在一分钟后访问该页面的人。

从 开始v12.2.0，Next.js 支持按需增量静态重新生成以手动清除特定页面的 Next.js 缓存。这使得在以下情况下更容易更新您的网站：

- 来自无头 CMS 的内容已创建或更新
- 电子商务元数据更改（价格、描述、类别、评论等）
在内部`getStaticProps`，您无需指定revalidate使用按需重新验证。如果revalidate省略，Next.js 将使用默认值(no revalidation) 并且仅在调用false时按需重新验证页面。revalidate()

>注意： 不会为按需 ISR 请求执行中间件。相反，调用您想要重新验证revalidate()的确切路径。例如，如果您有pages/blog/[slug].js并从/post-1->重写/blog/post-1，则需要调用res.revalidate('/blog/post-1').


### 使用按需重新验证

首先，创建一个只有 Next.js 应用程序知道的秘密令牌。此密钥将用于防止未经授权访问重新验证 API 路由。您可以使用以下 URL 结构访问路由（手动或使用 webhook）：

```text
https://<your-site.com>/api/revalidate?secret=<token>
```

接下来，将密钥作为环境变量添加到您的应用程序中。最后，创建重新验证 API 路由：

```js
// pages/api/revalidate.js

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate('/path-to-revalidate')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
```
查看我们的演示，了解按需重新验证的实际效果并提供反馈。

### 在开发过程中测试按需 ISR

当使用 , 在本地运行时next dev，`getStaticProps`每个请求都会调用。要验证您的按需 ISR 配置是否正确，您需要创建生产版本并启动生产服务器：

```shell
$ next build
$ next start
```

然后，您可以确认静态页面已成功重新验证。

## 错误处理和重新验证

如果在处理后台重新生成时内部出现错误`getStaticProps`，或者您手动抛出错误，则最后成功生成的页面将继续显示。在下一个后续请求中，Next.js 将重试调用`getStaticProps`.

```js
export async function getStaticProps() {
  // If this request throws an uncaught error, Next.js will
  // not invalidate the currently shown page and
  // retry getStaticProps on the next request.
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  // If the request was successful, return the posts
  // and revalidate every 10 seconds.
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
```

## 自托管 ISR

当您使用next start.

在部署到Kubernetes或HashiCorp Nomad等容器编排器时，您可以使用这种方法。默认情况下，生成的资产将存储在每个 pod 的内存中。这意味着每个 pod 都有自己的静态文件副本。可能会显示陈旧数据，直到该特定 pod 被请求击中。

为确保所有 pod 的一致性，您可以禁用内存缓存。这将通知 Next.js 服务器仅利用文件系统中 ISR 生成的资产。

您可以在 Kubernetes pod（或类似设置）中使用共享网络挂载，以便在不同容器之间重用相同的文件系统缓存。通过共享同一个挂载，.next包含next/image缓存的文件夹也将被共享和重用。

要禁用内存缓存，请在文件中设置isrMemoryCacheSize为：0next.config.js

```js
module.exports = {
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
}
```

> 注意：您可能需要考虑尝试同时更新缓存的多个 pod 之间的竞争条件，具体取决于共享挂载的配置方式。



