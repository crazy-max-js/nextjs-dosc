# next/link

:::details 示例
- [Hello World](https://github.com/vercel/next.js/tree/canary/examples/hello-world)
- [Active className on Link](https://github.com/vercel/next.js/tree/canary/examples/active-class-name)
:::

> 在继续之前，我们建议您先阅读[路由介绍](/docs/guide/routing/introduction)。

路由之间的客户端转换可以通过由`next/link`导出的`Link`组件来启用。

例如，考虑一个包含以下文件的`pages`目录：

- `pages/index.js`
- `pages/about.js`
- `pages/blog/[slug].js`

我们可以有一个链接到这些页面中的每一个，如下所示：

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

`Link` 接受以下props：

- `href`- 要导航到的路径或 URL。这是唯一需要的prop。 It can also be an object, see[example here](/docs/guide/api-reference/next/link#with-url-object)

- `as`- 将在浏览器 URL 栏中显示的路径的可选装饰器。在 Next.js 9.5.3 之前，这用于动态路由，请查看我们之前的文档以了解它是如何工作的。注意：当此路径与href之前提供的路径不同时， href/as行为将如之前的文档所示使用。

- [`legacyBehavior`](#if-the-child-is-a-tag)- 改变行为，使得子元素必须是`<a>`。默认为`false`。

- [`passHref`](#if-the-child-is-a-custom-component-that-wraps-an-a-tag)- 强制 `Link` 将 `href` 属性发送给它的子元素。默认为`false`

- `prefetch`- 在后台预取页面。默认为`true`。 视口中的任何`<Link />`（最初或通过滚动）都将被预加载。 可以通过传递 prefetch={false} 来禁用预取。 当`prefetch`设置为`false`时，预取仍然会在悬停时发生。 使用[静态生成](/docs/guide/basic-features/data-fetching/get-static-props)的页面将使用数据预加载`JSON`文件以加快页面转换。预取仅在生产中启用。

- [`replace`](#replace-the-url-instead-of-push)- 替换当前的`history`状态，而不是将新的 url 添加到堆栈中。默认为`false`

- [`scroll`](#disable-scrolling-to-the-top-of-the-page)- 导航后滚动到页面顶部。默认为`true`

- [`shallow`](/docs/guide/routing/shallow-routing)- 更新当前页面的路径而不重新运行`getStaticProps`，`getServerSideProps`或者`getInitialProps`。默认为`false`

- `locale`- 活动区域设置会自动添加到前面。`locale` 允许提供不同的语言环境。 当`false``href` 必须包含语言环境时，默认行为被禁用。

## 如果路线有动态路段

从 Next.js 9.5.3 开始，链接到动态路由时无需执行任何操作，包括捕获所有路由（对于旧版本，请查看我们以前的文档）。但是，使用插值或URL 对象生成链接会变得非常普遍和方便。

例如，动态路由`pages/blog/[slug].js`将匹配以下链接：

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

## 如果子元素是`<a>`标签

```jsx
import Link from 'next/link'

function Legacy() {
  return (
    <Link href="/about" legacyBehavior>
      <a>About Us</a>
    </Link>
  )
}

export default Legacy
```

## 如果子组件是用`<a>`标签包裹的自定义组件

如果子组件是用`<a>`标签包裹的自定义组件，您必须将 `passHref` 添加到链接。如果您使用像样式组件这样的库，这是必需的。如果没有这个，`<a>` 标签将没有 `href` 属性，这会损害您网站的可访问性并可能影响 SEO。如果您使用的是 ESLint，则有一个内置规则 `next/link-passhref` 可确保正确使用 `passHref`。

```jsx
import Link from 'next/link'
import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <RedLink>{name}</RedLink>
    </Link>
  )
}

export default NavLink
```

- 如果你使用 [emotion](https://emotion.sh/) 的 JSX pragma 功能（`@jsx jsx`），即使直接使用`<a>`标签，也必须使用`passHref`。
- 该组件应支持`onClick`属性以正确触发导航

## 如果子元素是一个功能组件

如果`Link`子元素是一个功能组件，除了使用`passHref`和`legacyBehavior`，还必须将组件包裹在[`React.forwardRef`](https://reactjs.org/docs/react-api.html#reactforwardref):

```jsx
import Link from 'next/link'

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

function Home() {
  return (
    <Link href="/about" passHref legacyBehavior>
      <MyButton />
    </Link>
  )
}

export default Home
```

## 使用 URL 对象

`Link` 也可以接收一个 URL 对象，它会自动格式化它以创建 URL 字符串。这是如何做到的：

```jsx
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link
          href={{
            pathname: '/about',
            query: { name: 'test' },
          }}
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: '/blog/[slug]',
            query: { slug: 'my-post' },
          }}
        >
          Blog Post
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

上面的例子有一个链接：

- 预定义的路线:`/about?name=test`
- [动态路由](/docs/guide/routing/dynamic-routes):`/blog/my-post`

您可以使用 [Node.js URL 模块文档](https://nodejs.org/api/url.html#url_url_strings_and_url_objects) 中定义的每个属性。

## 替换 URL 而不是推送

`Link` 组件的默认行为是将新的 URL `push` 到`history` 堆栈中。您可以使用`replace`prop 来防止添加新条目，如下例所示：

```jsx
<Link href="/about" replace>
  About us
</Link>
```

## 禁用滚动到页面顶部

`Link` 的默认行为是滚动到页面顶部。当定义了一个哈希值时，它会滚动到特定的 id，就像一个普通的`<a>`标签。为了防止滚动到顶部/哈希`scroll={false}`可以添加到`Link`：

```jsx
<Link href="/#hashid" scroll={false}>
  Disables scrolling to the top
</Link>
```

## 使用 Next.js 13 中间件

通常使用中间件进行身份验证或涉及将用户重写到不同页面的其他目的。为了让`<Link />`组件通过中间件正确预取链接并进行重写，您需要告诉 Next.js 要显示的 URL 和要预取的 URL。这是为了避免不必要地获取中间件以了解预取的正确路径。

例如，如果您想提供一个经过`/dashboard`身份验证和访问者视图的路由，您可以在中间件中添加类似于以下内容的内容，以将用户重定向到正确的页面：

```js
// middleware.js
export function middleware(req) {
  const nextUrl = req.nextUrl
  if (nextUrl.pathname === '/dashboard') {
    if (req.cookies.authToken) {
      return NextResponse.rewrite('/auth/dashboard')
    } else {
      return NextResponse.rewrite('/public/dashboard')
    }
  }
}
```

在这种情况下，您可能希望在`<Link />`组件（内部`pages/`）中使用以下代码：

```js
// pages/index.js
import Link from 'next/link'
import useIsAuthed from './hooks/useIsAuthed'

export default function Page() {
  const isAuthed = useIsAuthed()
  const path = isAuthed ? '/auth/dashboard' : '/dashboard'
  return (
    <Link as="/dashboard" href={path}>
      Dashboard
    </Link>
  )
}
```

> **注意：**如果您正在使用[动态路由](/docs/guide/routing/dynamic-routes)，您需要调整您的`as`和`href`属性。例如，如果你有一个像`/dashboard/[user]`这样的动态路由，你想通过中间件以不同的方式呈现，你可以写：`<Link href={{ pathname: '/dashboard/authed/[user]' ，查询：{用户：用户名}}} as="/dashboard/[user]">个人资料</Link>`。
