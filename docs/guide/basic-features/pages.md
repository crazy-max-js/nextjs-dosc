> 注意：Next.js 13 引入了`app/`目录（beta）。这个新目录支持布局、嵌套路由，并默认使用服务器组件。在内部`app/`，您可以在布局中为整个应用程序获取数据，包括支持更精细的嵌套布局（使用并置数据获取）。

>了解有关逐步采用app/的更多信息。

在 Next.js 中，**页面**是从目录中的、、或文件导出的React 组件。每个页面都根据其文件名与一个路由相关联。`.js` `.jsx` `.ts` `.tsx` `pages`

**示例**：如果您创建`pages/about.js`一个像下面这样导出 React 组件，它将可以在`/about`.
```js
export default function About() {
  return <div>About</div>
}
```

## 具有动态路由的页面

Next.js 支持具有动态路由的页面。例如，如果您创建一个名为 的文件  
`pages/posts/[id].js`，那么它将可以在`posts/1`、`posts/2`等处访问。


> 要了解有关动态路由的更多信息，请查看动态路由文档。


# 预渲染

默认情况下，Next.js预渲染每个页面。这意味着 Next.js 会提前为每个页面生成 HTML，而不是全部由客户端 JavaScript 完成。预渲染可以带来更好的性能和 SEO。  

每个生成的 HTML 都与该页面所需的最少 JavaScript 代码相关联。当浏览器加载页面时，其 JavaScript 代码将运行并使页面完全交互。（这个过程称为水合作用。）

## 两种形式的预渲染

Next.js 有两种**预渲染**形式：静态生成和服务器端渲染。不同之处在于它何时为页面生成 HTML。

- **静态生成（推荐）**：HTML 在**构建时**生成，并将在每个请求中重用。
- **服务器端渲染：在每个请求**上生成 HTML。

重要的是，Next.js 允许您**选择**要为每个页面使用的预渲染表单。您可以通过对大多数页面使用静态生成并为其他页面使用服务器端渲染来创建“混合”Next.js 应用程序。

出于性能原因，我们**建议**使用**静态生成**而不是服务器端渲染。静态生成的页面可以被 CDN 缓存，无需额外配置来提高性能。但是，在某些情况下，服务器端渲染可能是唯一的选择。

您还可以使用**客户端数据获取**以及静态生成或服务器端渲染。这意味着页面的某些部分可以完全由客户端 JavaScript 呈现。要了解更多信息，请查看数据获取文档。

# 静态生成

