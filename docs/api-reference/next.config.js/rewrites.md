# 重写

:::details 示例
- [Rewrites](https://github.com/vercel/next.js/tree/canary/examples/rewrites)

:::

:::details 示例
Version History
:::

重写允许您将传入请求路径映射到不同的目标路径。

重写充当 URL 代理并掩盖目标路径，使用户看起来没有更改他们在网站上的位置。
相反，[redirects](/docs/api-reference/next.config.js/redirects) 将重新路由到新页面并显示 URL 更改。

要使用重写，您可以使用`next.config.js`中的`rewrites`键：

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}
```

重写应用于客户端路由，`<Link href="/about">` 将在上面的示例中应用重写。

`rewrites` 是一个异步函数，它期望返回一个数组或数组对象（见下文），其中包含具有`source`和`destination`属性的对象：

- `source`:`String`- 是传入请求路径模式。
- `destination`:`String` 是您要路由到的路径。
- `basePath`:`false`or`undefined`- 如果为 false，匹配时将不包含 basePath，只能用于外部重写。
- `locale`:`false`or`undefined`- 匹配时是否不应该包含语言环境。
- `has` 是 [has objects](#header-cookie-and-query-matching) 的数组，具有`type`、`key`和`value`属性。


当`rewrites`函数返回一个数组时，在检查文件系统（页面和`/public`文件）之后和动态路由之前应用重写。当`rewrites`函数返回一个具有特定形状的数组对象时，这种行为可以改变并且更精细地控制，从Next.js的`v10.1`开始：

```js
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/some-page',
          destination: '/somewhere-else',
          has: [{ type: 'query', key: 'overrideMe' }],
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/non-existent',
          destination: '/somewhere-else',
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/:path*',
          destination: `https://my-old-site.com/:path*`,
        },
      ],
    }
  },
}
```

注意：`beforeFiles` 中的重写不会在匹配源后立即检查文件系统/动态路由，它们会继续，直到检查完所有`beforeFiles`。

检查 Next.js 路由的顺序是：

- [headers](/docs/api-reference/next.config.js/headers)are checked/applied
- [redirects](/docs/api-reference/next.config.js/redirects)are checked/applied
- `beforeFiles`rewrites are checked/applied
- static files from the[public directory](/docs/basic-features/static-file-serving),`_next/static`files, and non-dynamic pages are checked/served
- `afterFiles`rewrites are checked/applied, if one of these rewrites is matched we check dynamic routes/static files after each match
- `fallback`rewrites are checked/applied, these are applied before rendering the 404 page and after dynamic routes/all static assets have been checked. If you use[fallback: true/'blocking'](/docs/api-reference/data-fetching/get-static-paths#fallback-true)in`getStaticPaths`, the fallback`rewrites`defined in your`next.config.js`willnotbe run.


## 重写参数

当在重写中使用参数时，如果在 `destination` 中没有使用任何参数，则默认情况下将在查询中传递参数。

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-about/:path*',
        destination: '/about', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}
```

如果在目标中使用了参数，则不会在查询中自动传递任何参数。

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}
```

如果目标中已经使用了一个参数，您仍然可以通过在 `destination` 中指定查询来在查询中手动传递参数。

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:first/:second',
        destination: '/:first?second=:second',
        // Since the :first parameter is used in the destination the :second parameter
        // will not automatically be added in the query although we can manually add it
        // as shown above
      },
    ]
  },
}
```

注意：对于来自[Automatic Static Optimization](/docs/advanced-features/automatic-static-optimization)或[prerendering](/docs/basic-features/data-fetching/get-static-props)参数的静态页面重写将在水合作用后在客户端上解析并在查询中提供。

## 路径匹配

允许路径匹配，例如`/blog/:slug`将匹配`/blog/hello-world`（无嵌套路径）：

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: '/news/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}
```

### 通配符路径匹配

要匹配通配符路径，您可以在参数后使用`*`，例如`/blog/:slug*`将匹配`/blog/a/b/c/d/hello-world`：

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*', // Matched parameters can be used in the destination
      },
    ]
  },
}
```

### 正则表达式路径匹配

