import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'

render(
  <div className='container text-center'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>
    </Router>
  </div>,
  document.getElementById('root')
)