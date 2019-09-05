import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import dotenv from 'dotenv'
import Axios from 'axios';
import {environment} from './config/environment';
import axios from 'axios'

dotenv.config();

export default {
  mode: 'universal',
  // generate: {
  //   routes: ['/']
  // },
  // :to="{name:sub.linkName, params:{ id: sub.mainCatId, subCat: sub.submenuId}}"

  generate: {
    routes: () => {
      // fetch(`${environment.API_HOST}:5000/category`).then(res => res.json()).then((res) => {
      //   res.data.map((id) => {
      //     return `list/${id}`
      //   })
      // });
      axios.get(`${environment.API_HOST}:5000/category`).then((res) => {
        res.data.map((id) => {
          return `list/${id}`
          // Axios.get(`${environment.API_HOST}:5000/subCategory/${id}`).then((subId) => {
            
          // })
        })
      })
    }
  },
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
