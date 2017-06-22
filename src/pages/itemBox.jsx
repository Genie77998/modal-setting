/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { Tooltip } from 'antd'

export default class ItemBox extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const { children , title , desc , flex } = this.props;
		const _flexCls = flex === false ? "no-flex" : "";
		return (
			<div
			className={classNames("itemBox",_flexCls)}
			>
				<Tooltip 
					title={ desc || title }
					placement="bottom"
				>
					<div className="itemLabel">{ title }：</div>
				</Tooltip>
		      	<div className="itemContent">
		      		{ children }
		      	</div>
			</div>
		);
	}
}
