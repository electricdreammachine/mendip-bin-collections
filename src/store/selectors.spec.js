import { twoNextDates, types } from './selectors'

const exampleState = {
    types: [
        'type 1',
        'type 2',
    ],
    dates: [
        { date: '2016-02-02' },
        { date: '2016-03-02' },
        { date: '2016-04-02' },
    ],
    today: '2016-02-15',
}

describe('selectors', () => {
    describe('types', () => {
        it('selects the array of types', () => {
            expect(types(exampleState)).toEqual(exampleState.types)
        })
    })

    describe('twoNextDates', () => {
        it('selects the two dates following today', () => {
            expect(twoNextDates(exampleState)).toEqual([
                exampleState.dates[1],
                exampleState.dates[2],
            ])
        })
    })
})
