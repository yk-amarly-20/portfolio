import React from "react";
// import { Card } from 'react-native-elements';
// import { Text } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import python from './Images/python.png'
import kotlin from './Images/kotlin.png'
import R from './Images/R.png'
import rust from './Images/rust.png'
import typescript from './Images/typescript.png'
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
                ・ easy application with Flask or Django. <br />
              </p>
              <h3 class="card-subtitle">Framework</h3>
              <p class="card-text">
                Keras, Tensorflow, PyTorch, Flask, Django
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
              <h3 class="card-subtitle">Framework</h3>
              <p class="card-text">
                Android Studio, Spring, Ktor
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
            <img class="card-image" src={rust} />
            <div class="card-content">
              <h1 class="card-title">Rust</h1>
              <p class="card-text">
                ・ development of Some App <br />
                ・ some tools.
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
                ・ development of Web App. <br></br>
                ・ This site.
              </p>
              <h3 class="card-subtitle">Framework</h3>
              <p class="card-text">
                React
              </p>
            </div>
          </section>
        </Grid>
        <Grid item >
          <section class="card">
            <img class="card-image" src={typescript} />
            <div class="card-content">
              <h1 class="card-title"> TypeScript </h1>
              <p class="card-text">
                ・development of Web App. <br/>
                ・my tech blog site.
              </p>
              <h3 class="card-subtitle"> Framework </h3>
              <p class="card-text"> React, Next.js </p>
            </div>
          </section>
        </Grid>
      </Grid>
      < Grid
        item
        container
        direction = "row"
        justify="center"
      >
        <Grid item>
          <section class = "card" >
            <div class = "card-content" >
              <h1 class="card-title" > the Others </h1>
              <p class="card-text" >
                ・C / C++: AtCoder, some machine learning models <br />
                ・Git < br />
                ・Docker < br />
                ・AWS < br />
                ・SQL < br />
                ・GCP < br />
                etc... < br />
              </p>
            </div>
          </section>
        </Grid>

      </Grid>

    </Grid>
  )
}
