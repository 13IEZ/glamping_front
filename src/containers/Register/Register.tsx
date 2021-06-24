import {Form, Input, Button, Checkbox, Select} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './Register.css';

const { Option } = Select;

const Register = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+7">+7</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='Register'>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <h2 className='Register-header'>Sign Up</h2>

        <Form.Item
          name="username"
          rules={[{required: true, message: 'Please input your Username!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Please input your Email' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{
            required: true,
            message: 'Please input your phone number!'
          }]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder='Please input your Phone Number'
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon"/>}
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
          Or <a href="">Log In now!</a>
        </Form.Item>
      </Form>

    </div>

  );
};

export default Register;