/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-05 16:39:36
*/
     
import React from 'react'
import ReactDom  from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { message } from 'antd';
import Main from './main'
import store from './store'
import { imageData , companyData , navData } from './lib/common'
import { upAllSettingData , upCompontId , setMsgTip } from './store/actions'
let isRender = false;

const noop = () => {}


//设置模版数据
const initData = (options,data) => {
	let _data = {};
	options.forEach(v => {
		const _items = v.items || [];
		if(_data.hasOwnProperty(v.itemKey)){
			console.error(`This property is repeated  => ${v.itemKey} 属性值重复`)
		}
		_data[v.itemKey] = data[v.itemKey] || {};
		_items.forEach( _v => {
			if(["image"].indexOf(_v.type) > -1){
				const imgArrData = [imageData()];
				let _imgData = [];
				if(_data[v.itemKey][_v.itemKey] && _data[v.itemKey][_v.itemKey].length > 0){
					_data[v.itemKey][_v.itemKey].forEach((val) => {
						_imgData.push(Object.assign(imageData(),val));
					})
					_data[v.itemKey][_v.itemKey] = _imgData;
				}else{
					_data[v.itemKey][_v.itemKey] = imgArrData;
				}
			}else if(_v.type == "nav"){
				let _navArrData = [navData()];
				let _navData = [];
				if(_data[v.itemKey][_v.itemKey] && _data[v.itemKey][_v.itemKey].length > 0){
					_data[v.itemKey][_v.itemKey].forEach((val) => {
						_navData.push(Object.assign(navData(),val));
					})
					_data[v.itemKey][_v.itemKey] = _navData;
				}else{
					_data[v.itemKey][_v.itemKey] = _navArrData;
				}
			}else if(_v.type == "cdn"){
				let _cdn = [];
				if(_data[v.itemKey][_v.itemKey] && _data[v.itemKey][_v.itemKey].length > 0){
					_data[v.itemKey][_v.itemKey].forEach((val) => {
						_cdn.push(val);
					})
					_data[v.itemKey][_v.itemKey] = _cdn;
				}else{
					_data[v.itemKey][_v.itemKey] = [""];
				}
			}else if(_v.type == "company"){
				if(typeof _data[v.itemKey][_v.itemKey] != "undefined" && _data[v.itemKey][_v.itemKey].constructor === Object){
					_data[v.itemKey][_v.itemKey] = Object.assign(companyData(),_data[v.itemKey][_v.itemKey]);
				}else{
					_data[v.itemKey][_v.itemKey] = companyData();
				}
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

const renderSetting = (option) => {
	const el = option.el;
	let _el = null;
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
	_el = document.getElementById(el);
	_hasInitData = initData(options,data)
	if(!isRender){
		ReactDom.render(
			<Provider store={store}>
	    		<Main />
	  		</Provider>,
  			_el
  		);
		isRender = true;
	}
	store.dispatch(upAllSettingData([],{}));
	setTimeout(() => {
		store.dispatch(upAllSettingData(_hasInitData.options,_hasInitData.data));
		store.dispatch(upCompontId(componentId));
	},50);
}

message.config({
  top: store.getState().msgTip.top,
  duration: store.getState().msgTip.duration,
});

const version = "1.0";
const render = renderSetting;
const showMsg = (text,type) => { 
	if(isRender){
		store.dispatch(setMsgTip(text,type));
	}else{
		message.destroy();
		switch(type){
			case "warn" :
				message.warn(text)
				break;
			case "error" :
				message.error(text)
				break;
			case "info" :
				message.info(text)
				break;
			default :
			message.success(text)
		}
	}
	
}
export { version , render , showMsg }
   
