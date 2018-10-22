import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { curry } from 'ramda'

export const typescript = curry((config) => ({
  ...config,
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}))

export const hmrTypescript = curry((config) => ({
  ...config,
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          silent: process.argv.indexOf('--json') !== -1,
          useBabel: true,
          babelOptions: {
            plugins: ['react-hot-loader/babel'],
          },
          reportFiles: [
            'src/**/*.{ts,tsx}',
          ],
        },
      },
    ],
  },
}))

export const css = curry((config) => ({
  ...config,
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}))

export const htmlPlugin = curry((title, config) => ({
  ...config,
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      title,
      filename: path.resolve(config.output.path, 'index.html'),
      template: path.resolve(config.entry, 'index.html'),
    }),
  ],
}))

export const devTool = curry((config) => ({
  ...config,
  devtool: 'cheap-module-eval-source-map',
}))

export const devServer = curry((config) => ({
  ...config,
  mode: 'development',
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080

    // Enable error/warning overlay
    overlay: {
      errors: true,
      warnings: true,
    },
  },
}))
