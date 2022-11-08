# AMP在静态HTML导出

当使用`next export`做[静态HTML导出](/docs/advanced-features/static-html-export)静态预渲染页面时， Next.js将检测页面是否支持AMP并基于此更改导出行为。
例如， 混合AMP页面将`pages/about.js`输出:

- `out/about.html`- 带有客户端React运行时的HTML页面- `out/about.amp.html`- AMP页面

如果`pages/about.js`是一个只有amp的页面，那么它将输出:

- `out/about.html`-AMP页面优化

Next.js 会自动在HTML版本中插入一个链接到AMP版本的页面，所以你不需要，像这样:

```jsx
<link rel="amphtml" href="/about.amp.html" />

```

AMP版本的页面将包含到HTML页面的链接:

```jsx
<link rel="canonical" href="/about" />

```

当[`trailingSlash`](/docs/api-reference/next.config.js/trailing-slash)被启用时，为`pages/about.js`导出的页面将是:

- `out/about/index.html`- HTML页面- `out/about.amp/index.html`-AMP页面
