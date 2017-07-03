/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'

import { Input , Cascader } from 'antd';
const InputGroup = Input.Group;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

export default class LinkItem extends Component {

	static defaultProps = {
		maxLength : null,
		linkStyle : {}
	}

	constructor(props) {
		super(props);
		this.state = {
			updateTime : 0
		};
	}

	displayRender = (label) => {
		//console.log(label);
		return "test"
	}

	loadData = (selectedOptions,key) => {
		const targetOption = selectedOptions[selectedOptions.length - 1];
	    targetOption.loading = true;
	    setTimeout(() => {
	      targetOption.loading = false;
	      targetOption.children = [{
	        label: `${targetOption.label} Dynamic 1`, 
	        value: 'dynamic1',
	      }, {
	        label: `${targetOption.label} Dynamic 2`,
	        value: 'dynamic2',
	      }];
	      this.setState({
	      	updateTime : Date.now()
	      })
	    }, 1000);
	}

	render() {
		const { defaultValue, linkStyle , ...other} = this.props;
		const { displayRender } = this;
		return (
			<div style={linkStyle}>
				<InputGroup compact>
					<Cascader 
						style={{width:"30%"}} 
						expandTrigger="hover"
						displayRender={displayRender} 
						options={options} 
						loadData={this.loadData}
						placeholder="" 
						changeOnSelect={true}
						onChange={(e)=>{
							console.log(e,1);
						}} 
					/>
					<Input style={{width:"70%"}} defaultValue={defaultValue.linkValue} />
				</InputGroup>
			</div>
		);
	}
}
