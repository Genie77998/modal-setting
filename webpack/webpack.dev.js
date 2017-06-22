/*
* @Author: wj77998
* @Date:   2017-04-27 10:52:11
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 18:53:51
*/

'use strict';
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
let config = require('./webpack.base');
const WebpackDevServer = require('webpack-dev-server')
const exec = require('child_process').exec;
config.entry.main.push(path.join(__dirname, "..",'src/dev.jsx'));
config.output.filename = '[name].js';
config.devtool = 'eval-source-map';
config.plugins.push(new webpack.NoErrorsPlugin());//允许错误不打断程序
config.plugins.push(new webpack.HotModuleReplacementPlugin()); //热更新  代码更新后浏览器自动刷新
config.output.publicPath = '';
const PORT = config.port;
const _port = PORT == 80 ? '' : `:${PORT}`;
const hostName = `localhost${_port}`;
const isHttps  = false;
const protocol = isHttps ? 'https://' : 'http://'
const myserver = () => {
    config.entry.main.unshift("webpack-dev-server/client?"+ protocol +"0.0.0.0:" + PORT, "webpack/hot/dev-server");
    const compiler = webpack(config)
    const server = new WebpackDevServer(compiler, {
        hot: true,
        stats: {
            colors: true
        },
        https : isHttps,
        inline:             true,
        progress:           true,
        historyApiFallback : true,
        contentBase: path.join(__dirname,'dev')
    })
    server.listen(PORT, function(err) {
        if (err) {
            console.log(err)
            return
        }
        console.log(`Listening at ${protocol}${hostName}\n`)
        exec(`open ${protocol}${hostName}`, err => {
            if(err){
                exec(`start ${protocol}${hostName}`)
            }
        });
    })
}

myserver();
