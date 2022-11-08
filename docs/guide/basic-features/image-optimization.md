# 图像组件和图像优化

::: details 例子
- [Image Component](https://github.com/vercel/next.js/tree/canary/examples/image-component)
:::

Next.js 图像组件`next/image`是 HTML 元素的扩展`<img>`，是为现代网络发展而来的。它包括各种内置的性能优化，以帮助您实现良好的Core Web Vitals。这些分数是衡量您网站上用户体验的重要指标，并被计入 Google 的搜索排名。

Image 组件中内置的一些优化包括：

- **改进的性能**：始终使用现代图像格式为每个设备提供正确大小的图像
- **视觉稳定性**：自动防止累积布局移位
- **更快的页面加载**：图像仅在进入视口时加载，带有可选的模糊占位符
- **资产灵活性**：按需调整图像大小，即使是存储在远程服务器上的图像

## 使用图像组件

要将图像添加到您的应用程序，请导入next/image组件：

```js
import Image from 'next/image'
```

现在，您可以src为您的图像（本地或远程）定义。

### 本地图像

要使用本地图像、import您的.jpg、.png或.webp文件：

```js
import profilePic from '../public/me.png'
```

动态await import()或require()不支持。必须是静态的import，因此可以在构建时进行分析。

Next.js 将根据导入的文件自动确定图像的width和height。这些值用于在加载图像时防止累积布局移位。

```js
import Image from 'next/image'
import profilePic from '../public/me.png'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

### 远程图像

要使用远程图像，该src属性应该是一个 URL 字符串，可以是relative或absolute。由于 Next.js 在构建过程中无法访问远程文件，因此您需要手动提供width,height和 optionalblurDataURL属性：

```js
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

> 在 `next/image` 中了解有关尺寸要求的更多信息。

### 域

有时您可能想要优化远程图像，但仍使用内置的 Next.js 图像优化 API。为此，请将loader其保留为默认设置并输入 Imagesrc道具的绝对 URL。

为了保护您的应用程序免受恶意用户的攻击，您必须定义一个您打算与该next/image组件一起使用的远程主机名列表。

> 了解有关remotePatterns配置的更多信息。

### 装载机

请注意，在前面的示例"/me.png"中，为远程图像提供了部分 URL ( )。由于加载程序架构，这是可能的。

加载程序是为您的图像生成 URL 的函数。它修改提供的src，并生成多个 URL 来请求不同大小的图像。这些多个 URL 用于自动srcset生成，以便为您网站的访问者提供适合其视口大小的图像。

Next.js 应用程序的默认加载程序使用内置的图像优化 API，该 API 可以优化来自 Web 上任何位置的图像，然后直接从 Next.js Web 服务器提供它们。如果您想直接从 CDN 或图像服务器提供图像，您可以使用几行 JavaScript 编写自己的加载器函数。

loader您可以使用prop定义每个图像的加载器，或者使用loaderFileconfiguration在应用程序级别定义加载器。

### 优先

您应该将该priority属性添加到将成为每个页面的最大内容绘制 (LCP) 元素的图像中。这样做允许 Next.js 对要加载的图像进行特别优先排序（例如，通过预加载标签或优先级提示），从而显着提升 LCP。

LCP 元素通常是页面视口中可见的最大图像或文本块。运行 时 next dev，如果 LCP 元素是`<Image>`不带该priority属性的，您将看到控制台警告。

一旦你确定了 LCP 图像，你可以像这样添加属性：

```js
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

next/image在组件文档中查看有关优先级的更多信息。

## 图像大小

图像最常影响性能的一种方式是通过布局移位，图像在加载时会在页面上推动其他元素。这个性能问题对用户来说非常烦人，以至于它有自己的 Core Web Vital，称为Cumulative Layout换档。避免基于图像的布局变化的方法是始终调整图像大小。这允许浏览器在加载之前为图像保留足够的空间。

因为next/image旨在保证良好的性能结果，所以不能以会导致布局偏移的方式使用它，并且必须以以下三种方式之一来调整大小：

1. 自动，使用静态导入
2. 明确地，通过包含 awidth和height属性
3. 隐式地，通过使用导致图像扩展以填充其父元素的填充。

> ### 如果我不知道图像的大小怎么办？
> 如果您在不了解图像大小的情况下从源访问图像，您可以执行以下几项操作：
>
> #### 利用fill
>
> 该fill道具允许您的图像由其父元素调整大小。考虑使用 CSS 在页面上沿sizesprop 提供图像的父元素空间，以匹配任何媒体查询断点。您还可以使用object-fitwith fill、contain或cover,object-position来定义图像应如何占据该空间。
>
> #### 标准化您的图像
>
> 如果您从您控制的来源提供图像，请考虑修改图像管道以将图像标准化为特定大小。
>
> #### 修改您的 API 调用
>
> 如果您的应用程序正在使用 API 调用（例如对 CMS）检索图像 URL，您可以修改 API 调用以返回图像尺寸以及 URL。

如果建议的方法都不适用于调整图像大小，则该next/image组件旨在与标准<img>元素一起在页面上正常工作。

## Styling

设置 Image 组件的样式类似于设置普通<img>元素的样式，但需要牢记一些准则：

使用classNameor style, notstyled-jsx

在大多数情况下，我们建议使用className道具。这可以是导入的CSS Module、全局样式表等。

您还可以使用该style道具分配内联样式。

您不能使用styled-jsx，因为它的范围是当前组件（除非您将样式标记为global）。

使用fill时，父元素必须有position: relative

这是在该布局模式下正确渲染图像元素所必需的。

使用fill时，父元素必须有display: block

这是`<div>`元素的默认值，但应另行指定。

## 特性

查看next/image组件可用的所有属性。

### 样式示例

有关与各种样式一起使用的图像组件的示例，请参阅图像组件演示。

## 配置

组件和Next.jsnext/image图片优化 API 可以在next.config.js文件中配置。这些配置允许您启用远程图像、定义自定义图像断点、更改缓存行为等。

**阅读完整的映像配置文档以获取更多信息。**




