import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Input, Icon, message } from 'antd'
import HTTP from '../utils/HTTP'
import LocalStotrage from '../utils/LocalStotrage'

const Mmodal = (props) => {
    const { modal, blodValue } = useSelector(state => ({ modal: state.modal, blodValue: state.addblog }))
    const { isShow, modalType, title, id, userInfo } = modal
    const dispatch = useDispatch();

    const [account, setAccount] = useState('');
    const [passwd, setPasswd] = useState('');
    const [email, setEmail] = useState('');
    const [permision, setPersion] = useState('');

    const [blodTitle, setBlodTitle] = useState('');
    const [blogImg, setBlogImg] = useState('');
    const [blogTag, setBlogTag] = useState('');
    const [blogCategory, setBlogCategory] = useState('');

    const {
        Account = '',
        Passwd = '',
        Email = '',
    } = userInfo
    const Permission = userInfo.Permission ? userInfo.Permission[0] === 'ROOT' ? 1 : 2 : '';

    useEffect(() => {
        setAccount(Account);
        setPasswd(Passwd);
        setEmail(Email)
        setPersion(Permission)

        setBlodTitle(blodValue.title)
        setBlogImg(blodValue.img)
        setBlogTag(blodValue.tag)
        setBlogCategory(blodValue.category)
    }, [Account, Email, Passwd, Permission, blodValue.category, blodValue.img, blodValue.tag, blodValue.title, dispatch])

    const token = LocalStotrage.getItem('token');

    const handleClickOk = () => {

        dispatch({
            type: 'MODAL_CHANGE',
            isShow: false,
            modalType: modalType
        })

        if (modalType === 'addUser'){

            if (account === '' || passwd === '' || email === '' || permision === ''){
                message.error('新增用户参数不能为空');
                return 
            }

            const obj = {
                account,
                passwd,
                email,
                permision
            }

            HTTP.POST('/admin/addUser', obj, token).then(res => {
                if (res.code === 200){
                    dispatch({
                        type: 'USER_ADD',
                        user: [{
                            id: 10,
                            username: account,
                            password: passwd,
                            email: email,
                            auth: permision
                        }]
                    })
                    message.success(res.message);
                }else{
                    message.error(res.message);
                }
            })
        
        
        } else if (modalType === 'deleteUser'){
            console.log(id, '1313')
            HTTP.POST('/admin/delUser', {id: id}, token).then(res => {

                if(res.code === 200){
                    dispatch({
                        type: 'DEL_USER',
                        id: id
                    })
                }
            })
        } else if (modalType === 'changeUser'){
            if (account === '' || passwd === '' || email === '' || permision === '') {
                message.error('用户信息参数不能为空');
                return
            }
            const obj = {
                id: userInfo.key,
                account,
                passwd,
                email,
                permision
            }
            HTTP.POST('/admin/changeUser', obj, token).then(res => {
                if (res.code === 200) {
                    dispatch({
                        type: 'CHANGE_USER',
                        user: [{
                            id: userInfo.key,
                            username: account,
                            password: passwd,
                            email: email,
                            auth: permision
                        }]
                    })
                    message.success(res.message);
                } else {
                    message.error(res.message);
                }
            })
        } else if (modalType === 'addBlog'){

            if (blodTitle === '' || blogImg === '' || blogTag === '' || blogCategory === ''){
                message.error('参数不能为空');
                return
            }

            const obj = {
                title: blodTitle,
                content: blodValue.value,
                tags: blogTag,
                categorys: blogCategory,
                img: blogImg
            }
            HTTP.POST('/admin/addBlog', obj, token).then(res => {
                console.log(res);
                if(res.code === 200){
                    message.success('博客上传成功 2秒后跳转');
                    let timer = setTimeout(() => {
                        clearTimeout(timer)
                        props.history.replace('/')
                    })
                }else{
                    message.error('博客上传失败');
                }
            })
        } else if (modalType === 'changeBlog'){
            if (blodTitle === '' || blogImg === '' || blogTag === '' || blogCategory === '') {
                message.error('参数不能为空');
                return
            }

            console.log(blodValue)
            const obj = {
                title: blodTitle,
                content: blodValue.value,
                tags: blogTag,
                categorys: blogCategory,
                img: blogImg,
                id: blodValue.id
            }
            HTTP.POST('/admin/changeBlog', obj, token).then(res => {
                console.log(res);
                if (res.code === 200) {
                    message.success('博客修改成功 2秒后跳转');
                    let timer = setTimeout(() => {
                        clearTimeout(timer)
                        props.history.replace('/')
                    })
                } else {
                    message.error('博客上传失败');
                }
            })
        }
    }

    const handleClickCancel = () => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: false,
            modalType: modalType
        })
    }

    const getModalTag = () => {
        if (modalType === 'addUser' || modalType === 'changeUser'){
            return (
                <div>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>账号：</span>
                        <Input 
                            onChange={(e) => setAccount(e.target.value)}
                            value={account} 
                            style={{flex: 9}} 
                            placeholder="请输入账号"/>
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>密码：</span>
                        <Input 
                            onChange={(e) => setPasswd(e.target.value)}
                            value={passwd}
                            style={{flex: 9}} 
                            placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>邮箱：</span>
                        <Input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{ flex: 9 }} 
                            placeholder="请输入账号" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{flex: 1, textAlign: 'center'}}>权限：</span>
                        <Input 
                            onChange={(e) => setPersion(e.target.value)}
                            value={permision}
                            style={{ flex: 9 }} 
                            placeholder="请输入账号" />
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
        } else if (modalType === 'addBlog' || modalType === 'changeBlog'){
            return (
                <div>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>名称：</span>
                        <Input
                            value={blodTitle}
                            onChange={(e) => setBlodTitle(e.target.value)}
                            style={{ flex: 9 }} 
                            placeholder="博客名称" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>图片：</span>
                        <Input 
                            value={blogImg}
                            onChange={(e) => setBlogImg(e.target.value)}
                            style={{ flex: 9 }} 
                            placeholder="url地址" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>标签：</span>
                        <Input 
                            value={blogTag}
                            onChange={(e) => setBlogTag(e.target.value)}
                            style={{ flex: 9 }} 
                            placeholder="多个标签用,间隔" />
                    </p>
                    <p className="flex-wrap">
                        <span style={{ flex: 1, textAlign: 'center' }}>类别：</span>
                        <Input 
                            value={blogCategory}
                            onChange={(e) => setBlogCategory(e.target.value)}
                            style={{ flex: 9 }} 
                            placeholder="多个类别用,间隔" />
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
                onOk={() => handleClickOk()}
                onCancel={() => handleClickCancel()}>
                {getModalTag()}
            </Modal>
        </div>
    )
}

export default withRouter(Mmodal)