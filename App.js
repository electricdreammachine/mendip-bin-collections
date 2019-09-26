import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import * as Font from 'expo-font'
import { fonts } from './src/styles'

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
  constructor() {
    super()

    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      [fonts.BALOO_DA]: require('./assets/fonts/BalooDa-Regular.ttf'),
      [fonts.RED_HAT_DISPLAY]: require('./assets/fonts/RedHatDisplay-Medium.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
          {this.state.fontLoaded ? <App /> : null}
      </Provider>
    );
  }
}

export default ConnectedApp
