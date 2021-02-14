const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/tamtam_kakeibo' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/variables.scss";`
      }
    },
  },
}