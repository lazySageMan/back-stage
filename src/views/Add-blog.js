import React from 'react';
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Editor from 'for-editor'
const AddBlog = function (props) {
    let { value, blogList } = useSelector(state => ({ value: state.addblog, blogList: state.bloglist}))
    const dispatch = useDispatch()
    

    console.log(blogList, props)


    const handleChange = (value) => {
        dispatch({
            type: 'BLOG_CHANGE',
            value: value
        })
    }

    const handleSave = (value) => {
        console.log(value, props.location.state.id, '文件MARKDOWN上传');

        if (props.location.state.id === 'new'){
            dispatch({
                type: 'MODAL_CHANGE',
                isShow: true,
                modalType: 'addBlog',
                title: '添加博客'
            })
        }else{
            dispatch({
                type: 'MODAL_CHANGE',
                isShow: true,
                modalType: 'changeBlog',
                title: '修改博客'
            })
        }
        
    }

    return(
        <div className='content'>
            <div className='addBlog'>
                <Editor 
                    onSave={(value) => handleSave(value)}
                    onChange={(value) => handleChange(value)}
                    value={value.value} 
                />
            </div>
        </div>
        
    )
}

export default withRouter(AddBlog)