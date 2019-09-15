import React, { useState } from 'react';
import HTTP from '../utils/HTTP'
import LocalStotrage from '../utils/LocalStotrage'
import { withRouter } from "react-router-dom"
import { message } from 'antd';
const Login =  (props) => {

    const [account, setAccount] = useState('');
    const [passwd, setPasswd] = useState('');
    const token = LocalStotrage.getItem('token');

    if(token){
        props.history.push('/')
    }

    const userLogin = () => {

        if (account === '' || passwd === ''){
            message.error('账号密码不能为空');
            return
        }

        let obj = {
            account: account,
            passwd: passwd
        }
        HTTP.POST('/admin/login', obj).then(res => {
            console.log(res)
            if(res.code === 200){
                message.success(res.message);
                LocalStotrage.setItem('token', res.data)
                props.history.push('/')
            }else{
                message.error(res.message);
                return
            }
        })
    }

    return (
        <div className='login-wrap'>
            <h2 className='project-name'>博客后台管理系统</h2>
            <div className='login-container'>
                <div className='login-title'>登录</div>
                <div className='login-input'>
                    <input 
                        value={account}
                        onChange={e => setAccount(e.target.value )}
                        className='input'
                        type='text' 
                        placeholder='请输入用户名' />
                </div>
                <div className='login-error'></div>
                <div className='login-input'>
                    <input
                        value={passwd}
                        onChange={e => setPasswd(e.target.value )}
                        className='input'
                        type='password'
                        placeholder='请输入密码' />
                </div>
                <div className='login-error'></div>
                <div className='login-forget'>
                    <span className='login-forget-text'>忘记密码</span>
                </div>
                <div className='login-submit'>
                    <button 
                        onClick={() => userLogin()}
                        className='botton' 
                        type='button'>登录</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);