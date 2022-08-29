module.exports = {
  base: '/vuepress-demo/',
  title: 'Ske11',
  description: 'Ske11 Demo',
  head: ['link', { rel: 'icon', href: '/logo.png'}], 
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: '语言', 
      ariaLabel: 'Language Menu', 
      items: [
        {text: '中文',link: '/language/chinese/'},
        {text: '英文',link: '/language/english/'}
      ]},
    ]
  }
}