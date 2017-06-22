/*
* @Author: wj77998
* @Date:   2017-06-22 09:53:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 14:44:40
*/

'use strict';

import * as types from './../constants/ActionTypes'

const _settingData = {
    options : [],
    data : {},
    componentId : ""
}

const settingData = function(state = _settingData, action) {
    switch (action.type) {
        case types.UP_ALL_SETTING_DATA :
            return {
            	...state,
            	options : action.options || [],
            	data : action.data || {}
            };
            break;
        case types.UP_COMPONT_ID :
        	return {
            	...state,
            	componentId : action.componentId
            };
            break;
        case types.UP_DATA_FIELDS :
        		try{
        			state.data[action.parentKey][action.key] = action.value;
        		}catch(e){}
	        	return Object.assign({}, state);
        	break;
        default:
            return state;
    }
}



export default settingData
