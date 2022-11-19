# 浅路由

:::details 示例
- [Shallow Routing](https://github.com/vercel/next.js/tree/canary/examples/with-shallow-routing)
:::

浅路由允许您更改URL而无需再次运行数据获取方法，包括[`getServerSideProps`](/docs/guide/basic-features/data-fetching/get-server-side-props),[`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props)和[`getInitialProps`](/docs/guide/api-reference/data-fetching/get-initial-props).

你将通过[`router`对象](/docs/guide/api-reference/next/router#router-object)(由[`useRouter`](/docs/guide/api-reference/next/router#userouter)或[`withRouter`](/docs/guide/api-reference/next/router#withrouter)添加)接收更新后的`pathname`和`query`，而不会丢失状态。

要启用浅路由，请将`shallow`选项设置为`true`。考虑下面的例子:

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Current URL is '/'
function Page() {
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
}

export default Page
```

URL将被更新为`/?counter=10`。页面不会被替换，只有路由的状态被改变。

你也可以通过[`componentDidUpdate`](https://reactjs.org/docs/react-component.html#componentdidupdate)查看URL的变化，如下所示:

```jsx
componentDidUpdate(prevProps) {
  const { pathname, query } = this.props.router
  // verify props have changed to avoid an infinite loop
  if (query.counter !== prevProps.router.query.counter) {
    // fetch data based on the new query
  }
}
```

## 说明

浅路由**仅**适用于当前页面中的URL更改。例如，假设我们有另一个名为`pages/about.js`的页面，你运行这个:

```jsx
router.push('/?counter=10', '/about?counter=10', { shallow: true })
```

因为这是一个新页面，它将卸载当前页面，加载新页面并等待数据获取，尽管我们要求进行浅路由。

当浅路由与中间件一起使用时，它不会像之前在没有中间件的情况下所做的那样确保新页面与当前页面匹配。这是因为中间件能够动态重写，如果没有被shallow跳过的数据获取，就无法在客户端进行验证，所以一个shallow路由更改必须始终被视为shallow。
