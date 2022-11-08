# 布局
>注意：Next.js 13 引入了app/目录（beta）。这个新目录支持布局、嵌套路由，并默认使用服务器组件。在内部app/，您可以在布局中为整个应用程序获取数据，包括支持更精细的嵌套布局（使用并置数据获取）。
>
> 了解有关逐步采用app/的更多信息。

React 模型允许我们将一个页面解构为一系列组件。许多这些组件经常在页面之间重用。例如，您可能在每个页面上都有相同的导航栏和页脚。

```js
// components/layout.js

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

## 例子

### 使用自定义应用程序的单一共享布局

如果您的整个应用程序只有一个布局，您可以创建一个自定义应用程序并使用该布局包装您的应用程序。由于<Layout />组件在更改页面时被重用，其组件状态将被保留（例如输入值）。

```js
// pages/_app.js

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

### 每页布局

如果您需要多个布局，您可以getLayout向页面添加一个属性，允许您为布局返回一个 React 组件。这允许您在每页的基础上定义布局。由于我们要返回一个函数，如果需要，我们可以有复杂的嵌套布局。

```js
// pages/index.js

import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

export default function Page() {
  return {
    /** Your content */
  }
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
```

```js
// pages/_app.js

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
```

在页面之间导航时，我们希望保持页面状态（输入值、滚动位置等）以获得单页应用程序 (SPA) 体验。

这种布局模式支持状态持久化，因为 React 组件树在页面转换之间维护。通过组件树，React 可以了解哪些元素已更改以保留状态。

> 注意：这个过程称为和解，这是 React 了解哪些元素已更改的方式。

## 使用TypeScript

使用 TypeScript 时，您必须首先为您的页面创建一个包含getLayout函数的新类型。然后，您必须为您创建一个新类型，AppProps它会覆盖该Component属性以使用先前创建的类型。

```tsx
// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page
```

```tsx
// pages/_app.tsx

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
```

## 数据获取

在您的布局中，您可以使用SWRuseEffect之类的库在客户端获取数据。因为这个文件不是Page，所以你不能使用or当前。getStaticPropsgetServerSideProps

```js
// components/layout.js

import useSWR from 'swr'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  const { data, error } = useSWR('/api/navigation', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```




