/*
* @Author: wj77998
* @Date:   2017-06-22 09:43:48
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 09:58:34
*/

'use strict';

import React from 'react'
import { createStore } from 'redux';
import reduxer from './reducers'

const store = createStore(
	reduxer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
