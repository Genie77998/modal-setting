/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-19 15:55:48
*/
     
import React from 'react'
import ReactDom  from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './main'
import store from './store'
import { imageData } from './lib/common'
import { upAllSettingData , upCompontId } from './store/actions'
let isRender = false;
let container = null;

/*let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)*/

const noop = () => {}


//设置模版数据
const initData = (options,data) => {
	let _data = {};
	options.forEach(v => {
		const _items = v.items || [];
		_data[v.itemKey] = data[v.itemKey] || {};
		_items.forEach( _v => {
			if(["image"].indexOf(_v.type) > -1){
				const imgArrData = [imageData()];
				_data[v.itemKey][_v.itemKey] = _data[v.itemKey][_v.itemKey] || imgArrData;
			}else{
				_data[v.itemKey][_v.itemKey] = _data[v.itemKey][_v.itemKey] || "";
			}
		});
	});
	return {
		options : options,
		data : _data
	}
}

const modalSetting = (option) => {
	const el = option.el;
	const _el = document.getElementById(el);
	const options = option.options || [];
	const data = option.data || {};
	const componentId = option.componentId || "";
	let _hasInitData = {};
	if(!_el){
		throw new TypeError('设置容器不存在');
		return;
	}
	if(options.length === 0){
		throw new TypeError('模版设置不能为空');
		return;
	}
	if(componentId == ""){
		throw new TypeError('模版ID不能为空');
		return;
	}
	_hasInitData = initData(options,data)
	if(!isRender){
		container = ReactDom.render(
			<Provider store={store}>
	    		<Main />
	  		</Provider>,
  			_el
  		);
		isRender = true;
	}
	store.dispatch(upAllSettingData(_hasInitData.options,_hasInitData.data));
	store.dispatch(upCompontId(componentId));
	
}

window.modalSetting = modalSetting;


export default modalSetting
