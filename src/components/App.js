import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateView from './date-view/date-view'

export default class App extends React.Component {
  componentDidMount() {
    this.props.getDates()
  }

  render() {
    const { loading, twoNextDates } = this.props
    return loading ? <Text>loading</Text> :
      (<View style={styles.container}>
        <DateView dateProperties={twoNextDates[0]} dateName="Next" />
        <DateView dateProperties={twoNextDates[1]} dateName="Then" />
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
