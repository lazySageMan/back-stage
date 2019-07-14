import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Editor from 'for-editor'
export default function () {
    let value = useSelector(state => state.addblog)
    let dispatch = useDispatch()

    const handleChange = (value) => {
        dispatch({
            type: 'BLOG_CHANGE',
            value: value
        })
    }

    const handleSave = (value) => {
        console.log(value, '文件MARKDOWN上传');
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