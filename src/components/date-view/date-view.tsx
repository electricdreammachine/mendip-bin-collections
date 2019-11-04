import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, StyleProp, TextStyle } from 'react-native'
import Svg, { G } from 'react-native-svg'
import { isNil } from 'ramda'
import { format } from 'date-fns'
// @ts-ignore
import Logo from '../../../assets/icons/bin2.svg'
import { typographyVariants, collectionThemes } from '../../styles'
import { CollectionDate, CollectionType } from '../../store/action-types'

interface DateViewProps {
    dateProperties: CollectionDate,
    dateName: CollectionType,
}

const DateView = (
    {
        dateProperties,
        dateName,
    }: DateViewProps
): React.FunctionComponentElement<DateViewProps> | null => {
    if (isNil(dateProperties)) return null
    
    return (
        <View style={dateStyles.container}>
            <Text style={dateStyles.dateHeader}>
                {dateName}
            </Text>
            <View style={dateStyles.dateWrapper}>
                <Svg style={dateStyles.binGraphic}>
                    <G x="200" y="0">
                        <Logo width={200} height={300} strokeWidth="0.5" stroke="red" vectorEffect="non-scaling-stroke" />
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

interface DateStyles {
    [key: string]: StyleProp<TextStyle>,
}

const dateStyles: DateStyles = StyleSheet.create({
    dateHeader: {
        ...typographyVariants.headerTypography,
        fontSize: 40,
        marginLeft: 14,
        marginBottom: -10,
        paddingBottom: 0,
        color: collectionThemes.RAR.color,
    },
    date: {
        ...typographyVariants.baseTypography,
        fontSize: 35,
        lineHeight: 36,
        color: collectionThemes.RAR.color,
    },
    binGraphic: {
        position: 'absolute',
        top: -200,
        bottom: 0,
        left: 0,
        right: 0,
    },
    type: {
        ...typographyVariants.baseTypography,
        color: collectionThemes.RAR.color,
        fontSize: 15,
    },
    dateWrapper: {
        paddingTop: 15,
        paddingBottom: 12,
        paddingHorizontal: 15,
        color: collectionThemes.RAR.color,
    },
    container: {
        backgroundColor: collectionThemes.RAR.backgroundColor,
        borderRadius: 12,
        flex: 1,
        justifyContent: 'space-evenly',
        overflow: 'hidden',
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
