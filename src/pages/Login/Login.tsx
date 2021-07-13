import './Login.scss';

import React, { useState } from 'react';

import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { useActions } from '../../hooks/useAction';

const Login: React.FC = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
  });
  const { signInUser } = useActions();

  const submitFormHandler = () => {
    signInUser(state);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className='Form'>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={submitFormHandler}>
        <h2 className='Form-header'>Вход</h2>
        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!' }]}
        >
          <Input
            name='email'
            className='form_input'
            prefix={<MailOutlined className='site-form-item-icon' />}
            type='text'
            onChange={inputChangeHandler}
            placeholder='Укажите ваш email'
          />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Пожалуйста, укажите верный пароль!' }]}>
          <Input
            name='password'
            className='form_input'
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            onChange={inputChangeHandler}
            placeholder='Введите пароль'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Войти
          </Button>
          <Link to='/register'>Еще не зарегистрированы?</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
