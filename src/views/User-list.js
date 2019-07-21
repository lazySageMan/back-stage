import React from 'react';
import ContentHeader from '../components/content-header'
import { Table, Tag, Button } from 'antd';
import { useDispatch } from 'react-redux'
export default function(){
    let dispatch = useDispatch();
    const data = [
        {
            key: '1',
            Account: 'admin',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['root'],
        },
        {
            key: '2',
            Account: 'test1',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['developer'],
        },
        {
            key: '3',
            Account: 'test2',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['developer'],
        },
        {
            key: '4',
            Account: 'admin',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['root'],
        },
        {
            key: '5',
            Account: 'test1',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['developer'],
        },
        {
            key: '6',
            Account: 'test2',
            Passwd: '123456',
            Email: 'lazysage@126.com',
            Permission: ['developer'],
        }
    ];

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