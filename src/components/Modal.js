import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Input } from 'antd'
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
                        <p style={{flex: 1, textAlign: 'center'}}>账号：</p>
                        <Input style={{flex: 9}} placeholder="请输入账号"/>
                    </p>
                    <p className="flex-wrap">
                        <p style={{flex: 1, textAlign: 'center'}}>密码：</p>
                        <Input style={{flex: 9}} placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <p style={{flex: 1, textAlign: 'center'}}>邮箱：</p>
                        <Input style={{ flex: 9 }} placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <p style={{flex: 1, textAlign: 'center'}}>权限：</p>
                        <Input style={{ flex: 9 }} placeholder="请输入账号" />
                    </p>
                </div>
            )
        } else if(modalType === 'deleteUser'){
            
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