import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Register.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';

const Register: React.FC = () => {
  const [state, setState] = useState({
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
        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!' }]}
        >
          <Input
            name='email'
            className='form_input'
            prefix={<UserOutlined className='site-form-item-icon' />}
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
