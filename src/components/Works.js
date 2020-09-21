import React from 'react';
//import { Card } from 'react-native-elements';
//import { Text } from 'react-native';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import rist from './Images/Rist.png'
import sinops from './Images/Sinops.jpg'
import { Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '100px',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: '30px',
    textAlign: 'center'
  }
}))

export default function Works() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
      <Grid
        container
        item
        direction="column"
        justify="center"
      >
        <Grid item>
          <h1 className={classes.title}>Experience</h1>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center">
          <Grid item>
            <section class="card-experience">
              <div class="card-content">
                <h1 class="card-title">Rist Inc.</h1>
                <h3 class="span">2019/08~now</h3>
                <p class="card-text">
                  ・ working as a machine learning engineer. <br />
                  ・ assign for data analysing task. <br />
                  ・ implementation of server-side for machine learning Apps. <br />
                </p>
              </div>
            </section>
          </Grid>
          <Grid item>
            <section class="card-experience">
              <div class="card-content">
                <h1 class="card-title">sinops Inc.</h1>
                <h3 class="span">2019/10~now</h3>
                <p class="card-text">
                  ・ some SQL Apps. <br />
                  ・ development of business Apps. <br />
                </p>
              </div>
            </section>
          </Grid>
          <Grid item>
            <section class="card-experience">
              <div class="card-content">
                <h1 class="card-title">Rakuten, Inc.</h1>
                <h3 class="span">2020/09/01 ~ 2020/09/11</h3>
                <p class="card-text">
                   ・ Hackathon of Web Apps. <br />
                   ・ I developed server-side. <br />
                   ・ Our team got the second grades of seven teams. <br />
                </p>
              </div>
            </section>
          </Grid>

          <Grid item >
            <section class="card-experience">
              <div class="card-content">
                <h1 class="card-title">VOYAGE GROUP, Inc.</h1>
                <h3 class="span">2020/09/16 ~ 2020/09/18</h3>
                <p class="card-text">
                  ・ adventure internship. <br/>
                  ・ machine learning's application for advertising. <br />
                </p>
              </div>
            </section>
          </Grid>
        </Grid>
        <Grid item>
          <h1 className={classes.title}>Works</h1>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
        >
          <Grid item>
            <section class="card-works">
              <div class="card-content">
                <h1 class="card-title">Amaryllis</h1>
                <p class="card-text">
                  ・ Python library to calculate present value of insurance. <br />
                  ・ I implied algorithms of insurance. <br />
                  ・ document => <a href="https://github.com/yk-amarly-20/Amaryllis">https://github.com/yk-amarly-20/Amaryllis</a> <br />
                </p>
              </div>
            </section>
          </Grid>
          <Grid item>
            <section class="card-works">
              <div class="card-content">
                <h1 class="card-title">Some Web Apps with Python</h1>
                <p class="card-text">
                  ・ I made some Web Apps(TODO App, domestic account Apps, easy blog) by Flask, Django. <br />
                </p>
              </div>
            </section>
          </Grid>
          <Grid item >
            <section class="card-works">
              <div class="card-content">
                <h1 class="card-title">Some Android Apps</h1>
                <p class="card-text">
                  ・ I made some Android Apps by Android Studio(Kotlin). <br />
                </p>
              </div>
            </section>
          </Grid>
          <Grid item>
            <section class="card-works">
              <div class="card-content">
                <h1 class="card-title">Portfolio</h1>
                <p class="card-text">
                  ・this site(React, JavaScript) <br />
                </p>
              </div>
            </section>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
