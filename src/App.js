import React from 'react';
import { Icon } from 'antd';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-botton'>
          <div className='header-left'>
            <div className='header-icon'>
              Document
            </div>
            <div className='header-tab'>
              <div className='header-tab-item'>
                <Icon style={{fontSize: '12px', color: '#fff'}} type='edit'/>
                <p className='header-tab-text'>新建博客</p>
              </div>
              <div className='header-tab-item'>
                <Icon style={{fontSize: '12px', color: '#fff'}} type='align-left'/>
                <p className='header-tab-text'>博客管理</p>
              </div>
              <div className='header-tab-item'>
                <Icon style={{fontSize: '12px', color: '#fff'}} type='team'/>
                <p className='header-tab-text'>用户管理</p>
              </div>
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
      <div className='App-content'>
          <div className='content-main'></div>
      </div>
    </div>
  )
}

export default App;
