
import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { reduxUserAction } from '../reducers/user';
// Card: buttons => actions

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback((e) => {
        dispatch(reduxUserAction('logout'));
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