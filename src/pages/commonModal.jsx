/*
* @Author: wj77998
* @Date:   2017-06-22 19:33:27
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-22 19:34:09
*/

'use strict';



import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd';
import { hideModal , hidePreview } from './../store/actions'

class CommonModal extends Component {
	constructor(props) {
		super(props);
		this.state = {}
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

export default connect(
  state => ({ state }),
  dispatch => ({
    dispatch
})
)(CommonModal);
