/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import { Input, Select} from 'antd';
import { TntToast } from 'tnt-ui'
const Option = Select.Option;

export default class CompanyItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onChange = (e) => {
		let { defaultValue } = this.props; 
		let val = e.target.value;
		if(isNaN(val)){
			val = "";
			TntToast({msg : '只能输入数字'});
		}
		defaultValue.value = val;
		this.props.onChange(defaultValue);
	}

	initData = data => {
		const { additionalOptions , defaultValue , vunitOptions } = data;
		let change = false;
		let _defaultValue = {};
		if(additionalOptions.length > 0 || vunitOptions.length > 0){
			if(additionalOptions.length > 0 && defaultValue.additional === ""){
				change = true;
				_defaultValue.additional = additionalOptions[0].value || "";
			}
			if(vunitOptions.length > 0 && defaultValue.vunit === ""){
				_defaultValue.vunit = vunitOptions[0].value || "";
				change = true;
			}
		}
		if(change){
			this.props.onChange(Object.assign({},defaultValue,_defaultValue));
		}
	}
	componentWillReceiveProps(nextProps){
		this.initData(nextProps)
	}
	componentDidMount(){
		this.initData(this.props)
	}

	//附加选项改变
	selectBeforeChange = (value) => {
		let { defaultValue } = this.props;
		defaultValue.additional = value;
		this.props.onChange(defaultValue);
	}

	//附加选项
	selectBefore = () => {
		const { additionalOptions , defaultValue } = this.props;
		if(additionalOptions.length > 0 && defaultValue.additional !== ""){
			return (
				<Select value={defaultValue.additional} onChange={this.selectBeforeChange}>
					{
						additionalOptions.map((v,k) => {
					    	return <Option key={ k } value={v.value}>{v.key}</Option> 
					    })
					}
				</Select>
			)
		}else{
			return "";
		}
	}

	//单位改变
	selectAfterChange = (value) => {
		let { defaultValue } = this.props;
		defaultValue.vunit = value;
		this.props.onChange(defaultValue);
	}

	//单位
	selectAfter = () => {
		const { vunitOptions , defaultValue } = this.props;
		if(vunitOptions.length > 0 && defaultValue.vunit !== ""){
			return (
				<Select value={defaultValue.vunit} onChange={this.selectAfterChange}>
					{
						vunitOptions.map((v,k) => {
					    	return <Option key={ k } value={v.value}>{v.key}</Option> 
					    })
					}
				</Select>
			)
		}else{
			return "像素";
		}
	}

	render() {
		const { placeholder , type , defaultValue , vunitOptions , additionalOptions } = this.props;
		const { onChange , selectBefore , selectAfter } = this;
		return (
			<Input style={{width:"100%"}} addonBefore={selectBefore()} addonAfter={selectAfter()} placeholder={ placeholder } value={ defaultValue.value } onChange={ onChange } />
		);
	}
}

CompanyItem.defaultProps = {
	additionalOptions : [],
	vunitOptions : []
}
