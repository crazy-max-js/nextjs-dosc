# 静态文件服务

Next.js可以提供静态文件，比如图像，在根目录下一个名为`public`的文件夹下。`public`中的文件可以由你的代码从基URL开始引用 (`/`).

例如，如果你添加一个图像到`public/me.png`，下面的代码将访问该图像:

```jsx
import Image from 'next/image'

function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />
}

export default Avatar
```

> 注意:`next/image`需要next .js10或更高版本。

这个文件夹对`robots.txt`,`favicon.ico`，谷歌站点验证，和任何其他静态文件(包括`.html`)!

> **注意**: 不要给“公共”目录起任何其他名字。名称不能更改，并且是用于提供静态资产的惟一目录。

> **注意**: 请确保不要使用与“pages/”目录中的文件同名的静态文件，因为这将导致错误。阅读更多:[https://nextjs.org/docs/messages/conflicting-public-file-page](/docs/messages/conflicting-public-file-page)

> **注意**: 只有在[构建时](/docs/guide/api-reference/cli#build)在`public`目录中的资产才会被Next.js服务。在运行时添加的文件将不可用。我们建议使用第三方服务，如[AWS S3](https://aws.amazon.com/s3/)进行持久文件存储。
