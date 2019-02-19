const path = require('path')
const webpackMerge = require('webpack-merge')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  serverPort: 6060,
  title: '移动端 - 组件',
  assetsDir: './styleguide',
  ignore: ['components/style', 'components/tools', 'components/**/Example.tsx',],
  webpackConfig: webpackMerge(require('./webpack.config.js'), {
    // fixme: https://github.com/mzgoddard/hard-source-webpack-plugin/issues/416
    plugins: [new HardSourceWebpackPlugin()],
  }),
  propsParser: require('react-docgen-typescript').
    withCustomConfig('./tsconfig.json', {
      propFilter: {
        skipPropsWithoutDoc: true,
        skipPropsWithName: ['children'],
      },
    }).parse,
  template: {
    favicon: 'https://github.githubassets.com/favicon.ico'
  },
  require: [
    path.join(__dirname, 'components/style/index.scss'),
    path.join(__dirname, 'styleguide/style/index.scss'),
  ],
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/Introduction.md',
    },
    {
      name: 'Components',
      usageMode: 'collapse',
      exampleMode: 'collapse',
      components: 'components/**/[A-Z]*.tsx',
    },
  ],
  styleguideDir: 'site'
}
