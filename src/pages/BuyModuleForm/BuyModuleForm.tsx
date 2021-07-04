import './Register.scss';

import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

import { LockOutlined } from '@ant-design/icons';

import { useActions } from '../../hooks/useAction';

const BuyModuleForm: React.FC = () => {
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
    <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={submitFormHandler}>
      <h2 className='Form-header'>Регистрация</h2>
      <Form.Item name='phone' rules={[{ required: true, message: 'Пожалуйста, укажите корректный номер!' }]}>
        <Input
          name='phone'
          className='form_input'
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='phone'
          placeholder='Укажите ваш сотовый'
          onChange={inputChangeHandler}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BuyModuleForm;
