# 数据获取概述

::: details 例子
- [WordPress 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)（[演示](https://next-blog-wordpress.vercel.app/)）
- [使用降价文件的博客启动器](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)（[演示](https://next-blog-starter.vercel.app/)）
- [DatoCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms)（[演示](https://next-blog-datocms.vercel.app/)）
- [TakeShape 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape)（[演示](https://next-blog-takeshape.vercel.app/)）
- [理智示例](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity)（[演示](https://next-blog-sanity.vercel.app/)）
- [棱镜示例](https://github.com/vercel/next.js/tree/canary/examples/cms-prismic)（[演示](https://next-blog-prismic.vercel.app/)）
- [内容丰富的示例](https://github.com/vercel/next.js/tree/canary/examples/cms-contentful)（[演示](https://next-blog-contentful.vercel.app/)）
- [Strapi 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-strapi)（[演示](https://next-blog-strapi.vercel.app/)）
- [Prepr 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-prepr)（[演示](https://next-blog-prepr.vercel.app/)）
- [敏捷 CMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-agilitycms)（[演示](https://next-blog-agilitycms.vercel.app/)）
- [宇宙示例](https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic)（[演示](https://next-blog-cosmic.vercel.app/)）
- [ButterCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-buttercms)（[演示](https://next-blog-buttercms.vercel.app/)）
- [Storyblok 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-storyblok)（[演示](https://next-blog-storyblok.vercel.app/)）
- [GraphCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-graphcms)（[演示](https://next-blog-graphcms.vercel.app/)）
- [内容示例](https://github.com/vercel/next.js/tree/canary/examples/cms-kontent)（[演示](https://next-blog-kontent.vercel.app/)）
- [Builder.io 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-builder-io)（[演示](https://cms-builder-io.vercel.app/)）
- [TinaCMS 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-tina)（[演示](https://cms-tina-example.vercel.app/)）
- [静态推文](https://static-tweet.vercel.app/)（[演示](https://static-tweet.vercel.app/)）
- [Enterspeed 示例](https://github.com/vercel/next.js/tree/canary/examples/cms-enterspeed)（[演示](https://next-blog-demo.enterspeed.com/)）
:::

> **注意**：Next.js 13 引入了 `app/` 目录（测试版）。 这个新目录支持在组件级别使用新的 React `use`钩子和扩展的 `fetch` Web API 获取同位数据。
> 
> 了解有关逐步采用`app/`的更多信息。

Next.js 中的数据获取允许您根据应用程序的用例以不同的方式呈现您的内容。其中包括使用**Server-side Rendering**或**Static Generation**进行预渲染，以及使用**Incremental Static Regeneration**在运行时更新或创建内容。

- [SSR：服务端渲染]()
- [SSG：静态站点生成]()
- [CSR：客户端渲染]()
- [动态路由]()
- [ISR：增量静态再生]()