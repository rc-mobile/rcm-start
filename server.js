const pck = require('./package')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const getServerConfig = require('rcm-tools/lib/getServerConfig')
const getWebpackConfig = require('rcm-tools/lib/getWebpackConfig')

const webpackConfig = getWebpackConfig({
  styleGlobal: pck.styleGlobal,
  webpackConfig: {
    mode: 'development',
    entry: {
      index: './example/index.jsx'
    },
    plugins: [
      new HTMLPlugin({
        template: './example/index.html',
        hash: false,
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
})

getServerConfig(webpackConfig)
