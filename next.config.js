const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:10]",
    outputStyle: "compressed",
    minimize: true
  },
  sassLoaderOptions: {
    outputStyle: "compressed",
    minimize: true
  }
})

// [local]___[hash:base64:5]
