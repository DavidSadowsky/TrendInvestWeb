import './App.css';
import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import InputForm from './Components/InputForm'
import logo from './assets/Trend Invest.svg'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { red } from '@material-ui/core/colors';
import TypeWriterEffect from 'react-typewriter-effect';

const useStyles = makeStyles((theme) => ({
  logo: {

  },
  body: {
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(40)
  },
  card: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  }
}))


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#1652F0'
  }, [])

  const classes = useStyles()
  const myRef = document.querySelector('.scrollable-div')

  return (
    <div>
      <img src={logo} width='200' height='200' className={classes.logo}/>
      <Container className={classes.body}>
        <TypeWriterEffect
              textStyle={{ fontFamily: 'Red Hat Display', color: 'white', textAlign: 'center' }}
              startDelay={100}
              cursorColor="white"
              text="Predict. Research. Invest."
              typeSpeed={100}
              hideCursorAfterText={true}
              scrollArea={myRef}
              className={classes.title}
            />
          <Box pt={10} className={classes.card}>
            <InputForm className={classes.form}/>
          </Box>
      </Container>
    </div>
    );
}

export default App;
