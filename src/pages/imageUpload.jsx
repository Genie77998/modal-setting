/*
* @Author: wj77998
* @Date:   2017-06-20 16:40:17
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-20 16:41:21
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import { Upload, Icon, message , Modal } from 'antd'
import { connect } from 'react-redux'
import { showModal , showPreview } from './../store/actions'
import { TntToast } from 'tnt-ui'
import classNames from 'classnames'
import CopyBtn from './copyBtn'
import { imageData , uploadApi} from './../lib/common'

function beforeUpload(file) {
	
  const fileType = ["image/gif","image/png","image/jpeg"]
  const isJPG = fileType.indexOf(file.type) > -1;
  if (!isJPG) {
    message.error('只能上传图片文件');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片不能超过2M');
  }
  return isJPG && isLt2M;
}


class ImageUpload extends Component {

	static defaultProps = {
		copyItem : false,
		copyMaxLength : 4
	}
	constructor(props) {
		super(props);
		this.state = {
      		mouseEnterIndex : -1
		}
	}

	//显示图片
	handlePreview = file => {
		if(file.src){
			this.props.dispatch(showPreview(file.src))
		}
	}


	//检查有多少个图片对象
	checkImages = () => {
		const { defaultValue } = this.props;
		let _re = false;
		if(!defaultValue || defaultValue.length == 0){
			return _re;
		}
		if(defaultValue.length > 1){
			return true
		}else{
			for (var prop in defaultValue[0]) {
				if (defaultValue[0].hasOwnProperty(prop)) {
					if(defaultValue[0][prop] != ""){
						_re = true;
					}
				}
			}
			return _re;
		}
	}

	//删除图片
	deleteImageItem = index => {
		const _me = this;
		if(this.checkImages()){
			this.props.dispatch(showModal("提示","确定要删除吗？",() => {
				const { defaultValue } = _me.props;
				let _defaultValue = [];
				if(defaultValue.length == 1){
					_defaultValue = [imageData()];
				}else{
					defaultValue.forEach((v,k) => {
						if(k != index){
							_defaultValue.push(v)
						}
					});
				}
				_me.props.onChange(_defaultValue);
			}));
		}
		
	}
	//图片上传
	handleChange = (info,key) => {
		const imageUrl = this.props.defaultValue;
	    if (info.file.status === 'done') {
	    	if(info.file.response && info.file.response.path){
	    		let _img = new Image();
	    			_img.src = info.file.response.path;
	    		_img.onload = (e) => {
	    			let _w = e.target.width;
	    			let _h = e.target.height;
	    			imageUrl[key].src = info.file.response.path;
	    			imageUrl[key].width = _w;
	    			imageUrl[key].height = _h;
	    			this.props.onChange(imageUrl);
	    			_img = null;
	    		}
	    		_img.onerror = () => {
	    			imageUrl[key].src = info.file.response.path;
	    			this.props.onChange(imageUrl);
	    			message.error('获取图片宽高失败！');
	    			_img = null;
	    		}
	    	}else{
	    		message.error('图片上传失败！');
	    	}
	    }
	}

	setMouseEnter = (val) =>{
		this.setState({
			mouseEnterIndex : val
		})
	}

	//渲染图片
	renderImgTpl = (val,key) => {
		const triggerCls = key === this.state.mouseEnterIndex ? "hoverItem" : "";
		return (
			<div className={classNames("avatar-uploader-box",triggerCls)}
				onMouseOver={
					() => {
						this.setMouseEnter(key)
					}
				}
				onMouseOut={
					() => {
						this.setMouseEnter(-1)
					}
				}
				key={key}
			>
				<Upload
			        className="avatar-uploader"
			        name="file"
			        key={key}
			        accept="image/*"
			        showUploadList={false}
			        action={uploadApi}
			        beforeUpload={beforeUpload}
			        onChange={(info) => {
			        	this.handleChange(info,key)
			        }}
			        onError={()=>{
    					message.error('图片上传失败！');
			        }}
			    >
			        {
			          val.src 
			          ?
			            <img src={ val.src } alt="" className="avatar" /> 
			          :
			            <Icon type="plus" className="avatar-uploader-trigger" />
			        }
			    </Upload>
			    {
		        	val.src ?
		        		<div className="previewImage" onClick={() => {this.handlePreview(val)}}><Icon type="eye" className="previewImage-icon" /></div>
		        	:
		        		null
		        }
			    <Icon type="close" className="avatar-uploader-close" onClick={
	    			() => {
	    				this.deleteImageItem(key)
	    			}
	    		} />	    
		    </div>
		)
	}

	//新增一项
	handlerCopy = () => {
		let { defaultValue } = this.props;
		let empty = 0;
		defaultValue.forEach(v => {
			if(v.src === ""){
				empty++
			}
		});
		if(empty > 0){
			TntToast({
				msg : "请先完善再添加"
			})
		}else{
			defaultValue.push(imageData());
			this.props.onChange(defaultValue);
		}
	}

	render() {
		const { copyItem , defaultValue , copyMaxLength} = this.props;
		const { onChange } = this;
		const cpoyCls = copyItem ? "iscopy" : "";
		return (
			<div className={classNames("avatar-uploader-content",cpoyCls)}> 
				{defaultValue.map(this.renderImgTpl)}
				{
					copyItem && defaultValue.length < copyMaxLength
					?
						<div className="avatar-uploader-box">
							<CopyBtn text="新增一张图片" handlerClick={this.handlerCopy} />
						</div>
					:
						null
				}
			</div>
		);
	}
}

export default connect(
  state => ({ state }),
  dispatch => ({
    dispatch
})
)(ImageUpload);
