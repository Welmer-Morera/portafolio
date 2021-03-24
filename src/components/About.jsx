import React from 'react';
import Grid from '@material-ui/core/Grid'
import  img from '../styles/img/profile2.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AboutStyles from '../styles/AboutStyles'
const useStyles = makeStyles(AboutStyles)
const About = () => {
    const classes = useStyles()
    return (  
        <div>
           
            <div className={classes.contenedor}>
            <Grid container >
            <Grid item xs={12} sm={4}>
            <div className={classes.textTwo}>About Me</div>

            </Grid>
               
                <Grid item xs={12} sm={4}>
                <div >
                   <p className={classes.textOne}>I am a responsible and
                        creative person with
                        proactive attitude to solve
                        issues. Eager to learn and
                        understand new
                        programs/applications to
                        grow as profesional in my
                        field.
                        </p>

                </div>
                </Grid>

                <Grid item xs={12} sm={4}>
                   
                        <img className={classes.img} src={img} alt="ima"></img>
                    
                </Grid>

           </Grid>
            </div>
        </div>
    );
}
 
export default About;