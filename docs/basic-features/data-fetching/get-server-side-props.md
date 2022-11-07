# getServerSideProps

如果您getServerSideProps从页面导出一个名为（服务器端渲染）的函数，Next.js 将使用getServerSideProps.
```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

>请注意，无论呈现类型如何，任何`props`都将传递给页面组件，并且可以在初始 HTML 中的客户端上查看。这是为了让页面正确补水。确保您不传递任何不应在客户端上可用的敏感信息`props`。

## getServerSideProps 什么时候运行

`getServerSideProps`只在服务器端运行，从不在浏览器上运行。如果页面使用`getServerSideProps`，则：

- 当你直接请求这个页面时，`getServerSideProps`在请求的时候运行，这个页面会和返回的 props 一起预渲染
- 当您在客户端页面转换通过`next/link`或请求此页面时`next/router`，Next.js 向服务器发送 API 请求，服务器运行`getServerSideProps`

`getServerSideProps`返回将用于呈现页面的 JSON。所有这些工作都会由 Next.js 自动处理，所以你不需要做任何额外的事情，只要你`getServerSideProps`定义好了。

您可以使用next-code-elimination 工具来验证 Next.js 从客户端包中消除了什么。

`getServerSideProps`只能从页面导出。您不能从非页面文件中导出它。

请注意，您必须导出为独立函数——如果您添加为页面组件的属性，`getServerSideProps`它将不起作用。`getServerSideProps`

`getServerSideProps`API 参考涵盖了所有可以与`getServerSideProps`.

## 我什么时候应该使用 getServerSideProps

`getServerSideProps`仅当您需要呈现必须在请求时获取其数据的页面时才应使用。这可能是由于数据的性质或请求的属性（例如`authorization`标头或地理位置）造成的。使用的页面将在请求时在服务器端呈现，并且仅在配置了缓存控制标头`getServerSideProps`时才被缓存。

如果您在请求期间不需要渲染数据，那么您应该考虑在客户端或`getStaticProps`.

### getServerSideProps 或 API 路由

当您想从服务器获取数据时，可能很容易使用API 路由`getServerSideProps`，然后从. 这是一种不必要且低效的方法，因为它会由于`getServerSideProps`服务器上运行的 API 路由和 API 路由而导致发出额外的请求。

举个例子。API 路由用于从 CMS 获取一些数据。然后直接从 调用该 API 路由`getServerSideProps`。这会产生额外的调用，从而降低性能。相反，直接将 API 路由中使用的逻辑导入`getServerSideProps`. 这可能意味着直接从内部调用 CMS、数据库或其他 API `getServerSideProps`。

## 在客户端获取数据

如果您的页面包含频繁更新的数据，并且您不需要预先渲染数据，您可以在客户端获取数据。这方面的一个例子是用户特定的数据：

- 首先，立即显示没有数据的页面。页面的某些部分可以使用静态生成进行预渲染。您可以显示缺失数据的加载状态
- 然后，在客户端获取数据并在准备好时显示它

例如，这种方法适用于用户仪表板页面。因为仪表板是私有的、特定于用户的页面，所以 SEO 不相关，并且该页面不需要预渲染。数据经常更新，这需要在请求时获取数据。


## 使用 getServerSideProps 在请求时获取数据

以下示例显示了如何在请求时获取数据并预渲染结果。

```js
function Page({ data }) {
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

export default Page
```

## 使用服务器端渲染 (SSR) 进行缓存

您可以在 getServerSideProps 中使用缓存标头 (`Cache-Control`) 来缓存动态响应。 例如，使用 `stale-while-revalidate`。

```js
// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}
```
Learn more about caching.

## getServerSideProps 是否呈现错误页面

如果内部抛出错误`getServerSideProps`，它将显示该`pages/500.js`文件。查看500 页的文档以了解有关如何创建它的更多信息。在开发过程中，不会使用此文件，而是显示 dev 覆盖。

