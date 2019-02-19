const path = require('path')
const pck = require('./package')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const getWebpackConfig = require('rcm-tools/lib/getWebpackConfig')
const { removeFiles } = require('rcm-tools/lib/utils/buildHelper')

const run_env = process.env.RUN_ENV

const webpackConfig = getWebpackConfig({
  styleGlobal: pck.styleGlobal
})

if (run_env) {
  switch (run_env) {
    case 'DEMO': // 演示打包
      removeFiles('./site')
      webpackConfig.mode = 'production'
      webpackConfig.entry = {
        index: './example/index.jsx'
      }
      webpackConfig.output = {
        path: path.resolve('./demo'),
        filename: '[name].js'
      }
      webpackConfig.plugins.push(
        new HTMLPlugin({
          template: './example/index.html',
          hash: false,
          inject: true
        }),
        // fixme: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/73
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      )
      break
    default: // 组件打包
      webpackConfig.forEach(config => {
        // 排除其它一些外部依赖
        ['x-tools', 'classnames']
          .forEach(node => externalRCM(config, node))
      })
  }
}
else {
  // fixme: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/73
  webpackConfig.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))
}

module.exports = webpackConfig

function externalRCM(config, rcm) {
  config.externals[rcm] = {
    root: rcm,
    commonjs2: rcm,
    commonjs: rcm,
    amd: rcm
  }
}