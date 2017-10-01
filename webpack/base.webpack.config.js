import path from 'path'

const PATHS = {
  app: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'build'),
}

const RESOLVED_MODULES = [
  path.resolve(__dirname, '..', 'src'),
  path.resolve(__dirname, '..', 'node_modules'),
]

export const config = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: { rules: [] },
  plugins: [],
  resolve: {
    modules: RESOLVED_MODULES,
  },
}
