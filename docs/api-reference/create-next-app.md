# Create Next App

开始使用 Next.js 的最简单方法是使用 `create-next-app`。
此 CLI 工具使您能够快速开始构建新的 Next.js 应用程序，并为您设置好一切。
您可以使用默认的 Next.js 模板或使用 [官方 Next.js 示例](https://github.com/vercel/next.js/tree/canary/examples) 之一创建新应用程序
要开始使用，请使用以下命令：

### Interactive

您可以通过运行以交互方式创建新项目：

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

系统会询问您项目的名称，以及是否要创建 TypeScript 项目：

```bash
✔ Would you like to use TypeScript with this project? … No / Yes
```

选择**Yes**安装必要的 types/dependencies and 创建一个新 TS 项目.

### Non-interactive

您还可以传递命令行参数以非交互方式设置新项目。 查看`create-next-app --help`:

```bash
create-next-app <project-directory> [options]

Options:
  -V, --version                      output the version number
  --ts, --typescript

    Initialize as a TypeScript project. (default)

  --js, --javascript

    Initialize as a JavaScript project.

  --eslint

    Initialize with eslint config.

  --no-eslint

    Initialize without eslint config.

  --experimental-app

    Initialize as a `app/` directory project.

  --use-npm

    Explicitly tell the CLI to bootstrap the app using npm

  --use-pnpm

    Explicitly tell the CLI to bootstrap the app using pnpm

  -e, --example [name]|[github-url]

    An example to bootstrap the app with. You can use an example name
    from the official Next.js repo or a GitHub URL. The URL can use
    any branch and/or subdirectory

  --example-path <path-to-example>

    In a rare case, your GitHub URL might contain a branch name with
    a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar).
    In this case, you must specify the path to the example separately:
    --example-path foo/bar
```

### 为什么要使用 Create Next App？

`create-next-app`允许您在几秒钟内创建一个新的 Next.js 应用程序。 它由 Next.js 的创建者官方维护，并包含许多好处：

- **互动体验**: 执行`npx create-next-app@latest`（不带参数）启动交互式体验，指导您完成项目设置。
- **零依赖**: 初始化项目只需一秒钟。 Create Next App 具有零依赖性。
- **离线支持**: Create Next App 将自动检测您是否离线并使用本地包缓存引导您的项目。
- **支持示例**: Create Next App 可以使用 Next.js 示例集合中的示例来引导您的应用程序（例如`npx create-next-app --example api-routes`）
- **Tested**: 该包是 Next.js monorepo 的一部分，并使用与 Next.js 本身相同的集成测试套件进行测试，确保它在每个版本中都能按预期工作。
