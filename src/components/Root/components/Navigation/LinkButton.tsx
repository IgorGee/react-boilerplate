import Button from '@material-ui/core/Button'
import React, { ReactNode, SFC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps<any> {
  children: ReactNode,
  to: string,
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
}

const LinkButton = (props: Props) => {
  const {
    history,
    location,
    to,
    // TODO: Remove once this tslint rule is fixed
    // tslint:disable-next-line:trailing-comma
    onClick,
  } = props

  const active = location.pathname === to
  return (
    <Button
      color={active ? 'primary' : 'secondary'}
      onClick={(event) => {
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

export default withRouter(LinkButton)
