import React from 'react'
import img from '../styles/img/profile.png'
import { makeStyles } from '@material-ui/core/styles';
import HomeStyles from '../styles/HomeStyles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
const useStyles = makeStyles(HomeStyles)
const Home = () => {

    const classes = useStyles()
    return ( 

        <div  className={classes.contenedor}>
           
    
           
           <Grid container>
                <Grid item xs={12} sm={6}>
                    <Hidden xsDown>
                        <img src={img} alt="ima"></img>
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div class="text">
                    <div className={classes.textOne}>Hello,</div>
                    <div className={classes.textTwo}>I'm Welmer Morera</div>
                    <div className={classes.textThree}>Web Devolper </div>
                    <div className={classes.textFour}>  From Nicoya,Gte,CR</div>
                </div>
                </Grid>

           </Grid>
            
             
         
           
          

        </div>






        // <div className={classes.contenedor}>
        //     
        //     <div class="text">
        //         <div class="text-one">Hello,</div>
        //         <div class="text-two">I'm Prem Shahi</div>
        //         <div class="text-three">UI/UX Designer</div>
        //         <div class="text-four">From Nepal</div>
        //     </div>   
        // </div>
     );
}
 
export default Home;