import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { colours } from '../styles'
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
        <Button
          title="View all upcoming collections"
          onPress={() => {}}
          color={colours.green}
        />
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: colours.offwhite,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colours.green,
  },
});
