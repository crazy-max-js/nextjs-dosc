# 可访问性

Next.js团队致力于让所有开发人员(及其最终用户)都能访问Next.js。通过在Next.js中默认添加辅助功能，我们的目标是让Web对每个人都更具包容性。

## Route Announcements

当在服务器上呈现的页面之间转换时(例如使用`<a href>`标签)，屏幕阅读器和其他辅助技术在页面加载时宣布页面标题，以便用户了解页面已更改。

除了传统的页面导航，next .js还支持客户端转换以提高性能(使用`next/link`)。为了确保客户端转换也被通告给辅助技术，Next.js默认包含一个路由通告器。

Next.js路由宣告器通过首先检查`document.title`来查找要声明的页面名称，然后是`<h1>`元素，最后是URL路径名。为了获得最易访问的用户体验，请确保应用程序中的每个页面都有一个唯一的描述性标题。

## Linting

Next.js提供了一个开箱即用的[集成ESLint体验](/guide/basic-features/eslint)，包括为Next.js定制的规则。
默认情况下，Next.js包含`eslint-plugin-jsx-a11y`来帮助早期捕获可访问性问题，包括以下警告:

- [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)

例如，这个插件有助于确保您添加alt文本到`img`标签，使用正确的`aria-*`属性，使用正确的`role`属性，等等。

## 禁用JavaScript

默认情况下，Next.js将页面预呈现为静态HTML文件。这意味着JavaScript不需要从服务器查看HTML标记，而是用于在客户端添加交互性。

如果你的应用程序要求禁用JavaScript，并且只使用HTML，你可以使用一个实验性标志从你的应用程序中删除所有JavaScript:

```js
// next.config.js
export const config = {
  unstable_runtimeJS: false,
}
```

## 可访问性资源

- [WebAIM WCAG checklist](https://webaim.org/standards/wcag/checklist)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [A11y项目](https://www.a11yproject.com/)
- 检查前景和背景元素之间的[颜色对比度](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- 处理动画时使用[`prefers-reduced-motion`](https://web.dev/prefers-reduced-motion/)
