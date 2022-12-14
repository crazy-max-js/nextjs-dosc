# next.config.js

对于 Next.js 的自定义高级配置，您可以在项目目录的根目录（在 package.json 旁边）创建一个`next.config.js`或`next.config.mjs`文件。

`next.config.js` 是一个常规的 Node.js 模块，而不是 JSON 文件。它被 Next.js 服务器和构建阶段使用，它不包含在浏览器构建中。

看看下面的`next.config.js`示例：

```js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig
```

如果你需要[ECMAScript 模块](https://nodejs.org/api/esm.html)，你可以使用`next.config.mjs`：

```js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

export default nextConfig
```

您还可以使用一个函数：

```js
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  return nextConfig
}
```

从 Next.js 12.1.0 开始，您可以使用异步函数：

```js
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  return nextConfig
}
```

`phase` 是加载配置的当前上下文。
您可以看到[可用阶段](https://github.com/vercel/next.js/blob/5e6b008b561caf2710ab7be63320a3d549474a5b/packages/next/shared/lib/constants.ts#L19-L23)。
阶段可以从`next/constants`导入：

```js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    /* config options for all phases except development here */
  }
}
```

注释行是您可以放置`next.config.js` 允许的配置的地方，这些配置是[在此文件中定义的](https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L158).

但是，不需要任何配置，也没有必要了解每个配置的作用。相反，在本节中搜索您需要启用或修改的功能，它们会告诉您该怎么做。

> 避免使用目标 Node.js 版本中不可用的新 JavaScript 功能。`next.config.js` 不会被 Webpack、Babel 或 TypeScript 解析。
