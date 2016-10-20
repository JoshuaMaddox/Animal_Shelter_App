import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import AllClients from './components/AllClients'
import EditClient from './components/EditClient'
import AllAnimals from './components/AllAnimals'

render(
  <div className='container text-center'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>
      <Route path = '/clients' component = {AllClients} />
      <Route path = '/clients/client/:id' component = {EditClient} />
      <Route path = '/animals' component = {AllAnimals} />
    </Router>
  </div>,
  document.getElementById('root')
)