import React from 'react';
import { Button } from 'antd';
export default function(props){
    const { pState, pDispatch } = React.useContext(window.ContextStore);
    console.log(props, pState, pDispatch, 'gggggggg')

    return (
        <div className='content-header'>
            <div className='left-text'>
                {props.title}
            </div>
            <div className='right-botton'>
                <Button type="primary" onClick={() => pDispatch({
                    type: 'ADD_ORDER',
                    data: ['hello useReducer hooks']
                })} style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
            </div>
        </div>
    )
}