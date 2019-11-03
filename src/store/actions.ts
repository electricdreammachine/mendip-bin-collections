import { GET_DATES, CollectionDate, CollectionType } from './action-types'

interface DateActionStart {
    type: typeof GET_DATES,
    payload: {
        request: {
            url: string,
        },
        data?: any,
    }
}

interface DateActionSuccess {
    type: typeof GET_DATES,
    payload: {
        request: {
            url: string,
        },
        data: {
            dates: CollectionDate[],
            types: { [key: string]: CollectionType }
        }
    },
}

export type getDatesActions = DateActionSuccess | DateActionStart

export const getDates = (): getDatesActions => ({
    type: GET_DATES,
    payload: {
        request: {
            url: '/schedule.json',
        },
    },
})