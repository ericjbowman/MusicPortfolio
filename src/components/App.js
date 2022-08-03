import '../styles/App.css'
import React, {Fragment, useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import ProdLib from './ProdLib.js'

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
  </div>
  )
}

export default App
