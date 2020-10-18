import React, {useState} from 'react';
import {Link} from "react-router-dom";



import {Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, SolutionOutline} from '@ant-design/icons';
import { MessageOutlined, IdcardTwoTone } from '@ant-design/icons';




const RegisterForm = () => {

    const [reg, setReg] = useState(false);


    const onFinish = values => {
        console.log('Received values of form: ', values);
/*        console.log(count);
        console.log(setCount(count + 1))*/
    }

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            {!reg && <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
                </Form.Item>
                <Form.Item
                    name="mail"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="e-mail" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item
                    name="password-repeat"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Повторите пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => setReg(true)}  className={'button__large'} htmlType="submit" type="primary">Зарегестрироваться</Button>
                </Form.Item>
                <Form.Item>
                    <Link className={'auth__register-link'} to={'/login'}>У вас уже есть аккаунт? Ввойдтите</Link>
                </Form.Item>
            </Form>}
            {reg && <div className={'auth__success-block'}>

                <IdcardTwoTone style={{ fontSize: '54px', color: '#08c' }} />
                <h2>Подтвердите свой аккаунт</h2>
                <p>На вашу почту отправленно письмо с ссылкой на подтверждение аккаунта</p>

                <div onClick={() => setReg(false)}>!</div>
            </div>}

        </div>
    );
}

export default RegisterForm;