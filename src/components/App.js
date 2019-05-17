import React from 'react'
// import { format } from 'date-fns'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  componentDidMount() {
    this.props.getDates()
  }

  render() {
    const { loading, twoNextDates } = this.props
    return loading ? <Text>loading</Text> :
      (<View style={styles.container}>
        {console.log(this.props)}
        <Text>Next collection is</Text>
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
