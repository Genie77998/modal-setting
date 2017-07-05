/*
* @Author: wj77998
* @Date:   2017-07-04 12:01:43
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 12:19:09
*/

'use strict';


import * as types from './../constants/ActionTypes'

const msgTipState = {
    msgContent : "",
    msgType : "",
    timer : 0,
    duration : 2.5,
    top : 100
}
const msgTip = function(state = msgTipState, action) { 
    switch (action.type) {
        case types.SET_MSG_TIP : 
            return {
                ...state,
                timer : Date.now(),
                msgContent : action.msgContent,
                msgType : action.msgType,
            }
            break; 
        default:
            return state;
    }
}



export default msgTip
