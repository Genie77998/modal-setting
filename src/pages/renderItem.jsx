/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-19 15:55:48
*/


import React, { Component, PropTypes } from 'react'
import { InputItem , ColorPick , SelectItem , ImageUpload } from './index'

export default class RenderItem extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onChange = (val) => {
		const { parentItemKey , itemKey } = this.props;
		this.props.itemChange(val,parentItemKey,itemKey);
	}

	render() {
		const { type , defaultValue } = this.props;
		if(["input","textarea","inputNum"].indexOf(type) > -1){
			return (
				<InputItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
			);
		}else if(type == "color"){
			return (
				<ColorPick {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
			)
		}else if(type == "select"){
			return <SelectItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
		}else if(type == "image"){
			return <ImageUpload {...this.props} onChange={this.onChange} defaultValue={defaultValue} />

		}else{
			return null
		}
	}
}
