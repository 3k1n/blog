const { description } = require('../../package')

module.exports = {
  base: "/blog/",
  theme: "vuepress-theme-mini",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    hostname: 'https://ekn.me', // provide to enable sitemap and rss feed generation
    siteName: 'ekn.me', // site name at navbar
    author: 'ekn.me', // author name at footer
    navbar: true,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      { text: 'Archive', link: '/archive/' },      
      {
        text: 'About',
        link: '/about/'
      }      
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
