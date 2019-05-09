import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

// import reducer from './reducer'

import App from './src/views/App'

const client = axios.create({
  responseType: 'json'
})

const store = createStore(
    () => {},
    applyMiddleware(
        axiosMiddleware(client)
    )
)

class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}

export default ConnectedApp
