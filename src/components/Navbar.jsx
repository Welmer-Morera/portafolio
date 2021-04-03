import React,{ useState,useEffect, useRef } from 'react'
import { Link as L } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppStyles from '../styles/AppStyles'
import ToolbarMenu from '../styles/components/toolbarMenu'
import { MenuItem } from '@material-ui/core'
import img from '../styles/img/logi.png'
import img2 from '../styles/img/logi2.png'
const useStyles = makeStyles(AppStyles)
const Navbar = () => {
    const classes = useStyles()
     const scrollToTop = () => {
        scroll.scrollToTop();
      }


      const [navColor, setnNavColor] = useState('appIntial')
       const [imgColor, setImgColor] = useState(true)

      const ref = useRef()
      ref.current=navColor

      useEffect(() => {
       const handleScroll =()=>{
         const show= window.scrollY >310
         if(show){
          setnNavColor('appScroll')
          setImgColor(false)
         }else{
           setnNavColor('appIntial')
           setImgColor(true)
         }
       }
       document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
      }, [])

    
    return (  

        <AppBar className={classes[ref.current]} >
        <Toolbar >
          <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          
          >
            <L
             to="/"
            >
              {imgColor
              ?<img  className={classes.logo} src={img}  onClick={()=>scrollToTop()} alt ="logo"></img>
              :<img  className={classes.logo} src={img2}  onClick={()=>scrollToTop()} alt ="logo"></img>}
            
            </L>
         
          
          </Link>
          
          
          <ToolbarMenu 
           render={collapsed => {
            return collapsed 
              ? [
                  <MenuItem key="Actuality" autoclose={true}>
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
                  </MenuItem>,
                  <MenuItem key="about" autoclose={true}>
                    nada
                  </MenuItem>,
                  
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