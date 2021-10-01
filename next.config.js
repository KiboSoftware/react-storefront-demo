// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const webpack = require('webpack')
const withReactStorefront = require('react-storefront/plugins/withReactStorefront')

const _preLayer0Export = withReactStorefront({
  target: 'serverless',
  connector: '@kibocommerce/react-storefront-kibo-connector',
  webpack: config => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )
    return config
  },
});;

module.exports = (phase, config) =>
  withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,

      ..._preLayer0Export
    })
  )

