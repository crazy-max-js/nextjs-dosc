# Frequently Asked Questions

:::details 示例
Is Next.js production ready?Yes! Next.js is used by many of the top websites in the world. See the[Showcase](/showcase)for more info.
:::

:::details 示例
How do I fetch data in Next.js?Next.js provides a variety of methods depending on your use case. You can use:- Client-side data fetching: Fetch data with[useEffect](/docs/guide/basic-features/data-fetching/client-side#client-side-data-fetching-with-useeffect)or[SWR](/docs/guide/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr)inside your React components- Server-side rendering with[getServerSideProps](/docs/guide/basic-features/data-fetching/get-server-side-props)- Static-site generation with[getStaticProps](/docs/guide/basic-features/data-fetching/get-static-props)- Incremental Static Regeneration by[adding the `revalidate` prop to getStaticProps](/docs/guide/basic-features/data-fetching/incremental-static-regeneration)To learn more about data fetching, visit our[data fetching documentation](/docs/guide/basic-features/data-fetching/overview).
:::

:::details 示例
Why does Next.js have its own Router?Next.js includes a built-in router for a few reasons:- It uses a file-system based router which reduces configuration- It supports shallow routing which allows you to change the URL without running data fetching methods- Routes are always lazy-loadableIf you're migrating from React Router, see the[migration documentation](/docs/guide/migrating/from-react-router).
:::

:::details 示例
Can I use Next.js with my favorite JavaScript library?Yes! We have hundreds of examples in our[examples directory](https://github.com/vercel/next.js/tree/canary/examples).
:::

:::details 示例
Can I use Next.js with GraphQL?Yes! Here's an[example with Apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo)and an[example API Route with GraphQL](https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql).
:::

:::details 示例
Can I use Next.js with Redux?Yes! Here's an[example with Redux](https://github.com/vercel/next.js/tree/canary/examples/with-redux)and an[example with thunk](https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk).
:::

:::details 示例
Can I make a Next.js Progressive Web App (PWA)?Yes! Here's our[Next.js PWA Example](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app).
:::

:::details 示例
Can I use a CDN for static assets?Yes! When you deploy your Next.js application to[Vercel](https://vercel.com), your static assets are automatically detected and served by the Edge Network. If you self-host Next.js, you can learn how to manually configure the asset prefix[here](/docs/guide/api-reference/next.config.js/cdn-support-with-asset-prefix).
:::

:::details 示例
How can I change the internal webpack config?In most cases, no manual webpack configuration is necessary since Next.js automatically configures webpack. For advanced cases where more control is needed, refer to the[custom webpack config documentation](/docs/guide/api-reference/next.config.js/custom-webpack-config).
:::

:::details 示例
What is Next.js inspired by?Many of the goals we set out to accomplish were the ones listed in The[7 principles of Rich Web Applications](https://rauchg.com/2014/7-principles-of-rich-web-applications)by Guillermo Rauch.The ease-of-use of PHP is a great inspiration. We feel Next.js is a suitable replacement for many scenarios where you would otherwise use PHP to output HTML.Unlike PHP, we benefit from the ES6 module system and every page exports a component or function that can be easily imported for lazy evaluation or testing.As we were researching options for server-rendering React that didn’t involve a large number of steps, we came across[react-page](https://github.com/facebookarchive/react-page)(now deprecated), a similar approach to Next.js by the creator of React Jordan Walke.
:::
