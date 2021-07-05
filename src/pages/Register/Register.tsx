import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

import './Register.scss';
import { useActions } from '../../hooks/useAction';

const Register: React.FC = () => {
  const [state, setState] = useState({
    username: '',
    userSurname: '',
    phone: '',
    email: '',
    password: '',
  });

  const { signUpUser } = useActions();

  const submitFormHandler = () => {
    signUpUser(state);
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
        <h2 className='Form-header'>Регистрация</h2>

        <Form.Item name='username' rules={[{ required: true, message: 'Пожалуйста, укажите ваше имя!' }]}>
          <Input
            name='username'
            className='form_input'
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Укажите ваше имя'
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item name='userSurname' rules={[{ required: true, message: 'Пожалуйста, укажите ваше имя!' }]}>
          <Input
            name='userSurname'
            className='form_input'
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Укажите вашу фамилию'
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item name='phone' rules={[{ required: true, message: 'Пожалуйста, укажите ваш номер телефона!' }]}>
          <Input
            name='phone'
            className='form_input'
            prefix={<PhoneOutlined className='site-form-item-icon' />}
            placeholder='Укажите ваш номер телефона'
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!' }]}
        >
          <Input
            name='email'
            className='form_input'
            prefix={<MailOutlined className='site-form-item-icon' />}
            placeholder='Укажите ваш email'
            onChange={inputChangeHandler}
          />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: 'Пожалуйста, укажите верный пароль!' }]}>
          <Input
            name='password'
            className='form_input'
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Придумайте пароль'
            onChange={inputChangeHandler}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Регистрация
          </Button>
          <Link to='/login'>Уже имеете аккаунт? Войти в систему!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
