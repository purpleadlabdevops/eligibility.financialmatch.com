export default {
  target: 'server',
  head: {
    title: 'National Tax Credit',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "facebook-domain-verification", content: "kiopg5rxifn74adikb3gbcqtbnreck" }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/tnc-favicon.png' }],
    script: [
      {
        ssr: false,
        async: true,
        src: '/js/gtm.js',
        callback: () => {
          console.log('GTM loaded')
        }
      },
      {
        ssr: false,
        async: true,
        src: '/js/fb.js',
        callback: () => {
          console.log('FB loaded')
        }
      },
      {
        ssr: false,
        src: '/js/leadId.js',
        body: true,
        id: 'LeadiDscript',
        defer: true,
        hid: 'LeadiDscript',
        callback: () => {
          console.log('leadId loaded')
        }
      },
      {
        src: '/js/hyros.js',
        ssr: false,
        async: true,
        callback: () => {
          console.log('Hyros loaded')
        }
      },
      {
        ssr: false,
        async: true,
        src: 'https://b-js.ringba.com/CA2919c057d34b44f9bdecc7bfa5a0da3b',
        callback: () => {
          console.log('Ringba loaded')
        }
      },
    ]
  },
  styleResources: {
    scss: ['styles/_functions.scss'],
  },
  plugins: [
    { src: '~/plugins/vue-tiny-slider.client.js' },
  ],
  css: ['@/styles/global'],
  components: true,
  modules: ['@nuxtjs/axios', 'nuxt-sweetalert2', '@nuxtjs/style-resources'],
  env: {
    campid: process.env.campid,
    X_KEY: process.env.X_KEY,
    API: process.env.NODE_ENV === 'production' ? process.env.API_production : process.env.API_development,
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  serverMiddleware: ['~/api/index.js'],
}
