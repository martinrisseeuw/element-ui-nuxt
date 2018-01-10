module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myfreight',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MyFreight website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/reset.sass',
    '~assets/css/elements-ui.scss',
    '~assets/css/typography.sass',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  plugins: [
    { src: '~/plugins/element-ui', ssr: true }
  ],  
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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
