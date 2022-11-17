# 环境变量

:::details 示例
- [Environment Variables](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)
:::

Next.js自带对环境变量的内置支持，它允许您执行以下操作:

- [使用`.env.local`加载环境变量](#loading-environment-variables)
- [通过前缀`NEXT_PUBLIC_`向浏览器公开环境变量](#exposing-environment-variables-to-the-browser)

## 加载环境变量

Next.js内置支持将环境变量从`.env.local`加载到`process.env`.

一个例子`.env.local`:

```bash
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

这将加载`process.env.DB_HOST`,`process.env.DB_USER`和`process.env.DB_PASS`到Node.js环境中自动允许你在[Next.js数据获取方法](/docs/guide/basic-features/data-fetching/overview)和[API路由](/docs/guide/api-routes/introduction)中使用它们。

例如，使用[`getStaticProps`](/docs/guide/basic-features/data-fetching/get-static-props):

```js
// pages/index.js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
  // ...
}
```

> **注意**: 为了保证只有服务器的秘密是安全的，环境变量是在构建时计算的，所以只会包含实际使用的环境变量。这意味着`process.env`不是一个标准的JavaScript对象，所以你不能使用[对象解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
必须引用环境变量，例如:`process.env.PUBLISHABLE_KEY`，而不是`const { PUBLISHABLE_KEY } = process.env`.

> **注意**: Next.js将自动展开变量(`$VAR`) 在你的`.env*`的文件。 这允许你引用其他的秘密，像这样
```bash
# .env
HOSTNAME=localhost
PORT=8080
HOST=http://$HOSTNAME:$PORT

```If you are trying to use a variable with a`$`in the actual value, it needs to be escaped like so:`\$`.For example:```bash
# .env
A=abc

# becomes "preabc"
WRONG=pre$A

# becomes "pre$A"
CORRECT=pre\$A
```

> **注意**:如果你使用的是`/src`文件夹，请注意Next.js将**只**从父文件夹加载。env文件，而**不会**从`/src`文件夹加载。

## 向浏览器公开环境变量

默认情况下，环境变量只在Node.js环境中可用，这意味着它们不会向浏览器公开。

为了向浏览器公开一个变量，你必须给该变量加上`NEXT_PUBLIC_`前缀。例如:

```bash
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

这将加载`process.env.NEXT_PUBLIC_ANALYTICS_ID`自动写入Node.js环境中，允许你在代码的任何地方使用它。由于`NEXT_PUBLIC_`前缀的存在，该值将内联到JavaScript中发送到浏览器。这种内联发生在构建时，因此需要在构建项目时设置各种env `NEXT_PUBLIC_`。

```js
// pages/index.js
import setupAnalyticsService from '../lib/my-analytics-service'

// 'NEXT_PUBLIC_ANALYTICS_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `setupAnalyticsService('abcdefghijk')`.
setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)

function HomePage() {
  return <h1>Hello World</h1>
}

export default HomePage
```

注意动态查找不会内联，例如:

```js
// This will NOT be inlined, because it uses a variable
const varName = 'NEXT_PUBLIC_ANALYTICS_ID'
setupAnalyticsService(process.env[varName])

// This will NOT be inlined, because it uses a variable
const env = process.env
setupAnalyticsService(env.NEXT_PUBLIC_ANALYTICS_ID)
```

## 默认环境变量

一般来说只有一个`.env.local`需要文件。然而, 有时您可能希望为`development`(`next dev`)或`production`(`next start`)环境添加一些默认值。

Next.js允许您设置默认值`.env`(所有环境),`.env.development`(开发环境), 和`.env.production`(生产环境).

`.env.local`总是覆盖默认设置。

> **注意**:`.env`,`.env.development`,和`.env.production`文件应该包含在存储库中，因为它们定义了默认值。**`.env*.local`应该添加到`.gitignore`**,因为这些文件将被忽略。`.env.local`是可以储存秘密的地方。

## Vercel的环境变量

当部署Next.js应用程序到[Vercel](https://vercel.com),可[在项目设置中](https://vercel.com/docs/concepts/projects/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)配置“环境变量”。
应该在那里配置所有类型的环境变量。甚至在开发中使用的环境变量-可以在之后[下载到您的本地设备](https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)。

如果您已经配置了[开发环境变量](https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)那么您可以将它们拉入`.env.local`，在您的本地机器上使用以下命令:

```bash
vercel env pull .env.local
```

## 测试环境变量

除了`development`和`production`环境，还有第三种选择:`test`。同样地，您可以为开发或生产环境设置默认值，您可以对`testing`环境的`.env.test`文件进行同样的操作(尽管这个文件不像前两个文件那样常见)。Next.js将不加载环境变量从`.env.development`或`.env.production`在`testing`环境中。

当使用`jest`或`cypress`等工具运行测试时，这一点很有用，因为您需要仅为测试目的设置特定的环境变量。如果`NODE_ENV`将加载测试默认值 设置为`test`, 尽管您通常不需要手动执行此操作，因为测试工具将为您解决此问题。

`test`环境和`development`和`production`环境之间有一个很小的区别，你需要记住:`.env.local`不会加载，因为您希望测试为每个人产生相同的结果。通过这种方式，每个测试执行都将在不同的执行中使用相同的环境默认值`.env.local`(用于覆盖默认设置)。

> **注意**:类似于默认环境变量，`.env.test`文件应该包含在你的存储库中，但`.env.test.local`不应该,因为`.env*.local`将通过`.gitignore`被忽略。

在运行单元测试时，您可以确保以相同的方式加载环境变量Next。js通过利用`@next/env`包中的`loadEnvConfig`函数来实现。

```js
// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from '@next/env'

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
```

## 环境可变负载顺序

按照顺序在以下位置查找环境变量，一旦找到变量就停止查找。

- `process.env`
- `.env.$(NODE_ENV).local`
- `.env.local`(当`NODE_ENV`为`test`时未选中。)
- `.env.$(NODE_ENV)`
- `.env`

例如，如果`NODE_ENV`是`development`并且你在`.env.development.local`和`.env`中都定义了一个变量，将使用`.env.development.local`中的值。

> **注意:**`NODE_ENV`允许的值是`production`,`development`和`test`。
