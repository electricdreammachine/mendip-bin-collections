import { GET_DATES, CollectionDate, CollectionType } from './action-types'
import { getDatesActions } from './actions'
import { merge } from 'ramda'
import { startOfToday } from 'date-fns'

export interface DatesState {
    dates: CollectionDate[],
    types: { [key: string]: CollectionType },
    loading: boolean,
    today: Date,
}

const intialState: DatesState = {
    dates: [],
    types: {},
    loading: false,
    today: startOfToday(),
}

export const reducer = (state: DatesState = intialState, action: getDatesActions) => {
    switch (action.type) {
        case GET_DATES:
            return merge(state, { loading: true })

        case `${GET_DATES}_SUCCESS`:
            return merge(state, { dates: action.payload.data.dates, types: action.payload.data.types, loading: false })

        case `${GET_DATES}_FAIL`:
            return merge(state, { loading: false })

        default:
            return state
    }
}
