# Static HTML Export

:::details 示例
- [Static Export](https://github.com/vercel/next.js/tree/canary/examples/with-static-export)
:::

`next export`allows you to export your Next.js application to static HTML, which can be run standalone without the need of a Node.js server. It is recommended to only use`next export`if you don't need any of the[unsupported features](#unsupported-features)requiring a server.

If you're looking to build a hybrid site where onlysomepages are prerendered to static HTML, Next.js already does that automatically. Learn more about[Automatic Static Optimization](/docs/guide/advanced-features/automatic-static-optimization)and[Incremental Static Regeneration](/docs/guide/basic-features/data-fetching/incremental-static-regeneration).

## next export

Update your build script in`package.json`to use`next export`:

```json
"scripts": {
  "build": "next build && next export"
}

```

Running`npm run build`will generate an`out`directory.

`next export`builds an HTML version of your app. During`next build`,[`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props)and[`getStaticPaths`](/docs/guide/basic-features/data-fetching/get-static-paths)will generate an HTML file for each page in your`pages`directory (or more for[dynamic routes](/docs/guide/routing/dynamic-routes)). Then,`next export`will copy the already exported files into the correct directory.`getInitialProps`will generate the HTML files during`next export`instead of`next build`.

For more advanced scenarios, you can define a parameter called[`exportPathMap`](/docs/guide/api-reference/next.config.js/exportPathMap)in your[`next.config.js`](/docs/guide/api-reference/next.config.js/introduction)file to configure exactly which pages will be generated.

> **Warning**: Using`exportPathMap`for defining routes with any`getStaticPaths`powered page is now ignored and gets overridden. We recommend not to use them together.

## Supported Features

The majority of core Next.js features needed to build a static site are supported, including:

- [Dynamic Routes when using`getStaticPaths`](/docs/guide/routing/dynamic-routes)- Prefetching with`next/link`- Preloading JavaScript- [Dynamic Imports](/docs/guide/advanced-features/dynamic-import)- Any styling options (e.g. CSS Modules, styled-jsx)- [Client-side data fetching](/docs/guide/basic-features/data-fetching/client-side)- [`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props)- [`getStaticPaths`](/docs/guide/basic-features/data-fetching/get-static-paths)- [Image Optimization](/docs/guide/basic-features/image-optimization)using a[custom loader](/docs/guide/basic-features/image-optimization#loaders)

## Unsupported Features

Features that require a Node.js server, or dynamic logic that cannot be computed during the build process, are not supported:

- [Image Optimization](/docs/guide/basic-features/image-optimization)(default loader)- [Internationalized Routing](/docs/guide/advanced-features/i18n-routing)- [API Routes](/docs/guide/api-routes/introduction)- [Rewrites](/docs/guide/api-reference/next.config.js/rewrites)- [Redirects](/docs/guide/api-reference/next.config.js/redirects)- [Headers](/docs/guide/api-reference/next.config.js/headers)- [Middleware](/docs/middleware)- [Incremental Static Regeneration](/docs/guide/basic-features/data-fetching/incremental-static-regeneration)- [`fallback: true`](/docs/guide/api-reference/data-fetching/get-static-paths#fallback-true)- [`getServerSideProps`](/docs/guide/basic-features/data-fetching/get-server-side-props)

### getInitialProps

It's possible to use the[`getInitialProps`](/docs/guide/api-reference/data-fetching/get-initial-props)API instead of`getStaticProps`, but it comes with a few caveats:

- `getInitialProps`cannot be used alongside`getStaticProps`or`getStaticPaths`on any given page. If you have dynamic routes, instead of using`getStaticPaths`you'll need to configure the[`exportPathMap`](/docs/guide/api-reference/next.config.js/exportPathMap)parameter in your[`next.config.js`](/docs/guide/api-reference/next.config.js/introduction)file to let the exporter know which HTML files it should output.- When`getInitialProps`is called during export, the`req`and`res`fields of its[`context`](/docs/guide/api-reference/data-fetching/get-initial-props#context-object)parameter will be empty objects, since during export there is no server running.- `getInitialProps`**will be called on every client-side navigation**, if you'd like to only fetch data at build-time, switch to`getStaticProps`.- `getInitialProps`should fetch from an API and cannot use Node.js-specific libraries or the file system like`getStaticProps`can.

We recommend migrating towards`getStaticProps`over`getInitialProps`whenever possible.
