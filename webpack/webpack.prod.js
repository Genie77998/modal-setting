/*
* @Author: wj77998
* @Date:   2017-04-27 10:52:11
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 19:00:52
*/

'use strict';
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
let config = require('./webpack.base');

config.externals =  {'react': 'React', 'react-dom': 'ReactDOM'};
config.entry.main.push(path.join(__dirname, "..",'src/index.jsx'));
module.exports = config;
