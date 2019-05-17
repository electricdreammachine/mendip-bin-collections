import { GET_DATES } from './action-types'
import { merge } from 'ramda'
import { startOfToday } from 'date-fns'

const intialState = {
    dates: [],
    types: [],
    loading: false,
    today: startOfToday(),
}

export const reducer = (state = intialState, action) => {
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
