import type {SidebarConfig} from "@vuepress/theme-default/lib/shared/nav";

export const sidebar: SidebarConfig = {
  '/guide/': [
    // SidebarItem
    {
      text: '快速入门',
      link: '/guide/getting-started',
    },
    {
      text: '基本功能',
      children: [
        {
          text: '页面',
          link: '/guide/basic-features/pages'
        },
        {
          text: '数据获取',
          children: [
            {
              text: '概述',
              link: '/guide/basic-features/data-fetching/overview'
            },
            {
              text: 'getServerSideProps',
              link: '/guide/basic-features/data-fetching/get-server-side-props'
            },
            {
              text: 'getStaticPaths',
              link: '/guide/basic-features/data-fetching/get-static-paths'
            },
            {
              text: 'getStaticProps',
              link: '/guide/basic-features/data-fetching/get-static-props'
            },
            {
              text: 'ISR',
              link: '/guide/basic-features/data-fetching/incremental-static-regeneration'
            },
            {
              text: '客户端',
              link: '/guide/basic-features/data-fetching/client-side'
            }
          ]
        },
        {
          text: '内置 CSS 支持',
          link: '/guide/basic-features/built-in-css-support'
        },
        {
          text: '布局',
          link: '/guide/basic-features/layouts'
        },
        {
          text: '图像优化',
          link: '/guide/basic-features/image-optimization'
        },
        {
          text: '字体优化',
          link: '/guide/basic-features/font-optimization'
        },
        {
          text: '静态文件服务',
          link: '/guide/basic-features/static-file-serving'
        },
        {
          text: '快速刷新',
          link: '/guide/basic-features/fast-refresh'
        },
        {
          text: 'ESLint',
          link: '/guide/basic-features/eslint'
        },
        {
          text: 'TypeScript',
          link: '/guide/basic-features/typescript'
        },
        {
          text: '环境变量',
          link: '/guide/basic-features/environment-variables'
        },
        {
          text: '支持的浏览器和功能',
          link: '/guide/basic-features/supported-browsers-features'
        },
        {
          text: '处理脚本',
          link: '/guide/basic-features/script'
        },
      ]
    },
    {
      text: '路由',
      children: [
        {
          text: '介绍',
          link: '/guide/routing/introduction'
        },
        {
          text: '动态路由',
          link: '/guide/routing/dynamic-routes'
        },
        {
          text: 'Imperatively',
          link: '/guide/routing/imperatively'
        },
        {
          text: '浅路由',
          link: '/guide/routing/shallow-routing'
        },
      ]
    },
    {
      text: 'API 路由',
      children: [
        {
          text: '介绍',
          link: '/guide/api-routes/introduction'
        },
        {
          text: '动态API路由',
          link: '/guide/api-routes/dynamic-api-routes'
        },
        {
          text: '请求助手',
          link: '/guide/api-routes/request-helpers'
        },
        {
          text: '响应助手',
          link: '/guide/api-routes/response-helpers'
        },
        {
          text: 'Edge API 路由（测试版）',
          link: '/guide/api-routes/edge-api-routes'
        }
      ]
    },
    {
      text: "生产环境",
      link: '/guide/going-to-production'
    },
    {
      text: "部署",
      link: '/guide/deployment'
    },
    {
      text: "认证",
      link: '/guide/authentication'
    },
    {
      text: "测试",
      link: '/guide/testing'
    },
    {
      text: "可访问性",
      link: '/guide/accessibility'
    },
    {
      text: "指南",
      children: [
        {
          text: '构建表单',
          link: '/guide/guides/building-forms'
        }
      ]
    },
    {
      text: "高级功能",
      children: [
        {
          text: 'Next.js Compiler',
          link: '/guide/advanced-features/compiler'
        },
        {
          text: 'Turbopack',
          link: '/guide/advanced-features/turbopack'
        },
        {
          text: '预览模式',
          link: '/guide/advanced-features/preview-mode'
        },
        {
          text: '动态导入',
          link: '/guide/advanced-features/dynamic-import'
        },
        {
          text: '自动静态优化',
          link: '/guide/advanced-features/automatic-static-optimization'
        },
        {
          text: '静态 HTML 导出',
          link: '/guide/advanced-features/static-html-export'
        },
        {
          text: '绝对路径导入和模块路径别名',
          link: '/guide/advanced-features/module-path-aliases'
        },
        {
          text: '使用 MDX',
          link: '/guide/advanced-features/using-mdx'
        },
        {
          text: 'AMP 支持',
          children: [
            {
              text: '介绍',
              link: '/guide/advanced-features/amp-support/introduction'
            },
            {
              text: '添加 AMP 组件',
              link: '/guide/advanced-features/amp-support/adding-amp-components'
            },
            {
              text: 'AMP 验证',
              link: '/guide/advanced-features/amp-support/amp-validation'
            },
            {
              text: '静态 HTML 导出中的 AMP',
              link: '/guide/advanced-features/amp-support/amp-in-static-html-export'
            },
            {
              text: 'TypeScript',
              link: '/guide/advanced-features/amp-support/typescript'
            }
          ]
        },
        {
          text: '自定义 Babel 配置',
          link: '/guide/advanced-features/customizing-babel-config'
        },
        {
          text: '自定义 PostCSS 配置',
          link: '/guide/advanced-features/customizing-postcss-config'
        },
        {
          text: '自定义服务器',
          link: '/guide/advanced-features/custom-server'
        },
        {
          text: '自定义`应用`',
          link: '/guide/advanced-features/custom-app'
        },
        {
          text: '自定义`文档`',
          link: '/guide/advanced-features/custom-document'
        },
        {
          text: '自定义错误页面',
          link: '/guide/advanced-features/custom-error-page'
        },
        {
          text: '`src` 目录',
          link: '/guide/advanced-features/src-directory'
        },
        {
          text: 'CI 构建缓存',
          link: '/guide/advanced-features/ci-build-caching'
        },
        {
          text: '多地区',
          link: '/guide/advanced-features/multi-zones'
        },
        {
          text: '性能测试',
          link: '/guide/advanced-features/measuring-performance'
        },
        {
          text: '中间件',
          link: '/guide/advanced-features/middleware'
        },
        {
          text: '调试',
          link: '/guide/advanced-features/debugging'
        },
        {
          text: '错误处理',
          link: '/guide/advanced-features/error-handling'
        },
        {
          text: 'Source Maps',
          link: '/guide/advanced-features/source-maps'
        },
        {
          text: 'Codemods',
          link: '/guide/advanced-features/codemods'
        },
        {
          text: '国际化路由',
          link: '/guide/advanced-features/i18n-routing'
        },
        {
          text: '输出文件跟踪',
          link: '/guide/advanced-features/output-file-tracing'
        },
        {
          text: '安全标头',
          link: '/guide/advanced-features/security-headers'
        },
        {
          text: 'React 18',
          children: [
            {
              text: '概述',
              link: '/guide/advanced-features/react-18/overview'
            },
            {
              text: '流式SSR',
              link: '/guide/advanced-features/react-18/streaming'
            },
            {
              text: 'React服务器组件',
              link: '/guide/advanced-features/react-18/server-components'
            },
            {
              text: '可切换运行时',
              link: '/guide/advanced-features/react-18/switchable-runtime'
            }
          ]
        },
      ]
    },
    {
      text: '升级指南',
      link: '/guide/upgrading'
    },
    {
      text: '迁移到 Next.js',
      children: [
        {
          text: '逐步采用 Next.js',
          link: '/guide/migrating/incremental-adoption'
        },
        {
          text: '从Gatsby迁移',
          link: '/guide/migrating/from-gatsby'
        },
        {
          text: '从 Create React App 迁移',
          link: '/guide/migrating/from-create-react-app'
        },
        {
          text: '从 React Router迁移',
          link: '/guide/migrating/from-react-router'
        },
      ],
    },
    {
      text: 'FAQ',
      link: '/guide/faq'
    },
  ],
  '/api-reference/':[
    {
      text:'CLI',
      link:'/api-reference/cli'
    },
    {
      text:'Create Next App',
      link:'/api-reference/create-next-app'
    },
    {
      text:'next/router',
      link:'/api-reference/next/router'
    },
    {
      text:'next/link',
      link:'/api-reference/next/link'
    },
    {
      text:'next/image',
      link:'/api-reference/next/image'
    },
    {
      text:'next/script',
      link:'/api-reference/next/script'
    },
    {
      text:'next/head',
      link:'/api-reference/next/head'
    },
    {
      text:'next/amp',
      link:'/api-reference/next/amp'
    },
    {
      text:'next/server',
      link:'/api-reference/next/server'
    },
    {
      text:'@next/font',
      link:'/api-reference/@next/font'
    },
    {
      text:'next/legacy/image',
      link:'/api-reference/next/legacy/image'
    },
    {
      text:'Edge Runtime',
      link:'/api-reference/edge-runtime'
    },
    {
      text:'Data Fetching',
      children:[
        {
          text:'getInitialProps',
          link:'/api-reference/data-fetching/get-initial-props'
        },
        {
          text: 'getServerSideProps',
          link: '/api-reference/data-fetching/get-server-side-props'
        },
        {
          text: 'getStaticPaths',
          link: '/api-reference/data-fetching//get-static-paths'
        },
        {
          text: 'getStaticProps',
          link: '/api-reference/data-fetching/get-static-props'
        },
      ]
    },
    {
      text:'Static Optimization Indicator',
      link:'/api-reference/static-optimization-indicator'
    },
    {
      text:'next.config.js',
      children:[
        {
          text: '介绍',
          link: '/api-reference/next.config.js/introduction'
        },
        {
          text: '环境变量',
          link: '/api-reference/next.config.js/environment-variables'
        },
        {
          text: '基本路径',
          link: '/api-reference/next.config.js/basepath'
        },
        {
          text: '重写',
          link: '/api-reference/next.config.js/rewrites'
        },
        {
          text: '重定向',
          link: '/api-reference/next.config.js/redirects'
        },
        {
          text: '自定义 Headers',
          link: '/api-reference/next.config.js/headers'
        },
        {
          text: '自定义页面扩展',
          link: '/api-reference/next.config.js/custom-page-extensions'
        },
        {
          text: '带有资产前缀的 CDN 支持',
          link: '/api-reference/next.config.js/cdn-support-with-asset-prefix'
        },
        {
          text: '自定义 Webpack 配置',
          link: '/api-reference/next.config.js/custom-webpack-config'
        },
        {
          text: '压缩',
          link: '/api-reference/next.config.js/compression'
        },
        {
          text: '运行时配置',
          link: '/api-reference/next.config.js/runtime-configuration'
        },
        {
          text: '禁用 x-powered-by',
          link: '/api-reference/next.config.js/disabling-x-powered-by'
        },
        {
          text: '禁用 ETag 生成',
          link: '/api-reference/next.config.js/disabling-etag-generation'
        },
        {
          text: '禁用 HTTP Keep-Alive',
          link: '/api-reference/next.config.js/disabling-http-keep-alive'
        },
        {
          text: '设置自定义构建目录',
          link: '/api-reference/next.config.js/setting-a-custom-build-directory'
        },
        {
          text: '配置构建 ID',
          link: '/api-reference/next.config.js/configuring-the-build-id'
        },
        {
          text: '配置 onDemandEntries',
          link: '/api-reference/next.config.js/configuring-onDemandEntries'
        },
        {
          text: '忽略 ESLint',
          link: '/api-reference/next.config.js/ignoring-eslint'
        },
        {
          text: '忽略 TypeScript 错误',
          link: '/api-reference/next.config.js/ignoring-typescript-errors'
        },
        {
          text: '导出路径图',
          link: '/api-reference/next.config.js/exportPathMap'
        },
        {
          text: '尾随斜线',
          link: '/api-reference/next.config.js/trailing-slash'
        },
        {
          text: 'React 严格模式',
          link: '/api-reference/next.config.js/react-strict-mode'
        },
        {
          text: 'URL 导入',
          link: '/api-reference/next.config.js/url-imports'
        },
        {
          text: '构建指标',
          link: '/api-reference/next.config.js/build-indicator'
        },
      ]
    },
  ]
}
