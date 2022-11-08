> Next.js 13 最近发布，了解更多信息并查看升级指南。版本 13 还引入了 beta 功能，例如与app目录（稳定）一起工作的pages目录，以实现增量采用。您可以pages在 Next.js 13 中继续使用，但如果您想尝试新app功能，请参阅新的 beta 文档。

# 快速入门

<p>欢迎来到 Next.js 文档！</p>
<p>如果您不熟悉 Next.js，我们建议您从学习课程开始。带有测验的交互式课程将指导您了解使用 Next.js 所需的一切。</p>
<p>如果您对任何与 Next.js 相关的问题有任何疑问，随时欢迎您在GitHub Discussions上向我们的社区提问。</p>

### 系统要求
- Node.js 14.6.0或更高版本
- 支持 MacOS、Windows（包括 WSL）和 Linux

## 自动设置
我们建议使用 创建一个新的 Next.js 应用程序create-next-app，它会自动为您设置所有内容。要创建项目，请运行：
```shell
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```
如果您想从 TypeScript 项目开始，您可以使用以下--typescript标志：
```shell
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app --typescript
```
安装完成后：
- 运行`npm run dev`或`yarn dev`或`pnpm dev`启动开发服务器`http://localhost:3000`
- 访问`http://localhost:3000`以查看您的申请
- `pages/index.js`在浏览器中编辑并查看更新的结果

有关如何使用的更多信息`create-next-app`，您可以查看`create-next-app`文档。

## 手动设置
安装`next`，`react`并`react-dom`在您的项目中：
```shell
npm install next react react-dom
# or
yarn add next react react-dom
# or
pnpm add next react react-dom
```
打开package.json并添加以下内容scripts：
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```
这些脚本涉及开发应用程序的不同阶段：
- `dev` - 运行`next dev`以在开发模式下启动 Next.js
- `build` - 运行`next build`以构建应用程序以供生产使用
- `start` - 运行`next start`以启动 Next.js 生产服务器
- `lint` - 运行`next lint`设置 Next.js 的内置 ESLint 配置

在应用程序的根目录下`pages`创建两个目录：`public`
- `pages` - 根据文件名与路线相关联。例如`pages/about.js`映射到`/about`
- `public` - 存储静态资产，例如图像、字体等。`public`然后您的代码可以从基本 URL (`/`) 开始引用目录中的文件。

Next.js 是围绕pages的概念构建的。页面是从目录中的、或文件导出的React组件。您甚至可以使用文件名添加动态路由参数。 `.js` `.jsx` `.ts` `.tsx` `pages`

在`pages`目录中添加`index.js`文件以开始使用。这是用户访问应用程序根目录时呈现的页面。

填充`pages/index.js`以下内容：
```js
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```
设置完成后：

- 运行`npm run dev`或`yarn dev`或`pnpm dev`启动开发服务器`http://localhost:3000`
- 访问`http://localhost:3000`以查看您的申请
- `pages/index.js`在浏览器中编辑并查看更新的结果

到目前为止，我们得到：
- 自动编译和打包
- 反应快速刷新
- 静态生成和服务端渲染`pages/`
- 静态文件通过`public/`它映射到基本 URL (`/`)

此外，任何 Next.js 应用程序从一开始就可以投入生产。在我们的部署文档中阅读更多信息。