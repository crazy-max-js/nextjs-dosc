# 投入生产

在将Next.js应用程序投入生产之前，这里有一些确保最佳用户体验的建议。

## 在一般情况下

- 尽可能使用[caching](#caching)。
- 确保数据库和后端部署在相同的区域。
- 以尽可能少的JavaScript为目标。
- 延迟加载沉重的JavaScript包，直到需要。
- 确保设置了[logging](#logging)。
- 确保设置了[error handling](#error-handling)。
- 配置[404](/guide/advanced-features/custom-error-page#404-page)(未找到) 和[500](/guide/advanced-features/custom-error-page#500-page)(错误)页面。
- 确保你在[衡量绩效](/guide/advanced-features/measuring-performance).
- 运行[Lighthouse](https://developers.google.com/web/tools/lighthouse)检查性能、最佳实践、可访问性和SEO。为了得到最好的结果，使用Next.js的产品版本，并在浏览器中使用匿名，这样结果就不会受到扩展的影响。
- 回顾[支持的浏览器和特性](/guide/basic-features/supported-browsers-features).
- 使用以下方法提高性能:
- [`next/image`和自动图像优化](/guide/basic-features/image-optimization)
- [自动字体优化](/guide/basic-features/font-optimization)
- [脚本优化](/guide/basic-features/script)
- 改善[加载性能](#loading-performance)

## 缓存

:::details 示例
- [ssr-caching](https://github.com/vercel/next.js/tree/canary/examples/ssr-caching)
:::

缓存提高了响应时间，减少了对外部服务的请求数量。Next.js自动将缓存头添加到从`/_next/static`提供的不可变资产中，包括JavaScript、CSS、静态图像和其他媒体。

```
Cache-Control: public, max-age=31536000, immutable
```

`next.config.js`中设置的`Cache-Control`头文件将在生产中被覆盖，以确保静态资产可以有效地缓存。如果您需要重新验证已经[静态生成](/guide/basic-features/pages#static-generation-recommended)的页面的缓存，您可以通过在页面的[`getStaticProps`](/guide/basic-features/data-fetching/get-static-props)函数中设置`revalidate`来实现。如果你正在使用`next/image`，对于默认的图像优化加载器也有[特定的缓存规则](/guide/basic-features/image-optimization#caching)。

**注意:**当使用`next dev`在本地运行应用程序时，您的头文件将被覆盖，以防止本地缓存。

```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

你也可以在`getServerSideProps`和API Routes中使用缓存头来进行动态响应。例如，使用[`stale-while-revalidate`](https://web.dev/stale-while-revalidate/).

```jsx
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

默认情况下，`Cache-Control`头将根据页面获取数据的方式设置不同。

- 如果页面使用`getServerSideProps`或`getInitialProps`，它将使用`next start`设置的默认`Cache-Control头，以防止无法缓存的响应的意外缓存。如果你想在使用`getServerSideProps`时获得不同的缓存行为，请使用`res.setHeader('Cache-Control', 'value_you_prefer')`在函数内部，如上所示。
- If the page is using`getStaticProps`, it will have a`Cache-Control`header of`s-maxage=REVALIDATE_SECONDS, stale-while-revalidate`, or if`revalidate`isnotused,`s-maxage=31536000, stale-while-revalidate`to cache for the maximum age possible.

> **Note:**Your deployment provider must support caching for dynamic responses. If you are self-hosting, you will need to add this logic yourself using a key/value store like Redis. If you are using Vercel,[Edge Caching works without configuration](https://vercel.com/docs/edge-network/caching?utm_source=next-site&utm_medium=docs&utm_campaign=next-website).

## Reducing JavaScript Size

:::details 示例
- [with-dynamic-import](https://github.com/vercel/next.js/tree/canary/examples/with-dynamic-import)
:::

To reduce the amount of JavaScript sent to the browser, you can use the following tools to understand what is included inside each JavaScript bundle:

- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)- Display the size of the imported package inside VSCode.
- [Package Phobia](https://packagephobia.com/)- Find the cost of adding a new dev dependency to your project.
- [Bundle Phobia](https://bundlephobia.com/)- Analyze how much a dependency can increase bundle sizes.
- [Webpack Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)– Visualize the size of webpack output files with an interactive, zoomable treemap.
- [bundlejs](https://bundlejs.com/)- An online tool to quickly bundle & minify your projects, while viewing the compressed gzip/brotli bundle size, all running locally on your browser.

Each file inside your`pages/`directory will automatically be code split into its own JavaScript bundle during`next build`. You can also use[Dynamic Imports](/docs/guide/advanced-features/dynamic-import)to lazy-load components and libraries. For example, you might want to defer loading your modal code until a user clicks the open button.

## Logging

:::details 示例
- [with-logging](https://github.com/Logflare/next-pino-logflare-logging-example)
:::

Since Next.js runs on both the client and server, there are multiple forms of logging supported:

- `console.log`in the browser
- `stdout`on the server

If you want a structured logging package, we recommend[Pino](https://www.npmjs.com/package/pino). If you're using Vercel, there are[pre-built logging integrations](https://vercel.com/integrations#logging?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)compatible with Next.js.

## Error Handling

:::details 示例
- [with-sentry](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)
:::

When an unhandled exception occurs, you can control the experience for your users with the[500 page](/docs/guide/advanced-features/custom-error-page#500-page). We recommend customizing this to your brand instead of the default Next.js theme.

You can also log and track exceptions with a tool like Sentry.[This example](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)shows how to catch & report errors on both the client and server-side, using the Sentry SDK for Next.js. There's also a[Sentry integration for Vercel](https://vercel.com/integrations/sentry?utm_source=next-site&utm_medium=docs&utm_campaign=next-website).

## Loading Performance

To improve loading performance, you first need to determine what to measure and how to measure it.[Core Web Vitals](https://vercel.com/blog/core-web-vitals?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)is a good industry standard that is measured using your own web browser. If you are not familiar with the metrics of Core Web Vitals, review this[blog post](https://vercel.com/blog/core-web-vitals?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)and determine which specific metric/s will be your drivers for loading performance. Ideally, you would want to measure the loading performance in the following environments:

- In the lab, using your own computer or a simulator.
- In the field, using real-world data from actual visitors.
- Local, using a test that runs on your device.
- Remote, using a test that runs in the cloud.

Once you are able to measure the loading performance, use the following strategies to improve it iteratively so that you apply one strategy, measure the new performance and continue tweaking until you do not see much improvement. Then, you can move on to the next strategy.

- Use caching regions that are close to the regions where your database or API is deployed.
- As described in the[caching](#caching)section, use a`stale-while-revalidate`value that will not overload your backend.
- Use[Incremental Static Regeneration](/docs/guide/basic-features/data-fetching#incremental-static-regeneration)to reduce the number of requests to your backend.
- Remove unused JavaScript. Review this[blog post](https://calibreapp.com/blog/bundle-size-optimization)to understand what Core Web Vitals metrics bundle size affects and what strategies you can use to reduce it, such as:
- Setting up your Code Editor to view import costs and sizes
- Finding alternative smaller packages- Dynamically loading components and dependencies
- For more in-depth information, review this[guide](https://papyrus.dev/@PapyrusBlog/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score)and this[performance checklist](https://dev.to/endymion1818/nextjs-performance-checklist-5gjb).

## Related

For more information on what to do next, we recommend the following sections:


