# 添加AMP组件

AMP社区提供了[多种组件](https://amp.dev/documentation/components/)使AMP页面更具互动性。Next.js会自动导入页面上使用的所有组件，不需要手动导入AMP组件脚本:
```jsx
export const config = { amp: true }

function MyAmpPage() {
  const date = new Date()

  return (
    <div>
      <p>Some time: {date.toJSON()}</p>
      <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago>
    </div>
  )
}

export default MyAmpPage
```

上面的例子使用了[`amp-timeago`](https://amp.dev/documentation/components/amp-timeago/?format=websites)组件。

默认情况下，总是导入组件的最新版本。如果你想自定义版本，你可以使用`next/head`，如下例所示:

```jsx
import Head from 'next/head'

export const config = { amp: true }

function MyAmpPage() {
  const date = new Date()

  return (
    <div>
      <Head>
        <script
          async
          key="amp-timeago"
          custom-element="amp-timeago"
          src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
        />
      </Head>

      <p>Some time: {date.toJSON()}</p>
      <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago>
    </div>
  )
}

export default MyAmpPage
```
