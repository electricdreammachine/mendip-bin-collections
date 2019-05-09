import findDateType from './find-date-type'

describe('find-next-date', () => {
  it('finds the first date in the array which is not before the specified date', () => {
    const types = [
        { id: 'A', description: 'Description 1' },
        { id: 'B', description: 'Description 2' },
        { id: 'C', description: 'Description 3' },
        { id: 'D', description: 'Description 4' },
    ]

    const dateTypeFound = findDateType('D', types)

    expect(dateTypeFound).toEqual(types[3].description)
  })
})