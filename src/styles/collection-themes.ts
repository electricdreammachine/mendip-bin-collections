import colours from './colours'

const themeNames = {
    RAGW: 'RAGW',
    RAR: 'RAR',
}

export default {
    [themeNames.RAGW]: {
        backgroundColor: colours.green,
        color: colours.offwhite,
    },
    [themeNames.RAR]: {
        backgroundColor: colours.darkgrey,
        color: colours.offwhite,
    },
}