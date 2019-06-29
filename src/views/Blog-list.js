import React from 'react';
import { List, Avatar, Pagination } from 'antd';
import { useSelector } from 'react-redux'
import ContentHeader from '../components/content-header'
export default function(){
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
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                        )}
                    />
                    <div className='content-page'>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}