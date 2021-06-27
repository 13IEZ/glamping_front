import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='Form'>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
        <h2 className='Form-header'>Вход</h2>

        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!  ' }]}
        >
          <Input
            className='form_input'
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Введите ваше имя'
          />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: 'Пожалуйста, укажите верный пароль!' }]}>
          <Input
            className='form_input'
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Введите пароль'
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Запонить меня</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Войти
          </Button>
          <Link to='/register'>Еще не зарегестрированы?</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
