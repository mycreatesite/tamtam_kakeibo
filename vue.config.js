module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/tamtam_kakeibo' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}