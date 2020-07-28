
import React, { useCallback, useState } from 'react';
import AppLayout from '../components1/AppLayout';
import Head from 'next/head';
import { Input, Checkbox, Button, Form } from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorDiv = styled.div`
color: red
`;

const ERROR_PASSWORD = 0x01;
const ERROR_TERM = 0x02;
const Signup = () => {

    const [flags, setFlags] = useState(0);

    const [id, onChangeID] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password2, setPassword2] = useState('');

    const onChangePassword2 = useCallback((e) => {
        const v2 = e.target.value;
        setPassword2(v2);
        let tmp = (v2 === password) ? flags & ~ERROR_PASSWORD : flags | ERROR_PASSWORD;
        setFlags(tmp);
        console.log(`flags=${flags}, tmp=${tmp}, password2=${v2}`);
    }, [password]);

    const [term, setTerm] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        let tmp = (e.target.checked) ? flags & ~ERROR_TERM : flags | ERROR_TERM;
        setFlags(tmp);
        console.log(`flags=${flags}, tmp=${tmp}, term=${e.target.value}`);
    }, []);

    const onFormSubmit = useCallback((e) => {
        setFlags((password2 === password) ? flags & ~ERROR_PASSWORD : flags | ERROR_PASSWORD);
        setFlags(term ? flags & ~ERROR_TERM : flags | ERROR_TERM);

        if (flags != 0)
            return;

        console.log('do something with server!');
    }, [password, password2, term]);

    return (
        <>
            <Head>
                <title>Signup | NodeBird</title>
            </Head>
            <AppLayout>
                <Form onFinish={onFormSubmit}>
                    <div>
                        <label htmlFor="user-id">ID</label><br />
                        <Input name="user-id" required onChange={onChangeID}></Input>
                    </div>
                    <div>
                        <label htmlFor="nickname">Nickname</label><br />
                        <Input name="nickname" required onChange={onChangeNickname}></Input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <Input name="password" required onChange={onChangePassword}></Input>
                    </div>
                    <div>
                        <label htmlFor="password2">Password check</label><br />
                        <Input name="password2" value={password2} required onChange={onChangePassword2}></Input>
                        {!!(flags & ERROR_PASSWORD) && <div style={{ color: 'red' }}>Password is not matched!</div>}
                    </div>
                    <div>
                        <Checkbox onChange={onChangeTerm}>Agree</Checkbox>
                        {!!(flags & ERROR_TERM) && <div style={{ color: 'red' }}>You should agree the term!</div>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
}

export default Signup;