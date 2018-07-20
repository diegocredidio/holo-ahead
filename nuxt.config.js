module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Holo Ahead - A vida se passa na rua',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'keywords',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'holo, ahead, 3d, holografia, mobilidade, portátil, propaganda, campanha'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Holo Ahead - A vida se passa na rua'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],

  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
