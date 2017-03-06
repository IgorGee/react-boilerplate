import React from 'react'
import 'normalize.css'
import { HelloTitle, WorldTitle } from '../Title'

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
