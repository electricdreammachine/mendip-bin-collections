import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DateView from './date-view/date-view'

export default class App extends React.Component {
  componentDidMount() {
    this.props.getDates()
  }

  render() {
    const { loading, twoNextDates } = this.props
    return loading ? <Text>loading</Text> :
      (<View style={styles.container}>
          <View style={styles.primary}>
            <DateView dateProperties={twoNextDates[0]} dateName="Next" />
          </View>
          <View style={styles.secondary}>
            <DateView dateProperties={twoNextDates[1]} dateName="Then" />
          </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "space-evenly",
  },
  primary: {
    flex: 0.5,
  },
  secondary: {
    flex: 0.3,
  }
})