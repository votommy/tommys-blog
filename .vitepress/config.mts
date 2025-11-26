import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Tommy's Blog",
  description: "Welcome to my corner of the web. This is my digital journal where I post my art, life updates, and whatever’s on my mind.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog posts', link: '/blog-posts' }
    ],

    // sidebar: [
    //   {
    //     text: 'BlogPosts',
    //     items: [
    //       { text: 'Earthrise', link: '/blog-posts/earthrise' },
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
