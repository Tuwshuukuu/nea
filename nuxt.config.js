import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import dotenv from 'dotenv'
dotenv.config();

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
   head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '#' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Roboto+Condensed|Montserrat'
      },
      {
        rel: "stylesheet" ,
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" ,
        crossorigin:"anonymous"
      },
      {
        rel: 'stylesheet',
        href:
          'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/pagination.js', ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/router'
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
