
import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';

// Card: buttons => actions

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback((e) => {
        setIsLoggedIn(false);
    }, []);

    return (<>
        <Card
            actions={[
                <EditOutlined key="twit">Twit</EditOutlined>,
                <CaretLeftOutlined key="following" >Following</CaretLeftOutlined>,
                <CaretRightOutlined key="ellipsis">Follower</CaretRightOutlined>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>K</Avatar>}
                title="jjkim" />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    </>);
}

export default UserProfile;