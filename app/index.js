import React from 'react'
import { render } from 'react-dom'

export default class App extends React.Component {
  getContent = () => 'Hello World'

  render() {
    return (
      <div>{this.getContent()}</div>
    )
  }
}

render(<App />, document.getElementById('root'))
