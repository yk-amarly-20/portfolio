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
    textAlign: 'center'
  },
  topics: {
    textAlign: 'center',
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
        <h1 className={classes.title} id="About">ABOUT</h1>
      </Grid>
      <Grid xs={12} item>




        <div className={classes.myText}>
          Welcome to my portfolio. My name is Yuto Kojima.
          <br /><br />
          I am Software Engineer, developing BE and FE (so-called, Full stack Engineer).
          <br /><br />
          I am working at Sansan Inc, as web Engineer.
          <br /><br />
          I love to write Rust and Kotlin, and develop Web Apps and tools.
          <br /><br />
          I like to grow flowers, listen to music, and play tennis.
        </div>
      </Grid>
      <Grid item>
        <div className={classes.myText}>
          ソフトウェアエンジニア（フルスタック）、個人アプリ開発(Kotlin, Rust)
          <br /><br />
          京都大学 理学部 数理科学系 確率論専攻卒
          <br /><br />
          趣味 : 園芸、J-POPなどの音楽、テニス
          <br /><br />
        </div>
      </Grid>
      {/*<Grid xs={12} item>
        <div className={classes.image}>
          <img src={myFace} alt="me" />
        </div>
      </Grid>
  */}
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

      )
}
