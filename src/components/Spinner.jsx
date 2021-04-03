import React from 'react'
import Image  from '../styles/img/logi.png'
import { makeStyles } from '@material-ui/core/styles';
import  SpinnerStyles from '../styles/SpinnerStyles'
import '../styles/Spinner.css'
import Grid from '@material-ui/core/Grid'
const useStyles =makeStyles(SpinnerStyles)
const Spinner =()=>{
const classes = useStyles()
    return(

        <Grid container >
            <Grid item xs={12} sm={12}>
            <div className={classes.containerLogo}>
               <img  className ={classes.img}src={Image} alt ="logo"></img>
           </div>

          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.containerSpinner}>
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>
           </div>

          </Grid>


        </Grid>
        // <div className={classes.container}>
        //    
        //    <div>
        //        
        //    </div>

        // </div>
    )

}

export default Spinner