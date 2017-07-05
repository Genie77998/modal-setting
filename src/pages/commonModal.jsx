/*
* @Author: wj77998
* @Date:   2017-06-22 19:33:27
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 16:18:15
*/

'use strict';



import React, { Component, PropTypes } from 'react'
import { Modal , message } from 'antd';
import { showMsg } from './../lib/common'
import { hideModal , hidePreview } from './../store/actions'

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentWillUpdate(nextProps){
		const { msgType , msgContent , timer} = nextProps.state.msgTip;
		if(msgContent && this.props.state.msgTip.timer != timer){
			message.destroy();
			switch(msgType){
				case "warn" :
					message.warn(msgContent)
					break;
				case "error" :
					message.error(msgContent)
					break;
				case "info" :
					message.info(msgContent)
					break;
				default :
				message.success(msgContent)
			}
		}
	}
	render() {
		const { dispatch } = this.props;
		const { confirmVisible , confirTitle,confirContent,confirmOkFn,confirmNoFn , previewVisible , previewImage} = this.props.state.modalData;
		return (
			<div>
				<Modal
		          title={confirTitle}
		          visible={ confirmVisible } 
		          onOk={ () => {
		          	dispatch(hideModal())
		          	confirmOkFn()
		          }}
		          onCancel={ ()=>{
		          	dispatch(hideModal())
		          	confirmNoFn()
		          } }
		          okText="确认"
		          cancelText="取消"
		        >
		        	{ confirContent } 
		        </Modal>

		        <Modal visible={ previewVisible } footer={null} onCancel={()=>{dispatch(hidePreview())}}>
		          <img alt="图片查看" style={{ width: '100%' }} src={previewImage} />
		        </Modal>
			</div>
		);
	}
}

