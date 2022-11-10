# Next.js CLI

Next.js CLI 允许启动、构建和导出你的应用程序。

要获得可用CLI命令的列表，在项目目录中运行以下命令:

```bash
npx next -h
```

([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)的npm为5.2+或更高)

输出应该如下所示:

```bash
Usage
  $ next <command>

Available commands
  build, start, export, dev, lint, telemetry, info

Options
  --version, -v   Version number
  --help, -h      Displays this message

For more information run a command with the --help flag
  $ next build --help
```

你可以将任何[node参数](https://nodejs.org/api/cli.html#cli_node_options_options)传递给`next`命令:

```bash
NODE_OPTIONS='--throw-deprecation' next
NODE_OPTIONS='-r esm' next
NODE_OPTIONS='--inspect' next
```

> 注意:运行 `next` 与运行 `next dev` 相同

## Build

`next build` 创建应用程序的优化生产构建。显示每条路由的信息。

- **Size**– 导航到页面客户端时下载的资产数量。每个路由的大小只包括它的依赖项。
- **First Load JS**– 从服务器访问页面时下载的资产数。所有人共享的JS数量显示为一个单独的指标。

这两个值都用**gzip压缩**。第一个负载用绿色、黄色或红色表示。为性能应用程序的绿色目标。

您可以在`next build`中使用`--profile`标志为React启用生产分析。这需要[Next.js 9.5](/blog/next-9-5):

```bash
next build --profile
```

之后，您可以像在开发中一样使用分析器。

您可以使用`next build`中的`--debug`标志启用更详细的构建输出。这需要 Next.js 9.5.3：

```bash
next build --debug
```

启用此标志后，将显示额外的构建输出，如重写、重定向和标头。

## Development

`next dev` 以开发模式启动应用程序，包括热代码重新加载、错误报告等：

默认情况下，应用程序将从`http:localhost:3000`开始。可以使用 -p 更改默认端口，如下所示：

```bash
npx next dev -p 4000
```

或者使用`PORT`环境变量：

```bash
PORT=4000 npx next dev
```

> 注意：`PORT`不能在`.env`中设置，因为启动HTTP服务器发生在初始化任何其他代码之前。

您还可以将主机名设置为不同于默认的“0.0.0.0”，这对于使应用程序可用于网络上的其他设备非常有用。默认主机名可以用`-H`改变，像这样：

```bash
npx next dev -H 192.168.1.2
```

## Production

`next start` 以生产模式启动应用程序。应用程序应首先使用 [`next build`](#build) 编译。

默认情况下，应用程序将从`http:localhost:3000`开始。可以使用 -p 更改默认端口，如下所示：

```bash
npx next start -p 4000
```

或者使用`PORT`环境变量：

```bash
PORT=4000 npx next start
```

> 注意：`PORT`不能在`.env`中设置，因为启动HTTP服务器发生在初始化任何其他代码之前。

### Keep Alive Timeout

在下游代理（例如 AWS ELBALB 之类的负载均衡器）后面部署 Next.js 时，为 Next 的底层 HTTP 服务器配置 [keep-alive 超时]（https:nodejs.orgapihttp.htmlhttp_server_keepalivetimeout）非常重要，该超时大于下游代理的超时。否则，一旦给定 TCP 连接达到保活超时，Node.js 将立即终止该连接，而不通知下游代理。每当它尝试重用 Node.js 已经终止的连接时，这都会导致代理错误。

要为生产 Next.js 服务器配置超时值，请将`--keepAliveTimeout`（以毫秒为单位）传递给`next start`，如下所示：

```bash
npx next start --keepAliveTimeout 70000
```

## Lint

`next lint`为`pages`、`components`和`lib`目录中的所有文件运行ESLint。如果您的应用程序中尚未配置 ESLint，它还提供了安装任何所需依赖项的指导设置。

如果您有其他想要 lint 的目录，可以使用 --dir 标志指定它们：

```bash
next lint --dir utils
```

## Telemetry

Next.js 收集关于一般使用情况的完全匿名的遥测数据。
参与此匿名计划是可选的，如果您不想分享任何信息，您可以选择退出。

要了解有关telemetry的更多信息，[请阅读此文档](/telemetry/)。

## Info

`next info` 打印有关当前系统的相关详细信息，可用于报告 Next.js 错误。
此信息包括操作系统平台archversion、二进制文件（Node.js、npm、Yarn、pnpm）和 npm 包版本（`next`、`react`、`react-dom`）。

在项目的根目录中运行以下命令：

```bash
next info
```

将为您提供类似以下示例的信息：

```bash
    Operating System:
      Platform: linux
      Arch: x64
      Version: #22-Ubuntu SMP Fri Nov 5 13:21:36 UTC 2021
    Binaries:
      Node: 16.13.0
      npm: 8.1.0
      Yarn: 1.22.17
      pnpm: 6.24.2
    Relevant packages:
      next: 12.0.8
      react: 17.0.2
      react-dom: 17.0.2
```

然后应将此信息粘贴到 GitHub 问题中。
