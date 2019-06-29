import React from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux'
export default function(){
    let header = useSelector(state => state.header)
    // let dispatch = useDispatch()
    console.log(header, '11111111111')

    return (
        <div className='content-header'>
            <div className='left-text'>
                {
                    header.title
                }
            </div>
            <div className='right-botton'>
                {
                    header.header.map((item, index) => {
                        return (
                            <Button 
                                key={index}
                                type={item.bgColor} 
                                onClick={ () => console.log('12221') } 
                                style={{minWidth:'80px', marginLeft: '5px'}}>{item.title}</Button>
                        )
                    })
                }
                
            </div>
        </div>
    )
}