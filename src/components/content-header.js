import React from 'react';
import { Button } from 'antd';
export default function(){
    return (
        <div className='content-header'>
            <div className='left-text'>
                添加博客
            </div>
            <div className='right-botton'>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
            </div>
        </div>
    )
}