import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: "zh-CN",
  title: "",
  description: "阅读官方文档快速上手 Next.js，并了解所有功能的详细信息！",
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  theme: defaultTheme({
    logo: 'https://www.nextjs.cn/static/images/nextjs-logo.png',
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '快速入门',
        link: '/getting-started',
      },
      {
        text: '基本功能',
        children:[
          {
            text:'页面',
            link:'/basic-features/pages'
          },
          {
            text:'数据获取',
            children:[
              {
                text:'概述',
                link:'/basic-features/data-fetching/overview'
              },
              {
                text:'getServerSideProps',
                link:'/basic-features/data-fetching/get-server-side-props'
              },
              {
                text:'getStaticPaths',
                link:'/basic-features/data-fetching/get-static-paths'
              },
              {
                text:'getStaticProps',
                link:'/basic-features/data-fetching/get-static-props'
              },
              {
                text:'ISR',
                link:'/basic-features/data-fetching/incremental-static-regeneration'
              },
              {
                text:'客户端',
                link:'/basic-features/data-fetching/client-side'
              }
            ]
          },
          {
            text:'内置 CSS 支持',
            link:'/basic-features/built-in-css-support'
          },
          {
            text:'布局',
            link:'/basic-features/layouts'
          },
          {
            text:'图像优化',
            link:'/basic-features/image-optimization'
          },
          {
            text:'字体优化',
            link:'/basic-features/font-optimization'
          },
          {
            text:'静态文件服务',
            link:'/basic-features/static-file-serving'
          },
          {
            text:'快速刷新',
            link:'/basic-features/fast-refresh'
          },
          {
            text:'ESLint',
            link:'/basic-features/eslint'
          },
          {
            text:'TypeScript',
            link:'/basic-features/typescript'
          },
          {
            text:'环境变量',
            link:'/basic-features/environment-variables'
          },
          {
            text:'支持的浏览器和功能',
            link:'/basic-features/supported-browsers-features'
          },
          {
            text:'处理脚本',
            link:'/basic-features/script'
          },
        ]
      },
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      }
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
});
