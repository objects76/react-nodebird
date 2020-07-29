// ** common codes for all pages **

import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

import PropTypes from 'prop-types'

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);

