import '../styles/App.css'
import React, {Fragment, useEffect, useState} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import ProdLib from './ProdLib.js'

function App() {
  return (
    <div>
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
