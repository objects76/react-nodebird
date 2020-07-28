import React, { useCallback, useState, useMemo } from 'react';

import { Input, Button, Alert, message } from 'antd';
import Form from 'antd/lib/form/Form';
import Link from 'next/link';
import styled from 'styled-components';

// https://github.com/styled-components/styled-components/issues/2147
// - Prop `className` did not match. Server:
const SignupWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((evt) => {
        setId(evt.target.value);
    });
    const onChangePassword = useCallback((evt) => {
        setPassword(evt.target.value);
    });

    const onSubmitForm = useCallback((evt) => {
        if (id === 'jjkim' && password === 'jjkim') {
            console.log(id, password);
            setIsLoggedIn(true);
        }
        else {
            message
                .loading('Action in progress..', 1)
                .then(() => message.error('Invalid id or password', 2.5));
        }
    }, [id, password]);

    const styleFrom = useMemo(() => ({
        border: '1px solid gray',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px',
    }), []);


    return (<>
        <Form onFinish={onSubmitForm} style={styleFrom}>
            <div>
                <label htmlFor="user-id">ID:</label><br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">Password:</label><br />
                <Input name="user-password" value={password} type="password" onChange={onChangePassword} required />
            </div>
            <SignupWrapper>
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                <Link href='/signup'><a><Button>Signup</Button></a></Link>
            </SignupWrapper>
        </Form>
    </>);
}


export default LoginForm;


