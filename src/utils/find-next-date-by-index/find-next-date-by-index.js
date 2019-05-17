import { findIndex, prop } from 'ramda'
import { isAfter } from 'date-fns'

const findNextDateByIndex = (date, dates) => findIndex(
    testDateObject => isAfter(
        prop('date', testDateObject),
        date,
    )  , 
    dates
)

export default findNextDateByIndex
