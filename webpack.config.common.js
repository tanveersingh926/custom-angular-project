const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: [ '.js', '.ts']
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                loaders:[ 'html-loader']
            }, 
            {
                test: /\.css$/,
                loaders:['raw-loader']
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })

    ]
};