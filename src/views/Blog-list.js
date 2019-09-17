import React from 'react';
import { withRouter } from "react-router-dom"
import { Pagination, List } from 'antd';
import { useSelector } from 'react-redux'
import ContentHeader from '../components/content-header'
const BlogList = (props) => {
    let bloglist = useSelector(state => state.bloglist)
    console.log(bloglist)
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
                                    onClick={() => props.history.push('/addblog')}
                                    title={<p>{item.title}</p>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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