export default {
  base: '/my-blog/',

  title: '氧化氢', // 所有文档的浏览器标签title
  description: '氧化氢的网站', // 会渲染成<meta>标签，SEO用

  themeConfig: {

    siteTitle: '氧化氢的网站',
    logo: '/logo.png',


    nav: [{
      text: '前端',
      items: [{
          text: '手写题',
          link: '/front/handwriting/index'
        },
        {
          text: '其他大佬知识链接',
          link: '/front/otherlink/index'
        },
        {
          text: '2022年春招复习准备',
          link: '/front/2022-spring/index'
        },
        {
          text: '力扣部分题目题解和代码',
          link: '/front/leetcode/index'
        }
      ]
    }],

    // sidebar: {},


    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/xs-web-lhdd'
    }],


    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present H2O'
    },
  }
}