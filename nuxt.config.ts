import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-08-13',

  // 伺服器端環境變數
  runtimeConfig: {
    // 伺服端與客戶端
    public: {
      webName: process.env.NUXT_ENV_WEB_TITLE,
      navTitle: process.env.NUXT_ENV_NAV_TITLE,
      apiUrl: process.env.NUXT_ENV_API_URL,
      domain: process.env.NUXT_ENV_URL_DOMAIN,
      route: process.env.NUXT_ENV_URL_ROUTE,
      cache: process.env.NUXT_ENV_CACHE, // cms api用
      status: process.env.NUXT_ENV_STATUS, // cms api用
      gaEventName: process.env.NUXT_ENV_GA_EVENT_NAME,
    }
  },

  // meta / GA 設定
  app: {
    baseURL: process.env.NUXT_ENV_URL_ROUTE, // 請放專案的路徑
    head: {
      title: process.env.NUXT_ENV_WEB_TITLE,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'zh-tw',
        'data-title': process.env.NUXT_ENV_GA_EVENT_NAME // 康健GA
      },
      meta: [
        {
          name: 'description',
          content: process.env.NUXT_ENV_OG_DESCRIPTION
        },
        {
          name: 'keywords',
          content: process.env.NUXT_ENV_OG_KEYWORDS
        },

        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: process.env.NUXT_ENV_URL_DOMAIN + process.env.NUXT_ENV_URL_ROUTE
        },
        {
          property: 'og:site_name',
          content: process.env.NUXT_ENV_WEB_TITLE
        },
        {
          property: 'og:title',
          content: process.env.NUXT_ENV_WEB_TITLE
        },
        {
          property: 'og:description',
          content: process.env.NUXT_ENV_OG_DESCRIPTION
        },

        {
          property: 'og:image',
          content: process.env.NUXT_ENV_OG_IMAGE_URL
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_ENV_URL_DOMAIN + process.env.NUXT_ENV_URL_ROUTE
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCMN77" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }
      ],
      script: [
        {
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MCMN77');
          `
        },
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.6.0.min.js',
          defer: true
        },
      ],
    }
  },
  "imports": {
    "dirs": ['stores']
  },

  modules: [
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
    'nuxt-swiper',
    // 'v-gsap-nuxt'
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    {
      src: '~/plugins/aos.js',
      // ssr: false,
      mode: 'client'
    }
  ],

})