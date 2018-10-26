import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router'

const LinkButton = (props: any) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    // TODO: Remove once this tslint rule is fixed
    // tslint:disable-next-line:trailing-comma
    ...rest
  } = props

  const active = location.pathname === to
  return (
    <Button
      {...rest} // `children` is just another prop!
      color={active ? 'primary' : 'secondary'}
      onClick={(event) => {
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default withRouter(LinkButton)
