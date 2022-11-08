import {defineUserConfig, defaultTheme} from "vuepress";
import {searchPlugin} from '@vuepress/plugin-search'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import {getDirname, path} from '@vuepress/utils'
import {sidebar} from "./router";

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
    sidebar: sidebar
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
