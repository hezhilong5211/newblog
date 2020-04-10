const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
    require.extensions['.css'] = File => { }
}


module.exports = withCss({})