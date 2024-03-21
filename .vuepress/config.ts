import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { readFileSync } from 'fs';
import { join } from 'path'
const config = JSON.parse(readFileSync(join(__dirname, './json/config.json'), 'utf-8'));

export default defineUserConfig({
  title: config.title,
  description: config.description,
  theme: recoTheme({
    colorMode: config.colorMode, //  默认外观颜色
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: config.author,
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/klblog/xiaozhao.git",
    // docsBranch: "master",
    // docsDir: "docs",
    lastUpdated: false,
    lastUpdatedText: '发布时间',
    autoSetBlogCategories: true, // 自动设置分类
    autoAddCategoryToNavbar: {
      location: config.autoAddCategoryToNavbar.location, // 默认 0
      categoryText: config.autoAddCategoryToNavbar.categoryText, // 默认 categories
      tagText: config.autoAddCategoryToNavbar.tagText // 默认 tags
    },
    autoSetSeries: true,
    // 文档路径
    series: {
      "/docs/cad/": [
        {
          text: "下载地址",
          children: ["home", "theme"],
        },
        {
          text: "安装教程",
          children: ["api", "plugin"],
        },
      ],
      "/docs/contact/": [
        {
          text: "联系方式",
          children: [ "小红书.html", "微信.html", "电话.html"],
        },
        {
          text: config.bulletin.body5Text,
          children: ["微信.html", "支付宝.html"]
        }
      ],
    },
    // 顶部导航栏
    navbar: [
      { text: "首页", link: "/" },
      {
        text: config.navbarContact,
        children: [
          { text: "小红书", link: "/docs/contact/小红书.html" },
          { text: "微信", link: "/docs/contact/微信.html" },
          { text: "电话", link: "/docs/contact/电话.html" },
        ],
      },
      { text: "软件教程", children: [
        { text: 'CAD', link: '/docs/cad/'},
        { text: '酷家乐', link: '/docs/kujiale/'},
        { text: '3DMAX', link: '/docs/3dmax/'},
        ]
      },
    ],
    // 公告
    bulletin: config.bulletin.status ?  {
      title: config.bulletin.title,
      body: [
        {
          type: "text",
          content: config.bulletin.body1Content,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: config.bulletin.body2.text,
        },
        {
          type: "text",
          content: config.bulletin.body2.content,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: config.bulletin.body4.text,
        },
        {
          type: "text",
          content: config.bulletin.body4.content,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: config.bulletin.body5Text,
              link: "/docs/feeding/微信.html",
            },
          ],
        },
      ],
    } : {}
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
