import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  app: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'build'),
}

const RESOLVED_MODULES = [
  path.resolve(__dirname, '..', 'src'),
  path.resolve(__dirname, '..', 'node_modules'),
]

export default {
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
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React.js Boilerplate',
      filename: path.resolve(PATHS.build, 'index.html'),
      template: path.resolve(PATHS.app, 'index.html'),
    }),
  ],
  resolve: {
    modules: RESOLVED_MODULES,
  },
}
