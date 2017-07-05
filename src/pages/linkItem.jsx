/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 18:39:53
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import appPath from './../lib/appPath'
import { Input , Cascader } from 'antd';
const InputGroup = Input.Group;
const options = [
	{
		value: 'site',
		label: '站内跳转',
		isLeaf: false,
	},
	{
		value: 'app',
		label: 'APP',
		children : appPath
	},
	{
		value: 'url',
		label: '站外跳转'
	},
	{
		value: 'coupon',
		label: '领券'
	},
	{
		value: 'bcoupon',
		label: '领券[B]'
	},
	{
		value: 'goods',
		label: '商品'
	},
	{
		value: 'bgoods',
		label: '商品[B]'
	},
	{
		value: 'floor',
		label: '楼层'
	},
	{
		value: 'pop',
		label: '弹出'
	}
];

export default class LinkItem extends Component {

	static defaultProps = {
		maxLength : null,
		linkStyle : {}
	}

	constructor(props) {
		super(props);
		this.state = {
			updateTime : 0
		};
	}

	displayRender = (label,options) => {
		if(label && label.length > 0){
			return label[0];
		}else{
			return "";
		}
	}

	loadData = (selectedOptions,key) => {
		const targetOption = selectedOptions[selectedOptions.length - 1];
	    targetOption.loading = true;
	    setTimeout(() => {
	      targetOption.loading = false;
	      targetOption.children = [
		      {
		        label: `新页面`, 
		        value: 'page',
		      },
		      {
		        label: `新页面2`, 
		        value: 'page2',
		      }
	      ];
	      this.setState({
	      	updateTime : Date.now()
	      })
	    }, 1000);
	}

	linkValueChange = (e) => {
		const { itemKey , linkChange , defaultValue } = this.props;
		let _val = e.target.value;
		if(["site","app"].indexOf(defaultValue.linkType) > -1){
			// e.target.setAttribute('disabled','disabled');
			return;
		}
		if(_val != ""){
			if(["goods","bgoods","floor"].indexOf(defaultValue.linkType) > -1 && !/^[1-9]\d*$/g.test(_val)){
				return;
			}
		}
		let linkValue = _val;
		let linkText = _val;
		linkChange({
			linkValue,
			linkText
		},itemKey);
	}

	changeLinkType = (valArr , label ) => {
		const { itemKey , linkChange } = this.props;
		let linkText = "";
		let linkType = label[0].value;
		let linkValue = "";
		if(["site","app"].indexOf(linkType) > -1){
			if(linkType == "app"){
				if(valArr.length > 2){
					linkText = label[label.length - 1].label;
					linkValue = label[label.length - 1].value;
					linkChange({
						linkType,
						linkText,
						linkValue
					},itemKey);
				}
			}else{
				if(valArr.length > 1){
					linkText = label[label.length - 1].label;
					linkValue = label[label.length - 1].value;
					linkChange({
						linkType,
						linkText,
						linkValue
					},itemKey);
				}
			}
			
		}else{
			linkChange({
				linkType,
				linkText,
				linkValue
			},itemKey);
		}
	}

	render() {
		const { defaultValue, linkStyle , itemKey , linkChange , ...other} = this.props;
		const { displayRender } = this;
		const disabled = ["site","app"].indexOf(defaultValue.linkType) > -1 ? true : false;
		return (
			<div style={linkStyle}>
				<InputGroup compact>
					<Cascader 
						style={{width:"30%"}} 
						displayRender={displayRender} 
						options={options} 
						allowClear={false}
						defaultValue={defaultValue.linkType ? [defaultValue.linkType] : null }
						loadData={this.loadData}
						placeholder="请选择" 
						changeOnSelect={true}
						onChange={this.changeLinkType} 
					/>
					<Input style={{width:"70%"}} disabled={disabled} value={defaultValue.linkText} onChange={this.linkValueChange}/>
				</InputGroup>
			</div>
		);
	}
}
