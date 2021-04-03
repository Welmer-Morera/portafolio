import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import imgReact from '../styles/img/react.png'
import imgLaravel from '../styles/img/laravel.png'
import imgOther from '../styles/img/other.png'
import imgMongo from '../styles/img/mongo.png'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import SkillsStyles from '../styles/SkillsStyles'
const useStyles = makeStyles(SkillsStyles)
const Skills = () => {
    const classes = useStyles()
    return ( 
    <div>
        <Grid>
        <div ><h1 className={classes.textTwo}>Skills</h1></div>
        </Grid>
        <Grid container  spacing={3}>
            
            <Grid item xs={6} sm={3}>
            <Card className={classes.cardR} >
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <img src={imgReact} alt="react"></img>

                </CardMedia>
                <CardContent>
                <Typography  className={classes.textTitle} gutterBottom variant="h5" component="h2">
                <Link
                    key="contact"
                    className={classes.textTitle}
                    to="/Protectos-React"
                  > 
                     JavaScript
                  </Link>
               
                </Typography>
                <Typography variant="body2" color="white" component="p">
                React - Redux - GraphQl - hooK
                </Typography>
                </CardContent>
            </CardActionArea>
           
            </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Card className={classes.cardL} >
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <img src={imgLaravel} alt="react"></img>

                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    PHP
                </Typography>
                <Typography variant="body2"  component="p">
                    Laravel - Yii2
                </Typography>
                </CardContent>
            </CardActionArea>
           
            </Card>
             </Grid>
            <Grid item xs={6} sm={3}>
            <Card className={classes.cardO} >
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <img src={imgOther} alt="react"></img>

                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Languages
                </Typography>
                <Typography variant="body2"  component="p">
                    Java - C++ - C# - Python - Ruby 
                </Typography>
                </CardContent>
            </CardActionArea>
           
            </Card>
                </Grid>
            <Grid item xs={6} sm={3}>
            <Card className={classes.cardM} >
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <img src={imgMongo} alt="react"></img>

                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Database
                </Typography>
                <Typography variant="body2"  component="p">
                MongoDB - MySQL - Git
                </Typography>
                </CardContent>
            </CardActionArea>
           
            </Card>
            </Grid>


        </Grid>
    </div> );
}
 
export default Skills;