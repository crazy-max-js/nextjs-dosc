# next/router

> 在继续之前，我们建议您先阅读[路由介绍](/docs/guide/routing/introduction)。

## useRouter

如果你想访问应用程序中任何功能组件内部的[`router`对象](#router-object)，你可以使用useRouter钩子，看看下面的例子：

```jsx
import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
```

> `useRouter`是一个[React Hook](https://reactjs.org/docs/hooks-intro.html),这意味着它不能与类一起使用。 您可以使用[withRouter](#withrouter)或将您的类包装在函数组件中。

## router 对象

下面是[`useRouter`](#userouter)和[`withRouter`](#withrouter)返回的`router`对象的定义：

- `pathname`:`String` - `pages` 之后的当前路由文件的路径。 因此，`basePath`、`locale` 和斜杠 (`trailingSlash: true`) 不包括在内。

- `query`:`Object`- 解析为对象的查询字符串, 包括[动态路由](/docs/guide/routing/dynamic-routes)参数. 如果页面没有使用[Server-side Rendering](/docs/guide/basic-features/data-fetching/get-server-side-props)，预渲染时会是一个空对象。 默认为`{}`

- `asPath`:`String`- 浏览器中显示的路径包括搜索参数并遵守 `trailingSlash` 配置。`basePath`和`locale`不包括在内。

- `isFallback`:`boolean`- 当前页面是否处于[fallback mode](/docs/guide/api-reference/data-fetching/get-static-paths#fallback-pages)。

- `basePath`:`String`- 活动的[basePath](/docs/guide/api-reference/next.config.js/basepath)(如果启用)。

- `locale`:`String`- 激活的语言环境 （如果启用）。

- `locales`:`String[]`- 所有支持的语言环境（如果启用）。

- `defaultLocale`:`String`- 当前的默认语言环境（如果启用）。

- `domainLocales`:`Array<{domain, defaultLocale, locales}>`- 任何已配置的域语言环境。

- `isReady`:`boolean`- 路由器字段是否在客户端更新并准备好使用。 只应在 `useEffect` 方法内部使用，而不应用于在服务器上有条件地呈现。 有关 [自动静态优化页面](/docs/guide/advanced-features/automatic-static-optimization) 的用例，请参阅相关文档

- `isPreview`:`boolean`- 应用当前是否处于[预览模式](/docs/guide/advanced-features/preview-mode).

> 如果页面使用服务端渲染或者[自动静态优化](/docs/guide/advanced-features/automatic-static-optimization)，使用`asPath`字段可能会导致客户端和服务端不匹配。 避免使用`asPath`，直到`isReady`字段为`true`。

`router` 中包含以下方法：

### router.push

:::details 示例
- [Using Router](https://github.com/vercel/next.js/tree/canary/examples/using-router)
:::

[`next/link`](/docs/guide/api-reference/next/link)处理客户端转换，此方法对于不够用的情况很有用。

```jsx
router.push(url, as, options)
```

- `url`:`UrlObject | String`- 要导航到的 URL（有关属性，请参阅[Node.JS URL 模块文档](https://nodejs.org/api/url.html#legacy-urlobject)UrlObject）。

- `as`:`UrlObject | String`- 将在浏览器 URL 栏中显示的路径的可选装饰器。 在 Next.js 9.5.3 之前，这用于动态路由，请查看我们[之前的文档](/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes)以了解它是如何工作的。注意：当此路径不同于上一个/行为中提供的路径时，`href`如上`href`一个`as`文档中所示 

- `options`- 具有以下配置选项的可选对象：

- - `scroll`- 可选布尔值，控制导航后滚动到页面顶部。默认为`true`

- - [`shallow`](/docs/guide/routing/shallow-routing): 更新当前页面的路径而不重新运行[`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props),[`getServerSideProps`](/docs/guide/basic-features/data-fetching/get-server-side-props)或[`getInitialProps`](/docs/guide/api-reference/data-fetching/get-initial-props). 默认为`false`

- - `locale`- 可选字符串，指示新页面的语言环境

> 您不需要 `router.push` 用于外部 URL。[window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)更适合这些情况。

#### 用法

导航到`pages/about.js`，这是一个预定义的路由：

```jsx
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/about')}>
      Click me
    </button>
  )
}
```

导航`pages/post/[pid].js`，这是一个动态路由：

```jsx
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/post/abc')}>
      Click me
    </button>
  )
}
```

将用户重定向到 `pages/login.js`，这对 [authentication](/guide/authentication) 后面的页面很有用：

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading])

  return <p>Redirecting...</p>
}
```

#### 导航后重置状态

当导航到 Next.js 中的同一页面时，默认情况下**不会**重置页面的状态，因为除非父组件发生更改，否则 react 不会卸载。

```jsx
// pages/[slug].js
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Link href="/one">one</Link> <Link href="/two">two</Link>
    </div>
  )
}
```

在上面的例子中，在`one`和`two`之间导航不会重置计数。 `useState` 在渲染之间保持不变，因为顶级 React 组件 `Page` 是相同的。

如果您不希望这种行为，您有几个选择：

- 使用 useEffect 手动确保更新每个状态。在上面的示例中，它可能看起来像：

```jsx
useEffect(() => {
  setCount(0)
}, [router.query.slug])
```

- 使用 React`key` 来[告诉 React 重新挂载组件](https://reactjs.org/docs/lists-and-keys.html#keys)。 要对所有页面执行此操作，您可以使用自定义应用程序：

```jsx
// pages/_app.js
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Component key={router.asPath} {...pageProps} />
}
```

#### 使用 URL 对象

您可以像将其用于 [`next/link`](/docs/guide/api-reference/next/link#with-url-object) 一样使用 URL 对象。 适用于`url`和`as`参数：

```jsx
import { useRouter } from 'next/router'

export default function ReadMore({ post }) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => {
        router.push({
          pathname: '/post/[pid]',
          query: { pid: post.id },
        })
      }}
    >
      Click here to read more
    </button>
  )
}
```

### router.replace

类似于[`next/link`](/docs/guide/api-reference/next/link)中的`replace`prop,`router.replace` 将阻止向`history` 堆栈添加新的 URL 条目。

```jsx
router.replace(url, as, options)
```

- `router.replace` 的 API 与 [`router.push`](#routerpush) 的 API 完全相同。

#### Usage

看看下面的例子：

```jsx
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.replace('/home')}>
      Click me
    </button>
  )
}
```

### router.prefetch

预取页面以加快客户端转换。 此方法仅对没有 [`next/link`](/docs/guide/api-reference/next/link) 的导航有用，因为 `next/link` 会自动处理预取页面。

> 这是一个仅限生产的功能。 Next.js 不会在开发中预取页面。

```jsx
router.prefetch(url, as, options)
```

- `url`- 要预取的 URL，包括显式路由（例如`/dashboard`）和动态路由（例如`/product/[id]`）
- `as`- `url` 的可选装饰器。 在 Next.js 9.5.3 之前，它用于预取动态路由，请查看我们的[以前的文档](/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes) 了解它是如何工作的
- `options`- 具有以下允许字段的可选对象：
- - `locale`- 允许提供与活动区域不同的区域设置。如果为`false`，`url`必须包含语言环境，因为不会使用活动语言环境。

#### 用法

假设您有一个登录页面，登录后，您将用户重定向到仪表板。 对于这种情况，我们可以预取仪表板以进行更快的转换，如下例所示：

```jsx
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        /* Form data */
      }),
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router.push('/dashboard')
    })
  }, [])

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/dashboard')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
    </form>
  )
}
```

### router.beforePopState

在某些情况下（例如，如果使用[自定义服务器](/docs/guide/advanced-features/custom-server)）， 
您可能希望监听[popstate](https://developer.mozilla.org/en-US/docs/Web/Events/popstate) 并在路由器对它采取行动之前做一些事情。

```jsx
router.beforePopState(cb)
```

- `cb`- 在传入的`popstate`事件上运行的函数。该函数接收事件的状态作为具有以下道具的对象：
- - `url`:`String`- 新状态的路线。这通常是`page`的名称
- - `as`:`String`- 将在浏览器中显示的 url
- - `options`:`Object`- [router.push](#routerpush) 发送的附加选项

如果`cb`返回`false`, Next.js 路由器不会处理`popstate`，在这种情况下你将负责处理它。 查看[禁用文件系统路由](/docs/guide/advanced-features/custom-server#disabling-file-system-routing).

#### 用法

您可以使用`beforePopState`来操纵请求，或强制刷新 SSR，如下例所示：

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      if (as !== '/' && as !== '/other') {
        // Have SSR render bad routes as a 404.
        window.location.href = as
        return false
      }

      return true
    })
  }, [])

  return <p>Welcome to the page</p>
}
```

### router.back

回顾历史。相当于点击浏览器的后退按钮。它执行`window.history.back()`。

#### 用法

```jsx
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
  )
}
```

### router.reload

重新加载当前 URL。相当于点击浏览器的刷新按钮。它执行`window.location.reload()`。

#### 用法

```jsx
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.reload()}>
      Click here to reload
    </button>
  )
}
```

### router.events

:::details 示例
- [带有页面加载指示器](https://github.com/vercel/next.js/tree/canary/examples/with-loading)
:::

您可以监听 Next.js 路由器内部发生的不同事件。以下是支持的事件列表：

- `routeChangeStart(url, { shallow })`- 当路由开始改变时触发
- `routeChangeComplete(url, { shallow })`- 当路由完全改变时触发
- `routeChangeError(err, url, { shallow })`- 当更改路线时出现错误或取消路线加载时触发
- - `err.cancelled`- 指示导航是否已取消
- `beforeHistoryChange(url, { shallow })`- 在更改浏览器的历史记录之前触发
- `hashChangeStart(url, { shallow })`- 当哈希将更改但页面不会更改时触发
- `hashChangeComplete(url, { shallow })`- 当哈希值改变但页面没有改变时触发

> **注意：**这里的`url`是浏览器中显示的URL，包括[`basePath`](/docs/guide/api-reference/next.config.js/basepath).

#### 用法

例如，要监听路由器事件`routeChangeStart`，打开或创建`pages/_app.js`并订阅该事件，如下所示：

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}
```

