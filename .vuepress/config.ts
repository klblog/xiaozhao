import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "设计师小赵",
  description: "这是设计师小赵总结的干货",
  theme: recoTheme({
    colorMode: 'dark', //  默认外观颜色
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "小赵",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/klblog/xiaozhao.git",
    // docsBranch: "master",
    // docsDir: "docs",
    // lastUpdatedText: "",
    autoSetBlogCategories: true, // 自动设置分类
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '作品集', // 默认 categories
      tagText: '干货' // 默认 tags
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
          children: ["微信", "小红书", "电话"],
        },
      ],
      '/docs/kujiale/': [],
      '/docs/3dmax/': []
    },
    // 顶部导航栏
    navbar: [
      { text: "首页", link: "/" },
      { text: "软件教程", children: [
        { text: 'CAD', link: '/docs/cad/'},
        { text: '酷家乐', link: '/docs/kujiale/'},
        { text: '3DMAX', link: '/docs/3dmax/'},
        ]
      },
      {
        text: "联系我",
        children: [
          { text: "小红书", link: "/docs/contact/小红书.html" },
          { text: "微信", link: "/docs/contact/微信.html" },
          { text: "电话", link: "/docs/contact/电话.html" },
        ],
      },
    ],
    // 公告
    bulletin: {
      title: '发现更多',
      body: [
        {
          type: "text",
          content: `不想错过最新的设计趋势和作品吗？快来关注我的小红书，让你随时了解最新动态！`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "小红书",
        },
        {
          type: "text",
          content: `
          <a href="https://www.xiaohongshu.com/user/profile/5d8d90d00000000001005a6e" target="__blank">
            <img class="width: 100%;height: auto;" src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/98ff94b0c5907111eb6703247ae9132c.png" alt="点击到小红书查看更多最怕"/>
          </a>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "微信",
        },
        {
          type: "text",
          content: `
            <img alt="微信" src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/fd9bde1d98b729883814c0e85f75dd88.jpg" style="width: 100%;height: auto;"/>
            `,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "投喂",
              link: "/feeding/reward",
            },
          ],
        },
      ],
    },
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
