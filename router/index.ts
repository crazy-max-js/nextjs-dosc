import type {SidebarConfig} from "@vuepress/theme-default/lib/shared/nav";

export const sidebar: SidebarConfig = [
  // SidebarItem
  {
    text: '快速入门',
    link: '/getting-started',
  },
  {
    text: '基本功能',
    children: [
      {
        text: '页面',
        link: '/basic-features/pages'
      },
      {
        text: '数据获取',
        children: [
          {
            text: '概述',
            link: '/basic-features/data-fetching/overview'
          },
          {
            text: 'getServerSideProps',
            link: '/basic-features/data-fetching/get-server-side-props'
          },
          {
            text: 'getStaticPaths',
            link: '/basic-features/data-fetching/get-static-paths'
          },
          {
            text: 'getStaticProps',
            link: '/basic-features/data-fetching/get-static-props'
          },
          {
            text: 'ISR',
            link: '/basic-features/data-fetching/incremental-static-regeneration'
          },
          {
            text: '客户端',
            link: '/basic-features/data-fetching/client-side'
          }
        ]
      },
      {
        text: '内置 CSS 支持',
        link: '/basic-features/built-in-css-support'
      },
      {
        text: '布局',
        link: '/basic-features/layouts'
      },
      {
        text: '图像优化',
        link: '/basic-features/image-optimization'
      },
      {
        text: '字体优化',
        link: '/basic-features/font-optimization'
      },
      {
        text: '静态文件服务',
        link: '/basic-features/static-file-serving'
      },
      {
        text: '快速刷新',
        link: '/basic-features/fast-refresh'
      },
      {
        text: 'ESLint',
        link: '/basic-features/eslint'
      },
      {
        text: 'TypeScript',
        link: '/basic-features/typescript'
      },
      {
        text: '环境变量',
        link: '/basic-features/environment-variables'
      },
      {
        text: '支持的浏览器和功能',
        link: '/basic-features/supported-browsers-features'
      },
      {
        text: '处理脚本',
        link: '/basic-features/script'
      },
    ]
  },
  {
    text:'路由',
    children:[
      {
        text:'介绍',
        link:'/routing/introduction'
      },
      {
        text:'动态路由',
        link: '/routing/dynamic-routes'
      },
      {
        text:'Imperatively',
        link: '/routing/imperatively'
      },
      {
        text:'浅路由',
        link: '/routing/shallow-routing'
      },
    ]
  },
  {
    text:'API 路由',
    children:[
      {
        text: '介绍',
        link: '/api-routes/introduction'
      },
      {
        text: '动态API路由',
        link: '/api-routes/dynamic-api-routes'
      },
      {
        text: '请求助手',
        link: '/api-routes/request-helpers'
      },
      {
        text: '响应助手',
        link: '/api-routes/response-helpers'
      },
      {
        text: 'Edge API 路由（测试版）',
        link: '/api-routes/edge-api-routes'
      }
    ]
  },
  {
    text:"生产环境",
    link:'/going-to-production'
  },
  {
    text:"部署",
    link:'/deployment'
  },
  {
    text:"认证",
    link:'/authentication'
  },
  {
    text:"测试",
    link:'/testing'
  },
  {
    text:"可访问性",
    link:'/accessibility'
  },
  {
    text:"指南",
    children:[
      {
        text: '构建表单',
        link: '/guides/building-forms'
      }
    ]
  },
  {
    text:"高级功能",
    children:[
      {
        text: 'Next.js Compiler',
        link: '/advanced-features/compiler'
      },
      {
        text: 'Turbopack',
        link: '/advanced-features/turbopack'
      },
      {
        text: '预览模式',
        link: '/advanced-features/preview-mode'
      },
      {
        text: '动态导入',
        link: '/advanced-features/dynamic-import'
      },
      {
        text: '自动静态优化',
        link: '/advanced-features/automatic-static-optimization'
      },
      {
        text: '静态 HTML 导出',
        link: '/advanced-features/static-html-export'
      },
      {
        text: '绝对路径导入和模块路径别名',
        link: '/advanced-features/module-path-aliases'
      },
      {
        text: '使用 MDX',
        link: '/advanced-features/using-mdx'
      },
      {
        text: 'AMP 支持',
        children: [
          {
            text:'介绍',
            link:'/advanced-features/amp-support/introduction'
          },
          {
            text:'添加 AMP 组件',
            link:'/advanced-features/amp-support/adding-amp-components'
          },
          {
            text:'AMP 验证',
            link:'/advanced-features/amp-support/amp-validation'
          },
          {
            text:'静态 HTML 导出中的 AMP',
            link:'/advanced-features/amp-support/amp-in-static-html-export'
          },
          {
            text:'TypeScript',
            link:'/advanced-features/amp-support/typescript'
          }
        ]
      },
      {
        text: '自定义 Babel 配置',
        link: '/advanced-features/customizing-babel-config'
      },
      {
        text: '自定义 PostCSS 配置',
        link: '/advanced-features/customizing-postcss-config'
      },
      {
        text: '自定义服务器',
        link: '/advanced-features/custom-server'
      },
      {
        text: '自定义`应用`',
        link: '/advanced-features/custom-app'
      },
      {
        text: '自定义`文档`',
        link: '/advanced-features/custom-document'
      },
      {
        text: '自定义错误页面',
        link: '/advanced-features/custom-error-page'
      },
      {
        text: '`src` 目录',
        link: '/advanced-features/src-directory'
      },
      {
        text: 'CI 构建缓存',
        link: '/advanced-features/ci-build-caching'
      },
      {
        text: '多地区',
        link: '/advanced-features/multi-zones'
      },
      {
        text: '性能测试',
        link: '/advanced-features/measuring-performance'
      },
      {
        text: '中间件',
        link: '/advanced-features/middleware'
      },
      {
        text: '调试',
        link: '/advanced-features/debugging'
      },
      {
        text: '错误处理',
        link: '/advanced-features/error-handling'
      },
      {
        text: 'Source Maps',
        link: '/advanced-features/source-maps'
      },
      {
        text: 'Codemods',
        link: '/advanced-features/codemods'
      },
      {
        text: '国际化路由',
        link: '/advanced-features/i18n-routing'
      },
      {
        text: '输出文件跟踪',
        link: '/advanced-features/output-file-tracing'
      },
      {
        text: '安全标头',
        link: '/advanced-features/security-headers'
      },
      {
        text: 'React 18',
        children: [
          {
            text: '概述',
            link: '/advanced-features/react-18/overview'
          },
          {
            text: '流式SSR',
            link: '/advanced-features/react-18/streaming'
          },
          {
            text: 'React服务器组件',
            link: '/advanced-features/react-18/server-components'
          },
          {
            text: '可切换运行时',
            link: '/advanced-features/react-18/switchable-runtime'
          }
        ]
      },
      {
        text: '',
        link: ''
      },
    ]
  },
];
