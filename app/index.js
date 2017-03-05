import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import 'normalize.css'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`

export default class App extends React.Component {
  getContent = () => <Title>Hello World</Title>

  render() {
    return (
      <div>{this.getContent()}</div>
    )
  }
}

render(<App />, document.getElementById('root'))
