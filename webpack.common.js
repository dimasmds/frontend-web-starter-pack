const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const { GenerateSW } = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-bundle.js`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/webcomponents-bundle.js.map`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/webcomponents-loader.js`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/`),
    to: 'vendor/bundles',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true,
  },
];

module.exports = {
  entry: {
    polyfill_head: resolve(__dirname, 'src/utils/polyfill.js'),
    main: resolve(__dirname, 'src/index.ts'),
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css|\.s([ca])ss$/,
        exclude: resolve(__dirname, 'src/styles'),
        use: [{
          loader: 'lit-scss-loader',
          options: {
            minify: true,
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css|\.s([ca])ss$/,
        exclude: resolve(__dirname, 'src/lib/components'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      inject: true,
      chunks: ['main', 'polyfill_head'],
    }),
    new HtmlWebpackInjector(),
    new CopyWebpackPlugin({
      patterns: [
        ...polyfills,
        {
          from: resolve(__dirname, 'src/public/'),
          to: resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        // runtime caching
      ],
    }),
  ],
};
