import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Register.scss';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='Form'>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
        <h2 className='Form-header'>Регистрация</h2>

        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!  ' }]}
        >
          <Input
            className='form_input'
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Укажите ваш email'
          />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: 'Пожалуйста, укажите верный пароль!' }]}>
          <Input
            className='form_input'
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Придумайте пароль'
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Запонить данные для входа</Checkbox>
          </Form.Item>
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
