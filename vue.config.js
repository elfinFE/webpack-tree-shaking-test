const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const config = {
    runtimeCompiler: true,
    lintOnSave: true,
    pages: {
        app: {
            entryName: 'workbench',
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 打包时使用 'workbench.html'
            // 开发时使用 'index.html'，可能需要其他的配置（目前没有找到），不然无法访问文件
            filename: 'index.html',
        },
    },
    configureWebpack: {
        output: {
            filename: 'js/[name].[hash:8].js',
            chunkFilename: 'js/[name].[hash:8].js',
        },
        plugins: [
            new BundleAnalyzerPlugin(),
        ],
    },
}

module.exports = config