::: details 例子
- [WordPress 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)（[演示](https://next-blog-wordpress.vercel.app/)）
- [使用降价文件的博客启动器](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)（[演示](https://next-blog-starter.vercel.app/)）
- [DatoCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms)（[演示](https://next-blog-datocms.vercel.app/)）
- [TakeShape 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape)（[演示](https://next-blog-takeshape.vercel.app/)）
- [理智示例](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity)（[演示](https://next-blog-sanity.vercel.app/)）
- [棱镜示例](https://github.com/vercel/next.js/tree/canary/examples/cms-prismic)（[演示](https://next-blog-prismic.vercel.app/)）
- [内容丰富的示例](https://github.com/vercel/next.js/tree/canary/examples/cms-contentful)（[演示](https://next-blog-contentful.vercel.app/)）
- [Strapi 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-strapi)（[演示](https://next-blog-strapi.vercel.app/)）
- [Prepr 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-prepr)（[演示](https://next-blog-prepr.vercel.app/)）
- [敏捷 CMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-agilitycms)（[演示](https://next-blog-agilitycms.vercel.app/)）
- [宇宙示例](https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic)（[演示](https://next-blog-cosmic.vercel.app/)）
- [ButterCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-buttercms)（[演示](https://next-blog-buttercms.vercel.app/)）
- [Storyblok 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-storyblok)（[演示](https://next-blog-storyblok.vercel.app/)）
- [GraphCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-graphcms)（[演示](https://next-blog-graphcms.vercel.app/)）
- [内容示例](https://github.com/vercel/next.js/tree/canary/examples/cms-kontent)（[演示](https://next-blog-kontent.vercel.app/)）
- [Builder.io 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-builder-io)（[演示](https://cms-builder-io.vercel.app/)）
- [TinaCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-tina)（[演示](https://cms-tina-example.vercel.app/)）
- [静态推文](https://static-tweet.vercel.app/)（[演示](https://static-tweet.vercel.app/)）
- [Enterspeed 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-enterspeed)（[演示](https://next-blog-demo.enterspeed.com/)）
:::

如果页面使用**静态生成**，则页面 HTML 是在**构建时**生成的。这意味着在生产环境中，页面 HTML 会在您运行`next build`. 然后，此 HTML 将在每个请求上重复使用。它可以由 CDN 缓存。

在 Next.js 中，您可以静态生成**带有或不带有 data**的页面。让我们来看看每个案例。


## 无数据静态生成

默认情况下，Next.js 使用静态生成预渲染页面而不获取数据。这是一个例子：

```js
function About() {
  return <div>About</div>
}

export default About
```

请注意，此页面不需要获取任何要预渲染的外部数据。在这种情况下，Next.js 在构建期间为每个页面生成一个 HTML 文件。

## 带数据的静态生成

某些页面需要获取外部数据以进行预渲染。有两种情况，可能适用一种或两种情况。在每种情况下，您都可以使用 Next.js 提供的这些功能：

1. 您的页面**内容**取决于外部数据：使用`getStaticProps`.
2. 您的页面**路径**取决于外部数据：使用`getStaticPaths`（通常除了`getStaticProps`）。

### 场景一：你的页面内容依赖于外部数据

**示例**：您的博客页面可能需要从 CMS（内容管理系统）获取博客文章列表。

```js
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}
```

要在预渲染时获取此数据，Next.js 允许您从同一文件调用`export`一个`async`函数。  
`getStaticProps`此函数在构建时被调用，并允许您将获取的数据传递到页面的`props`预渲染。

```js
export default function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
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
```

要了解有关其g`etStaticProps`工作原理的更多信息，请查看数据获取文档。


### 场景 2：您的页面路径依赖于外部数据

Next.js 允许您创建具有**动态路由**的页面。例如，您可以创建一个名为`pages/posts/[id].js`以显示基于`id`. `id: 1`这将允许您在访问时显示博客文章`posts/1`。

> 要了解有关动态路由的更多信息，请查看动态路由文档。

但是，`id`您希望在构建时预渲染的内容可能取决于外部数据。

**示例**：假设您只向`id: 1`数据库添加了一篇博文（带有 ）。在这种情况下，您只想`posts/1`在构建时预渲染。

稍后，您可以使用`id: 2`. 然后你也想预渲染`posts/2`。

因此，预渲染的页面**路径**取决于外部数据。为了处理这个问题，Next.js 允许您从动态页面（在本例中）调用`export`一个`async`函数。此函数在构建时被调用，并允许您指定要预渲染的路径。`getStaticPathspages/posts/[id].js`


```js
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
```

同样在 中`pages/posts/[id].js`，您需要导出`getStaticProps`，以便您可以使用它获取有关帖子的数据`id`并使用它来预渲染页面：


```js
export default function Post({ post }) {
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
```

要了解有关其`getStaticPaths`工作原理的更多信息，请查看数据获取文档。



## 我什么时候应该使用静态生成？
我们建议尽可能使用**静态生成（有数据和无数据），因为您的页面可以构建一次并由 CDN 提供服务，这比让服务器在每次请求时呈现页面要快得多。**

您可以将静态生成用于多种类型的页面，包括：

- 营销页面
- 博客文章和作品集
- 电子商务产品列表
- 帮助和文档

您应该问自己：“我可以在用户请求**之前**预渲染此页面吗？” 如果答案是肯定的，那么您应该选择静态生成。

另一方面，如果您不能在用户请求之前预渲染页面，则静态生成**不是一个好主意**。也许您的页面会显示频繁更新的数据，并且页面内容会随每个请求而更改。

在这种情况下，您可以执行以下操作之一：

- 使用静态生成和**客户端数据获取**：您可以跳过预渲染页面的某些部分，然后使用客户端 JavaScript 填充它们。要了解有关此方法的更多信息，请查看数据获取文档。
- 使用**服务器端渲染**： Next.js 在每个请求上预渲染一个页面。它会更慢，因为页面无法被 CDN 缓存，但预渲染的页面将始终是最新的。我们将在下面讨论这种方法。


# 服务器端渲染

> 也称为“SSR”或“动态渲染”。

如果页面使用**Server-side Rendering ，则在每次请求**时都会生成页面 HTML 。

要对页面使用服务器端渲染，您需要`export`一个`async`名为`getServerSideProps`. 服务器将在每次请求时调用此函数。

例如，假设您的页面需要预渲染频繁更新的数据（从外部 API 获取）。您可以编写`getServerSideProps`which获取此数据并将其传递给`Page`如下所示：


```js
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

如您所见，`getServerSideProps`与 类似`getStaticProps`，但不同之处在于`getServerSideProps`它在每个请求上运行，而不是在构建时运行。

要了解有关`getServerSideProps`工作原理的更多信息，请查看我们的数据获取文档


# 概括

我们已经讨论了 Next.js 的两种预渲染形式。

- **静态生成（推荐）**： HTML 在**构建时**生成，并将在每个请求中重复使用。要使页面使用静态生成，请导出页面组件，或导出`getStaticProps`（`getStaticPaths`如有必要）。这对于可以在用户请求之前预渲染的页面非常有用。您还可以将它与客户端渲染一起使用以引入额外的数据。
- **服务器端渲染：在每个请求**上生成 HTML 。要使页面使用服务器端渲染，请导出`getServerSideProps`. 因为服务器端渲染导致性能比静态生成慢，所以只有在绝对必要时才使用它。