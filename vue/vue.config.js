const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: false,
    port: '9090'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('@', resolve('src'))
  },
}