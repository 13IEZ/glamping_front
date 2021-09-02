import './PitchRentalForm.scss';

import React, { useEffect, useState } from 'react';

import { Button, Col, DatePicker, Divider, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import moment from 'moment';

import { UploadOutlined } from '@ant-design/icons';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import PitchDetailDescription from './components/PitchDetailDescription/PitchDetailDescription';
import PitchDetailGallery from './components/PitchDetailGallery/PitchDetailGallery';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const PitchRentalForm: React.FC = (props: any) => {
  const idCurrentPitch = props.match.params.id;
  const { currentPitch } = useTypedSelectorHook(state => state.piches);
  const { pitchReservations } = useTypedSelectorHook(state => state.reservations);
  const { fetchPitchReservations } = useActions();
  const { fetchCurrentPitch } = useActions();
  const [reservation, setReservation] = useState({});
  const { createApplication } = useActions();
  const { categories } = useTypedSelectorHook(state => state.categories);
  const [form] = Form.useForm();
  const reservedDates = pitchReservations.map((reservation: { startDate: any; endDate: any }) => {
    return { startDate: reservation.startDate, endDate: reservation.endDate };
  });
  const onChange = (value: any, reservedDays: any) => {
    const newReservation = {
      startDate: reservedDays[0],
      endDate: reservedDays[1],
    };
    setReservation(newReservation);
  };

  const [state, setState] = useState({
    title: '',
    categoryId: '',
    season: '',
    roominess: '',
    rent: '',
    description: '',
  });

  useEffect(() => {
    fetchPitchReservations(idCurrentPitch);
    fetchCurrentPitch(idCurrentPitch);
  }, [idCurrentPitch]);

  const formData = new FormData();

  const onFinish = (values: any) => {
    const data = { ...values, reservation, pichId: idCurrentPitch };
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
      createApplication(data);
      console.log(data);
      console.log(formData.get('title'));
      createApplication(formData);
    }
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    for (let i = 0; i < reservedDates.length; i++) {
      if (
        (current && current < moment().endOf('day')) ||
        (current > moment(reservedDates[i].startDate) && current < moment(reservedDates[i].endDate).endOf('day'))
      )
        return true;
    }
    return false;
  };

  const categoriesList = categories.map(category => (
    <Option key={category._id} label={category.title} onChange={inputChangeHandler} value={category._id}>
      {category.title}
    </Option>
  ));

  return (
    <div className='container'>
      <div className='wrapper-top'>
        <Row wrap={false}>
          <Col flex='65%'>
            <PitchDetailGallery images={currentPitch.image ? currentPitch.image : []} />
          </Col>
          <Col flex='35%'>
            <PitchDetailDescription
              number={currentPitch.number}
              title={currentPitch.title}
              description={currentPitch.description}
              rent={currentPitch.rent}
            />
          </Col>
        </Row>
      </div>
      <Divider />
      <Form form={form} name='dynamic_rule' onFinish={onFinish} {...formItemLayout} className='PitchForm'>
        <Title className='PitchTitle' level={3}>
          Опишите ваш модуль для заявки
        </Title>
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
          rules={[{ required: true, message: 'Укажите название!' }]}
        >
          <Input value={state.title} placeholder='Введите название модуля' />
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
          name='season'
          label='Сезоность'
          hasFeedback
          rules={[{ required: true, message: 'Укажите сезонность!' }]}
        >
          <Select placeholder='Выберите сезонность'>
            <Option onChange={inputChangeHandler} value='summer'>
              Лето
            </Option>
            <Option onChange={inputChangeHandler} value='winter'>
              Зима
            </Option>
            <Option onChange={inputChangeHandler} value='all'>
              Всесезонный
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='roominess'
          label='Кол-во спальных мест'
          rules={[{ required: true, message: 'Укажите кол-во спальных мест!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Укажите вместимость в цифрах' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label='Цена аренды за сутки'
          name='rent'
          rules={[{ required: true, message: 'Укажите цену аренды!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='12345...' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='description'
          label='Описание'
          rules={[{ required: true, message: 'Укажите описание!' }]}
        >
          <TextArea rows={4} name='Note' className='form_input' placeholder='Опишите ваш модуль' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label='Укажите даты брони'
          rules={[{ required: true, message: 'Укажите даты брони!' }]}
        >
          <RangePicker disabledDate={disabledDate} onChange={onChange} />
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type='primary' htmlType='submit'>
            Подать заявку
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PitchRentalForm;
