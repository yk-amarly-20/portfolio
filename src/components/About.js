import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import myFace from './Images/kojikoji.png'
import qiita from './Images/qiita.png'
import { getQueriesForElement } from '@testing-library/react';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '50px',
    textAlign: 'center'
  },
  image: {
    textAlign: 'left'
  },
  topics: {
    textAlign: 'left',
    padding: '10px',
    lineHeight: '25px'
  },
  myText: {
    textAlign: 'center',
    padding: '20px',
    lineHeight: '25px'
  }
}));

export default function About() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
      spacing={6}
    >
      <Grid xs={12} item>
        <h1 className={classes.title} id="About">ABOUT ME</h1>
      </Grid>
      <Grid xs={12} item>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          
            
          <Grid sm={7} item>
            <div className={classes.myText}>
              Welcome to my portfolio. My name is Yuto Kojima.
              <br /><br />
              I am Kyoto University student, Faculty of Science. 
              <br /><br />
              I belong to Department of Mathematics, and majoring probability theory.
              <br /><br />
              I am working as Rist as a machine learning engineer with Python.
              <br /><br />
              I love to write Scala and Kotlin, and develop Android or Web App.
              <br /><br />
              I like to grow flowers and listen to music.
            </div>
          </Grid>
          <Grid sm={5} item>
            <Grid 
              container
              direction="column"
              justify="center"
            >
              <Grid xs={12} item>
                <div className={classes.image}>
                  <img src={myFace} alt="me" />
                </div>
              </Grid>
              <Grid xs={12} item>
                <div className={classes.topics}>
                  <div id="icon" style={{ paddingTop: "20px" }}>
                    <a href="https://github.com/yk-amarly-20">
                      <i class="github-icon fa-2x"></i>
                    </a>
                    <a href="https://qiita.com/yk_Amarly_20">
                      <img src={qiita} class="qiita-icon" width="27" height="27" />
                    </a>
                    <a href="https://twitter.com/yk_Amarly_20">
                      <i class="twitter-icon fa-2x"></i>
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
      )
}