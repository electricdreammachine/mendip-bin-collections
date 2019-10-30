import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
      <SafeAreaProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </SafeAreaProvider>
    )
  }
}

export default ConnectedApp
