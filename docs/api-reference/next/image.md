# next/image

:::details 示例
- [Image Component](https://github.com/vercel/next.js/tree/canary/examples/image-component)
:::


> **注意**: 此页面是`next/image`组件的API参考。 有关功能概述和使用信息，请参阅[图像组件和图像优化]（/docs/guide/basic-features/image-optimization）文档。

> **注意**: 如果您使用的是 Next.js 13 之前的版本，您需要使用 [next/legacy/image](/docs/guide/api-reference/next/legacy/image) 文档，因为该组件已重命名.

该`next/image`组件使用浏览器原生延迟加载，对于 Safari 15.4 之前的旧浏览器，它可能会回退到预加载。
使用模糊占位符时，Safari 12 之前的旧版浏览器将回退到空占位符。
将样式与`width`/ `height`一起使用时，可能会在 Safari 15 之前不保留纵横比的`auto`旧版浏览器上导致布局偏移。
有关详细信息，请参阅[此 MDN 视频](https://www.youtube.com/watch?v=4-d_SoCHeWE)。

## 已知的浏览器Bug

- [Safari 15](https://bugs.webkit.org/show_bug.cgi?id=243601)在加载时显示灰色边框。可能的解决方案:
- 使用 CSS`@media not all and (min-resolution:.001dpcm) { img[loading="lazy"] { clip-path: inset(0.5px) } }`
- 使用[`priority`](#priority)如果图像在首屏之上
- [Firefox 67+](https://bugzilla.mozilla.org/show_bug.cgi?id=1556156)加载时显示白色背景。可能的解决方案：
- 启用[AVIF`formats`](#acceptable-formats)
- 使用[`placeholder="blur"`](#placeholder)

## 必须的 Props

`<Image />` 组件需要以下属性。

### src

必须是以下之一：

1. [静态导入](/docs/guide/basic-features/image-optimization#local-images)图片文件, or
2. 路径字符串. 这可以是绝对外部 URL，也可以是内部路径，具体取决于[loader](#loader)属性。

使用外部 URL 时，必须将其添加到 [remotePatterns](#remote-patterns)in`next.config.js`。

### width

`width` 属性表示以像素为单位的渲染宽度，因此它会影响图像显示的大小。

必需，但[静态导入的图像](/docs/guide/basic-features/image-optimization#local-images)或具有[`fill`属性](#fill) 的图像除外。

### height

`height` 属性表示以像素为单位的渲染高度，因此它将影响图像显示的大小。

必需，但[静态导入的图像](/docs/guide/basic-features/image-optimization#local-images)或具有[`fill`属性](#fill) 的图像除外。

### alt

`alt` 属性用于为屏幕阅读器和搜索引擎描述图像。
如果图像已被禁用或加载图像时发生错误，它也是后备文本。

它应该包含可以替换图像的文本[不改变页面的含义](https://html.spec.whatwg.org/multipage/images.html#general-guidelines).
它不是为了补充图像，也不应该重复图像上方或下方的标题中已经提供的信息。

如果图像是[纯装饰性的](https://html.spec.whatwg.org/multipage/images.html#a-purely-decorative-image-that-doesn't-add-any-information)或[不是供用户使用](https://html.spec.whatwg.org/multipage/images.html#an-image-not-intended-for-the-user)，`alt`属性应该是一个空字符串(`alt=""`)。

[学习更多](https://html.spec.whatwg.org/multipage/images.html#alt)

## 可选的 Props

`<Image />` 组件接受许多超出所需属性的附加属性。
本节介绍 Image 组件最常用的属性。在 [Advanced Props](#advanced-props) 部分找到更多不常用属性的详细信息。

### loader

用于解析图像 URL 的自定义函数。

`loader` 是一个返回图像 URL 字符串的函数，给定以下参数：

- [`src`](#src)
- [`width`](#width)
- [`quality`](#quality)

这是使用自定义loader的示例：

```js
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

或者，您可以使用 next.config.js 中的 [loaderFile](#loader-configuration) 配置来配置应用程序中的每个`next/image` 实例，而无需传递道具。

### fill

一个布尔值，导致图像填充父元素，而不是设置 [`width`](#width) 和 [`height`](#height)。

父元素必须指定`position: "relative"`、`position: "fixed"` 或`position: "absolute"` 样式。

默认情况下，img 元素会自动分配`position: "absolute"`样式。

默认图像适合行为将拉伸图像以适合容器。
您可能更喜欢设置`object-fit: "contain"` 来设置一个经过信箱处理以适应容器并保持纵横比的图像。

或者，`object-fit: "cover"` 将导致图像填充整个容器并被裁剪以保持纵横比。为了使其看起来正确，应该将`overflow: "hidden"`样式分配给父元素。

也可以看看:

- [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)

### sizes

一个字符串，提供有关图像在不同断点处的宽度信息。
`sizes` 的值将极大地影响使用 [`fill`](#fill) 或样式设置为具有响应大小的图像的性能。

`sizes` 属性有两个与图像性能相关的重要目的：

首先，浏览器使用 `sizes` 的值来确定要从 `next/image` 自动生成的源集中下载的图像大小。
浏览器选择时，还不知道页面上图片的尺寸，所以会选择与视口尺寸相同或更大的图片。
`sizes` 属性允许您告诉浏览器图像实际上将小于全屏。如果您没有在具有`fill`属性的图像中指定`sizes`值，则使用默认值`100vw`（全屏宽度）。

其次，`sizes`属性配置`next/image`如何自动生成图像源集。如果不存在 sizes 值，则生成一个小的源集，适用于固定大小的图像。
如果定义了`sizes`，则会生成一个大型源集，适用于响应式图像。如果`sizes`属性包含诸如`50vw`之类的大小，它代表视口宽度的百分比，则源集将被修剪为不包含任何太小而不必要的值。

例如，如果您知道您的样式会导致图像在移动设备上是全宽的，在平板电脑上是 2 列布局，在桌面显示器上是 3 列布局，您应该包括如下的 sizes 属性：

```js
import Image from 'next/image'
const Example = () => (
  <div className="grid-element">
    <Image
      src="/example.png"
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  </div>
)
```

此示例的`sizes`可能会对性能指标产生巨大影响。
如果没有 `33vw` 尺寸，从服务器选择的图像将是所需宽度的 3 倍。
因为文件大小与宽度的平方成正比，如果没有 `sizes`，用户会下载比需要大 9 倍的图像。

了解更多关于 `srcset` 和 `sizes` 的信息：

- [web.dev](https://web.dev/learn/design/responsive-images/#sizes)- [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)

### quality

优化图像的质量，介于`1`和`100`之间的整数，其中`100`是最佳质量，因此文件大小最大。默认为`75`。

### priority

当为true时，图像将被视为高优先级和[预加载](https://web.dev/preload-responsive-images/)。
使用 `priority` 的图像会自动禁用延迟加载。

您应该在检测为 [Largest Contentful Paint (LCP)](/learn/seo/web-performance/lcp) 元素的任何图像上使用 `priority` 属性。
拥有多个优先级图像可能是合适的，因为不同的图像可能是不同视口大小的 LCP 元素。

仅当图像在首屏可见时才应使用。默认为`false`。

### placeholder

加载图像时使用的占位符。可能的值为`blur` 或`empty`。默认为“空”。

当`blur`时，[`blurDataURL`](#blurdataurl)属性将用作占位符。
如果`src`是来自[静态导入](/docs/guide/basic-features/image-optimization#local-images)的对象并且导入的图像是`.jpg`、`.png`、`.webp` , 或者`.avif`，然后`blurDataURL` 将被自动填充。

对于动态图像，您必须提供 [`blurDataURL`](#blurdataurl) 属性。
[Plaiceholder](https://github.com/joe-bell/plaiceholder) 等解决方案可以帮助生成 base64。

当`empty`时，加载图像时不会有占位符，只有空白。

试试看：

- [Demo the`blur`placeholder](https://image-component.nextjs.gallery/placeholder)
- [Demo the shimmer effect with`blurDataURL`prop](https://image-component.nextjs.gallery/shimmer)
- [Demo the color effect with`blurDataURL`prop](https://image-component.nextjs.gallery/color)

## Advanced Props

在某些情况下，您可能需要更高级的用法。 `<Image />` 组件可选择接受以下高级属性。

### style

允许[传递 CSS 样式](https://reactjs.org/docs/dom-elements.html#style) 到底层图像元素。

还要记住，所需的`width`和`height`道具可以与您的样式交互。
如果您使用样式修改图像的`width`，则必须同时设置`height="auto"`样式，否则您的图像将被扭曲。

### onLoadingComplete

一旦图像完全加载并且 [placeholder](#placeholder) 已被删除，就会调用回调函数。

回调函数将使用一个参数调用，即对底层`<img>`元素的引用。

### onLoad

加载图像时调用的回调函数。

请注意，加载事件可能会在占位符被移除和图像完全解码之前发生。

相反，使用 [`onLoadingComplete`](#onloadingcomplete)。

### onError

图片加载失败时调用的回调函数。

### loading

> **注意**：此属性仅供高级使用。切换一个
使用`eager`加载的图像通常会**损害性能**。我们建议改用[`priority`](#priority)属性，它
为几乎所有用例正确加载图像。

图片的加载行为。默认为`lazy`。

当 `lazy` 时，延迟加载图像，直到它到达计算出的距离视口。

当 `eager` 时，立即加载图像。

[学到更多](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)

### blurDataURL

A[Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)to
be used as a placeholder image before the`src`image successfully loads. Only takes effect when combined
with[`placeholder="blur"`](#placeholder).
在成功加载图像之前用作占位符图像的[数据 URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 。
src仅在与 结合使用时生效placeholder="blur"。

必须是 base64 编码的图像。它会被放大和模糊，所以一个非常小的图像（10px 或
少）推荐。包含较大的图像作为占位符可能会损害您的应用程序性能。

试试看：

- [Demo the default`blurDataURL`prop](https://image-component.nextjs.gallery/placeholder)
- [Demo the shimmer effect with`blurDataURL`prop](https://image-component.nextjs.gallery/shimmer)
- [Demo the color effect with`blurDataURL`prop](https://image-component.nextjs.gallery/color)

您还可以[生成纯色数据 URL](https://png-pixel.com) 来匹配图像。

### unoptimized

如果为真，源图像将按原样提供，而不是改变质量，
大小或格式。默认为`false`。

通过使用以下配置更新`next.config.js`，可以将此prop分配给所有图像：

```js
module.exports = {
  images: {
    unoptimized: true,
  },
}
```

## Other Props

`<Image />` 组件上的其他属性将传递给底层的 `img` 元素，但以下内容除外：

- `srcSet`. 请改用[设备大小](#device-sizes)。
- `ref`. 使用[`onLoadingComplete`](#onloadingcomplete)代替.
- `decoding`. 它总是`"async"`.

## 配置选项

### 远程模式

为了保护您的应用程序免受恶意用户的侵害，需要进行配置才能使用外部图像。
这确保 Next.js 图像优化 API 只能提供您帐户中的外部图像。
这些外部图像可以在您的 `next.config.js` 文件中使用 `remotePatterns` 属性进行配置，如下所示：

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
```

> 注意：上面的例子会保证`next/image`的`src`属性必须以`https://example.com/account123/`开头。任何其他协议、主机名、端口或不匹配的路径将以 400 Bad Request 响应。

下面是`next.config.js`文件中`remotePatterns`属性的另一个例子：

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
}
```

> 注意：上面的例子会确保`next/image`的`src`属性必须以`https://img1.example.com`或`https://me.avatar.example.com`或任意数量开头子域。任何其他协议或不匹配的主机名将以 400 Bad Request 响应。

通配符模式可用于“路径名”和“主机名”，并具有以下语法：

- `*`匹配单个路径段或子域
- `**`匹配末尾任意数量的路径段或开头的子域

`**` 语法在middle模式不起作用

### Domains

> 注意：我们建议改用[`remotePatterns`](#remote-patterns)，以便您可以限制协议和路径名。

与 [`remotePatterns`](#remote-patterns) 类似，`domains` 配置可用于为外部图像提供允许的主机名列表。

但是，`domains` 配置不支持通配符模式匹配，也不能限制协议、端口或路径名。

下面是`next.config.js`文件中`domains`属性的示例：

```js
module.exports = {
  images: {
    domains: ['assets.acme.com'],
  },
}
```

### Loader Configuration

如果你想使用云提供商来优化图像，而不是使用 Next.js 内置的图像优化 API，你可以在你的`next.config.js`中配置`loaderFile`，如下所示：

```js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
}

```

这必须指向一个相对于 Next.js 应用程序根目录的文件。该文件必须导出一个返回字符串的默认函数，例如：

```js
export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
```

或者，您可以使用 [`loader`prop](#loader) 来配置 `next/image` 的每个实例。

## Advanced

以下配置适用于高级用例，通常不是必需的。如果您选择配置以下属性，您将在未来的更新中覆盖对 Next.js 默认值的任何更改。

### Device Sizes

如果您知道用户的预期设备宽度，则可以使用 `next.config.js` 中的 `deviceSizes` 属性指定设备宽度断点列表。
这些宽度在`next/image`组件使用[`sizes`](#sizes)prop 时使用，以确保为用户设备提供正确的图像。

如果没有提供配置，则使用下面的默认值。

```js
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
```

### Image Sizes

您可以使用`next.config.js`文件中的`images.imageSizes`属性指定图像宽度列表。
这些宽度与 [设备尺寸](#device-sizes) 的数组连接在一起，形成用于生成图像 [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) 的完整尺寸数组 .

有两个单独列表的原因是 `imageSizes` 仅用于提供 [`sizes`](#sizes)prop 的图像，这表示图像小于屏幕的整个宽度。
**因此，`imageSizes`中的尺寸都应该小于`deviceSizes`中的最小尺寸。**

如果没有提供配置，则使用下面的默认值。

```js
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

### Acceptable Formats

默认的[图片优化API](#loader)会通过请求的`Accept`头自动检测浏览器支持的图片格式。

如果 Accept 头匹配多个配置格式，则使用数组中的第一个匹配项。
因此，数组顺序很重要。如果没有匹配项（或者源图像是 [animated](#animated-images)），图像优化 API 将回退到原始图像的格式。

如果没有提供配置，则使用下面的默认值。

```js
module.exports = {
  images: {
    formats: ['image/webp'],
  },
}
```

您可以使用以下配置启用 AVIF 支持。

```js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

> 注意：与 WebP 相比，AVIF 的编码时间通常要长 20%，但压缩量要小 20%。这意味着第一次请求图像时，它通常会比较慢，然后缓存的后续请求会更快。

> 注意：如果您在 Next.js 前面使用代理/CDN 自托管，则必须配置代理以转发 `Accept` 标头。

## 缓存行为

下面介绍默认 [loader](#loader) 的缓存算法。对于所有其他加载程序，请参阅您的云提供商的文档。

图像根据请求动态优化并存储在`<distDir>/cache/images`目录中。
优化后的图像文件将为后续请求提供服务，直到达到到期为止。
当请求与缓存但过期的文件匹配时，过期的图像会立即失效。
然后图像在后台再次优化（也称为重新验证）并使用新的到期日期保存到缓存中。

图像的缓存状态可以通过读取 `x-nextjs-cache` 响应头的值来确定。可能的值如下：

- `MISS`- 该路径不在缓存中（最多出现一次，在第一次访问时）
- `STALE`- 该路径在缓存中但超过了重新验证时间，因此它将在后台更新
- `HIT`- 路径在缓存中且未超过重新验证时间

过期（或者更确切地说是 Max Age）由 [`minimumCacheTTL`](#minimum-cache-ttl) 配置或上游图像 `Cache-Control` 标头定义，以较大者为准。
具体来说，使用了“Cache-Control”标头的“max-age”值。
如果 `s-maxage` 和 `max-age` 都找到了，那么 `s-maxage` 是首选。
`max-age` 也会传递给任何下游客户端，包括 CDN 和浏览器。

- You can configure [`minimumCacheTTL`](#minimum-cache-ttl) to increase the cache duration when the upstream image does not include `Cache-Control` header or the value is very low.
- You can configure [`deviceSizes`](#device-sizes) and [`imageSizes`](#device-sizes) to reduce the total number of possible generated images.- You can configure [formats] (#acceptable-formats)to disable multiple formats in favor of a single image format.

### Minimum Cache TTL

You can configure the Time to Live (TTL) in seconds for cached optimized images. In many cases, it's better to use a[Static Image Import](/docs/guide/basic-features/image-optimization#local-images)which will automatically hash the file contents and cache the image forever with a`Cache-Control`header of`immutable`.

```js
module.exports = {
  images: {
    minimumCacheTTL: 60,
  },
}

```

The expiration (or rather Max Age) of the optimized image is defined by either the`minimumCacheTTL`or the upstream image`Cache-Control`header, whichever is larger.

If you need to change the caching behavior per image, you can configure[`headers`](/docs/guide/api-reference/next.config.js/headers)to set the`Cache-Control`header on the upstream image (e.g.`/some-asset.jpg`, not`/_next/image`itself).

There is no mechanism to invalidate the cache at this time, so its best to keep`minimumCacheTTL`low. Otherwise you may need to manually change the[`src`](#src)prop or delete`<distDir>/cache/images`.

### Disable Static Imports

The default behavior allows you to import static files such as`import icon from './icon.png`and then pass that to the`src`property.

In some cases, you may wish to disable this feature if it conflicts with other plugins that expect the import to behave differently.

You can disable static image imports inside your`next.config.js`:

```js
module.exports = {
  images: {
    disableStaticImages: true,
  },
}

```

### Dangerously Allow SVG

The default[loader](#loader)does not optimize SVG images for a few reasons. First, SVG is a vector format meaning it can be resized losslessly. Second, SVG has many of the same features as HTML/CSS, which can lead to vulnerabilities without proper[Content Security Policy (CSP) headers](/docs/guide/advanced-features/security-headers).

If you need to serve SVG images with the default Image Optimization API, you can set`dangerouslyAllowSVG`and`contentSecurityPolicy`inside your`next.config.js`:

```js
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

```

### Animated Images

The default[loader](#loader)will automatically bypass Image Optimization for animated images and serve the image as-is.

Auto-detection for animated files is best-effort and supports GIF, APNG, and WebP. If you want to explicitly bypass Image Optimization for a given animated image, use the[unoptimized](#unoptimized)prop.

## Related

For an overview of the Image component features and usage guidelines, see:


