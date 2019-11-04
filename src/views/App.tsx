import React from 'react'
import { createAppContainer, NavigationNavigator } from 'react-navigation'
import { StyleSheet, View, StyleProp, TextStyle } from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs'
import { dropLast } from 'ramda'
import hexRgb from 'hex-rgb'
import CalendarOverview from '../components/calendar-overview/calendar-overview'
import ConnectedApp from '../containers'
import { SafeAreaConsumer } from 'react-native-safe-area-context'
import { fonts, colours } from '../styles'

class App extends React.Component {
  render() {
    return <View style={appStyles.container}><ConnectedApp /></View>
  }
}

const appStyles: { [key: string]: StyleProp<TextStyle> } = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: colours.offwhite,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

const AppNavigator: NavigationNavigator<any, any> = createMaterialTopTabNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      tabBarLabel: 'Upcoming',
    },
  },
  CalendarOverview: {
    screen: CalendarOverview,
    navigationOptions: {
      tabBarLabel: 'All',
    },
  },
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => (
    <SafeAreaConsumer>
      {insets => 
        <View style={{ backgroundColor: `rgba(${dropLast(1, hexRgb(colours.darkgrey, {format: 'array' })).join(', ')}, 0.7)` }}>
          <MaterialTopTabBar
            {...props}
            style={{ paddingTop: insets ? insets.top: 0, ...props.style }}
          />
        </View>
      }
      </SafeAreaConsumer>
  ),
  tabBarOptions: {
    tabStyle: {
    },
    indicatorStyle: {
      backgroundColor: colours.green,
    },
    labelStyle: {
      fontFamily: fonts.BALOO_DA,
      fontSize: 16,
    },
    activeTintColor: colours.offwhite,
    inactiveTintColor: `rgba(${dropLast(1, hexRgb(colours.darkgrey, {format: 'array' })).join(', ')}, 0.5)`,
    style: {
      backgroundColor: 'none',
      marginLeft: 25,
      marginRight: 25,
    }
  }
})



export default createAppContainer(AppNavigator)
