import { findIndex, prop } from 'ramda'
import { isAfter } from 'date-fns'
import { CollectionDate } from '../../store/action-types'

const findNextDateByIndex = (date: Date, dates: CollectionDate[]) => findIndex(
    testDateObject => isAfter(
        prop('date', testDateObject),
        date,
    ), 
    dates
)

export default findNextDateByIndex
