import React from 'react'
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

const Root = (props: {children: JSX.Element}) => (
  <MaxHeight>
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </MaxHeight>
)

export default Root
