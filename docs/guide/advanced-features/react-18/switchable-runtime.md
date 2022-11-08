# Edge and Node.js Runtimes

Next.js has two**server runtimes**where you can render parts of your application code: the**Node.js Runtime**and the[**Edge Runtime**](/docs/guide/api-reference/edge-runtime). Depending on your deployment infrastructure, both runtimes support streaming.

By default, Next.js uses the Node.js runtime.[Middleware](/docs/guide/advanced-features/middleware)and[Edge API Routes](/docs/guide/api-routes/edge-api-routes)use the Edge runtime.

## Global Runtime Option

To configure the runtime for your whole application, you can set the experimental option`runtime`in your`next.config.js`file:

```js
// next.config.js
module.exports = {
  experimental: {
    runtime: 'experimental-edge', // 'node.js' (default) | experimental-edge
  },
}

```

You can detect which runtime you're using by looking at the`process.env.NEXT_RUNTIME`Environment Variable during runtime, and examining the`options.nextRuntime`variable during compilation.

## Page Runtime Option

On each page, you can optionally export a`runtime`config set to either`'nodejs'`or`'experimental-edge'`:

```jsx
// pages/index.js
export default function Index () { ... }

export function getServerSideProps() { ... }

export const config = {
  runtime: 'experimental-edge',
}

```

When both the per-page runtime and global runtime are set, the per-page runtime overrides the global runtime. If the per-page runtime isnotset, the global runtime option will be used.

## Runtime Differences



Next.js' default runtime configuration is good for most use cases, but there’re still many reasons to change to one runtime over the other one.

For example, for API routes that rely on native Node.js APIs, they need to run with the Node.js Runtime. However, if an API only uses something like cookie-based authentication, using Middleware and the Edge Runtime will be a better choice due to its lower latency as well as better scalability.

## Edge API Routes

[Edge API Routes](/docs/guide/api-routes/edge-api-routes)enable you to build high performance APIs with Next.js using the Edge Runtime.

```typescript
export const config = {
  runtime: 'experimental-edge',
}

export default (req) => new Response('Hello world!')

```

## Related