> 我们使用 [Custom App](/docs/guide/advanced-features/custom-app)(`pages/_app.js`) 来订阅事件，因为它没有在页面导航上卸载，但您可以订阅路由应用程序中任何组件上的事件。

组件挂载时应注册路由器事件 ([useEffect](https://reactjs.org/docs/hooks-effect.html)或[componentDidMount](https://reactjs.org/docs/react-component.html) #componentdidmount)/[componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)) 或在事件发生时强制执行。

如果路由加载被取消（例如，通过连续快速单击两个链接），将触发 `routeChangeError`。并且传递的`err` 将包含一个设置为`true` 的`cancelled` 属性，如下例所示：

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`)
      }
    }

    router.events.on('routeChangeError', handleRouteChangeError)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return <Component {...pageProps} />
}
```

## 潜在的 ESLint 错误

在 router 对象上可访问的某些方法返回一个 Promise。如果您启用了 ESLint 规则[no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)，请考虑全局或为受影响的行禁用它。

如果您的应用程序需要此规则，您应该要么`void`承诺 - 或者使用`async`函数，`await`承诺，然后取消函数调用。**当从内部调用方法时，这不适用`onClick` 处理程序**。

受影响的方法是：

- `router.push`- `router.replace`- `router.prefetch`

### 潜在的解决方案

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    // disable the linting on the next line - This is the cleanest solution
    // eslint-disable-next-line no-floating-promises
    router.push('/login')

    // void the Promise returned by router.push
    if (!(user || loading)) {
      void router.push('/login')
    }
    // or use an async function, await the Promise, then void the function call
    async function handleRouteChange() {
      if (!(user || loading)) {
        await router.push('/login')
      }
    }
    void handleRouteChange()
  }, [user, loading])

  return <p>Redirecting...</p>
}
```

## withRouter

如果[`useRouter`](#userouter) 不是最适合您的，`withRouter` 也可以将相同的[`router`对象](#router-object) 添加到任何组件。

### 用法

```jsx
import { withRouter } from 'next/router'

function Page({ router }) {
  return <p>{router.pathname}</p>
}

export default withRouter(Page)
```

### TypeScript

要将类组件与`withRouter`一起使用，组件需要接受路由器属性：

```tsx
import React from 'react'
import { withRouter, NextRouter } from 'next/router'

interface WithRouterProps {
  router: NextRouter
}

interface MyComponentProps extends WithRouterProps {}

class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return <p>{this.props.router.pathname}</p>
  }
}

export default withRouter(MyComponent)
```
