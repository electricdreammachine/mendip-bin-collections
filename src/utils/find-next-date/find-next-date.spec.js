import findNextDate from './find-next-date'

describe('find-next-date', () => {
  it('finds the first date in the array which is not before the specified date', () => {
    const dates = [
        { date: '2016-03-01' },
        { date: '2016-04-01' },
        { date: '2016-05-01' },
        { date: '2018-06-03' },
    ]

    const nextDateFound = findNextDate('2016-04-20', dates)

    expect(nextDateFound).toEqual(dates[2])
  })
})