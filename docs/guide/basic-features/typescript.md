# TypeScript

:::details 示例
Version History
:::

Next.js 提供了集成的[TypeScript](https://www.typescriptlang.org/)体验，包括零配置设置和Pages、api的内置类型等。

- [克隆并部署TypeScript启动器](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-typescript&project-name=with-typescript&repository-name=with-typescript&utm_source=next-site&utm_medium=docs&utm_campaign=next-website)
- [查看示例应用程序](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
 
## create-next-app支持

你可以使用`--ts, --typescript`标记用[`create-next-app`](/docs/guide/api-reference/create-next-app)创建一个TypeScript项目，如下所示:

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
# or
pnpm create next-app --ts
```

## 现有项目

要在一个现有的项目中开始，创建一个空的`tsconfig.json`文件在根文件夹:

```bash
touch tsconfig.json
```

Next.js将自动为该文件配置默认值。提供自己的`tsconfig.json`也支持自定义[compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)。

您还可以提供到 tsconfig.json的相对路径，在你的`next.config.js`文件中设置`typescript.tsconfigPath`道具。

从`v12.0.0`开始，Next.js默认使用[SWC](/docs/guide/advanced-features/compiler)编译TypeScript和TSX，以实现更快的构建。

> Next.js将使用Babel来处理TypeScript如果`.babelrc`在场。这有一些 [注意事项](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats)和一些[编译器选项的处理方式不同](https://babeljs.io/docs/en/babel-plugin-transform-typescript#typescript-compiler-options).

然后，运行`next`(通常是`npm run dev`或`yarn dev`) ， Next.js 将指导你安装所需的包来完成设置:

```bash
npm run dev

# You'll see instructions like these:
#
# Please install TypeScript, @types/react, and @types/node by running:
#
#         yarn add --dev typescript @types/react @types/node
#
# ...
```

现在你已经准备好开始将文件从`.js`转换为`.tsx`和利用TypeScript的好处!

> 将在项目的根目录下创建一个名为`next-env.d.ts`的文件。该文件确保TypeScript编译器获取Next.js类型。**您不应该删除它或编辑它**因为它可以随时更改。这个文件不应该被提交并且应该被版本控制忽略 (例如在你的`.gitignore`的文件)。

> TypeScript`strict`模式默认是关闭的。当你喜欢使用TypeScript时，建议在`tsconfig.json`中打开它。

> 不用编辑`next-env.d.ts`，你可以通过添加一个新文件`additional.d.ts`来包含额外的类型，然后在`tsconfig.json`中的[`include`](https://www.typescriptlang.org/tsconfig#include)数组中引用它.

默认情况下，Next.js 将做类型检查作为`next build`的一部分。我们建议在开发过程中使用代码编辑器类型检查。

如果你想静音错误报告，请参考[忽略TypeScript错误](/docs/guide/api-reference/next.config.js/ignoring-typescript-errors)的文档。

## 静态生成和服务器端呈现

对于`getStaticProps`,`getStaticPaths` 和`getServerSideProps`，你可以分别使用`GetStaticProps`,`GetStaticPaths`和`GetServerSideProps`类型:

```ts
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
}
```

> 如果你正在使用`getInitialProps`，你可以[遵循本页上的说明](/docs/guide/api-reference/data-fetching/get-initial-props#typescript).

## API Routes

下面是如何为API路由使用内置类型的示例:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
```

您还可以键入响应数据:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}
```

## 自定义应用程序

如果你有一个[自定义`App`](/docs/guide/advanced-features/custom-app)，你可以使用内置类型`AppProps`并将文件名更改为`./pages/_app.tsx`像这样:

```ts
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## 路径别名和baseUrl

Next.js 自动支持`tsconfig.json``"paths"`和`"baseUrl"`选项。

你可以在[模块路径别名文档](/docs/guide/advanced-features/module-path-aliases)中了解更多关于这个特性的信息。

## 类型检查next.config.js

`next.config.js`文件必须是JavaScript文件，因为它不会被Babel或TypeScript解析，但是你可以在你的IDE中使用JSDoc添加一些类型检查，如下所示:

```js
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig
```

## 增量类型检查

由于`v10.2.1`Next.js在您的`tsconfig.json`中启用时支持[增量类型检查](https://www.typescriptlang.org/tsconfig#incremental),这有助于加快大型应用程序中的类型检查。

强烈建议至少在TypeScript的`v4.3.2`上使用该特性，以体验[最佳性能](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/#lazier-incremental)。

## 忽略TypeScript错误

Next.js当你的项目中出现TypeScript错误时，会使你的**生产构建**(`next build`) 失败。
如果你想让Next.js在应用程序有错误的情况下危险地生成生产代码，您可以禁用内置类型检查步骤。

如果禁用，请确保将类型检查作为构建或部署过程的一部分运行，否则将非常危险。

打开`next.config.js`，并在`typescript`配置中启用`ignoreBuildErrors`选项:

```js
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
```
