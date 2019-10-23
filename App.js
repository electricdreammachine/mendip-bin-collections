import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import * as Font from 'expo-font'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import CalendarOverview from './src/components/calendar-overview/calendar-overview'
import { fonts } from './src/styles'
import NavigationService from './src/services/navigation'
import { Platform } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import App from './src/views/App'

if (Platform.OS === 'android') {
  SafeAreaView
    .setStatusBarHeight
    /* Some value for status bar height + notch height */
    (70)
}

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
      <Provider store={store} ref={NavigationService.setTopLevelNavigator}>
          {this.state.fontLoaded ? <App /> : null}
      </Provider>
    );
  }
}

const AppNavigator = createMaterialTopTabNavigator({
  Home: ConnectedApp,
  CalendarOverview,
}, {
  initialRouteName: 'Home',
})

export default createAppContainer(AppNavigator)
