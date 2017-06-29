/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-19 15:55:48
*/


import React, { Component, PropTypes } from 'react'
import { InputItem ,EditorItem , ColorPick , SelectItem , ImageUpload , CdnItem , RadioItem , CheckBoxItem , CompanyItem} from './index'

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
		switch(type) {
			case "input" :
			case "textarea" :
			case "inputNum" :
				return (
					<InputItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "color" :
				return (
					<ColorPick {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "select" :
				return (
					<SelectItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "image" :
				return (
					<ImageUpload {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "cdn" :
				return (
					<CdnItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "radio" :
				return (
					<RadioItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "checkbox" :
				return (
					<CheckBoxItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "company" :
				return (
					<CompanyItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				);
				break;
			case "editor" :
				return (
					<EditorItem {...this.props} onChange={this.onChange} defaultValue={defaultValue} />
				)
				break;
			default :
				return null;
				break;
		}
	}
}
