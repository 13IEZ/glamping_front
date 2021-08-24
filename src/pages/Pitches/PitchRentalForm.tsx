import './PitchRentalForm.scss';

import React, { useEffect, useState } from 'react';

import { Button, Col, Divider, Form, Input, InputNumber, Row, Select, Typography } from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import Calendar from './components/Calendar/Calendar';
import PitchDetailDescription from './components/PitchDetailDescription/PitchDetailDescription';
import PitchDetailGallery from './components/PitchDetailGallery/PitchDetailGallery';

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

const PitchRentalForm: React.FC = (props: any) => {
  const idCurrentPitch = props.match.params.id;
  const { currentPitch } = useTypedSelectorHook(state => state.piches);
  const { pitchReservations } = useTypedSelectorHook(state => state.reservations);
  const { fetchCurrentPitch } = useActions();
  const { fetchPitchReservations } = useActions();
  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Укажите дату изготовления!' }],
  };

  useEffect(() => {
    fetchPitchReservations(idCurrentPitch);
    fetchCurrentPitch(idCurrentPitch);
  }, [idCurrentPitch]);

  const [state, setState] = useState({
    title: '',
    category: '',
    season: '',
    roominess: '',
    date: '',
    price: '',
    rent: '',
    description: '',
    reservedDates: '',
  });

  const reservedDates = pitchReservations.map((reservation: { startDate: any; endDate: any }) => {
    return { startDate: reservation.startDate, endDate: reservation.endDate };
  });

  const { signUpUser } = useActions();

  const submitFormHandler = () => {
    console.log(state);
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

  if (Object.keys(currentPitch).length === 0) return <></>;

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
      <Form form={form} name='dynamic_rule' onFinish={submitFormHandler} className='PitchForm'>
        <Title className='PitchTitle' level={3}>
          Опишите ваш модуль для заявки
        </Title>
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
            <Option onChange={inputChangeHandler} value='summer'>
              Лето
            </Option>
            <Option onChange={inputChangeHandler} value='summer'>
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
          label='Вместимость'
          rules={[
            {
              required: true,
              message: 'Укажите вместимость!',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Укажите вместимость в цифрах' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label='Цена аренды за сутки'
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
        <Form.Item {...formItemLayout} name='date' label='Укажите даты брони' {...config}>
          <Calendar pitchId={currentPitch._id} reservedDates={reservedDates} />
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type='primary' onClick={onCheck}>
            Подать заявку
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PitchRentalForm;
