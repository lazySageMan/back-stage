import React from 'react';

export default function(){
    return (
        <div className='login-wrap'>
            <h2 className='project-name'>博客后台管理系统</h2>
            <div className='login-container'>
                <div className='login-title'>登录</div>
                <div className='login-input'>
                    <input 
                        className='input'
                        type='text' 
                        placeholder='请输入用户名' />
                </div>
                <div className='login-error'></div>
                <div className='login-input'>
                    <input
                        className='input'
                        type='text'
                        placeholder='请输入密码' />
                </div>
                <div className='login-error'></div>
                <div className='login-forget'>
                    <span className='login-forget-text'>忘记密码</span>
                </div>
                <div className='login-submit'>
                    <button className='botton' type='button'>登录</button>
                </div>
            </div>
        </div>
    )
}