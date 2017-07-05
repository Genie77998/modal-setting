/*
* @Author: wj77998
* @Date:   2017-06-22 09:52:15
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 12:06:20
*/

'use strict';

import * as types from './../constants/ActionTypes'

export const upAllSettingData = (options,data) => ({
	type: types.UP_ALL_SETTING_DATA,
	options,
	data
});


export const upCompontId = (componentId) => ({
	type: types.UP_COMPONT_ID,
	componentId
});

export const upDataFields = (parentKey,key,value) => ({
	type: types.UP_DATA_FIELDS,
	parentKey,key,value
});


export const showModal = (confirTitle,confirContent,confirmOkFn,confirmNoFn) => ({
	type: types.SHOW_MODAL,
	confirTitle,confirContent,confirmOkFn,confirmNoFn
});

export const hideModal = () => ({
	type: types.HIDE_MODAL
});

export const showPreview = (previewImage) => ({
	type: types.SHOW_PREVIEW,
	previewImage
});

export const hidePreview = () => ({
	type: types.HIDE_PREVIEW
});


export const setMsgTip = (msgContent="",msgType="success" ) =>{
	return {
		type : types.SET_MSG_TIP,
		msgContent,msgType
	}
}
