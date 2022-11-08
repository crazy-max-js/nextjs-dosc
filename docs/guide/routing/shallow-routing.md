# Shallow Routing

:::details 示例
- [Shallow Routing](https://github.com/vercel/next.js/tree/canary/examples/with-shallow-routing)
:::

Shallow routing allows you to change the URL without running data fetching methods again, that includes[`getServerSideProps`](/docs/guide/basic-features/data-fetching/get-server-side-props),[`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props), and[`getInitialProps`](/docs/guide/api-reference/data-fetching/get-initial-props).

You'll receive the updated`pathname`and the`query`via the[`router`object](/docs/guide/api-reference/next/router#router-object)(added by[`useRouter`](/docs/guide/api-reference/next/router#userouter)or[`withRouter`](/docs/guide/api-reference/next/router#withrouter)), without losing state.

To enable shallow routing, set the`shallow`option to`true`. Consider the following example:

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

The URL will get updated to`/?counter=10`. and the page won't get replaced, only the state of the route is changed.

You can also watch for URL changes via[`componentDidUpdate`](https://reactjs.org/docs/react-component.html#componentdidupdate)as shown below:

```jsx
componentDidUpdate(prevProps) {
  const { pathname, query } = this.props.router
  // verify props have changed to avoid an infinite loop
  if (query.counter !== prevProps.router.query.counter) {
    // fetch data based on the new query
  }
}

```

## Caveats

Shallow routing**only**works for URL changes in the current page. For example, let's assume we have another page called`pages/about.js`, and you run this:

```jsx
router.push('/?counter=10', '/about?counter=10', { shallow: true })

```

Since that's a new page, it'll unload the current page, load the new one and wait for data fetching even though we asked to do shallow routing.

When shallow routing is used with middleware it will not ensure the new page matches the current page like previously done without middleware. This is due to middleware being able to rewrite dynamically and can't be verified client-side without a data fetch which is skipped with shallow, so a shallow route change must always be treated as shallow.