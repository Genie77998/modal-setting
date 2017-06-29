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

	static defaultProps = {
		style : {},
		handlerClick: noop,
		text : "新增"
	}

	constructor(props) {
		super(props);
	}
	render() {
		const { handlerClick , text , style} = this.props;
		return (
			<div className="copyBtn" style={style}>
				<Button type="primary" onClick={handlerClick}>{ text }</Button>
			</div>
		);
	}
}


