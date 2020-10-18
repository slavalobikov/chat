import React, {useState} from 'react';
import {Route} from 'react-router-dom'


import Block from "../../components/Block/Block";
import './Auth.scss'
import LoginForm from "../../modules/LoginForm";
import RegisterForm from "../../modules/RegisterForm/components/RegisterForm";

const Auth = () => {


    return (
        <section className={'auth'}>
            <Block>
                <Route exact path={['/', '/login']} component={LoginForm}/>
                <Route path={'/register'} component={RegisterForm}/>
                {/*                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>


                    <Form.Item>
                        <Button className={'button__large'} htmlType="submit" type="primary">Ввойти в аккаунт</Button>
                    </Form.Item>
                    <Form.Item>
                        <a className={'auth__register-link'} href={'#'}>Зарегитрироваться</a>
                    </Form.Item>
                </Form>*/}

            </Block>

        </section>
    );
};

export default Auth;