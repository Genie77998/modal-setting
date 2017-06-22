/*
* @Author: wj77998
* @Date:   2017-06-21 15:13:50
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-21 15:14:03
*/

'use strict';


import React, { Component, PropTypes } from 'react'
import { Button } from 'antd';

const noop = () => {}
export default class CopyBtn extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { handlerClick , text } = this.props;
		return (
			<div className="copyBtn">
				<Button type="primary" onClick={handlerClick}>{ text }</Button>
			</div>
		);
	}
}

CopyBtn.defaultProps = {
	handlerClick: noop,
	text : "新增"
}
