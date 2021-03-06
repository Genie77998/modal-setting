/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'

import { Input , InputNumber } from 'antd';

export default class InputItem extends Component {

	static defaultProps = {
		maxLength : null
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	onChange = e => {
		const val = e.target.value;
		this.props.onChange(val);
	}

	render() {
		const { placeholder , type , defaultValue , maxLength , ...other } = this.props;
		const { onChange } = this;
		return (
			<div>
				{
					type == "inputNum"

					?
						<InputNumber size="large" {...other} placeholder={ placeholder } value={defaultValue} onChange={onChange} />
					: 
						type == "textarea"
							?
								<Input type="textarea" {...other} placeholder={ placeholder } value={defaultValue} autosize={{ minRows: 2, maxRows: 6 }} onChange={onChange} />
							:
								<Input size="large" {...other} placeholder={ placeholder } maxLength={maxLength} value={defaultValue} onChange={onChange} />
				}
			</div>
		);
	}
}
