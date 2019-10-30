import React from 'react'
import { createAppContainer } from 'react-navigation'
import { StatusBar, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs'
import CalendarOverview from '../components/calendar-overview/calendar-overview'
import ConnectedApp from '../containers'
import * as Font from 'expo-font'
import { SafeAreaConsumer } from 'react-native-safe-area-context'
import { fonts, colours } from '../styles'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    console.log(StatusBar.setBarStyle())

    await Font.loadAsync({
      [fonts.BALOO_DA]: require('assets/fonts/BalooDa-Regular.ttf'),
      [fonts.RED_HAT_DISPLAY]: require('assets/fonts/RedHatDisplay-Medium.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return this.state.fontLoaded ? <View style={appStyles.container}><ConnectedApp /></View> : null
  }
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: colours.offwhite,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

const AppNavigator = createMaterialTopTabNavigator({
  Home: App,
  CalendarOverview,
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => (
    <SafeAreaConsumer>
      {insets => 
        <MaterialTopTabBar
          {...props}
          style={{ paddingTop: insets.top }}
        />
      }
      </SafeAreaConsumer>
  ),
})



export default createAppContainer(AppNavigator)
