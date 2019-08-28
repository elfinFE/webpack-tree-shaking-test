module.exports = {
    presets: [
        '@vue/app',
        ['@babel/env', {'modules': 'commonjs'}],
    ],
    plugins: [
        'lodash',
        'add-module-exports',
        '@babel/plugin-proposal-class-properties',
        [
            'component',
            {
                'libraryName': 'meetin-sass-ui',
                'styleLibraryName': 'theme-chalk',
            }
        ],
    ],
}