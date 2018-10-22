import { pipe } from 'ramda'
import { config } from './base.webpack.config'
import {
  typescript, css, htmlPlugin,
  devTool, devServer, hmrTypescript,
} from './parts.webpack.config'

const isProduction = process.env.NODE_ENV === 'production'

const ts = isProduction ? typescript : hmrTypescript

const base = pipe(ts, css, htmlPlugin('React.js Boilerplate'))

const dev = pipe(base, devTool, devServer)

const production = pipe(base)

export default isProduction ? production(config) : dev(config)
