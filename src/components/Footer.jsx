import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import FooterStyles from '../styles/FooterStyles'

const useStyles  = makeStyles(FooterStyles)
const Footer = () => {

    const classes = useStyles()
    return ( 
    <footer className={classes.footer}>
    <span className={classes.footer_text}>Created By WM  | &#169;{new Date().getFullYear()} | All Rights Reserved</span>
  </footer> 
  );
}
 
export default Footer;