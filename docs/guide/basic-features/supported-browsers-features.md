# 支持的浏览器和特性

Next.js支持**现代浏览器**零配置。

- Chrome 64+
- Edge 79+
- Firefox 67+
- Opera 51+
- Safari 12+

## Browserslist

如果你想针对特定的浏览器或功能， Next.js 支持[Browserslist](https://browsersl.ist)配置。

## Polyfills

我们注入[广泛使用的polyfills](https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-nomodule/src/index.js)，包括:

- [**fetch()**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Replacing:`whatwg-fetch`and`unfetch`.
- [**URL**](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- Replacing: the[`url`package (Node.js API)](https://nodejs.org/api/url.html).
- [**Object.assign()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- Replacing:`object-assign`,`object.assign`, and`core-js/object/assign`.

如果您的任何依赖项包含这些多边形，它们将自动从生产构建中删除，以避免重复。

此外，为了减少包的大小，Next.js将只为需要它们的浏览器加载这些多边形。全球大部分的网络流量都不会下载这些内容。

### 自定义Polyfills

如果你自己的代码或任何外部npm依赖需要目标浏览器(如IE 11)不支持的特性，你需要自己添加多边形。

在这种情况下，您应该为您的[自定义`<App>`](/docs/guide/advanced-features/custom-app)或单个组件中需要的**特定的多边形**添加顶级导入。

## JavaScript语言特性

Next.js允许您开箱即用最新的JavaScript特性。除了[ES6特性](https://github.com/lukehoban/es6features), Next.js还支持:

- [Async/await](https://github.com/tc39/ecmascript-asyncawait)(ES2017)
- [对象Rest/Spread属性](https://github.com/tc39/proposal-object-rest-spread)(ES2018)
- [动态`import()`](https://github.com/tc39/proposal-dynamic-import)(ES2020)
- [可选链](https://github.com/tc39/proposal-optional-chaining)(ES2020
- [Nullish合并](https://github.com/tc39/proposal-nullish-coalescing)(ES2020)
- [类字段](https://github.com/tc39/proposal-class-fields)和[静态属性](https://github.com/tc39/proposal-static-class-features)(第3阶段提案的一部分)和更多!



### 服务器端Polyfills

除了客户端的`fetch()`之外，Next.js还在Node.js环境中填充`fetch()`。你可以在你的服务器代码中使用`fetch()`(如`getStaticProps`/`getServerSideProps`) 而不使用`isomorphic-unfetch`或`node-fetch`之类的填充。

### TypeScript特性

Next.js内置TypeScript支持。[点击这里了解更多](/docs/guide/basic-features/typescript).

### 自定义Babel配置(高级)

您可以自定义babel配置。[点击这里了解更多](/docs/guide/advanced-features/customizing-babel-config).
