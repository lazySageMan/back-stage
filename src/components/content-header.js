import React from 'react'
import { withRouter } from "react-router-dom"
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
const ContentHeader = (props) => {
    let header = useSelector(state => state.header)
    let dispatch = useDispatch()

    const handClick = async (data) => {
        console.log(data)
        if (data.title === '新建博客'){
            await dispatch({
                type: 'BLOG_CHANGE',
                value: '',
                blodTitle: '',
                blogImg: '',
                blogTag: '',
                blogCategory: '',
                blogId: ''
            })

            props.history.push('/addblog', {id: 'new'})
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