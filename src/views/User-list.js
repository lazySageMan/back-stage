import React from 'react';
import ContentHeader from '../components/content-header'
export default function(){
    return (
        <div className='content'>
            <div className='content-main'>
                <ContentHeader title='用户列表' />
                <div className='content-usr'>
                    <div className='content-usr-header'></div>
                </div>
            </div>
        </div>
    )
}