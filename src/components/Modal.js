import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Input, Icon } from 'antd'
export default () => {

    let modal = useSelector(state => state.modal)
    let dispatch = useDispatch()
    console.log(modal)
    let {
        isShow,
        modalType,
        title
    } = modal

    const handleClick = () => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: false,
            modalType: modalType
        })
    }

    const getModalTag = () => {
        if (modalType === 'addUser'){
            return (
                <div>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>账号：</span>
                        <Input style={{flex: 9}} placeholder="请输入账号"/>
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>密码：</span>
                        <Input style={{flex: 9}} placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>邮箱：</span>
                        <Input style={{ flex: 9 }} placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>权限：</span>
                        <Input style={{ flex: 9 }} placeholder="请输入账号" />
                    </p>
                </div>
            )
        } else if(modalType === 'deleteUser'){
            return (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Icon style={{ fontSize: '18px', color: 'red',marginRight: '5px' }} type='exclamation-circle' />
                    你确定删除该用户吗？
                </div>
            )
        } else if(modalType === 'addBlog'){
            return (
                <div>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>名称：</span>
                        <Input style={{ flex: 9 }} placeholder="博客名称" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>图片：</span>
                        <Input style={{ flex: 9 }} placeholder="博客图片" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>简介：</span>
                        <Input style={{ flex: 9 }} placeholder="博客简介" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>作者：</span>
                        <Input style={{ flex: 9 }} placeholder="博客作者" />
                    </p>
                </div>
            )
        }
    }

    return (
        <div>
            <Modal
                title={title}
                visible={isShow}
                cancelText='取消'
                okText='确定'
                onOk={() => handleClick()}
                onCancel={() => handleClick()}>
                {getModalTag()}
            </Modal>
        </div>
    )
}