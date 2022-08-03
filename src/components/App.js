import '../styles/App.css'
import React, {Fragment, useEffect, useState} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import ProdLib from './ProdLib.js'

function App() {
  console.log('deloyed at 3:43')
  return (
    <div className='app-container'>
      <HashRouter>
        <Switch>
          <Route
            exact path='/alibiapp'
          >
            <ProdLib />
          </Route>
          <Route
            path='/'
          >
            <Home />
          </Route>
        </Switch>
      </HashRouter>
  </div>
  )
}

export default App
