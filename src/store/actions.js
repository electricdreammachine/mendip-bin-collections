import { GET_DATES } from './action-types'

export const getDates = () => ({
    type: GET_DATES,
    payload: {
        request: {
            url: '/schedule.json',
        },
    },
})
