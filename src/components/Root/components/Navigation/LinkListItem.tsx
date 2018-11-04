import ListItem from '@material-ui/core/ListItem'
import React, { ReactNode, SFC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps<any> {
  children: ReactNode,
  to: string,
}

const LinkListItem = (props: Props) => {
  const {
    children,
    history,
    location,
    to,
  } = props

  const active = location.pathname === to
  return (
    <ListItem
      button
      children={children}
      onClick={() => history.push(to)}
    />
  )
}

export default withRouter(LinkListItem)
