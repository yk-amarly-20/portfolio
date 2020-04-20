import React from "react";
// import { Card } from 'react-native-elements';
// import { Text } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import python from './Images/python.png'
import kotlin from './Images/kotlin.png'
import R from './Images/R.png'
import scala from './Images/scala.png'
import javascript from './Images/javascript.png'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '50px', 
    textAlign: 'center'
  }
}));

export default function Skills() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
      <Grid xs={12} item>
        <h1 className={classes.title}>SKILLS</h1>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
      >
        <Grid item>
          <section class="card">
            <img class="card-image" src={python} />
            <div class="card-content">
              <h1 class="card-title">Python</h1>
              <p class="card-text">
                ・ machine learning and data analysis. <br />
                ・ easy application with Flask or Django.
              </p>
            </div>
          </section>
        </Grid>
        <Grid item>
          <section class="card">
            <img class="card-image" src={kotlin} />
            <div class="card-content">
              <h1 class="card-title">Kotlin</h1>
              <p class="card-text">
                ・ development of Android or Web App. <br />
              </p>
            </div>
          </section>
        </Grid>
        <Grid item>
          <section class="card">
            <img class="card-image" src={R} />
            <div class="card-content">
              <h1 class="card-title">R</h1>
              <p class="card-text">
                ・ machine learning and data analysis.
              </p>
            </div>
          </section>
        </Grid>
      </Grid>
    
      <Grid
        item
        container
        direction="row"
        justify="center"
      >
        <Grid item>
          <section class="card">
            <img class="card-image" src={scala} />
            <div class="card-content">
              <h1 class="card-title">Scala</h1>
              <p class="card-text">
                ・ development of Web App <br />(I am just studying now).
              </p>
            </div>
          </section>
        </Grid>
      
        
        <Grid item>
        <section class="card">
            <img class="card-image" src={javascript} />
            <div class="card-content">
              <h1 class="card-title">JavaScript</h1>
              <p class="card-text">
                ・ development of Web App.
              </p>
            </div>
          </section>
        </Grid>
        <Grid item>
          <section class="card">
            <div class="card-content">
              <h1 class="card-title">the Others</h1>
              <p class="card-text">
                ・ C/C++ : AtCoder, some machine learning models <br />
                ・ Git <br />
                ・ Docker <br />
                ・ Kubernetes <br />
                ・ SQL <br />
                ・ GCP <br />
              </p>
            </div>
          </section>
        </Grid>
      </Grid>
    </Grid>
  )
}
