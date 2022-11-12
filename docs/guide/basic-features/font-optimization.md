# 字体优化

[**`@next/font`**](/docs/guide/api-reference/next/font)将自动优化您的字体（包括自定义字体）并删除外部网络请求以提高隐私和性能。

## 概述

`@next/font`包含任何字体文件**内置自动自托管**。 这意味着由于使用了底层的 CSS`size-adjust` 属性，您可以在零布局偏移的情况下以最佳方式加载 Web 字体。

这个新的字体系统还允许您在考虑性能和隐私的情况下方便地使用所有 Google 字体。 CSS 和字体文件在构建时下载，并与您的其余静态资产一起自行托管。**浏览器不会向 Google 发送任何请求。**

## 用法

首先，安装`@next/font`:

```bash
npm install @next/font
```

### 谷歌字体

自动托管任何 Google 字体。字体包含在部署中，并从与您的部署相同的域提供服务。**浏览器不会向 Google 发送任何请求。**

从`@next/font/google`作为函数导入你想使用的字体。 我们推荐使用[**variable fonts**](https://fonts.google.com/variablefonts)以获得最佳性能和灵活性。

在所有页面中使用该字体, 将其添加到`/pages`下的[`_app.js`文件](/docs/guide/advanced-features/custom-app) 如下所示:

```js
// pages/_app.js
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

如果不能使用可变字体，则需要指定粗细：

```js
// pages/_app.js
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

#### 在 `<head>` 中应用字体

你也可以在没有包装器和 className 的情况下使用字体，方法是将它注入到 `<head>` 中，如下所示：

```js
// pages/_app.js
import { Inter } from '@next/font/google'

const inter = Inter()

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
```

#### 单页使用

要在单个页面上使用字体，请将其添加到特定页面，如下所示：

```js
// pages/index.js
import { Inter } from '@next/font/google'

const inter = Inter()

export default function Home() {
  return (
    <div className={inter.className}>
      <p>Hello World</p>
    </div>
  )
}
```

#### 指定一个子集

谷歌字体是自动的[子集](https://fonts.google.com/knowledge/glossary/subsetting)。 这会减小字体文件的大小并提高性能。 您需要定义要预加载的这些子集。 当为 true 时未能指定任何子集[`preload`](/docs/guide/api-reference/next/font#preload)将发出警告。

这可以通过两种方式完成：

- 通过将其添加到函数调用中，以每种字体为基础
```js
// pages/_app.js
const inter = Inter({ subsets: ['latin'] })
```
- 全局用于您的`next.config.js`中的所有字体
```js
// next.config.js
module.exports = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
```
- 如果两者都配置，则使用函数调用中的子集。

查看[字体 API 参考](/docs/api-reference/next/font#nextfontgoogle)更多信息。

### 本地字体

导入`@next/font/local`并指定本地字体文件的`src`。我们建议使用[**variable fonts**](https://fonts.google.com/variablefonts)以获得最佳性能和灵活性。

```js
// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './my-font.woff2' })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

查看[字体 API 参考](/docs/guide/api-reference/next/font#nextfontlocal)更多信息。

## 预加载

当在您站点的页面上调用字体函数时，它不是全局可用的，而是在所有路由上预加载的。 Rather, the font is only preloaded on the related route/s based on the type of file where it is used:

- if it's a[unique page](/docs/guide/basic-features/pages), it is preloaded on the unique route for that page- if it's in the[custom App](/docs/guide/advanced-features/custom-app), it is preloaded on all the routes of the site under`/pages`

## Reusing fonts

Every time you call the`localFont`or Google font function, that font is hosted as one instance in your application. Therefore, if you load the same font function in multiple files, multiple instances of the same font are hosted. In this situation, it is recommended to do the following:

- Call the font loader function in one shared file- Export it as a constant- Import the constant in each file where you would like to use this font




