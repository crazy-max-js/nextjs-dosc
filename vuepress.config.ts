import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
// import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname } from '@vuepress/utils'
import { sidebar } from "./router";
import { commentPlugin } from "vuepress-plugin-comment2";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import sitemapPlugin from "vuepress-plugin-sitemap2";

const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  lang: "zh-CN",
  title: "Next.js中文文档",
  description: "阅读官方文档快速上手 Next.js，并了解所有功能的详细信息！",
  head:[
      ['meta',{name:'keywords',content:'Next.js中文文档, Next.js中文网'}]
  ],
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  theme: defaultTheme({
    navbar: [
      {
        text: "指南",
        link: "/guide/getting-started",
        activeMatch: '/guide/'
      },
      {
        text: "API 参考",
        link: "/api-reference/cli"
      }
    ],
    sidebar: sidebar,
    contributors: false,
    contributorsText: "贡献者",
    lastUpdatedText: '上次更新',
    backToHome: "返回首页",
    toggleColorMode: "切换主题颜色"
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      }
    }),
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, './components'),
    // }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'crazy-max-js/nextjs-dosc-comment',
      repoId: 'R_kgDOIaiZcw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOIaiZc84CSfkM'
    }),
    googleAnalyticsPlugin({
      id: 'G-4EC0D6T29F'
    }),
    sitemapPlugin({
      hostname: 'https://nextjs.xiaofany.com'
    })
  ]
});
