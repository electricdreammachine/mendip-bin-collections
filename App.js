import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import App from './src/views/App'

const client = axios.create({
  responseType: 'json',
  baseURL: 'https://raw.githubusercontent.com/electricdreammachine/mendip-bin-collections-schedule/master',
})

const store = createStore(
    reducer,
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
