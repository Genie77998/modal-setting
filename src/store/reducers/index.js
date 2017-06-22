/*
* @Author: wj77998
* @Date:   2017-06-22 09:45:14
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 14:47:12
*/

'use strict';

import { combineReducers } from 'redux'
import settingData from './settingData'
import modalData from './modalData'

export default combineReducers({
  settingData,
  modalData
})
