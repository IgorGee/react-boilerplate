import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkButton from './LinkButton'

const activeStyle = {
  color: 'green',
}

const Header = () => (
  <nav>
    {/*
    // @ts-ignore */}
    <LinkButton to='/'>Home</LinkButton>
    {/*
    // @ts-ignore */}
    <LinkButton to='/about'>About</LinkButton>
  </nav>
)

export default Header
