// ** common codes for some pages **

import PropTypes from 'prop-types'
import Link from 'next/link'

// https://ant.design/components/menu/#components-menu-demo-inline
import { Menu, Input, Row, Col } from 'antd';
import { useState, useMemo } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';


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
                <Col xs={24} md={6} style={{ background: '#EDF4ED' }}>{isLoggedIn
                    ? <UserProfile setIsLoggedIn={setIsLoggedIn} />
                    : <LoginForm setIsLoggedIn={setIsLoggedIn} />}</Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6} style={{ background: '#EDF4ED' }}>
                    {/* http://www.igloosec.co.kr/BLOG_Tabnabbing%20%EA%B8%B0%EB%B2%95%EC%9D%84%20%ED%86%B5%ED%95%9C%20%EA%B3%84%EC%A0%95%20%ED%83%88%EC%B7%A8?searchItem=&searchWord=&bbsCateId=0&gotoPage=10 */}
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