import { find, propEq, pipe, prop } from 'ramda'

const findDateType = (type, types) => pipe(
    find(propEq('id', type)),
    prop('description')
)(types)

export default findDateType
