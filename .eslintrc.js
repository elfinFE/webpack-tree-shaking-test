module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
    extends: ['plugin:vue/strongly-recommended', 'eslint:recommended'],
    // 预定义一些全局变量
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    // 全局变量
    // true 表示可以修改
    // false 表示不可以修改
    globals: {
        Vue: true,
        httpRequestor: true,
        devEnv: true,
        gStoragePrefix: false,
        gStaticPath: false,
        components: false,
        utils: false,
        svg: false,
        api: false,
        common: false,
        glodash: false,
        jest: true,
        RouteNamesChain: false,
        devEnv: false,
        gProjectName: false,
        gPublicBaseUrl: false,
        gEntryName: false,
        gEntryBaseUrl: false,
        gApiBaseUrl: false,
    },
    // add your custom rules here
}
