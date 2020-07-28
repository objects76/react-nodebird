import React, { useMemo } from 'react';
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';

const NicknameEditForm = () => {
    const rootStyle = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }), []);

    return (<>
        <Form style={rootStyle}>
            <Input.Search addonBefore="Nickname" enterButton="Modify" />
        </Form>
    </>);
}

export default NicknameEditForm;