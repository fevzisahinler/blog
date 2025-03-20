const siteMetadata = {
  title: 'Blog | Fevzi Can Sahinler',
  author: 'Fevzi Can Sahinler',
  headerTitle: 'Thoughts Only',
  description: 'My personal blog where I share my journey',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://fevzisahinler.com',
  siteRepo: 'https://github.com/fevzisahinler',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'fevzisahinler@gmail.com',
  github: 'https://github.com/fevzisahinler',
  linkedin: 'https://www.linkedin.com/in/fevzi-can-sahinler',
  website: 'https://fevzisahinler.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628',
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
