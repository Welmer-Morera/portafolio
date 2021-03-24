import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppStyles from '../styles/AppStyles'
import ToolbarMenu from '../styles/components/toolbarMenu'
import { MenuItem } from '@material-ui/core'
import img from '../styles/img/logi.png'
const useStyles = makeStyles(AppStyles)
const Navbar = () => {
    const classes = useStyles()
     const scrollToTop = () => {
        scroll.scrollToTop();
      }
    return (  

        <AppBar className={classes.app} >
        <Toolbar >
          <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          
          >
          <img  className={classes.logo} src={img}  onClick={()=>scrollToTop()} alt ="logo"></img>
          
          </Link>
          
          
          <ToolbarMenu 
           render={collapsed => {
            return collapsed 
              ? [
                  <MenuItem key="Actuality" autoclose={true}>
                    About
                  </MenuItem>,
                  <MenuItem key="about" autoclose={true}>
                    nada
                  </MenuItem>,
                  <MenuItem key="formation" autoclose={true}>
                    nada
                  </MenuItem>,
                  <MenuItem key="other" autoclose={true}>
                   nada
                  </MenuItem>,
                  <MenuItem key="contact" autoclose={true}>
                   nada
                  </MenuItem>
                ]
              : [
               
                 <div className={classes.toolbar}>
                     <Typography className={classes.toolbar_text}>
                 <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                About
                </Link>
                </Typography>
                <Typography className={classes.toolbar_text}>
                <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                Skills
              </Link>
              </Typography>
                 
               </div>
                ]
          }}
          
          />

        </Toolbar>
      </AppBar>
    );
}
 
export default Navbar;