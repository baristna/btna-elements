const path = require('path');

module.exports = {
  mode: "production",
  entry: "./dev/src/index.js",
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-react"
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  resolve: {
      alias: {
          'next': path.resolve(__dirname, 'node_modules/next'),
          'react': path.resolve(__dirname, 'node_modules/react'),
          'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      }
  },
  externals: {
      'next': "commonjs next",
      'react': "commonjs react",
      'react-dom': "commonjs react-dom"
  },
};