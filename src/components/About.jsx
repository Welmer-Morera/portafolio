import React from 'react';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles';
import AboutStyles from '../styles/AboutStyles'
import pdf from '../styles/pdf/cv.pdf'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(AboutStyles)
const About = () => {
    const classes = useStyles()

   
    return (  
      

        <div className={classes.container}>



            <Grid container >


            <Grid item xs={12} sm={6} className={classes.containerText}>
                <div className={classes.containerTextS} >
                    <div className={classes.textTwo}>About Me</div>
                    <div className={classes.textOne}>I am a responsible and
                            creative person with proactive attitude to solve issues. Eager to learn and understand new programs/applications to grow as a profesional in my field.
                    </div>
                    <div>
                    <Button className={classes.button} variant="contained" color="primary" href={pdf}>
                        Click here to see my CV
                        </Button>
                    </div>
                </div>
            </Grid>
                <Grid item xs={12} sm={6}>
                    <Hidden xsDown>
                        <div className={classes.imgContainer}></div>
                    </Hidden>
                </Grid>
                

            </Grid>

        </div>

    
           
    
        
    );
}
 
export default About;