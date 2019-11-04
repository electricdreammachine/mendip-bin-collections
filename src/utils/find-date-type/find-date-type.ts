import { CollectionType } from '../../store/action-types'

const findDateType = (type: CollectionType, types: { [key: string]: CollectionType }) => types[type]

export default findDateType
