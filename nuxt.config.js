import env from './config/env';
import sitemap from './config/sitemap';
let pattern = false;
const plugins = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ]
];
if (process.env.NODE_ENV !== 'production') {
  pattern = true;
} else {
  plugins.push('transform-remove-console');
  pattern = false;
}
console.log(process.env.NODE_ENV);
console.log(pattern);
const Timestamp = new Date().getTime();
export default {
  mode: 'universal',
  env: {
    NUXT_ENV: env[process.env.MODE]
  },
  head: {
    htmlAttrs: {
      prefix: 'og:http://ogp.me/ns#'
    },
    title: 'Welcome to IBAX Network | IBAX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        hid: 'Pragma',
        'http-equiv': 'Pragma',
        content: 'no-cache'
      },
      {
        hid: 'Cache-Control',
        'http-equiv': 'Cache-Control',
        content: 'no-cache'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'no' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'IBAX Network'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ibax.io'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `Welcome to IBAX Network`
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `Welcome to IBAX Network`
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ibax.io/image/mate-twitter.png'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://ibax.io/image/mate-twitter.png'
      },
      {
        hid: 'twitter:type',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@IbaxNetwork'
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@IbaxNetwork'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Secure and high performance Web 3.0 based blockchain infrastructure'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'IBAX Network'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'IBAX, Crypto Currency, bitcoin, Cross-Chain, crypto, DeFi, Dapps,blockchain technology, corelayer technology, decentralized application, distributed ledger, IBAX AMA, blockChain BaaS, BaaS, blockchain as a service, mining, web3, web 3.0, W3,blockchain, metaverse, DAO'
      },
      {
        hid: 'description',
        name: 'description',
        content: `IBAX is a fast, efficient, transparent, decentralized infrastructure public blockchain network. Everyone can create a DAO or customizable consensus mechanism ecosystem using IBAX's BaaS platform. Weaver enables low-code development and zero-code coin issuance through simple drag-and-drop , which greatly reduces the time and threshold for developing DApps.`
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `IBAX is a fast, efficient, transparent, decentralized infrastructure public blockchain network. Everyone can create a DAO or customizable consensus mechanism ecosystem using IBAX's BaaS platform. Weaver enables low-code development and zero-code coin issuance through simple drag-and-drop , which greatly reduces the time and threshold for developing DApps.`
      },
      {
        hid: 'ie',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=11; IE=10; IE=9; IE=8; IE=EDGE'
      },
      {
        hid: 'edge',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/animate/animate.min.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/icon/iconfont.css'
      }
    ],
    script: [
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-3P74G75LD1'
      },
      {
        charset: 'UTF-8',
        id: 'LA_COLLECT',
        src: '/plugins/js-sdk-pro.min.js'
      },
      {
        charset: 'UTF-8',
        id: 'LA_COLLECT_EVENT',
        src: '/plugins/js-sdk-event.min.js'
      },
      {
        charset: 'UTF-8',
        id: 'LA_COLLECT_INIT',
        src: '/plugins/sdkla.js'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/display.css', '@/assets/sass/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    '@/plugins/mixin.js',
    '@/plugins/http.js',
    '@/plugins/day.js',
    { src: '@/plugins/analytics.js', ssr: false },
    { src: '@/plugins/sdkla.js', ssr: false },
    { src: '@/plugins/wow.js', ssr: false },
    { src: '@/plugins/vueSroll.js', ssr: false },
    { src: '@/plugins/vueP5.js', ssr: false },
    { src: '@/plugins/shareon.js', ssr: false },
    { src: '@/plugins/vueQr.js', ssr: false },
    { src: '@/plugins/copy.js', ssr: false },
    { src: '@/plugins/swiper.js', ssr: false },
    '@/plugins/vueSlickCarousel.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'data/cert/privkey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'data/cert/fullchain.pe'))
    }
  }, */
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],
  router: {
    middleware: ['auth', 'i18n', 'router'],
    linkActiveClass: 'nav-active-link'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-client-init-module'
  ],
  sitemap: !pattern ? sitemap : '',
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseUrl: 'https://ibax.io:9095/api',
    proxy: pattern,
    prefix: '/api',
    retry: { retries: 3 },
    credentials: true
  },
  proxy: {
    '/api': {
      // target: 'https://testnet-us-34-86-177-19.ibax.io:9095',
      target: 'http://192.168.1.191:8888',
      // target: 'https://ibax.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api/*': ''
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '/icon.png',
      fileName: 'icon.png'
    },
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    // extractCSS: false,
    extractCSS: !pattern,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    transpile: [/^element-ui/],
    cssSourceMap: pattern,
    cache: pattern,
    build: {
      hotMiddleware: {
        client: {
          // turn off client overlay when errors are present
          overlay: false
        }
      }
    },
    babel: {
      plugins
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[name].js'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    extend(config, ctx) {
      config.output.filename = `js/[name].${Timestamp}.js`;
      config.output.chunkFilename = `js/[name].${Timestamp}.js`;
      //
      if (ctx.isClient) {
        config.devtool = pattern ? 'eval-source-map' : 'none';
      }
      //
      if (ctx.isServer) {
        config.devtool = pattern ? 'eval-source-map' : 'none';
      }
    }
  }
};
