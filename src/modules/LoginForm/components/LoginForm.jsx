import React from 'react';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

function LoginForm() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    }

    return (
        <div>

            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт.</p>
            </div>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {/*
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>
*/}

                <Form.Item>
                    <Button className={'button__large'} htmlType="submit" type="primary">Ввойти в аккаунт</Button>
                </Form.Item>
                <Form.Item>
                    <Link className={'auth__register-link'} to={'/register'}>Зарегитрироваться</Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;