要匹配正则表达式路径，您可以将正则表达式括在参数后的括号中，例如`/blog/:slug(\\d{1,})`将匹配`/blog/123`但不匹配`/blog/abc` :

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-blog/:post(\\d{1,})',
        destination: '/blog/:post', // Matched parameters can be used in the destination
      },
    ]
  },
}
```

以下字符`(`,`)`,`{`,`}`,`:`,`*`,`+`,`?`用于正则路径匹配，所以在`source`中使用as非特殊值必须通过在它们之前添加`\\`来转义：

```js
module.exports = {
  async rewrites() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: '/english\\(default\\)/:slug',
        destination: '/en-us/:slug',
      },
    ]
  },
}
```

## 标头、Cookie 和查询匹配

要仅在标头、cookie 或查询值也匹配时才匹配重写，可以使用 `has` 字段。 `source` 和 all`has` 项目都必须匹配才能应用重写。

`has` items 有以下字段：

- `type`:`String`- 必须是`header`、`cookie`、`host` 或`query`。
- `key`:`String`- 所选类型中要匹配的键。
- `value`:`String`or`undefined`- 要检查的值，如果未定义，任何值都将匹配。类似字符串的正则表达式可用于捕获值的特定部分，例如如果值`first-(?<paramName>.*)`用于`first-second`，则`second`将在目标中使用`:paramName`。


```js
module.exports = {
  async rewrites() {
    return [
      // if the header `x-rewrite-me` is present,
      // this rewrite will be applied
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-rewrite-me',
          },
        ],
        destination: '/another-page',
      },
      // if the source, query, and cookie are matched,
      // this rewrite will be applied
      {
        source: '/specific/:path*',
        has: [
          {
            type: 'query',
            key: 'page',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: 'home',
          },
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          },
        ],
        destination: '/:path*/home',
      },
      // if the header `x-authorized` is present and
      // contains a matching value, this rewrite will be applied
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        destination: '/home?authorized=:authorized',
      },
      // if the host is `example.com`,
      // this rewrite will be applied
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'example.com',
          },
        ],
        destination: '/another-page',
      },
    ]
  },
}
```

## 重写到外部 URL
  
:::details 示例
- [Incremental adoption of Next.js](https://github.com/vercel/next.js/tree/canary/examples/custom-routes-proxying)
- [Using Multiple Zones](https://github.com/vercel/next.js/tree/canary/examples/with-zones)

:::

重写允许您重写到外部 url。这对于逐步采用 Next.js 特别有用。以下是将主应用程序的`/blog`路由重定向到外部站点的重写示例。

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com/blog',
      },
      {
        source: '/blog/:slug',
        destination: 'https://example.com/blog/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}
```

如果你使用的是`trailingSlash: true`，你还需要在`source`参数中插入一个斜杠。如果目标服务器也需要一个斜杠，它也应该包含在`destination`参数中。

```js
module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/',
        destination: 'https://example.com/blog/',
      },
      {
        source: '/blog/:path*/',
        destination: 'https://example.com/blog/:path*/',
      },
    ]
  },
}
```

### Next.js 的增量采用

在检查所有 Next.js 路由后，您还可以让 Next.js 回退到代理到现有网站。

这样你就不必在将更多页面迁移到 Next.js 时更改重写配置

```js
module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,
        },
      ],
    }
  },
}
```

请参阅有关增量采用的更多信息[在此处的文档中](/docs/migrating/incremental-adoption)。

### 使用 basePath 支持重写

When leveraging[`basePath`support](/docs/api-reference/next.config.js/basepath)with rewrites each`source`and`destination`is automatically prefixed with the`basePath`unless you add`basePath: false`to the rewrite:

```js
module.exports = {
  basePath: '/docs',

  async rewrites() {
    return [
      {
        source: '/with-basePath', // automatically becomes /docs/with-basePath
        destination: '/another', // automatically becomes /docs/another
      },
      {
        // does not add /docs to /without-basePath since basePath: false is set
        // Note: this can not be used for internal rewrites e.g. `destination: '/another'`
        source: '/without-basePath',
        destination: 'https://example.com',
        basePath: false,
      },
    ]
  },
}
```

### 支持 i18n 重写

当利用 [`i18n`支持](/docs/advanced-features/i18n-routing) 重写每个`source`和`destination`时，会自动添加前缀来处理配置的`locales`，除非您将`locale: false`添加到改写。如果使用了`locale: false`，你必须在`source`和`destination`前加上一个locale才能正确匹配。

```js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        source: '/with-locale', // automatically handles all locales
        destination: '/another', // automatically passes the locale on
      },
      {
        // does not handle locales automatically since locale: false is set
        source: '/nl/with-locale-manual',
        destination: '/nl/another',
        locale: false,
      },
      {
        // this matches '/' since `en` is the defaultLocale
        source: '/en',
        destination: '/en/another',
        locale: false,
      },
      {
        // it's possible to match all locales even when locale: false is set
        source: '/:locale/api-alias/:path*',
        destination: '/api/:path*',
        locale: false,
      },
      {
        // this gets converted to /(en|fr|de)/(.*) so will not match the top-level
        // `/` or `/fr` routes like /:path* would
        source: '/(.*)',
        destination: '/another',
      },
    ]
  },
}
```
