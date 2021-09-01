import './NewProduct.scss';

import React, { useState } from 'react';

import { Button, DatePicker, Form, Input, InputNumber, Select, Typography, Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';

import { UploadOutlined } from '@ant-design/icons';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

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

export interface UploadChangeParam {
  // file: T;
  fileList: Array<UploadFile>;
  event?: {
    percent: number;
  };
}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const NewProduct: React.FC = () => {
  const { categories } = useTypedSelectorHook(state => state.categories);
  const { factories } = useTypedSelectorHook(state => state.factories);
  const { createProduct } = useActions();
  const [form] = Form.useForm();

  const [product, setProduct] = useState({
    title: '',
    categoryId: '',
    preview: '',
    season: '',
    roominess: '',
    year: '',
    price: '',
    rent: '',
    description: '',
    factoryId: '',
    reviewsQuantity: '',
  });
  const formData = new FormData();

  const onFinish = (values: any) => {
    const data = { ...values };
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    const arrayImage = [];
    for (let i = 0; i < values.upload.length; i++) {
      arrayImage[i] = values.upload[i].originFileObj;
    }
    console.log(arrayImage);
    for (const file of arrayImage) {
      formData.append('files', file);
      console.log(formData.get('files'));
    }
    {
      createProduct(data);
      console.log(data);
      console.log(formData.get('title'));
      createProduct(formData);
    }
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setProduct(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const factoriesList = factories.map(factory => (
    <Option key={factory._id} label={factory.title} onChange={inputChangeHandler} value={factory._id}>
      {factory.title}
    </Option>
  ));

  const categoriesList = categories.map(category => (
    <Option key={category._id} label={category.title} onChange={inputChangeHandler} value={category._id}>
      {category.title}
    </Option>
  ));

  return (
    <Form form={form} name='dynamic_rule' onFinish={onFinish} {...formItemLayout}>
      <Title level={4}>Создайте объявление</Title>
      <Form.Item
        {...formItemLayout}
        name='upload'
        label='Загрузите фото модуля'
        valuePropName='fileList'
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Загрузите фото!' }]}
      >
        <Upload name='logo' beforeUpload={() => false} action='/upload.do' listType='picture'>
          <Button icon={<UploadOutlined />}>Кликните для загрузки</Button>
        </Upload>
      </Form.Item>
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
        <Input value={product.title} placeholder='Введите название модуля' />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name='categoryId'
        label='Категория'
        hasFeedback
        rules={[{ required: true, message: 'Укажите категорию!' }]}
      >
        <Select placeholder='Выберите категорию'>{categoriesList}</Select>
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='factoryId'
        label='Производитель'
        hasFeedback
        rules={[{ required: true, message: 'Укажите производителя!' }]}
      >
        <Select placeholder='Выберите производителя'>{factoriesList}</Select>
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name='season'
        label='Сезоность'
        hasFeedback
        rules={[{ required: true, message: 'Укажите сезонность!' }]}
      >
        <Select placeholder='Выберите сезонность'>
          <Option value='summer'>Лето</Option>
          <Option value='winter'>Зима</Option>
          <Option value='all'>Всесезонный</Option>
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
        <InputNumber style={{ width: '100%' }} placeholder='Укажите число спальных мест' />
      </Form.Item>
      <Form.Item {...formItemLayout} name='year' label='Дата изготовления' {...config}>
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
        <Button type='primary' htmlType='submit'>
          Опубликовать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewProduct;
