// ** common codes for some pages **

import PropTypes from 'prop-types'
import Link from 'next/link'

// https://ant.design/components/menu/#components-menu-demo-inline
import { Menu, Input, Row, Col } from 'antd';
import { useState, useMemo, useCallback } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';

// const BgCol = styled(Col)`
// background: #EDF4ED;
// border: 1px solid gray;
// `;

// https://styled-components.com/docs/advanced#style-objects
const BgCol = styled(Col)(
    props => ({
        background: props.background,
        border: '1px solid gray',
    })
);
const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const searchStyle = useMemo(() => { return { verticalAlign: 'middle' }; }, []);

    const [current, setCurrent] = useState('signup');
    const handleClick = useCallback((e) => {
        console.log(e.key);
        setCurrent(e.key);
    }, []);

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key='home' icon={<MailOutlined />} >
                    <Link href="/"><a>Nodebird</a></Link>
                </Menu.Item>
                <Menu.Item key='profile'>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item key='signup'>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* https://ant.design/components/grid/, full col value = 24 , xs > sm > md */}
                <Col xs={24} md={6} style={{ background: '#EDF4ED', border: '1px solid gray', }}>
                    {isLoggedIn
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6} style={{ background: '#aed9e0', border: '1px solid gray', }}>
                    <a href="https://github.com/objects76" target="_blank" rel="noreferrer noopener">Made by jjkim</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;