const webpack = require('webpack')
const withReactStorefront = require('react-storefront/plugins/withReactStorefront')

module.exports = withReactStorefront({
  target: 'serverless',
  connector: 'react-storefront-kibo-connector',
  webpack: config => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )
    return config
  },
})

