import React, { useEffect } from 'react'
import ContentHeader from '../components/content-header'
import { Table, Tag, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HTTP from '../utils/HTTP'
import { message } from 'antd'
import LocalStotrage from '../utils/LocalStotrage'

const UserList = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    
    useEffect(() => {
        const token = LocalStotrage.getItem('token')

        HTTP.GET('/admin/getUser', '', token).then((res) => {
            if(res.code === 200){
                dispatch({
                    type: 'GET_USR',
                    user: res.data
                })
            }else if(res.code === 401){
                LocalStotrage.delAll()
                message.error('身份已过期，请重新登录')
                props.history.replace('/login')
            }
        })
    }, [dispatch, props.history])

    let data = user.user.map(item => {
        return {
            key: item.id,
            Account: item.username,
            Passwd: item.password,
            Email: item.email,
            Permission: [item.auth === 1 ? 'ROOT' : 'DEVELOP']
        }
    })

    const columns = [
        {
            title: '账号',
            dataIndex: 'Account',
            key: 'Account',
        },
        {
            title: '密码',
            dataIndex: 'Passwd',
            key: 'Passwd',
        },
        {
            title: '邮箱',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: '权限',
            key: 'Permission',
            dataIndex: 'Permission',
            render: Permission => (
                <span>
                    {Permission.map(tag => {
                        let color = Permission.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'root') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={Permission}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (text) => {
                return (
                    <span>
                        <Button
                            onClick={() => changeInfo(text)}
                            style={{ marginRight: '5px' }}
                            type="primary">修改信息</Button>
                        <Button
                            onClick={() => deleteUsr(text.key)}
                            type="danger">删除用户</Button>
                    </span>
                )
            }
        },
    ];

    const changeInfo = (info) => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: true,
            modalType: 'changeUser',
            title: '修改信息',
            userInfo: info
        })
    }

    const deleteUsr = (key) => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: true,
            modalType: 'deleteUser',
            title: '删除用户',
            id: key
        })
    }

    return (
        <div className='content'>
            <div className='content-main'>
                <ContentHeader title='用户列表' />
                <div className='content-usr'>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(UserList)