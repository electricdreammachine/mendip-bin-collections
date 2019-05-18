import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { isNil } from 'ramda'
import { format } from 'date-fns'

const DateView = ({
    dateProperties,
    dateName,
}) => {
    if (isNil(dateProperties)) return null

    return (
        <Text>{`
          ${dateName}
          ${format(dateProperties.date, 'ddd, Do MMM')}
          ${dateProperties.type}
        `}
        </Text>
    )
}

DateView.propTypes = {
    dateProperties: PropTypes.shape({
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }),
    dateName: PropTypes.string.isRequired,
}

export default DateView
