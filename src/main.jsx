/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-19 15:55:48
*/


import React, { Component, PropTypes } from 'react'
import { ItemBox , InputItem } from './pages'
import RenderItem from './pages/renderItem'
import { Button , Tabs } from 'antd';
import CommonModal from './pages/commonModal'
import { connect } from 'react-redux'
import { upAllSettingData , upCompontId , upDataFields } from './store/actions'
const TabPane = Tabs.TabPane;
let readyEvent = document.createEvent("Events");
readyEvent.initEvent('modalSettingUpdata', false, false);
import "./assets/index"

const noop = () => {}
class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	//值改变的时候触发
	itemChange = (val,parentItemKey,itemKey) => {
		this.props.dispatch(upDataFields(parentItemKey,itemKey,val));
	}

	//获取模版数据
	getsettingData = ()=> {
		let _data = Object.assign({},this.props.state.settingData);
		return _data
	}
	//保存设置
	handlerSubmit = ()=> {
		const _data = this.getsettingData();
		delete _data.options;
		readyEvent.modalSettingData = _data;
		document.dispatchEvent(readyEvent);
	}

	//渲染外层模版
	renderOptions = (value,index) => {
		const _item = value.items || [];
		const itemKey = value.itemKey;
		return (
			<TabPane 
				tab={value.itemTitle}
				key={index}
			>
				{
					_item.map((val,key) => {
						return this.renderItem(val,key,itemKey)
					})
				}
			</TabPane>
		)
	}

	//渲染左右布局
	
	renderItem = (value,index,itemKey) => {
		const _settingData = this.props.state.settingData;
		let defaultValue = "";
		try{
			defaultValue = _settingData.data[itemKey][value.itemKey]
		}catch(e){}
		return (
			<ItemBox
				key={index}
				{...value}
			>
				<RenderItem {...value} parentItemKey={itemKey} itemChange={ this.itemChange } defaultValue={defaultValue}/>
			</ItemBox>
		)
	}

	render() {
		const { options , data } = this.props.state.settingData;
		return (
			<div className="settingMainBox">
				{
					options.length > 0
					?
						<Tabs defaultActiveKey="0" type="card">
						    { options.map(this.renderOptions) }
						</Tabs>
					:
						null
				}
				
				{
					options.length > 0
					?
						<div className="submitBtn">
							<Button type="primary" onClick={this.handlerSubmit}>保存</Button>
						</div>
					:
						null
				}
				
				<CommonModal />
			</div>
		);
	}
}


export default connect(
  state => ({ state }),
  dispatch => ({
    dispatch
})
)(MainComponent);
