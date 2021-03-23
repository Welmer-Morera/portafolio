import React,{Fragment} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppStyles from '../styles/AppStyles'
import Footer from './Footer'
 import ToolbarMenu from '../styles/components/toolbarMenu'
 import { MenuItem } from '@material-ui/core'
const useStyles = makeStyles(AppStyles)

const Appbar = () => {

    
     
     const classes = useStyles();

    return ( <Fragment>
       
      <AppBar className={classes.app} >
        <Toolbar >
          <Typography variant="h4">Portafolio</Typography>
          <ToolbarMenu 
           render={collapsed => {
            return collapsed 
              ? [
                  <MenuItem key="Actuality" autoclose={true}>
                    nada
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
                 <Typography className={classes.toolbar_text} variant="h6">Portafolio</Typography>
                <Typography className={classes.toolbar_text} variant="h6">rr</Typography>
                 
               </div>
                ]
          }}
          
          />

        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          <MenuItem>hola</MenuItem>
        </Box>
      </Container>

      <Footer></Footer>
    </Fragment> );
}
 
export default Appbar;