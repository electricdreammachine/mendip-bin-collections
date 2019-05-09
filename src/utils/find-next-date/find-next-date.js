import { find, prop } from 'ramda'
import { isAfter } from 'date-fns'

const findNextDate = (date, dates) => find(
    testDateObject => isAfter(
        prop('date', testDateObject),
        date,
    )  , 
    dates
)

export default findNextDate
