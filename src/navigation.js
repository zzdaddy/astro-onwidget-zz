import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/',
      //   links: [
      //     {
      //       text: 'SaaS',
      //       href: getPermalink('/homes/saas'),
      //     },
      //     {
      //       text: 'Startup',
      //       href: getPermalink('/homes/startup'),
      //     },
      //     {
      //       text: 'Mobile App',
      //       href: getPermalink('/homes/mobile-app'),
      //     },
      //     {
      //       text: 'Personal',
      //       href: getPermalink('/homes/personal'),
      //     },
      //   ],
    },
    {
      text: '基于首页的独立页面',
      links: [
        {
          text: '导航到首页的blog位置',
          href: getPermalink('/#blog'),
        },
        {
          text: 'pages/services.astro页面',
          href: getPermalink('/services'),
        },
        {
          text: 'pages/pricing.astro页面',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: '前端',
      links: [
        {
          text: '所有文章（全站的）',
          href: getBlogPermalink(),
        },
        {
          text: 'content/post 下的某篇文章',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: '基于 MDX的文章',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Vue相关文章',
          href: getPermalink('vue', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: '后端',
      links: [
        {
          text: '所有文章（全站的）',
          href: getBlogPermalink(),
        },
        {
          text: 'content/post 下的某篇文章',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: '基于 MDX的文章',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Rect相关文章',
          href: getPermalink('react', 'category'),
        },
        {
          text: '标签【astro】合集',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: '扩展',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    // 这个应该没有用， 只是作者表示他用了 widget 的概念，可以理解为组件化
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // TODO 顶部右上角的按钮
  actions: [{ text: '可修改任意地址', href: 'https://github.com/zzdaddy', target: '_blank' }],
};

export const footerData = {
  //   links: [
  //     {
  //       title: 'Product',
  //       links: [
  //         { text: 'Features', href: '#' },
  //         { text: 'Security', href: '#' },
  //         { text: 'Team', href: '#' },
  //         { text: 'Enterprise', href: '#' },
  //         { text: 'Customer stories', href: '#' },
  //         { text: 'Pricing', href: '#' },
  //         { text: 'Resources', href: '#' },
  //       ],
  //     },
  //     {
  //       title: 'Platform',
  //       links: [
  //         { text: 'Developer API', href: '#' },
  //         { text: 'Partners', href: '#' },
  //         { text: 'Atom', href: '#' },
  //         { text: 'Electron', href: '#' },
  //         { text: 'AstroWind Desktop', href: '#' },
  //       ],
  //     },
  //     {
  //       title: 'Support',
  //       links: [
  //         { text: 'Docs', href: '#' },
  //         { text: 'Community Forum', href: '#' },
  //         { text: 'Professional Services', href: '#' },
  //         { text: 'Skills', href: '#' },
  //         { text: 'Status', href: '#' },
  //       ],
  //     },
  //     {
  //       title: 'Company',
  //       links: [
  //         { text: 'About', href: '#' },
  //         { text: 'Blog', href: '#' },
  //         { text: 'Careers', href: '#' },
  //         { text: 'Press', href: '#' },
  //         { text: 'Inclusion', href: '#' },
  //         { text: 'Social Impact', href: '#' },
  //         { text: 'Shop', href: '#' },
  //       ],
  //     },
  //   ],
  //  TODO 条款和隐私政策 可以去别的网站扒拉扒拉中文版， 一般非盈利的网站不会有什么问题
  //   secondaryLinks: [
  //     { text: 'Terms', href: getPermalink('/terms') },
  //     { text: 'Privacy Policy', href: getPermalink('/privacy') },
  //   ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // TODO 底部 版权声明 修改图片url为本地图片
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(src/assets/favicons/favicon.ico)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="/"> zzdaddy</a> · All rights reserved.
  `,
};
