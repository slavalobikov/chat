import React from 'react';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

function LoginForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
/*
        isValid,
*/
    } = props;

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
                onSubmit={handleSubmit}

            >
                <Form.Item

                    validateStatus={errors.login && touched.login && 'error'}
                    help={errors.login && touched.login && errors.login}

                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                           name={'login'}
                           value={values.login}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"

                    validateStatus={errors.password && touched.password && 'error'}
                    help={errors.password && touched.password && errors.password}


                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"

                        name={'password'}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </Form.Item>


                <Form.Item>
                    <Button onClick={handleSubmit} className={'button__large'} htmlType="submit" type="primary">Ввойти в аккаунт</Button>
                </Form.Item>
                <Form.Item>
                    <Link  className={'auth__register-link'} to={'/register'}>Зарегитрироваться</Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;