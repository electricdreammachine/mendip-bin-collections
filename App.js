import React from 'react'
import { get } from 'axios'
import { startOfToday, format } from 'date-fns'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dates: [],
      today: '',
    }
  }
  
  componentDidMount() {
    get('https://raw.githubusercontent.com/electricdreammachine/mendip-bin-collections-schedule/master/schedule.json')
      .then(data => {
        const today = startOfToday()
        this.setState({ dates: data.data.dates, today })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Today is {format(this.state.today, 'YYYY-MM-DD')}</Text>
        <Text>{JSON.stringify(this.state.dates)}</Text>
        <Text>rory thompson is a butts</Text>
      </View>
    );
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
