import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View } from 'react-native'
import Svg, { Rect, Defs, Use, G, ClipPath } from 'react-native-svg'
import { isNil } from 'ramda'
import { format } from 'date-fns'
import Logo from '../../../assets/icons/bin2.svg'
import { typographyVariants, colours } from '../../styles'

const DateView = ({
    dateProperties,
    dateName,
}) => {
    if (isNil(dateProperties)) return null
    
    return (
        <View style={dateStyles.container}>
            <Text style={dateStyles.dateHeader}>
                {dateName}
            </Text>
            <View style={dateStyles.dateWrapper}>
                <Svg style={dateStyles.dateGraphic}>
                    <Defs>
                        <Rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            stroke="lightblue"
                            strokeWidth="8"
                            fill="lightyellow"
                            rx="5"
                            ry="5"
                            id="ld"
                        />
                        <ClipPath id="clip">
                            <Use xlinkHref="#ld"/>
                        </ClipPath>
                    </Defs>
                    <G>
                        <Use xlinkHref="#ld" stroke="#0081C6" strokeWidth="160" fill="#00D2B8" clipPath="url(#clip)"/>
                    </G>
                </Svg>
                <Svg style={dateStyles.binGraphic}>
                    <G x="200" y="0">
                        <Logo width={120} height={200} />
                    </G>
                </Svg>
                <Text style={dateStyles.date}>
                    {format(dateProperties.date, 'ddd,[\n]Do MMM')}
                </Text>
                <Text style={dateStyles.type}>
                    {dateProperties.type}
                </Text>
            </View>
        </View>
    )
}

const dateStyles = StyleSheet.create({
    dateHeader: {
        ...typographyVariants.headerTypography,
        fontSize: 40,
        marginLeft: 18,
        marginBottom: -7,
        paddingBottom: 0,
    },
    date: {
        ...typographyVariants.baseTypography,
        fontSize: 35,
        lineHeight: 36,
    },
    binGraphic: {
        position: 'absolute',
        top: -60,
        bottom: 0,
        left: 0,
        right: 0,
    },
    dateGraphic: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    type: {
        ...typographyVariants.baseTypography,
        fontSize: 15,
    },
    dateWrapper: {
        paddingTop: 15,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
    container: {
        marginBottom: 20,
    },
})

DateView.propTypes = {
    dateProperties: PropTypes.shape({
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }),
    dateName: PropTypes.string.isRequired,
}

export default DateView
