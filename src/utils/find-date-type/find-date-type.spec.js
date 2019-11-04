import findDateType from './find-date-type'

describe('find-next-date', () => {
  it('finds the first date in the array which is not before the specified date', () => {
    const types = {
      'A': 'Description 1',
      'B': 'Description 2',
      'C': 'Description 3',
      'D': 'Description 4',
    }

    const dateTypeFound = findDateType('D', types)

    expect(dateTypeFound).toEqual(types['D'])
  })
})