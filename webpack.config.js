var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: __dirname + '/src/scripts/app.js',
        vendor: require('./vendors.js')
    },

    output: {
        path: __dirname + '/prd',
        filename: '[name].js',
    },

    devtool: 'source-map',

    devServer: {
        contentBase: __dirname + '/prd',
        port: 8000,
        inline: true,
        host:'0.0.0.0',
        // historyApiFallback:true  //当路由使用 browserHistory 是设置此项为 true（解决直接跳转子路由返回 404 问题）
    },

    module: {
        rules: [{
            test: require.resolve('zepto'),   //将 zepto(amd) 格式转化为 commonjs 格式
            use: [
              'exports-loader?window.Zepto',
              'script-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: ET.extract({
              fallback: "style-loader",
              use: [
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
              ]
            })
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/images/',
                    limit: 1000
                }
            }]
        }]
    },

    plugins: [
        new ET('main.css'),
        new webpack.optimize.CommonsChunkPlugin({   //公共模块单独打包成 vendor 文件
            name: ["vendor"],
            minChunks: Infinity // 提取所有entry共同依赖的模块
        }),
    ],

    watch: true
}
