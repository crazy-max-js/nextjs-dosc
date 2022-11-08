# 客户端数据获取

当您的页面不需要 SEO 索引、不需要预渲染数据或页面内容需要频繁更新时，客户端数据获取非常有用。与服务器端渲染 API 不同，您可以在组件级别使用客户端数据获取。

如果在页面级别完成，则在运行时获取数据，并且页面的内容会随着数据的变化而更新。在组件级别使用时，在组件挂载时获取数据，并随着数据的变化更新组件的内容。

请务必注意，使用客户端数据获取可能会影响应用程序的性能和页面的加载速度。这是因为数据获取是在组件或页面挂载时完成的，并且数据没有被缓存。

## 使用 useEffect 获取客户端数据

以下示例显示了如何使用 useEffect 挂钩在客户端获取数据。

```jsx
import { useState, useEffect } from 'react'

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

## 使用 SWR 获取客户端数据

Next.js 背后的团队创建了一个名为SWR的用于数据获取的 React 钩子库。如果您在客户端获取数据，强烈建议您这样做。它处理缓存、重新验证、焦点跟踪、间隔重新获取等。

使用与上面相同的示例，我们现在可以使用 SWR 获取配置文件数据。SWR 会自动为我们缓存数据，并在数据过期时重新验证数据。

有关使用 SWR 的更多信息，请查看SWR 文档。

```jsx
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

