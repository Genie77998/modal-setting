/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 14:57:15
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import CopyBtn from './copyBtn'
import { TntToast } from 'tnt-ui'
import { Input , Icon } from 'antd';
import { navData } from './../lib/common'
import LinkItem from './linkItem'


export default class NavItem extends Component {

	static defaultProps = {
		copyMaxLength : 8,
		copyItem : true,
		maxLength : 5
	}


	constructor(props) {
		super(props);
		this.state = {};
	}

	//删除
	deleteCdn = key => {
		const { defaultValue } = this.props;
		let _defaultValue = [];
		if(defaultValue.length > 1){
			defaultValue.forEach((v,k) => {
				if(k != key){
					_defaultValue.push(v);
				}
			});
		}else{
			_defaultValue.push(navData());
		}
		this.props.onChange(_defaultValue);
	}

	onChange = (val,key,item) => {
		let { defaultValue } = this.props; 
		let _val = val.replace(/\s/g,'');
		defaultValue[key][item] = _val;
		this.props.onChange(defaultValue);
	}

	linkChange = (value , key) => {
		let { defaultValue } = this.props;
		defaultValue[key] = Object.assign({},defaultValue[key],value);
		this.props.onChange(defaultValue);
	}

	//新增一项
	handlerCopy = () => {
		let { defaultValue } = this.props;
		let empty = 0;
		defaultValue.forEach(v => {
			if(v.text === ""){
				empty++
			}
		});
		if(empty > 0){
			TntToast({
				msg : "请先完善再添加"
			})
		}else{
			defaultValue.push(navData());
			this.props.onChange(defaultValue);
		}
	}

	render() {
		const { placeholder , type , defaultValue , copyMaxLength,maxLength } = this.props;
		const { onChange } = this;
		return (
			<div>
				{
					defaultValue.map( (v,k) =>{
						return (
							<div key={k} style={{paddingBottom:5}}>
								<Input 
									size="large" 
									style={{width:"100%"}} 
									addonAfter={
										<Icon type="delete" className="cdnDelete" onClick={
											() => {
												this.deleteCdn(k)
											}
										} />
									}
									maxLength={maxLength}
									placeholder={ placeholder } 
									value={v.text} 
									onChange={(e) => {
										this.onChange(e.target.value,k,'text')
									}} 
								/>
								<LinkItem defaultValue={v} linkStyle={{paddingTop:5}} itemKey={k} linkChange={this.linkChange}/>
							</div>
						)
						
					})
				}
				{
					defaultValue.length < copyMaxLength
					?
						<CopyBtn text="新增" style={{textAlign:"right"}} handlerClick={this.handlerCopy} />
					:
					 null
				}
				
			</div>
		);
	}
}


