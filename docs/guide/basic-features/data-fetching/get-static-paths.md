# getStaticPaths
如果一个页面有动态路由并使用`getStaticProps`，它需要定义一个静态生成的路径列表。

当您从使用动态路由的页面导出名为 `getStaticPaths`（静态站点生成）的函数时，Next.js 将静态预渲染 `getStaticPaths` 指定的所有路径。

```js
// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default function Post({ post }) {
  // Render post...
}
```

`getStaticPaths` API 参考涵盖了可与 `getStaticPaths` 一起使用的所有参数和道具。

## 什么时候应该使用 getStaticPaths？

`getStaticPaths`如果您要静态预渲染使用动态路由的页面，则应该使用：

- 数据来自无头 CMS
- 数据来自数据库
- 数据来自文件系统
- 数据可以公开缓存（不是用户特定的）
- 页面必须预先渲染（用于 SEO）并且速度非常快——`getStaticProps`生成`HTML`和`JSON`文件，这两者都可以被 CDN 缓存以提高性能

## getStaticPaths 什么时候运行

`getStaticPaths`只会在生产中运行，它不会在运行时调用。您可以使用此工具验证内部编写的代码`getStaticPaths`是否已从客户端捆绑包中删除。

### 关于 getStaticPaths，getStaticProps 如何运行
- getStaticProps在构建期间运行next build任何paths返回
- getStaticProps使用时在后台运行fallback: true
- getStaticProps使用时在初始渲染之前调用fallback: blocking

## 我在哪里可以使用 getStaticPaths

- `getStaticPaths` 必须与`getStaticProps`
- 您不能将 `getStaticPaths` 与 `getServerSideProps` 一起使用
- 您可以从也使用 `getStaticProps` 的动态路由中导出 `getStaticPaths`
- 您不能从非页面文件（例如您的组件文件夹）中导出 `getStaticPaths`
- 您必须将 `getStaticPaths` 导出为独立函数，而不是页面组件的属性

## 在开发中的每个请求上运行

在开发（next dev）中，每个请求都会调用 `getStaticPaths`。

## 按需生成路径

`getStaticPaths`允许您控制在构建期间生成哪些页面，而不是使用`fallback`. 在构建期间生成更多页面将导致构建速度变慢。

您可以通过返回一个空数组来推迟按需生成所有页面`paths`。这在将 Next.js 应用程序部署到多个环境时特别有用。例如，您可以通过按需生成所有页面以供预览（但不是生产构建）来加快构建速度。这对于拥有成百上千个静态页面的网站很有帮助。

```js
// pages/posts/[id].js

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}
```
