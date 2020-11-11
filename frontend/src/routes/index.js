import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import history from 'utils'
import DetailsView from '../components/Details'
import ConfirmationPurchaseView from '../components/ConfirmationPurchase'
import SuccessView from '../components/SuccessPage'
import PageView from './App'

const IndexRoute = (props) => (
  <BrowserRouter {...props} history={history}>
    <Switch>
      <Route exact path='/books/' component={PageView} />
      <Route exact path='/books/:id' component={DetailsView} />
      <Route exact path='/books/:id/confirmation' component={ConfirmationPurchaseView} />
      <Route exact path='/books/:id/success' component={SuccessView} />
      <Redirect path='*' to='/books/' />
    </Switch>
  </BrowserRouter>
)

export default IndexRoute
