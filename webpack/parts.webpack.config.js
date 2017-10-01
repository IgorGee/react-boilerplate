import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { curry } from 'ramda'

export const babel = curry((config) => ({
  ...config,
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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

export const hmr = curry((config) => ({
  ...config,
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    config.entry,
  ],
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
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
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,

    // Don't refresh if hot loading fails. If you want
    // refresh behavior, set hot: true instead.
    hot: true,

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
