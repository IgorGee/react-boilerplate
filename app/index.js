import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import { HelloTitle, WorldTitle } from './components/Title'

export default class App extends React.Component {
  getContent = () => 'Footer'

  render() {
    return (
      <div>
        <HelloTitle />
        <WorldTitle />
        {this.getContent()}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
