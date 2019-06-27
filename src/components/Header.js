import React from 'react';
import { Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom'
import '../App.css';
export default function(){
    return (
        <header className="App-header">
            <div className='header-botton'>
                <div className='header-left'>
                    <Link to='/'>
                        <div className='header-icon'>
                            Document
                        </div>
                    </Link>
                    
                    <div className='header-tab'>
                        <NavLink to='/' exact>
                            <div className='header-tab-item'>
                                <Icon style={{fontSize: '12px', color: '#fff'}} type='edit'/>
                                <p className='header-tab-text'>新建博客</p>
                            </div>
                        </NavLink>
                        <NavLink to='/bloglist' exact>
                            <div className='header-tab-item'>
                                <Icon style={{fontSize: '12px', color: '#fff'}} type='align-left'/>
                                <p className='header-tab-text'>博客管理</p>
                            </div>
                        </NavLink>
                        <NavLink to='/usr' exact>
                            <div className='header-tab-item'>
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