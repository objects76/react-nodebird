// ** common codes for some pages **

import PropTypes from 'prop-types'
import Link from 'next/link'

// https://ant.design/components/menu/#components-menu-demo-inline
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
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
                    <Input.Search placeholder="input search text" enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item key='signup'>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* https://ant.design/components/grid/, full col value = 24 , xs > sm > md */}
                <Col xs={24} md={6} style={{ background: 'red' }}>Left menu</Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6} style={{ background: 'gray' }}>
                    <a href="https://github.com/objects76" target="_blank" rel="_noreferrer noopener">Made by jjkim</a>
                </Col>
            </Row>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;