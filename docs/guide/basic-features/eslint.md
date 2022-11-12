# ESLint

Next.js提供了开箱即用的集成[ESLint](https://eslint.org/)体验。将`next lint`作为脚本添加到`package.json`:

```json
"scripts": {
  "lint": "next lint"
}
```

然后运行`npm run lint`或`yarn lint`:

```bash
yarn lint
```

如果你还没有在你的应用程序中配置ESLint，你将在安装和配置过程中得到指导。

```bash
yarn lint

# You'll see a prompt like this:
#
# ? How would you like to configure ESLint?
#
# ❯   Base configuration + Core Web Vitals rule-set (recommended)
#     Base configuration
#     None
```

可选择以下三种选项之一:

- **Strict**: 包括Next.js的基本ESLint配置，以及更严格的[核心Web Vitals规则集](/docs/guide/basic-features/eslint#core-web-vitals). 这是建议开发者第一次设置ESLint的配置。

```json
{
  "extends": "next/core-web-vitals"
}

```
- **Base**: 包括Next.js的基本ESLint配置。
```json
{
  "extends": "next"
}

```
- **Cancel**: 不包括任何ESLint配置。只有当你计划设置自己的自定义ESLint配置时才选择这个选项。

If e如果选择了两个配置选项中的任何一个，Next.js会自动在你的应用程序中安装`eslint`和`eslint-config-next`作为开发依赖项，并在你的项目根目录中创建一个`.eslintrc.json`文件，其中包括你所选择的配置。

你现在可以在每次你想要运行ESLint来捕获错误的时候运行`next lint`。一旦ESLint设置好了，它也会在每次构建(`next build`)期间自动运行。错误会导致构建失败，而警告不会。

> 如果你不想在`next build`期间运行ESLint，请参考[Ignoring ESLint](/docs/api-reference/next.config.js/ignoring-eslint)的文档。

W我们建议在开发过程中使用适当的[integration](https://eslint.org/docs/user-guide/integrations#editors)来直接在代码编辑器中查看警告和错误。

## ESLint配置

默认配置(`eslint-config-next`)包含了在Next.js中获得最佳开箱即用检测体验所需的所有内容。如果你的应用程序中还没有配置ESLint，我们建议使用`next lint`来设置ESLint和这个配置。

> 如果你想使用`eslint-config-next`和其他ESLint配置一起使用，参考[附加配置](/docs/basic-features/eslint#additional-configurations)部分了解如何在不引起任何冲突的情况下这样做。

来自以下ESLint插件的推荐规则集都在`eslint-config-next`中使用:

- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next)

这将优先于`next.config.js`中的配置。

## ESLint 插件

Next.js 提供一个ESLint插件，[`eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next), 已经绑定在基本配置中，这使得捕获Next.js应用程序中的常见问题成为可能。整套规则如下:

- ✔: 在推荐配置中启用



如果你已经在你的应用中配置了ESLint，我们建议直接从这个插件扩展，而不是包含`eslint-config-next`，除非满足一些条件。参考[Recommended Plugin Ruleset](/docs/basic-features/eslint#recommended-plugin-ruleset)了解更多。

### 自定义设置

#### rootDir

如果你在一个项目中使用`eslint-plugin-next`，而Next.js没有安装在你的根目录下(比如monorepo), 你可以使用你的`eslint-plugin-next`中的`settings`属性告诉`.eslintrc`在哪里找到你的Next.js应用程序:

```json
{
  "extends": "next",
  "settings": {
    "next": {
      "rootDir": "packages/my-app/"
    }
  }
}
```

`rootDir`可以是一个路径(相对的或绝对的), 一个glob(例如`"packages/*/"`)，或一个路径和/或glob数组。

## 检测自定义目录和文件

默认情况下，Next.js将为`pages/`,`components/`,`lib/`,和`src/`目录中的所有文件运行ESLint。 但是，你可以在`dirs`中的`eslint`配置中使用`next.config.js`选项指定生产构建的目录:

```js
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
```

类似地，`--dir`和`--file`标志可以用于`next lint`来lint特定的目录和文件:

```bash
next lint --dir pages --dir utils --file bar.js
```

## 缓存

为了提高性能，ESLint处理的文件的信息默认是缓存的。
它存储在`.next/cache`或在你定义的[build directory](/docs/guide/api-reference/next.config.js/setting-a-custom-build-directory)中。
如果你包含任何依赖于多个源文件内容的ESLint规则，并且需要禁用缓存，在`next lint`中使用`--no-cache`标志。

```bash
next lint --no-cache
```

## 禁用规则

如果您想修改或禁用由支持的插件提供的任何规则 (`react`,`react-hooks`,`next`)，你可以直接使用你的`.eslintrc`中的`rules`属性来改变它们:

```json
{
  "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}
```

### Core Web Vitals

当`next lint`第一次运行并且选择了**strict**选项时，`next/core-web-vitals` 规则集被启用。

```json
{
  "extends": "next/core-web-vitals"
}
```

`next/core-web-vitals`updates`eslint-plugin-next`to error on a number of rules that are warnings by default if they affect[Core Web Vitals](https://web.dev/vitals/).

> The`next/core-web-vitals`entry point is automatically included for new applications built with[Create Next App](/docs/guide/api-reference/create-next-app).

## 与其他工具一起使用

### Prettier

ESLint还包含代码格式规则，这可能与你现有的[Prettier](https://prettier.io/)设置相冲突。
我们建议在你的ESLint配置中包含[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)，使ESLint和pretty一起工作。
首先，安装依赖项:

```bash
npm install --save-dev eslint-config-prettier
# or
yarn add --dev eslint-config-prettier
```

然后，在你现有的ESLint配置中添加`prettier`：

```json
{
  "extends": ["next", "prettier"]
}
```

### lint-staged

如果你想使用`next lint`和[lint-staged](https://github.com/okonet/lint-staged)一起在暂存的git文件上运行linter，
你必须在项目根目录的`.lintstagedrc.js`文件中添加以下内容，以指定`--file`标志的用法。

```js
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
```

## 迁移已有配置

### 推荐插件规则集

如果你已经在你的应用程序中配置了ESLint，并且满足以下任何一个条件:

- 您已经安装了以下一个或多个插件(或单独或通过不同的配置，如`airbnb`或`react-app`):
- `react`- `react-hooks`- `jsx-a11y`- `import`- 你已经定义了与Next.js中Babel的配置方式不同的特定的`parserOptions`(不建议这样做，除非你已经[customized your Babel configuration](/docs/guide/advanced-features/customizing-babel-config))
- 你有`eslint-plugin-import`安装Node.js和/或TypeScript[resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers)定义处理导入

然后我们建议，如果你更喜欢在[`eslint-config-next`](https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js)或者直接从Next.js ESLint插件中扩展，可以删除这些设置:

```js
module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}
```

插件可以正常安装在你的项目中，而不需要运行' next lint ':

```bash
npm install --save-dev @next/eslint-plugin-next
# or
yarn add --dev @next/eslint-plugin-next
```

这消除了由于跨多个配置导入相同的插件或解析器而可能发生冲突或错误的风险。

### Additional Configurations

如果你已经使用了一个单独的ESLint配置，并且想要包含`eslint-config-next`，确保在其他配置后，最后进行扩展。例如:

```json
{
  "extends": ["eslint:recommended", "next"]
}
```

`next`配置已经处理了`parser`,`plugins`和`settings`属性的默认值设置。
没有必要手动重新声明任何这些属性，除非您需要为您的用例进行不同的配置。
如果包含任何其他可共享配置，**您需要确保这些属性没有被覆盖或修改**.
否则，我们建议删除所有与`next`配置共享行为的配置，或者像上面提到的那样直接从next .js ESLint插件扩展。
