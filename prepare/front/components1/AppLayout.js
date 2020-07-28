// ** common codes for some pages **

import PropTypes from 'prop-types'
import Link from 'next/link'

// https://ant.design/components/menu/#components-menu-demo-inline
import { Menu, Input, Row, Col } from 'antd';
import { useState, useMemo } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const searchStyle = useMemo(() => { return { verticalAlign: 'middle' }; }, []);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key='home'>
                    <Link href="/"><a>Nodebird</a></Link>
                </Menu.Item>
                <Menu.Item key='profile'>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={searchStyle} />
                </Menu.Item>
                <Menu.Item key='signup'>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* https://ant.design/components/grid/, full col value = 24 , xs > sm > md */}
                <BgCol xs={24} md={6} background='#EDF4ED'>
                    {isLoggedIn
                        ? <UserProfile setIsLoggedIn={setIsLoggedIn} />
                        : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </BgCol>
                <Col xs={24} md={12}>{children}</Col>
                <BgCol xs={24} md={6} background='#aed9e0'>
                    <a href="https://github.com/objects76" target="_blank" rel="noreferrer noopener">Made by jjkim</a>
                </BgCol>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;