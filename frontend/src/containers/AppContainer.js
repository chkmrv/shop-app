import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import IndexRoute from '../routes/index'
import reduxStore from '../store/store'
import '../routes/App/components/App.scss'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={reduxStore}>
        <IndexRoute />
      </Provider>
    )
  }
}

export default AppContainer
