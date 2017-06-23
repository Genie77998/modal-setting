/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class RadioItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onChange = (e) => {
		const _val = e.target.value;
		this.props.onChange(_val);
	}

	initData = data => {
		const { defaultValue , radioOptions , isSelect } = data;
		let _val = "";
		if(isSelect === true && defaultValue === ""){
			try{
				_val = radioOptions[0].value;
			}catch(e){}
			if(_val !== ""){
				this.props.onChange(_val);
			}
		}
	}

	componentWillReceiveProps(nextProps){
		this.initData(nextProps)
	}

	componentDidMount(){
		this.initData(this.props)
	}

	render() {
		const { placeholder , type , defaultValue , radioOptions , isSelect , parentItemKey , itemKey } = this.props;
		let _val = defaultValue;
		if(radioOptions.length == 0){
			console.error(`radioOptions Can not be empty => 单选框选项不能为空请检查配置项 ${parentItemKey}["${itemKey}"]`);
		}
		const { onChange } = this;
		return (
			<RadioGroup onChange={this.onChange} value={ defaultValue }>
				{
					radioOptions.map((v,k) => {
						return <Radio key={k} value={v.value}>{v.key}</Radio>
					})
				}
	      	</RadioGroup>
		);
	}
}


RadioItem.defaultProps = {
	isSelect : true,
	radioOptions : []
}
