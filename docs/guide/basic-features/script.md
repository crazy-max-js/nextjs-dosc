# 优化脚本

:::details 示例
- [Script Component](https://github.com/vercel/next.js/tree/canary/examples/script-component)- [Google Tag Manager](https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager)- [Google Analytics](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)- [Facebook Pixel](https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel)- [Clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)- [Segment Analytics](https://github.com/vercel/next.js/tree/canary/examples/with-segment-analytics)
:::

**脚本组件**,[`next/script`](/docs/guide/api-reference/next/script)，允许你在Next.js应用程序的任何地方加载第三方脚本。它是 HTML`<script>`元素的扩展，允许您根据用例在多种加载策略之间进行选择。

## 概述

网站通常使用第三方脚本来添加分析、广告、客户支持小部件和同意管理等功能。然而，这可能会带来影响用户和开发者体验的问题:

- 一些第三方脚本会降低加载性能并降低用户体验，特别是当它们阻止页面内容显示时。
- 开发人员常常不确定在不影响页面性能的情况下在应用程序中加载第三方脚本的位置和方式。

浏览器加载并执行`<script>`元素的位置顺序和`async`和`defer`属性的使用。然而，使用本机`<script>`元素带来了一些挑战:

- 随着应用程序的规模和复杂性的增长，管理第三方脚本的加载顺序变得越来越困难。
- [流媒体和悬念](https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense)提升页面性能呈现和补水尽快新内容,但`<script>`如果没有额外的工作，属性(如`defer`)是不兼容的。

Script组件通过提供用于加载第三方脚本的声明性API来解决这些问题。它提供了一组内置的加载策略，可用于优化支持流的脚本的加载顺序。Script组件提供的每一种策略都使用React和Web api的最佳组合，以确保在对页面性能影响最小的情况下加载脚本。

## 用法

首先，导入[`next/script`](/docs/guide/api-reference/next/script)组件:

```jsx
import Script from 'next/script'
```

### 页面的脚本

要在单个路由中加载第三方脚本，请导入`next/script`并将脚本直接包含在页面组件中:

```jsx
import Script from 'next/script'

export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```

只有在浏览器上加载这个特定页面时，才会获取并执行脚本。

### 应用程序的脚本

为所有路由加载第三方脚本，导入`next/script`并直接将脚本包含在`pages/_app.js`中:

```jsx
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://example.com/script.js" />
      <Component {...pageProps} />
    </>
  )
}
```

当应用程序中的任何路由被访问时，该脚本将加载并执行。Next.js将确保脚本将**只加载一次**，即使用户在多个页面之间导航。

> **注意**:很少需要为应用程序的每个页面加载第三方脚本。我们建议只在特定的页面中包含第三方脚本，以尽量减少对性能的不必要影响。

### 策略

虽然`next/script`的默认行为允许你在任何页面加载第三方脚本，你可以通过使用`strategy`属性来微调它的加载行为:

- `beforeInteractive`: 在任何Next.js代码和任何页面水合作用发生之前加载脚本。
- `afterInteractive`: (**默认**)在页面上发生一些水合作用之后加载脚本。
- `lazyOnload`: 稍后在浏览器空闲时加载脚本。
- `worker`: (实验) 在web worker中加载脚本。

参考[`next/script`](/docs/guide/api-reference/next/script#strategy)API参考文档，了解更多关于每种策略及其用例的信息。

> **注意**:一旦`next/script`组件被浏览器加载，它将留在DOM中，客户端导航不会重新执行脚本。

### 将脚本卸载到Web Worker(实验性)

> **注意:**`worker`策略还不稳定，不能与[`app/`](https://beta.nextjs.org/docs/routing/defining-routes)目录一起工作。慎用。

使用`worker`策略的脚本通过[Partytown](https://partytown.builder.io/)在web worker中卸载并执行。这可以通过将主线程专门用于应用程序代码的其余部分来提高站点的性能。

此策略仍处于实验阶段，只能在`next.config.js`中启用`nextScriptWorkers`标志时使用:

```js
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
}
```

然后，运行`next`(通常是`npm run dev`或`yarn dev`) ， next .js将指导你安装所需的包来完成设置:

```bash
npm run dev

# You'll see instructions like these:
#
# Please install Partytown by running:
#
#         npm install @builder.io/partytown
#
# ...
```

一旦设置完成，定义`strategy="worker"`将自动在应用程序中实例化Partytown，并将脚本卸载给web worker。

```jsx
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  )
}
```

在web worker中加载第三方脚本时，需要考虑很多权衡。有关更多信息，请参阅Partytown的[tradeoffs](https://partytown.builder.io/trade-offs)文档。

### 内联脚本

Script组件也支持内联脚本，或者不是从外部文件加载的脚本。它们可以通过将JavaScript放在花括号中来编写:

```jsx
<Script id="show-banner">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
```

或者使用`dangerouslySetInnerHTML`属性:

```jsx
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `document.getElementById('banner').classList.remove('hidden')`,
  }}
/>
```

> **注意**: 必须为内联脚本分配一个`id`属性，以便Next.js跟踪和优化脚本。

### 执行附加代码

事件处理程序可以与Script组件一起使用，在特定事件发生后执行额外的代码:

- `onLoad`:在脚本完成加载后执行代码。
- `onReady`:在脚本完成加载后和每次挂载组件时执行代码。
- `onError`:如果脚本加载失败，则执行代码。

```jsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
    </>
  )
}
```

参考[`next/script`](/docs/guide/api-reference/next/script#onload)API参考，了解关于每个事件处理程序的更多信息并查看示例。

### 附加属性

有许多DOM属性可以分配给`<script>`元素没有被脚本组件使用，像[`nonce`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce)或[自定义数据属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)。包含任何附加属性将自动转发到最终优化的`<script>`元素，该元素包含在HTML中。

```jsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        id="example-script"
        nonce="XUENAJFW"
        data-test="script"
      />
    </>
  )
}
```


