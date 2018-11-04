import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { StyleRulesCallback, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import styled from 'styled-components'
import LinkListItem from './LinkListItem'

const drawerWidth = 240

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
  padding: ${({theme}) => theme.spacing.unit * 3}px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-left: ${drawerWidth}px;
  }
`

const Footer = styled.footer`
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-left: ${drawerWidth}px;
  }
`

const stylesCallback: StyleRulesCallback = (theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
})

interface Props extends WithStyles {
  classes: any,
  theme: Theme,
}

class ResponsiveDrawer extends React.Component <Props, {}> {
  public state = {
    mobileOpen: false,
  }

  public handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  public render() {
    const { classes, theme } = this.props

    const drawer = (
      <>
        <div className={classes.toolbar} />
        <List>
          <LinkListItem to='/'><ListItemText primary='Home' /></LinkListItem>
          <LinkListItem to='/about'><ListItemText primary='About' /></LinkListItem>
        </List>
      </>
    )

    return (
      <Root>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
              children={<MenuIcon />}
            />
            <Typography variant='h6' color='inherit' noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='js'>
            <Drawer
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.toolbar} />
        <Content>{this.props.children}</Content>
        <Footer>Footer</Footer>
      </Root>
    )
  }
}

export default withStyles(stylesCallback, { withTheme: true })(ResponsiveDrawer)
