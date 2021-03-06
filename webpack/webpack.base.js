const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
module.exports = {
	port : 80,
    entry: {
        'main': []
    },
    output: {
        path: path.join(__dirname, '..' , 'static'),
        publicPath: './',
        filename: '[name].js',
        library : "modalSetting",
        libraryTarget : "umd"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        },{
            test: /\.less$/,
            loader: 'style!css!less?strictMath&noIeCompat!postcss'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.(jp[e]?g|png|gif|svg)$/,
            loader: 'url-loader?limit=8192'
        },{
            test: /\.(woff|ttf|eot)$/,
            loader: 'url-loader?limit=2014&name=font/[name].[ext]'
        }]
    },
    postcss:[require('autoprefixer')({
        browsers: ['ie>=8','>1% in CN']
    })],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
        }
    },
    babel: {
        presets: ['es2015', 'stage-0','react'],
        plugins: ['transform-runtime',["import",{ libraryName: "antd", style: "css" }, { libraryName: "tnt-ui"}]]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            //压缩打包的文件
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            //全局调用类库
        })
    ]
};
