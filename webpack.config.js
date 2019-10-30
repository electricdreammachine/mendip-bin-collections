const merge = require('webpack-merge');
const path = require('path')
const expoConfig = require('@expo/webpack-config')

module.exports = function(env, argv) {
    return merge(expoConfig(env, argv), {
       resolve: {
        alias: {
          assets: path.resolve(__dirname, 'assets'),
          src: path.resolve(__dirname, 'src'),
        },
    },
})
}
