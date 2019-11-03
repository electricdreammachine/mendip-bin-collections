import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as Font from 'expo-font'
import { fonts } from './src/styles/typography'

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

class ConnectedApp extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      [fonts.BALOO_DA]: require('assets/fonts/BalooDa-Regular.ttf'),
      [fonts.RED_HAT_DISPLAY]: require('assets/fonts/RedHatDisplay-Medium.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
            {this.state.fontLoaded ? <App /> : null}
        </Provider>
      </SafeAreaProvider>
    )
  }
}

export default ConnectedApp
