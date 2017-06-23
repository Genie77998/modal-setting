/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'antd';

export default class CheckBoxItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onChange = (e) => {
		const _val = e.target.checked;
		this.props.onChange(_val);
	}

	componentWillReceiveProps(nextProps){
		this.initData(nextProps)
	}
	componentDidMount(){
		this.initData(this.props)
	}

	initData = data => {
		const { defaultValue , isSelect } = data;
		if(isSelect === true && defaultValue === ""){
			this.props.onChange(true);
		}
	}

	render() {
		const { placeholder , type , defaultValue , isSelect } = this.props;
		let _def = defaultValue;
		if(typeof _def != "boolean"){
			_def = false;
		}
		const { onChange } = this; 
		return (
			<Checkbox onChange={onChange} checked={_def} >{ placeholder }</Checkbox>
		);
	}
}


CheckBoxItem.defaultProps = {
	isSelect : false
}
