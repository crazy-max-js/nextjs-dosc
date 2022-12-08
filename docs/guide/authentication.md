# 身份验证

身份验证验证用户是谁，而授权控制用户可以访问什么。js支持多种身份验证模式，每种模式都是为不同的用例设计的。本页将详细介绍每种情况，以便您可以根据约束条件进行选择。

## 身份验证模式

确定需要哪种身份验证模式的第一步是理解所需的[数据获取策略](/guide/basic-features/data-fetching/overview)。
然后，我们可以确定哪些身份验证提供程序支持此策略。主要有两种模式:

- 使用[静态生成](/guide/basic-features/pages#static-generation-recommended)服务器呈现加载状态，然后在客户端获取用户数据。
- 获取用户数据[服务器端](/guide/basic-features/pages#server-side-rendering)以消除未经身份验证的内容。

### 验证静态生成的页面

如果没有阻塞数据需求，js会自动确定页面是静态的。
这意味着在页面中没有[`getServerSideProps`](/guide/basic-features/data-fetching/get-server-side-props)和`getInitialProps`。
相反，您的页面可以呈现来自服务器的加载状态，然后获取用户客户端。

这种模式的一个优点是它允许从全局CDN提供页面，并使用[`next/link`](/guide/api-reference/next/link)预加载。
在实践中，这会导致更快的TTI ([交互时间](https://web.dev/interactive/)).

让我们看一个配置文件页面的例子。这将最初呈现一个加载骨架。
一旦对用户的请求完成，它将显示用户的名称:

```jsx
// pages/profile.js

import useUser from '../lib/useUser'
import Layout from '../components/Layout'

const Profile = () => {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <Layout>Loading...</Layout>
  }

  // Once the user request finishes, show the user
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile
```

您可以查看此[实际示例](https://iron-session-example.vercel.app/)。
查看[`with-iron-session`](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session)示例，了解它是如何工作的。

### 验证服务器呈现的页面

如果你从一个页面导出一个名为[`getServerSideProps`](/guide/basic-features/data-fetching/get-server-side-props)的`async`函数，Next.js将在每个请求时使用`getServerSideProps`返回的数据预渲染该页。

```jsx
export async function getServerSideProps(context) {
  return {
    props: {}, // Will be passed to the page component as props
  }
}
```

让我们将概要文件示例转换为使用[服务器端渲染](/guide/basic-features/pages#server-side-rendering).
如果有会话，返回`user`作为页面中的`Profile`组件的道具。
注意在[这个例子](https://iron-session-example.vercel.app/)中没有加载框架。

```jsx
// pages/profile.js

import withSession from '../lib/session'
import Layout from '../components/Layout'

export const getServerSideProps = withSession(async function ({ req, res }) {
  const { user } = req.session

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
})

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile
```

这种模式的一个优点是防止在重定向之前出现未经身份验证的内容。
需要注意的是，在`getServerSideProps`中获取用户数据将阻塞呈现，直到对身份验证提供程序的请求得到解决。
为了防止产生瓶颈并增加TTFB([到第一个字节的时间](https://web.dev/time-to-first-byte/))，您应该确保您的身份验证查找是快速的。
否则，考虑[静态生成](#authenticating-statically-generated-pages).

## 身份验证提供者

既然我们已经讨论了身份验证模式，那么让我们看看具体的提供程序，并探索如何在Next.js中使用它们。

### 自带数据库

:::details 示例
- [with-iron-session](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session)
- [next-auth-example](https://github.com/nextauthjs/next-auth-example)
:::

如果您有一个包含用户数据的现有数据库，那么您可能希望利用与提供者无关的开源解决方案。

- 如果您想要一个低级的、加密的、无状态的会话实用程序，请使用[`iron-session`](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session)。
- 如果你想要一个功能齐全的认证系统，内置提供商(谷歌，Facebook, GitHub…)，JWT, JWE，电子邮件/密码，魔术链接和更多…使用[`next-auth`](https://github.com/nextauthjs/next-auth-example)。

这两个库都支持任意一种身份验证模式。如果您对[Passport](http://www.passportjs.org/)感兴趣，我们还提供了使用安全和加密cookie的示例:

- [with-passport](https://github.com/vercel/next.js/tree/canary/examples/with-passport)
- [with-passport-and-next-connect](https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect)

### 其他供应商

要查看其他身份验证提供者的示例，请签出[examples文件夹](https://github.com/vercel/next.js/tree/canary/examples).

:::details 示例
- [Auth0](https://github.com/vercel/next.js/tree/canary/examples/auth0)
- [Clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
- [Firebase](https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication)
- [Magic](https://github.com/vercel/next.js/tree/canary/examples/with-magic)
- [Nhost](https://github.com/vercel/next.js/tree/canary/examples/with-nhost-auth-realtime-graphql)
- [Ory](https://github.com/vercel/examples/tree/main/solutions/auth-with-ory)
- [Supabase](https://github.com/vercel/next.js/tree/canary/examples/with-supabase-auth-realtime-db)
- [Supertokens](https://github.com/vercel/next.js/tree/canary/examples/with-supertokens)
- [Userbase](https://github.com/vercel/next.js/tree/canary/examples/with-userbase)
:::

## 联系

关于接下来要做的更多信息，我们推荐以下部分:




