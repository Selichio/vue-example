module.exports = {
    configureWebpack: {
      devtool: 'source-map',
      externals: {
        jquery: 'window.jQuery'
      }    
    }
  }