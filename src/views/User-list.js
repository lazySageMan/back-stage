import React, { useEffect } from 'react';
import ContentHeader from '../components/content-header'
import { Table, Tag, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import HTTP from '../utils/HTTP'
export default function(){
    let dispatch = useDispatch();
    let user = useSelector(state => state.user)
    useEffect(() => {
        HTTP.GET('/admin/getUser').then((res) => {
            if(res.code === 200){
                dispatch({
                    type: 'USER_ADD',
                    user: res.data.data
                })
            }
        })
    }, [dispatch])
    let data = user.user.map(item => {
        return {
            key: item.user_id,
            Account: item.user_name,
            Passwd: item.user_passwd,
            Email: item.user_mail,
            Permission: [item.user_permission === '1' ? 'ROOT' : 'DEVELOP']
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
            render: (text, record) => (
                <span>
                    <Button 
                        onClick={() => changeInfo()}
                        style={{marginRight: '5px'}} 
                        type="primary">修改信息</Button>
                    <Button 
                        onClick={() => deleteUsr()}
                        type="danger">删除用户</Button>
                </span>
            ),
        },
    ];

    const changeInfo = () => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: true,
            modalType: 'addUser',
            title: '修改信息'
        })
    }

    const deleteUsr = () => {
        dispatch({
            type: 'MODAL_CHANGE',
            isShow: true,
            modalType: 'deleteUser',
            title: '删除用户'
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