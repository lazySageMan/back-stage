import React from 'react';
import { Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
export default function(){

    let header = useSelector(state => state.header)
    let dispatch = useDispatch()

    const tabChange = (index) => {
        if(index === 0){
            dispatch({
                type: 'CHANGE_HEADER',
                header: [
                    {
                        type: '/blog/add',
                        title: '新建博客',
                        bgColor: 'primary'
                    }
                ],
                title: '博客管理'
            })
        }else{
            dispatch({
                type: 'CHANGE_HEADER',
                header: [
                    {
                        type: '/user/add',
                        title: '新增用户',
                        bgColor: 'primary'
                    }
                ],
                title: '用户管理'
            })
        }
    }

    return (
        <header className="header">
            <div className='header-botton'>
                <div className='header-left'>
                    <Link to='/'>
                        <div className='header-icon'>
                            Document
                        </div>
                    </Link>
                    
                    <div className='header-tab'>
                        <NavLink to='/' exact>
                            <div className='header-tab-item' onClick={() => tabChange(0)}>
                                <Icon style={{fontSize: '12px', color: '#fff'}} type='align-left'/>
                                <p className='header-tab-text'>博客管理</p>
                            </div>
                        </NavLink>
                        <NavLink to='/usr' exact>
                            <div className='header-tab-item' onClick={() => tabChange(1)}>
                                <Icon style={{fontSize: '12px', color: '#fff'}} type='team'/>
                                <p className='header-tab-text'>用户管理</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-user'>
                        <div className='header-user-circle'>
                            <Icon style={{fontSize: '18px',color: '#fff'}} type='home' />
                        </div>
                        <div className='header-user-text'>admin</div>
                    </div>
                </div>
            </div>
        </header>
    )
}