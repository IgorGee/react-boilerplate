import path from 'path'

export const PATHS = {
  app: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'build'),
  public: path.resolve(__dirname, '..', 'public'),
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
  mode: 'production',
  module: { rules: [] },
  plugins: [],
  resolve: {
    modules: RESOLVED_MODULES,
    extensions: ['.js', '.json', '.ts', '.tsx', '*'],
  },
}
