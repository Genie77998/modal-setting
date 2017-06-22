/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'

import { Select } from 'antd';
const Option = Select.Option;

export default class SelectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChange = val => {
		this.props.onChange(val);
	}

	render() {
		const { placeholder , type , defaultValue , selectOptions } = this.props;
		const { handleChange } = this;
		return (
			<Select value={ defaultValue } style={{ width: "100%" }} onChange={handleChange}>
		      <Option value="">请选择</Option>
		      {
		      	selectOptions.length > 0
		      	?
		      		selectOptions.map((val,key) => {
		      			return <Option value={val.value} key={key}>{val.key}</Option>
		      		})
		      	:
		      		null
		      }
		    </Select>
		);
	}
}
