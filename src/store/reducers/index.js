/*
* @Author: wj77998
* @Date:   2017-06-22 09:45:14
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 12:06:49
*/

'use strict';

import { combineReducers } from 'redux'
import settingData from './settingData'
import modalData from './modalData'
import msgTip from './msgTip' 

export default combineReducers({
  settingData,
  modalData,
  msgTip,
})
