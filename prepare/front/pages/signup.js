
import React, { useCallback, useState } from 'react';
import AppLayout from '../components1/AppLayout';
import Head from 'next/head';
import { Input, Checkbox, Button, Form } from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorDiv = styled.div`
color: red
`;


const Signup = () => {

    const [[errors], setErrors] = useState([new Set()]);

    const [id, onChangeID] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password2, setPassword2] = useState('');

    const onChangePassword2 = useCallback((e) => {
        const v2 = e.target.value;
        setPassword2(v2);
        if (v2 === password)
            errors.delete("password");
        else
            errors.add("password");
        setErrors([errors]);
        console.log(`password2=${v2}, errors=${errors}`);

    }, [password]);

    const [term, setTerm] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        if (e.target.checked)
            errors.delete('term');
        else
            errors.add('term');
        setErrors([errors]);
        console.log(`term=${e.target.value}, errors=${errors}`);
    }, []);

    const onFormSubmit = useCallback((e) => {
        if (password2 === password)
            errors.delete("password");
        else
            errors.add("password");
        if (term)
            errors.delete('term');
        else
            errors.add('term');
        setErrors([errors]);

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
                        <label htmlFor="user-password">Password</label><br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword}></Input>
                    </div>
                    <div>
                        <label htmlFor="user-password2">Password check</label><br />
                        <Input name="user-password2" type="password" value={password2} required onChange={onChangePassword2}></Input>
                        {!!(errors.has("password")) && <ErrorDiv>Password is not matched!</ErrorDiv>}
                    </div>
                    <div>
                        <Checkbox onChange={onChangeTerm}>Agree</Checkbox>
                        {!!(errors.has("term")) && <ErrorDiv>You should agree the term!</ErrorDiv>}
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