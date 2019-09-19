import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom"
import { Pagination, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ContentHeader from '../components/content-header'
import HTTP from '../utils/HTTP'
import { message } from 'antd'
import LocalStotrage from '../utils/LocalStotrage'
const BlogList = (props) => {
    const bloglist = useSelector(state => state.bloglist)
    const dispatch = useDispatch()

    useEffect(() => {
        const token = LocalStotrage.getItem('token')
        HTTP.GET('/admin/getBlog', '', token).then(res => {
            console.log(res)
            if(res.code === 200){
                dispatch({
                    type: 'GET_BLOG',
                    blogList: res.data
                })
            } else if(res.code === 401){
                LocalStotrage.delAll()
                message.error('身份已过期，请重新登录')
                props.history.replace('/login')
            }
        })
    }, [dispatch, props.history])

    const selectBlog = async (data) => {
        await dispatch({
            type: 'BLOG_CHANGE',
            value: data.content,
            blodTitle: data.title,
            blogImg: data.img,
            blogTag: data.tags.map(v => v.name).join(','),
            blogCategory: data.categories.map(v => v.name).join(','),
            blogId: data.id
        })

        props.history.push('/addblog', {id: data.id})
    }

    return (
        <div className='content'>
            <div className='content-main'>
                <ContentHeader />
                <div className='content-text'>
                    <List
                        itemLayout="horizontal"
                        dataSource={bloglist.blog}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    onClick={() => selectBlog(item)}
                                    title={<p>{item.title}</p>}
                                    description={<img alt='' style={{width: '100%', height: '100px'}} src={item.img} />}
                                />
                            </List.Item>
                        )}
                    />
                    <div className='content-page'>
                        <Pagination defaultCurrent={1} total={bloglist.blog.length} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BlogList);