/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import RichTextEditor from 'react-rte-image';
import { setMsgTip } from './../store/actions'
import { Upload } from 'antd'
import { uploadApi } from './../lib/common'



export default class EditorItem extends Component {
	constructor(props) {
		super(props);
		this.triggerImgLabel = null;
		this.isupload = false;
		this.state = {
			value : RichTextEditor.createValueFromString(props.defaultValue || '' ,'html')
		};
	}

	beforeUpload = file => {
	  const fileType = ["image/gif","image/png","image/jpeg"]
	  const isJPG = fileType.indexOf(file.type) > -1;
	  if (!isJPG) {
	  	this.props.dispatch(setMsgTip("只能上传图片文件","error"));
	  }
	  const isLt2M = file.size / 1024 / 1024 < 2;
	  if (!isLt2M) {
	  	this.props.dispatch(setMsgTip("图片不能超过2M","error"));
	  }
	  return isJPG && isLt2M;
	}
	_onDocumentInput = (event: Object) => {
		let _target = event.target;
		let _upload = this.refs.uploadImg;
		if(_target && (
				(_target.className.indexOf("IconButton__icon-image___2NVj8") > -1 && _target.tagName.toLocaleLowerCase() == "span")
				||
				(_target.className.indexOf("IconButton__root___2awWb")>-1 && _target.tagName.toLocaleLowerCase() == "button" && _target.getAttribute('type') == "button" && _target.title == "Image")
				)
			){
			this.triggerImgLabel = _target;
			setTimeout(()=> {
				if(document.getElementsByClassName('InputPopover__input___3QwmQ')[0]){
					document.getElementsByClassName('InputPopover__input___3QwmQ')[0].setAttribute('readonly','readonly');
					document.getElementsByClassName('InputPopover__input___3QwmQ')[0].setAttribute('placeholder','点击上传图片');
					document.getElementsByClassName('InputPopover__input___3QwmQ')[0].onclick = null;
					document.getElementsByClassName('InputPopover__input___3QwmQ')[0].onclick = () => {
						if(_upload && !this.isupload){
							_upload.click();
						}
					}
				}
			},50);
			if(_upload && !this.isupload){
				_upload.click();
			}
		}
	}
	componentDidMount() {
		try{
			ReactDOM.findDOMNode(this.refs.editBox).addEventListener('click', this._onDocumentInput);
		}catch(e){}
	    
	}

	componentWillUnmount() {
	    try{
	    	ReactDOM.findDOMNode(this.refs.editBox).removeListener('click', this._onDocumentInput);
	    }catch(e){}
	}

	setPath = (path) => {
		try{
			document.getElementsByClassName('InputPopover__input___3QwmQ')[0].value = path;
			document.getElementsByClassName('IconButton__icon-accept___2elsq')[0].click();
		}catch(e){}
		this.isupload = false;
	}

	//图片上传
	handleChange = (info) => {
		const imageUrl = this.props.defaultValue;
	    if (info.file.status === 'done') {
	    	if(info.file.response && info.file.response.path){
	    		this.isupload = true;
	    		if(this.triggerImgLabel){
	    			if(!document.getElementsByClassName('InputPopover__input___3QwmQ')[0]){
	    				this.triggerImgLabel.click();
	    				setTimeout(() => {
	    					this.setPath(info.file.response.path);
	    				},10);
	    			}else{
	    				this.setPath(info.file.response.path);
	    			}
	    		}
	    	}else{
	    		this.isupload = false;
	    		this.props.dispatch(setMsgTip("图片上传失败！","error"));
	    	}
	    }
	}

  	onChange = (value) => {
  		this.props.onChange(value.toString('html')); 
	    this.setState({value});
	}

	render() {
		const { placeholder , type , defaultValue } = this.props;
		const toolbarConfig = {
		    display: ['IMAGE_BUTTON'],
		    INLINE_STYLE_BUTTONS: [
		      {label: '加粗', style: 'BOLD', className: 'custom-css-class'},
		      {label: '倾斜', style: 'ITALIC'},
		      {label: '下划线', style: 'UNDERLINE'}
		    ]
		};
		return (
			<div>
				<RichTextEditor
					ref="editBox"
					toolbarConfig={toolbarConfig}
			        value={this.state.value}
			        placeholder={placeholder || "请输入内容"}
			        onChange={this.onChange}
			    />
			    <div style={{display:"none"}}>
			    	<Upload
				        name="file"
				        accept="image/*"
				        showUploadList={false}
				        action={uploadApi}
				        beforeUpload={this.beforeUpload}
				        onChange={this.handleChange}
				        onError={()=>{
				        	this.isupload = false;
	    					this.props.dispatch(setMsgTip("图片上传失败！","error"));
				        }}
				    >
				    	<div ref="uploadImg" >click me!</div>
				    </Upload>
			    </div>
			</div>
		);
	}
}
