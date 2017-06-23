/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-19 15:55:48
*/

import React, { Component, PropTypes } from 'react'
import ReactDOM ,  { render }  from 'react-dom'
import modalSetting from './index'
import { Button } from 'antd';
const _img = require('./assets/pang.jpg');

import "./assets/demo"

document.addEventListener('modalSettingUpdata',function(v){
	let _data = v.modalSettingData;
	console.log("组件设置已更新");
	console.log(_data);
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
	    }
	}

	handlerClick = () => {
		modalSetting({
			data : {
			},
			options : [
				{
					itemTitle : "页面背景",
					itemKey : "background",
					items : [
						{
							title : "背景色",
							itemKey : "color",
							type : "color"
						},
						{
							title : "高度",
							itemKey : "height",
							type : "company"
						},
						{
							title : "水平位置",
							placeholder : "偏移量",
							itemKey : "horizontal-position",
							type : "company",
							flex : false,
							vunitOptions : [{
								key : "像素",
								value : "px"
							},{
								key : "百分比",
								value : "%"
							}],
							additionalOptions : [{
								key : "左",
								value : "left"
							},{
								key : "右",
								value : "right"
							}]
						},

						{
							title : "是否固定",
							itemKey : "isFixed",
							placeholder : "滚动到元素位置后始终位于顶部",
							flex : false,
							isSelect : true,
							type : "checkbox"
						},
						{
							title : "是否都跳转到外部",
							itemKey : "isOut",
							type : "radio",
							flex : false,
							radioOptions : [
								{
									key : "否",
									value : 0
								},
								{
									key : "是",
									value : 1
								}
							]
						},
						{
							title : "CSS",
							itemKey : "js",
							flex : false,
							placeholder : "CDN链接", 
							type : "cdn"
						},
						{
							title : "HTML",
							itemKey : "html",
							flex : false,
							type : "textarea"
						},
						{
							title : "背景图片",
							flex : false,
							itemKey : "image",
							type : "image"
						},
						{
							title : "填充方式",
							itemKey : "repeat",
							type : "select",
							selectOptions : [
								{
									key : "平铺",
									value : "repeat"
								},
								{
									key : "横向平铺",
									value : "repeat-x"
								},
								{
									key : "纵向平铺",
									value : "repeat-y"
								},
								{
									key : "不平铺",
									value : "no-repeat"
								}
							]
						},
						{
							title : "图像位置",
							itemKey : "position",
							type : "select",
							selectOptions : [
								{
									key : "居中",
									value : "center"
								},
								{
									key : "左",
									value : "left"
								},
								{
									key : "右",
									value : "right"
								},
								{
									key : "上",
									value : "top"
								},
								{
									key : "下",
									value : "bottom"
								}
							]
						}
						
					]
				},
				{
					itemTitle : "微信分享",
					itemKey : "share4wechat",
					items : [
						{
							title : "ICON",
							itemKey : "icon",
							flex : false,
							type : "image",
							copyItem : true,
							islink : true
						},
						{
							title : "标题",
							itemKey : "title",
							type : "input",
							placeholder : "请输入分享标题"
						},
						{
							title : "描述",
							itemKey : "desc",
							type : "textarea",
							placeholder : "请输入分享描述"
						},
						{
							title : "链接",
							itemKey : "link",
							type : "input",
							placeholder : "请输入分享链接"
						}
					]
				}
			],
			el : 'settingBody',
			componentId : new Date().getTime()
		});
	}

	render() {
		return (
			<div>
				<div className="settingBtn">
					<Button type="primary" onClick={this.handlerClick}>设置按钮</Button>
				</div>
				<div className="editor-edits">
			        <div className="editor-edits-body">
			            <div className="edits-body-name">设置</div>
			            <div id="settingBody" className="edits-body-content"></div>
			        </div>
			    </div>
			</div>
		);
	}
}




render( 
	<App />
	,
    document.getElementById('app')
)
