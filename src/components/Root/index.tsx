import React from 'react'
// import { element } from 'prop-types'
import styled from 'styled-components'

import 'normalize.css'
import Footer from './components/Footer'
import Header from './components/Header'

const MaxHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
`

const Root = (props: any) => (
  <MaxHeight>
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </MaxHeight>
)

// Root.propTypes = {
//   children: element.isRequired,
// }

export default Root
