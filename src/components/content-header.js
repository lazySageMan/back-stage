import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
export default function(props){
    let header = useSelector(state => state.header)
    let dispatch = useDispatch()
    console.log(header, '11111111111')
    return (
        <div className='content-header'>
            <div className='left-text'>
                {props.title}
            </div>
            <div className='right-botton'>
                <Button type="primary" onClick={() => dispatch({
                    type: 'ADD_ORDER',
                    data: 'hello react-redux hooks'
                })} style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
                <Button type="primary" style={{width:'80px', marginLeft: '5px'}}>上传</Button>
            </div>
        </div>
    )
}