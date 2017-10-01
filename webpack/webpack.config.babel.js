import productionConfig from './production.webpack.config'
import devConfig from './dev.webpack.config'

export default (env: string) =>
  (env === 'production') ? productionConfig() : devConfig()
