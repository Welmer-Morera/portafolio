import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm', 'xs')]: {
      display: 'none'
    },
    margin: '10px',
    boxShadow: 'none'
  }
})

class ToolbarMenuIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null
    }
    this.handleMenu = this.handleMenu.bind(this)
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  autoCloseChildren(render) {
    const children = this.props.children
    const result = []
    for (const child of children) {
      if (child.props.autoclose) {
        result.push(<div onClick={this.handleClose}>{child}</div>)
      } else {
        result.push(child)
      }
    }
    return result
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.buttonCollapse}>
        <IconButton onClick={this.handleMenu}>
          <MenuIcon style={{ color:'#A6A6A6' }} />
          {/* //<HomeIcon /> */}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={this.handleClose}
        >
          {this.autoCloseChildren()}
        </Menu>
      </div>
    )
  }
}
export default withStyles(styles)(ToolbarMenuIcon)
