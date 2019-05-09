import React from 'react'
import { get } from 'axios'
import { propOr, defaultTo } from 'ramda'
import { startOfToday, format } from 'date-fns'
import { StyleSheet, Text, View } from 'react-native'

import findNextCollection from '../utils/find-next-date/find-next-date'
import findCollectionType from '../utils/find-date-type/find-date-type'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dates: [],
      types: [],
      today: '',
      upcomingCollections: [],
    }
  }
  
  componentDidMount() {
    get('https://raw.githubusercontent.com/electricdreammachine/mendip-bin-collections-schedule/master/schedule.json')
      .then(data => {
        const today = startOfToday()
        this.setState({ dates: data.data.dates, types: data.data.types, today, upcomingCollections: [findNextCollection(today, data.data.dates)] })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Today is {format(this.state.today, 'YYYY-MM-DD')}</Text>
        <Text>Next collection is {defaultTo(
          'butts',
          findCollectionType(propOr('sweg', 'type', this.state.upcomingCollections[0]), this.state.types)
          )} on {propOr('sweg', 'date', this.state.upcomingCollections[0])}</Text>
        {/* <Text>{JSON.stringify(this.state.dates)}</Text> */}
      </View>
    )
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
