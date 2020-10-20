import React, {useState} from 'react';
import {Link} from "react-router-dom";



import {Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, SolutionOutline} from '@ant-design/icons';
import { MessageOutlined, IdcardTwoTone } from '@ant-design/icons';




const RegisterForm = (props) => {

    const [reg, setReg] = useState(false);


    const onFinish = values => {
        console.log('Received values of form: ', values);
/*        console.log(count);
        console.log(setCount(count + 1))*/
    }

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
    } = props;
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
/*
                onFinish={onFinish}
*/
                onSubmit={handleSubmit}
            >
                <Form.Item
                    validateStatus={errors.name && touched.name && 'error'}
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >

                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин"
/*
                           value={values.name}
*/
                           name={'name'}

                           onBlur={handleBlur}
                           onChange={handleChange}


                    />
                    {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: 'Please input your Username!'  }]}
                    validateStatus={errors.mail && touched.mail && 'error'}
                    help={errors.mail && touched.mail && errors.mail}

                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />}
                           placeholder="e-mail"
                           id='mail'
/*
                           value={'values.mail'}
*/
                           onBlur={handleBlur}
                           onChange={handleChange}

                            />

                </Form.Item>
                <Form.Item
/*
                    name="password"
*/
                    validateStatus={errors.password && touched.password && 'error'}
                    help={errors.password && touched.password && errors.password}

                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                        name={'password'}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}

                    />
{/*
                    {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
*/}

                </Form.Item>
                <Form.Item
                    name="password-repeat"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Повторите пароль"
                        name={'passwordRepeat'}
                        value={values.passwordRepeat}
                        onBlur={handleBlur}
                        onChange={handleChange}

                    />
                </Form.Item>
                <Form.Item>
{/*
                    {!isValid && <span>error</span>}
*/}
                    <Button onClick={handleSubmit}  className={'button__large'} htmlType="submit" type="primary">Зарегестрироваться</Button>
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