import React from 'react'
import { withRouter } from "react-router-dom"
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
const ContentHeader = (props) => {
    let header = useSelector(state => state.header)
    let dispatch = useDispatch()
    console.log(header, '11111111111')

    const handClick = (data) => {
        console.log(data)
        if (data.title === '新建博客'){
            props.history.push('/addblog')
        } else if(data.title === '新增用户'){
            dispatch({
                type: 'MODAL_CHANGE',
                isShow: true,
                modalType: 'addUser',
                title: '新增用户'
            })
        }
    }

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
                                onClick={() => handClick(item)} 
                                style={{minWidth:'80px', marginLeft: '5px'}}>{item.title}</Button>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default withRouter(ContentHeader);