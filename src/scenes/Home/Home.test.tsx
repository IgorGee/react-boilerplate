import { shallow } from 'enzyme'
import React from 'react'

import Home from './'

describe('<Home />', () => {
  it('renders initial UI', () => {
    const component = shallow(<Home />)
    expect(component).toMatchSnapshot()
  })
})
