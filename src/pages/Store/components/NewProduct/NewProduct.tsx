import './NewProduct.scss';

import React, { useState } from 'react';

import { Button, DatePicker, Form, Input, InputNumber, Select, Typography } from 'antd';

import { useActions } from '../../../../hooks/useAction';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const { Option } = Select;
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Укажите дату изготовления!' }],
};
const { TextArea } = Input;
const { Title } = Typography;

const NewProduct: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    category: '',
    season: '',
    roominess: '',
    date: '',
    price: '',
    rent: '',
    description: '',
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
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <Form form={form} name='dynamic_rule' onFinish={submitFormHandler}>
      <Title level={4}>Создайте объявление</Title>
      <Form.Item
        {...formItemLayout}
        name='title'
        label='Название'
        rules={[
          {
            required: true,
            message: 'Укажите название!',
          },
        ]}
      >
        <Input onChange={inputChangeHandler} placeholder='Введите название модуля' />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='category'
        label='Категория'
        rules={[{ required: true, message: 'Укажите категорию!' }]}
      >
        <Select placeholder='Выберите категорию'>
          <Option onChange={inputChangeHandler} value='Тенты'>
            Тенты
          </Option>
          <Option onChange={inputChangeHandler} value='Автодома'>
            Автодома
          </Option>
          <Option onChange={inputChangeHandler} value='Каркасный дом'>
            Каркасный дом
          </Option>
          <Option onChange={inputChangeHandler} value='Купола'>
            Купола
          </Option>
          <Option onChange={inputChangeHandler} value='Модули'>
            Модули
          </Option>
          <Option onChange={inputChangeHandler} value='Юрты'>
            Юрты
          </Option>
          <Option onChange={inputChangeHandler} value='Трейлеры'>
            Трейлеры
          </Option>
          <Option onChange={inputChangeHandler} value='Другое'>
            Другое
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='season'
        label='Сезоность'
        rules={[{ required: true, message: 'Укажите сезонность!' }]}
      >
        <Select placeholder='Выберите сезонность'>
          <Option onChange={inputChangeHandler} value='Summer'>
            Лето
          </Option>
          <Option onChange={inputChangeHandler} value='All'>
            Всесезонный
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='roominess'
        label='Вместимость'
        rules={[
          {
            required: true,
            message: 'Укажите вместимость!',
          },
        ]}
      >
        <Input placeholder='Укажите вместимость в цифрах' onChange={inputChangeHandler} />
      </Form.Item>
      <Form.Item {...formItemLayout} name='date' label='Дата изготовления' {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label='Цена продажи'
        name='price'
        rules={[
          {
            required: true,
            message: 'Укажите цену!',
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} placeholder='12345...' />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label='Цена аренды'
        name='rent'
        rules={[
          {
            required: true,
            message: 'Укажите цену аренды!',
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} placeholder='12345...' />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='description'
        label='Описание'
        rules={[
          {
            required: true,
            message: 'Укажите описание!',
          },
        ]}
      >
        <TextArea rows={4} name='Note' className='form_input' placeholder='Опишите ваш модуль' />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type='primary' onClick={onCheck}>
          Опубликовать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewProduct;
