import React, { useCallback, useRef, useState } from 'react'
import { Input, Button, Form } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { reduxPostAction } from '../reducers/post';

export default function PostForm() {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const imagePaths = useSelector(state => state.post.imagePaths);
    const [text, setText] = useState('');

    const onSubmit = useCallback(() => {
        dispatch(reduxPostAction('add_post'));
        setText('');
    }, []);
    const onChangeText = useCallback((e) => { setText(e.target.value); }, []);
    const onImageUpload = useCallback(() => { imageInput.current.click(); }, [imageInput.current]);

    return (
        <div>
            <Form style={{ margin: '10px 0, 20px' }} encType='multipart/form-data' onFinish={onSubmit}>
                <Input.TextArea
                    value={text}
                    maxLength={140}
                    placeholder='Anything in your day?'
                    onChange={onChangeText} />
                <div>
                    <input type="file" multiple hidden ref={imageInput} />
                    <Button onClick={onImageUpload}>Image upload</Button>
                    <Button type='primary' style={{ float: 'right' }} htmlType='submit'>Twit</Button>
                </div>

                <div>
                    {imagePaths.map((v) => {
                        return (
                            <div key={v} style={{ display: 'inline-block' }}>
                                <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
                                <div><Button>Remove</Button></div>
                            </div>
                        )
                    })}
                </div>

            </Form>

        </div>
    )
}
