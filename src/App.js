import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Route from 'react-router-dom'
import Skills from './components/Skills'
import About from './components/About'
import Works from './components/Works'
import PageTop from './components/PageTop'


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header>
          <PageTop />
        </header>
        <div>
       
          <Switch>
            <Route path='/' exact component={ About } />
            <Route path='/Skills' exact component={ Skills } />
            <Route path='/Works' exact component={Works} />
          </Switch>
        
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
 