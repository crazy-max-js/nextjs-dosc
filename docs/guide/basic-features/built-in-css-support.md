# 内置 CSS 支持

:::detail 例子
- [基本 CSS 示例](https://github.com/vercel/next.js/tree/canary/examples/basic-css)
- [使用Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)
:::

Next.js 允许您从 JavaScript 文件导入 CSS 文件。这是可能的，因为 Next.js 扩展了importJavaScript 之外的概念。

## 添加全局样式表

要将样式表添加到您的应用程序，请在pages/_app.js.

例如，考虑以下名为 的样式表styles.css：

```css
body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

如果尚未存在，请创建一个pages/_app.js文件。然后，import文件styles.css。

```jsx
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

这些样式 ( styles.css) 将应用于应用程序中的所有页面和组件。由于样式表的全局性，为了避免冲突，您只能将它们导入到pages/_app.js.

在开发中，以这种方式表达样式表允许您在编辑样式时热重新加载它们——这意味着您可以保持应用程序状态。

在生产环境中，所有 CSS 文件将自动连接成一个.css压缩文件。

### 从导入样式node_modules

从 Next.js 9.5.4node_modules开始，允许在应用程序的任何位置导入 CSS 文件。

对于全局样式表，如bootstrapor nprogress，您应该将文件导入pages/_app.js. 例如：

```jsx
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

如需导入第三方组件所需的 CSS，您可以在您的组件中执行此操作。例如：

```jsx
// components/ExampleDialog.js
import { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

function ExampleDialog(props) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}
```

## 添加组件级 CSS

Next.js 支持使用文件命名约定的CSS 模块。[name].module.css

CSS 模块通过自动创建唯一的类名来本地化 CSS。这允许您在不同的文件中使用相同的 CSS 类名，而不必担心冲突。

这种行为使 CSS 模块成为包含组件级 CSS 的理想方式。CSS 模块文件可以在您的应用程序的任何地方导入。

例如，考虑文件夹Button中的可重用组件：components/

首先，components/Button.module.css使用以下内容创建：

```css
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
    color: white;
    background-color: red;
}
```

然后，创建components/Button.js、导入和使用上述 CSS 文件：

```jsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```

CSS 模块是一项可选功能，仅对.module.css扩展名为. <link>仍然支持常规样式表和全局 CSS 文件。

在生产中，所有 CSS 模块文件将自动连接成许多缩小和代码分割的 .css文件。这些.css文件代表应用程序中的热执行路径，确保为应用程序加载最少量的 CSS 以进行绘制。

## Sass支持

Next.js 允许你使用.scss和.sass扩展来导入 Sass。.module.scss你可以通过 CSS 模块和or.module.sass扩展来使用组件级 Sass 。

在您可以使用 Next.js 的内置 Sass 支持之前，请务必安装sass：

```shell
npm install --save-dev sass
```

Sass 支持与上面详述的内置 CSS 支持具有相同的好处和限制。

> 注意：Sass 支持两种不同的语法，每种都有自己的扩展。.scss扩展要求您使用SCSS 语法，而扩展.sass要求您使用缩进语法（“Sass”）。
>
> 如果您不确定要选择哪个，请从.scss作为 CSS 超集的扩展开始，并且不需要您学习缩进语法（“Sass”）。


### 自定义 Sass 选项

如果你想配置 Sass 编译器，你可以使用sassOptionsin来完成next.config.js。

例如添加includePaths：

```js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

### Sass 变量

Next.js 支持从 CSS 模块文件导出的 Sass 变量。

例如，使用导出的primaryColorSass 变量：

```scss
/* variables.module.scss */
$primary-color: #64ff00;

:export {
  primaryColor: $primary-color;
}
```

```jsx
// pages/_app.js
import variables from '../styles/variables.module.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
  )
}
```

## CSS-in-JS

:::detail 例子
- [Styled JSX](https://github.com/vercel/next.js/tree/canary/examples/with-styled-jsx)
- [Styled Components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
- [Emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion)
- [Linaria](https://github.com/vercel/next.js/tree/canary/examples/with-linaria)
- [Tailwind CSS + Emotion](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss-emotion)
- [Styletron](https://github.com/vercel/next.js/tree/canary/examples/with-styletron)
- [Cxs](https://github.com/vercel/next.js/tree/canary/examples/with-cxs)
- [Aphrodite](https://github.com/vercel/next.js/tree/canary/examples/with-aphrodite)
- [Fela](https://github.com/vercel/next.js/tree/canary/examples/with-fela)
- [Stitches](https://github.com/vercel/next.js/tree/canary/examples/with-stitches)
:::

可以使用任何现有的 CSS-in-JS 解决方案。最简单的一种是内联样式：

```jsx
function HiThere() {
  return <p style={{ color: 'red' }}>hi there</p>
}

export default HiThere
```

我们捆绑styled-jsx以提供对隔离作用域 CSS 的支持。其目的是支持类似于 Web 组件的“影子 CSS”，遗憾的是它不支持服务器渲染并且是 JS-only。

有关其他流行的 CSS-in-JS 解决方案（如样式化组件），请参阅上面的示例。

使用的组件styled-jsx如下所示：

```jsx
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  )
}

export default HelloWorld
```

有关更多示例，请参阅styled-jsx 文档。

## FAQ

### 它可以在禁用 JavaScript 的情况下工作吗？

是的，如果您禁用 JavaScript，CSS 仍将加载到生产构建 ( next start) 中。在开发过程中，我们需要启用 JavaScript 以通过快速刷新为开发人员提供最佳体验。