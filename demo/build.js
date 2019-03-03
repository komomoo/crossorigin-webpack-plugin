const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CrossoriginWebpackPlugin = require('../src')

const webpackConfig = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CrossoriginWebpackPlugin(),
  ],
}

webpack(webpackConfig, function (err, stats) {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error('error:', err.details)
    }
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error('stats.hasErrors:', info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn('stats.hasWarnings:', info.warnings)
  }
})
