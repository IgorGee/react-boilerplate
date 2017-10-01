import { pipe } from 'ramda'
import { config } from './base.webpack.config'
import {
  babel, css,
  hmr, htmlPlugin, devTool, devServer,
} from './parts.webpack.config'

const base = pipe(babel, css, htmlPlugin('React.js Boilerplate'))

const dev = pipe(base, devTool, devServer, hmr)

const production = pipe(base)

export default (env) =>
  (env === 'production') ? production(config) : dev(config)
