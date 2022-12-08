# 部署

恭喜您，您已经准备好将Next.js应用程序部署到生产环境中了。本文档将展示如何使用[Next.js构建API](#nextjs-build-api)部署托管或自托管。

## Next.js Build API

`next build`生成用于生产的应用程序的优化版本。该标准输出包括:

- 使用`getStaticProps`或[自动静态优化](/guide/advanced-features/automatic-static-optimization)的页面的HTML文件
- 用于全局样式或单独作用域样式的CSS文件
- JavaScript用于预渲染来自Next.js服务器的动态内容
- JavaScript在客户端通过React实现交互性

这个输出是在`.next`文件夹中生成的:

- `.next/static/chunks/pages`
- 这个文件夹中的每个JavaScript文件都与同名路由相关。例如，`.next/static/chunks/pages/about.js`将是在应用程序中查看`/about`路由时加载的JavaScript文件
- `.next/static/media`
- 从`next/image`静态导入的图像在这里被散列并复制
- `.next/static/css`
- 应用程序中所有页面的全局CSS文件
- `.next/server/pages`
- T从服务器预呈现的HTML和JavaScript入口点。`.nft.json`当[输出文件跟踪](/guide/advanced-features/output-file-tracing)启用时，将创建文件，并包含依赖于给定页面的所有文件路径。
- `.next/server/chunks`
- 在整个应用程序的多个位置使用的共享JavaScript块
- `.next/cache`
- 来自Next.js服务器的构建缓存和缓存的图像、响应和页面的输出。使用缓存有助于减少构建时间并提高加载图像的性能

里面都是JavaScript代码`.next`已被**编译**，浏览器包已被**缩小**以帮助实现最佳性能并支持[所有现代浏览器](/guide/basic-features/supported-browsers-features).

## 使用Vercel管理Next.js

[Vercel](https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)是零配置部署Next.js应用程序的最快方式。

当部署到Vercel时，平台[自动检测Next.js](https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)，运行`next build`，并为您优化构建输出，包括:

- 如果未更改，则跨部署持久化缓存资产
- [不可变的部署](https://vercel.com/features/previews?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)每次提交都有一个唯一的URL
- [页面](/guide/basic-features/pages)自动静态优化，如果可能-资产(JavaScript, CSS，图像，字体)压缩并从[全球边缘网络](https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)提供服务
- [API路由](/guide/api-routes/introduction)被自动优化为独立的[无服务器函数](https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)，可以无限扩展
- [中间件](/middleware)被自动优化为[边缘函数](https://vercel.com/features/edge-functions?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)，具有零冷启动和立即启动

此外，Vercel还提供了以下特性:

- 使用[Next.js Analytics](https://vercel.com/analytics?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)自动性能监控
- 自动HTTPS和SSL证书
- 自动CI/CD(通过GitHub, GitLab, Bitbucket等)
- 支持[环境变量](https://vercel.com/docs/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)
- 支持[自定义域](https://vercel.com/docs/custom-domains?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)
- 支持[图像优化](/guide/basic-features/image-optimization)与`next/image`
- 通过`git push`实现即时全球部署

[将Next.js应用程序部署到Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world&project-name=hello-world&repository-name=hello-world&utm_source=next-site&utm_medium=docs&utm_campaign=next-website)免费试用。

## 自托管

你可以使用Node.js或Docker自宿主支持所有功能的Next.js。你也可以做一个静态HTML导出，它[有一些限制](/guide/advanced-features/static-html-export)。

### Node.js服务器

Next.js可以部署到任何支持Node.js的托管提供商。例如，[AWS EC2](https://aws.amazon.com/ec2/)或[DigitalOcean Droplet](https://www.digitalocean.com/products/droplets/).

首先，确保你的`package.json`有`"build"`和`"start"`的脚本：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

然后，运行`next build`来构建应用程序。最后，运行`next start`启动Node.js服务器。该服务器支持Next.js的所有功能。

> 如果您正在使用[`next/image`](/guide/basic-features/image-optimization)，请考虑在您的生产环境中通过在项目目录中运行`npm install sharp`来增加`sharp`以获得更好的性能[图像优化](/guide/basic-features/image-optimization)。在Linux平台上，`sharp`可能需要[额外的配置](https://sharp.pixelplumbing.com/install#linux-memory-allocator)来防止过多的内存使用。

### Docker Image

Next.js可以部署到任何支持[Docker](https://www.docker.com/)容器的托管提供商。
当部署到容器编配器如[Kubernetes](https://kubernetes.io/)或[HashiCorp Nomad](https://www.nomadproject.io/)时，或者在任何云提供商的单个节点中运行时，可以使用这种方法。

- 在你的机器上[安装 Docker](https://docs.docker.com/get-docker/)
- 克隆[with-docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker)示例
- 构建容器:`docker build -t nextjs-docker .`
- 运行容器:`docker run -p 3000:3000 nextjs-docker`

如果您需要在多个环境中使用不同的环境变量，请查看我们的[with-docker-multi-env](https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env)示例。

### 静态HTML导出

如果你想做一个静态HTML导出你的Next.js应用程序，遵循我们的[静态HTML导出文档](/guide/advanced-features/static-html-export).

## 其他服务

以下服务支持Next.js`v12+`。下面，您将找到将Next.js部署到每个服务的示例或指南。

### 托管服务器

- [AWS Copilot](https://aws.github.io/copilot-cli/)
- [数字海洋App平台](https://docs.digitalocean.com/tutorials/app-nextjs-deploy/)
- [谷歌云运行](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [Heroku](https://elements.heroku.com/buildpacks/mars/heroku-nextjs)
- [Railway](https://railway.app/new/starters/nextjs-prisma)
- [渲染](https://render.com/docs/deploy-nextjs-app)

> **注意:** 还有一些托管平台允许您使用Dockerfile，如[上面的示例](/deployment#docker-image)所示。

### 静态只

以下服务支持使用[`next export`](/guide/advanced-features/static-html-export).

- [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [Firebase](https://github.com/vercel/next.js/tree/canary/examples/with-firebase-hosting)
- [GitHub页面](https://github.com/vercel/next.js/tree/canary/examples/github-pages)

您还可以手动将[`next export`](/guide/advanced-features/static-html-export)输出部署到任何静态托管提供商，通常是通过您的CI/CD管道，如GitHub Actions, Jenkins, AWS CodeBuild, Circle CI, Azure pipeline等。

### Serverless

- [AWS Serverless](https://github.com/serverless-nextjs/serverless-next.js)
- [Azure静态Web应用程序](https://learn.microsoft.com/en-us/azure/static-web-apps/nextjs)
- [Terraform](https://github.com/milliHQ/terraform-aws-next-js)
- [Netlify](https://docs.netlify.com/integrations/frameworks/next-js)

> **注意:** 不是所有的无服务器提供商都从`next start`开始实现[Next.js Build API](/deployment#nextjs-build-api)。
请与供应商联系，了解支持哪些功能。

## 自动更新

在部署Next.js应用程序时，您希望在不需要重新加载的情况下看到最新版本。

当路由时，Next.js会在后台自动加载应用程序的最新版本。
对于客户端导航，`next/link`将临时用作正常的`<a>`标签。

> **注意:** 如果一个新页面(带有旧版本)已经被`next/link`预取，next .js将使用旧版本。
导航到一个没有预取的页面(并且没有缓存在CDN级别)将加载最新版本。

## 手动安全停机

有时候你可能想要在进程信号上运行一些清理代码，比如`SIGTERM`或`SIGINT`。

你可以通过设置env变量`NEXT_MANUAL_SIG_HANDLE`为`true`然后在你的`_document.js`文件中为该信号注册一个处理程序。

```js
// pages/_document.js

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM: ', 'cleaning up')
    process.exit(0)
  })

  process.on('SIGINT', () => {
    console.log('Received SIGINT: ', 'cleaning up')
    process.exit(0)
  })
}
```

## 联系

关于接下来要做的更多信息，我们推荐以下部分:


