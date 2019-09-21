import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom"
import { Pagination, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ContentHeader from '../components/content-header'
import HTTP from '../utils/HTTP'
import { message } from 'antd'
import LocalStotrage from '../utils/LocalStotrage'
import { translateMarkdown } from '../utils/translateMarkdown'
const BlogList = (props) => {
    const bloglist = useSelector(state => state.bloglist)
    const dispatch = useDispatch()

    useEffect(() => {
        const token = LocalStotrage.getItem('token')
        const obj = {
            offset: 1,
            pageSize: 2
        }
        HTTP.GET('/admin/getBlog', obj, token).then(res => {
            console.log(res)
            if(res.code === 200){
                let result = res.data;
                result.forEach(v => {
                    let index = v.content.indexOf('<!--more-->')
                    v.description = translateMarkdown(v.content.slice(0, index))
                })

                dispatch({
                    type: 'GET_BLOG',
                    blogList: result,
                    totalPage: res.pageTotal
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

    const pageChange = async(page, pageSize) => {

        const token = LocalStotrage.getItem('token')
        const obj = {
            offset: page,
            pageSize: 2
        }
        HTTP.GET('/admin/getBlog', obj, token).then(res => {
            console.log(res)
            if (res.code === 200) {
                let result = res.data;
                result.forEach(v => {
                    let index = v.content.indexOf('<!--more-->')
                    v.description = translateMarkdown(v.content.slice(0, index))
                })
                dispatch({
                    type: 'GET_BLOG',
                    blogList: result,
                    totalPage: res.pageTotal
                })
            } else if (res.code === 401) {
                LocalStotrage.delAll()
                message.error('身份已过期，请重新登录')
                props.history.replace('/login')
            }
        })
    }
    
    return (
        <div className='content'>
            <div 
                className='content-main'
                // style={{ maxHeight: `${document.body.clientHeight - (50 * 2 + 60) + 'px'}`, overflow: 'scroll'}}
                >
                <ContentHeader />
                <div className='content-text'>
                    <div className="ul-list">
                        {
                            bloglist.blog.map((v, i) => {
                                return (
                                    <li 
                                        key={i} 
                                        className="ul-list-item"
                                        onClick={() => selectBlog(v)}>
                                        <Divider orientation="left">
                                            <span className="title">
                                                {v.title}
                                            </span>
                                            <span className="create-time">{v.createdAt.slice(0, 10)}</span>
                                        </Divider>
                                        <div 
                                            className="article-detail description"
                                            dangerouslySetInnerHTML={{ __html: v.description }} />
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div className='content-page'>
                        <Pagination 
                            pageSize={2}
                            defaultCurrent={1} 
                            total={3}
                            // total={20}
                            onChange={(page, pageSize) => pageChange(page, pageSize)}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BlogList);