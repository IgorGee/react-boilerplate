import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const render = (Component) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))
