const { merge } = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');

const devCommon = require('./webpack.dev');

module.exports = merge(devCommon, {
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        // runtime caching
      ],
    }),
  ],
});
