/*
* @Author: wj77998
* @Date:   2017-06-22 09:53:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 16:08:16
*/

'use strict';

import * as types from './../constants/ActionTypes'

const noop = () => {}

const _modalData = {
    confirmVisible : false,
    confirmOkFn : noop,
    confirmNoFn : noop ,
    confirTitle : "",
    confirContent : "",
    previewVisible : false,
    previewImage:""
}

const modalData = function(state = _modalData, action) {
    switch (action.type) {
        case types.SHOW_MODAL :
            return {
            	...state,
            	confirmVisible : true,
            	confirTitle : action.confirTitle,
            	confirContent : action.confirContent,
            	confirmOkFn : action.confirmOkFn || noop,
            	confirmNoFn : action.confirmNoFn || noop,
            }
            break;
        case types.HIDE_MODAL :
        	return {
        		...state,
        		confirmVisible : false
        	}
            break;
        case types.SHOW_PREVIEW :
        	return {
        		...state,
        		previewImage : action.previewImage,
        		previewVisible : true
        	}
        	break;
        case types.HIDE_PREVIEW :
        	return {
        		...state,
        		previewVisible : false
        	}
        	break;
        default:
            return state;
    }
}



export default modalData
