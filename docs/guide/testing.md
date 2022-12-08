# 测试

:::details 示例
- [Next.js和Cypress](https://github.com/vercel/next.js/tree/canary/examples/with-cypress)
- [Next.js with Playwright](https://github.com/vercel/next.js/tree/canary/examples/with-playwright)
- [带有Jest和React测试库的Next.js](https://github.com/vercel/next.js/tree/canary/examples/with-jest)
- [带有Vitest的Next.js](https://github.com/vercel/next.js/tree/canary/examples/with-vitest)
:::

学习如何使用常用的测试工具:[Cypress](/testing#cypress)、[Playwright](/testing#playwright)和[Jest with React Testing Library](/testing#jest-and-react-testing-library)。

## Cypress

Cypress是用于**端到端(E2E)**和**集成测试**的测试运行器。

### 快速入门

你可以在[with-cypress示例](https://github.com/vercel/next.js/tree/canary/examples/with-cypress)中使用`create-next-app`来快速开始。

```bash
npx create-next-app@latest --example with-cypress with-cypress-app
```

### 手工设置

要开始使用Cypress，请安装`cypress`包:

```bash
npm install --save-dev cypress
```

将Cypress 添加到`package.json`脚本字段:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "cypress": "cypress open",
}
```

第一次运行Cypress生成使用推荐文件夹结构的示例:

```bash
npm run cypress
```

您可以查看生成的示例和Cypress文档的[编写您的第一个测试](https://docs.cypress.io/guides/getting-started/writing-your-first-test)部分，以帮助您熟悉Cypress。

### 创建您的第一个Cypress集成测试

假设有以下两个Next.js页面:

```jsx
// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">About</Link>
    </nav>
  )
}
```

```jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
```

添加一个测试来检查你的导航是否正常工作:

```jsx
// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })
})
```

如果你在`cypress.config.js`配置文件中添加`baseUrl: 'http://localhost:3000'`，你可以使用`cy.visit("/")`而不是`cy.visit("http://localhost:3000/")`。

### 正在运行Cypress测试

由于Cypress正在测试一个真正的Next.js应用程序，它需要在启动Cypress之前运行Next.js服务器。我们建议针对生产代码运行测试，以更接近应用程序的行为。

运行`npm run build`和`npm run start`，然后在另一个终端窗口运行`npm run cypress`来启动cypress。

> **注意:** 或者，您可以安装`start-server-and-test`包，并将其添加到`package.json`脚本字段:`"test": "start-server-and-test start http://localhost:3000 cypress"`来启动Next.js生产服务器和cypress。记住在进行新的更改后重新构建应用程序。

### 为持续集成(CI)做好准备

您可能已经注意到，到目前为止，运行Cypress会打开一个交互式浏览器，这对于CI环境来说并不理想。你也可以使用`cypress run`命令无头运行Cypress:

```json
// package.json

"scripts": {
  //...
  "cypress": "cypress open",
  "cypress:headless": "cypress run",
  "e2e": "start-server-and-test start http://localhost:3000 cypress",
  "e2e:headless": "start-server-and-test start http://localhost:3000 cypress:headless"
}
```

您可以从以下资源了解更多关于Cypress和持续集成的信息:

- [Cypress持续集成文档](https://docs.cypress.io/guides/continuous-integration/introduction)
- [Cypress GitHub操作指南](https://on.cypress.io/github-actions)
- [官方Cypress GitHub行动](https://github.com/cypress-io/github-action)

## Playwright

Playwright是一个测试框架，可以让你用一个API自动化Chromium、Firefox和WebKit。
您可以使用它编写跨所有平台的**端到端(E2E)**和**集成**测试。

### 快速入门

最快的方法是使用`create-next-app`和[with-playwright示例](https://github.com/vercel/next.js/tree/canary/examples/with-playwright)。
这将创建一个带有Playwright的Next.js项目。

```bash
npx create-next-app@latest --example with-playwright with-playwright-app
```

### 手工设置

你也可以使用`npm init playwright`将Playwright添加到现有的`NPM`项目中。

要手动开始使用Playwright，请安装`@playwright/test`包:

```bash
npm install --save-dev @playwright/test
```

将Playwright 添加到`package.json`的脚本字段:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test:e2e": "playwright test",
}
```

### 创建第一个Playwright端到端测试

假设有以下两个Next.js页面:

```jsx
// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">About</Link>
    </nav>
  )
}
```

```jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
```

添加一个测试来验证你的导航是否正常工作:

```jsx
// e2e/example.spec.ts

import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=About')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/about')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('About Page')
})
```

你可以使用`page.goto("/")`而不是`page.goto("http://localhost:3000/")`，如果你添加[`"baseURL": "http://localhost:3000"`](https://playwright.dev/docs/api/class-testoptions#test-options-base-url)到`playwright.config.ts`配置文件。

### 运行 Playwright 测试

由于Playwright正在测试一个真正的Next.js应用程序，它需要在启动Playwright之前运行Next.js服务器。
建议针对生产代码运行测试，以更接近应用程序的行为方式。

运行`npm run build`和`npm run start`，然后在另一个终端窗口运行`npm run test:e2e`来运行Playwright测试。

> **注意:** 或者，您可以使用[`webServer`](https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests)特性让Playwright启动开发服务器，并等待它完全可用。

### 持续集成的运行Playwright(CI)

Playwright将默认在[headless mode](https://playwright.dev/docs/ci#running-headed)运行您的测试。要安装所有 Playwright 依赖项，请运行`npx playwright install-deps`。

你可以从这些资源中了解更多关于Playwright和持续集成的知识:

- [从Playwright开始](https://playwright.dev/docs/intro)
- [使用开发服务器](https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests)
- [Playwright在您的CI提供者](https://playwright.dev/docs/ci)

## Jest and React Testing Library

Jest and React Testing Library经常一起用于r**单元测试**。有三种方法可以在Next.js应用程序中开始使用Jest:

- 使用我们的一个[快速入门示例](/docs/testing#quickstart-2)
- 使用[Next.js Rust编译器](/docs/testing#setting-up-jest-with-the-rust-compiler)
- With[Babel](/docs/testing#setting-up-jest-with-babel)

下面几节将介绍如何使用这些选项设置Jest:

### 快速入门

你可以在[with-jest](https://github.com/vercel/next.js/tree/canary/examples/with-jest)示例中使用`create-next-app`来快速开始Jest和React测试库:

```bash
npx create-next-app@latest --example with-jest with-jest-app
```

### 设置Jest (使用Rust编译器)

自从[Next.js 12](/blog/next-12)发布以来，Next.js现在有内置的Jest配置。

要设置Jest，请安装`jest`,`jest-environment-jsdom`,`@testing-library/react`,`@testing-library/jest-dom`:

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

在项目的根目录中创建一个`jest.config.js`文件，并添加以下内容:

```jsx
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```

在引子下，`next/jest`会自动为你配置jest，包括:

- 使用[SWC](/docs/guide/advanced-features/compiler)设置`transform`
- 自动模仿样式表(`.css`,`.module.css`，以及它们的scss变体)，图像导入和[`@next/font`](/guide/basic-features/font-optimization)
- 加载`.env`(以及所有变体) 转换为`process.env`
- 忽略测试解析和转换中的`node_modules`
- 从测试解析忽略`.next`
- 加载`next.config.js`用于启用SWC转换的标志

> **注意**:要直接测试环境变量，请在单独的设置脚本或`jest.config.js`文件中手动加载它们。有关更多信息，请参见[测试环境变量](/guide/basic-features/environment-variables#test-environment-variables)。

### 设置Jest (with Babel)

如果你选择退出[Rust编译器](/guide/advanced-features/compiler)，除了上面的包，你还需要手动配置Jest并安装`babel-jest`和`identity-obj-proxy`。

以下是为Next.js配置Jest的推荐选项:

```jsx
// jest.config.js
module.exports = {
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
```

您可以在[Jest文档](https://jestjs.io/docs/configuration)中了解关于每个配置选项的更多信息。

**处理样式表和图像导入**

样式表和图像没有在测试中使用，但是导入它们可能会导致错误，因此需要模拟它们。创建上面配置中引用的模拟文件
- `fileMock.js`和`styleMock.js`
- 在`__mocks__`目录中:

```js
// __mocks__/fileMock.js
module.exports = {
  src: '/img.jpg',
  height: 24,
  width: 24,
  blurDataURL: 'data:image/png;base64,imagedata',
}
```

```js
// __mocks__/styleMock.js
module.exports = {}
```

有关处理静态资产的更多信息，请参阅[Jest Docs](https://jestjs.io/docs/webpack#handling-static-assets).

**可选:用自定义匹配器扩展Jest**

`@testing-library/jest-dom`包含一组方便的[自定义匹配器](https://github.com/testing-library/jest-dom#custom-matchers)，如`.toBeInTheDocument()`，使编写测试更容易。
通过在Jest配置文件中添加以下选项，您可以为每个测试导入自定义匹配器:

```js
// jest.config.js
setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
```

然后，在`jest.setup.js`中，添加以下导入:

```jsx
// jest.setup.js
import '@testing-library/jest-dom/extend-expect'
```

如果你需要在每次测试之前添加更多的设置选项，通常会将它们添加到上面的`jest.setup.js`文件中。

**可选:绝对导入和模块路径别名**

如果您的项目使用[模块路径别名](/guide/advanced-features/module-path-aliases)，您将需要配置Jest来通过匹配`jsconfig.json`中的路径选项来解析导入。在`jest.config.js`文件中添加`moduleNameMapper`选项。
例如:

```json
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}
```

```jsx
// jest.config.js
moduleNameMapper: {
  '^@/components/(.*)$': '<rootDir>/components/$1',
}
```

### 创建测试:

**在package.json中添加一个测试脚本**

在`package.json`脚本中添加监视模式下的Jest可执行文件:

```jsx
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "jest --watch"
}
```

`jest --watch`将在文件更改时重新运行测试。更多的Jest命令行选项，请参考[Jest文档](https://jestjs.io/docs/cli#reference).

**创建第一个测试**

您的项目现在可以运行测试了。遵循Jest的惯例，将测试添加到项目根目录的`__tests__`文件夹中。

例如，我们可以添加一个测试来检查`<Home />`组件是否成功呈现标题:

```jsx
// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
```

可选地，添加一个[snapshot test](https://jestjs.io/docs/snapshot-testing)来跟踪`<Home />`组件的任何意外更改:

```jsx
// __tests__/snapshot.js

import { render } from '@testing-library/react'
import Home from '../pages/index'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
```

> **注意**:测试文件不应该包含在pages目录中，因为pages目录中的任何文件都被认为是路由。

**运行测试套件**

运行`npm run test`来运行你的测试套件。在您的测试通过或失败后，您将注意到一个交互式Jest命令列表，当您添加更多测试时，这些命令将很有帮助。

为了进一步阅读，你可能会发现这些资源很有帮助:

- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React测试库文档](https://testing-library.com/docs/react-testing-library/intro/)
- [测试Playground](https://testing-playground.com/)
- 使用良好的测试实践来匹配元素。

## 社区包和示例

Next.js社区已经创建了一些包和文章，你可能会觉得有用:

- [next-router-mock](https://github.com/scottrippey/next-router-mock)用于Storybook。
- [测试预览Vercel部署与Cypress](https://glebbahmutov.com/blog/develop-preview-test/)由Gleb Bahmutov.

欲了解更多接下来要阅读的内容，我们建议:


