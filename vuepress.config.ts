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
                text:'增量静态再生',
                link:'/basic-features/data-fetching/incremental-static-regeneration'
              },
              {
                text:'客户端',
                link:'/basic-features/data-fetching/client-side'
              }
            ]
          }
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
