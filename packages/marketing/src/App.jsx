import React, { useEffect } from 'react'
import { Route, BrowserRouter, Switch, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Landing, Pricing } from './components'

export function App({ history }) {
  return (
    <StylesProvider>
      {/*TODO vs Router */}
      {/* vs BrowserRouter */}
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}
// FIXME 不能在 StylesProvider 上使用
