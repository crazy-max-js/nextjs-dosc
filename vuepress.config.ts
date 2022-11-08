import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from '@vuepress/utils'
import { sidebar } from "./router";
import { commentPlugin } from "vuepress-plugin-comment2";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

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
        text: "指南",
        link: "/guide/getting-started",
        activeMatch:'/guide/'
      },
      {
        text:"API 参考",
        link:"/api-reference/cli"
      }
    ],
    sidebar: sidebar,
    contributors:false,
    contributorsText:"贡献者",
    lastUpdatedText:'上次更新',
    backToHome:"返回首页",
    toggleColorMode:"切换主题颜色"
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
    commentPlugin({
      provider:'Giscus',
      repo:'20854390/docs',
      repoId:'R_kgDOIXtFgQ',
      category:'General',
      categoryId:'DIC_kwDOIXtFgc4CSbrM'
    }),
    googleAnalyticsPlugin({
      id:'G-4EC0D6T29F'
    }),
  ]
});
