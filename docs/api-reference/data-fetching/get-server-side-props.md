# getServerSideProps

:::details 示例
Version History
:::

> **Note**: Next.js 13 introduces the`app/`directory (beta). This new directory has support for[colocated data fetching](https://beta.nextjs.org/docs/data-fetching/fundamentals)at the component level, using the new React`use`hook and an extended`fetch`Web API.[Learn more about incrementally adopting`app/`](https://beta.nextjs.org/docs/upgrade-guide).

When exporting a function called`getServerSideProps`(Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by`getServerSideProps`. This is useful if you want to fetch data that changes often, and have the page update to show the most current data.

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

```

You can import modules in top-level scope for use in`getServerSideProps`. Imports used will**not be bundled for the client-side**. This means you can write**server-side code directly in`getServerSideProps`**, including fetching data from your database.

## Context parameter

The`context`parameter is an object containing the following keys:

- `params`: If this page uses a[dynamic route](/docs/guide/routing/dynamic-routes),`params`contains the route parameters. If the page name is`[id].js`, then`params`will look like`{ id: ... }`.- `req`:[The`HTTP`IncomingMessage object](https://nodejs.org/api/http.html#http_class_http_incomingmessage), with an additional`cookies`prop, which is an object with string keys mapping to string values of cookies.- `res`:[The`HTTP`response object](https://nodejs.org/api/http.html#http_class_http_serverresponse).- `query`: An object representing the query string, including dynamic route parameters.- `preview`:`preview`is`true`if the page is in the[Preview Mode](/docs/guide/advanced-features/preview-mode)and`false`otherwise.- `previewData`: The[preview](/docs/guide/advanced-features/preview-mode)data set by`setPreviewData`.- `resolvedUrl`: A normalized version of the request`URL`that strips the`_next/data`prefix for client transitions and includes original query values.- `locale`contains the active locale (if enabled).- `locales`contains all supported locales (if enabled).- `defaultLocale`contains the configured default locale (if enabled).

## getServerSideProps return values

The`getServerSideProps`function should return an object with**any one of the following**properties:

### props

The`props`object is a key-value pair, where each value is received by the page component. It should be a[serializable object](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)so that any props passed, could be serialized with[`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```jsx
export async function getServerSideProps(context) {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  }
}

```

### notFound

The`notFound`boolean allows the page to return a`404`status and[404 Page](/docs/guide/advanced-features/custom-error-page#404-page). With`notFound: true`, the page will return a`404`even if there was a successfully generated page before. This is meant to support use cases like user-generated content getting removed by its author.

```js
export async function getServerSideProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

```

### redirect

The`redirect`object allows redirecting to internal and external resources. It should match the shape of`{ destination: string, permanent: boolean }`. In some rare cases, you might need to assign a custom status code for older`HTTP`clients to properly redirect. In these cases, you can use the`statusCode`property instead of the`permanent`property, but not both.

```js
export async function getServerSideProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

```

### getServerSideProps with TypeScript

The type of`getServerSideProps`can be specified using`GetServerSideProps`from`next`:

```ts
import { GetServerSideProps } from 'next'

type Data = { ... }

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  const res = await fetch('https://.../data')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

```

If you want to get inferred typings for your props, you can use`InferGetServerSidePropsType<typeof getServerSideProps>`:

```tsx
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

type Data = { ... }

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async () => {
  const res = await fetch('https://.../data')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // will resolve data to type Data
}

export default Page

```

Implicit typing for`getServerSideProps`will also work properly:

```tsx
import { InferGetServerSidePropsType } from 'next'

type Data = { ... }

export const getServerSideProps = async () => {
  const res = await fetch('https://.../data')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // will resolve data to type Data
}

export default Page

```

## Related

For more information on what to do next, we recommend the following sections:

