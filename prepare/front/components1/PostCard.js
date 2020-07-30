
import React, { useCallback, useState } from 'react'
import { Card, Popover, Button, Avatar } from 'antd'
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import PostImage from './PostImage'

export default function PostCard({ post }) {
    const [liked, setliked] = useState(false);
    const me = useSelector(state => state.user.user);
    const id = me?.id; // optional chaining.

    const onToggleHeart = useCallback(() => setliked((old) => (!old)), []);

    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImage images={post.Images} />}
                actions={[
                    <RetweetOutlined key='1' />,
                    liked
                        ? <HeartTwoTone twoToneColor='#ff00ff' key='2' onClick={onToggleHeart} />
                        : <HeartOutlined key='2' onClick={onToggleHeart} />,
                    <MessageOutlined key='3' />,
                    <Popover key='4' content={(
                        <Button.Group>
                            {id && post.User.id === id && <Button>Edit</Button>}
                            <Button type='danger'>Del</Button>
                            <Button>신고</Button>
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
                {/* <Image />
                <Content />
                <Buttons /> */}
            </Card>
        </div >
    )
}
