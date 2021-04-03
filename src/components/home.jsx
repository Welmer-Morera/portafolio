import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import HomeStyles from '../styles/HomeStyles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(HomeStyles)
const Home = () => {

    const classes = useStyles()
    return (

        <div className={classes.container}>



            <Grid container >


                <Grid item xs={12} sm={8}>
                    <Hidden xsDown>
                        <div className={classes.imgContainer}></div>
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.containerText}>
                    <div className={classes.containerTextS}>
                        <div className={classes.textOne}>Hello,</div>
                        <div className={classes.textTwo}>I'm Welmer Morera</div>
                        <div className={classes.textThree}>Web Devolper </div>
                        <div className={classes.textFour}>  From Nicoya,Gte,CR</div>
                    </div>
                </Grid>

            </Grid>

        </div>

    );
}

export default Home;