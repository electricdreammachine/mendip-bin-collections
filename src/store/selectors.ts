import { createSelector } from 'reselect'
import { slice } from 'ramda'
import { DatesState } from './reducer'
import findNextDateByIndex from '../utils/find-next-date-by-index/find-next-date-by-index'

const dates = (state: DatesState) => state.dates
const types = (state: DatesState) => state.types
const today = (state: DatesState) => state.today
const loading = (state: DatesState) => state.loading

const twoNextDates = createSelector(
    [dates, today],
    (dates, today) => {
        const startIndex = findNextDateByIndex(today, dates)
        const endIndex = startIndex + 2

        
        return startIndex >= 0 ? slice(
            startIndex,
            endIndex,
            dates
        ) : []
    }
)

export {
    twoNextDates,
    types,
    loading,
}
