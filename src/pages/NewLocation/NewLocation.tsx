import React, { useState } from 'react';
import { Form, Select, Button, Upload, Input, InputNumber, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useActions } from '../../hooks/useAction';
import './NewLocation.scss';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const NewLocation: React.FC = () => {
  const [centerCoordinate] = useState<[number, number]>([43.1524, 76.5542]);
  const { createLocation } = useActions();

  const [placemark, setPlacemark] = useState([]);

  const formData = new FormData();

  const onFinish = (values: any) => {
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    formData.append('coords', JSON.stringify(placemark));

    const arrayImage = [];
    for (let i = 0; i < values.upload.length; i++) {
      arrayImage[i] = values.upload[i].originFileObj;
    }
    for (const file of arrayImage) {
      formData.append('files', file);
    }

    if (placemark.length === 0) {
      alert('Отметьте глэмпинг на карте');
    } else {
      createLocation(formData);
    }
  };

  const createPlacemark = (event: any) => {
    const coords = event.get('coords');
    setPlacemark(coords);
  };

  return (
    <>
      <Title level={4} style={{ textAlign: 'center' }}>
        Создайте глэмпинг
      </Title>
      <YMaps>
        <Map
          state={{
            center: centerCoordinate,
            zoom: 7,
            controls: [],
          }}
          width={'100%'}
          height={'400px'}
          products={['control.ZoomControl', 'control.FullscreenControl', 'geoObject.addon.hint']}
          onClick={(event: any) => {
            createPlacemark(event);
          }}
        >
          {placemark.length > 0 ? <Placemark geometry={placemark} options={{ draggable: true }} /> : null}
        </Map>
      </YMaps>

      <Form name='validate_other' onFinish={onFinish} {...formItemLayout} style={{ marginTop: 25 }}>
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
          <Input placeholder='Введите название глэмпинга' />
        </Form.Item>
        <Form.Item name='region' label='Регион' hasFeedback rules={[{ required: true, message: 'Укажите область!' }]}>
          <Select placeholder='Выберите область Казахстана'>
            <Option value='Акмолинская область'>Акмолинская область</Option>
            <Option value='Актюбинская область'>Актюбинская область</Option>
            <Option value='Алматинская область'>Алматинская область</Option>
            <Option value='Атырауская область'>Атырауская область</Option>
            <Option value='Восточно-Казахстанская область'>Восточно-Казахстанская область</Option>
            <Option value='Жамбылская область'>Жамбылская область</Option>
            <Option value='Западно-Казахстанская область'>Западно-Казахстанская область</Option>
            <Option value='Карагандинская область'>Карагандинская область</Option>
            <Option value='Костанайская область'>Костанайская область</Option>
            <Option value='Кызылординская область'>Кызылординская область</Option>
            <Option value='Мангистауская область'>Мангистауская область</Option>
            <Option value='Павлодарская область'>Павлодарская область</Option>
            <Option value='Северо-Казахстанская область'>Северо-Казахстанская область</Option>
            <Option value='Туркестанская область'>Туркестанская область</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='square'
          label='Площадь'
          rules={[
            {
              required: true,
              message: 'Укажите площадь!',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Укажите площадь в цифрах (га)' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='description'
          label='Описание'
          rules={[
            {
              required: true,
              message: 'Введите описание!',
            },
          ]}
        >
          <TextArea rows={4} name='Note' className='form_input' placeholder='Опишите ваш глэмпинг' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='rent'
          label='Цена аренды за 1 питчу'
          rules={[
            {
              required: true,
              message: 'Укажите желаемую цену аренды за 1 питчу!',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Укажите желаемую цену аренды в цифрах' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='electricity'
          label='Электричество'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='water'
          label='Вода'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='road'
          label='Подъездные пути'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='pool'
          label='Бассейн'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='biking'
          label='Езда на велосипеде'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='hiking'
          label='Пешие туры'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='riding'
          label='Катание на лошадях'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='yoga'
          label='Йога'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='motorbike'
          label='Мотоцикл'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='alpinism'
          label='Альпинизм'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='trekking'
          label='Треккинг'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='tennis'
          label='Теннис'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='cinema'
          label='Просмотр фильмов'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='fishing'
          label='Рыбалка'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='aquapark'
          label='Аквапарк'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='golf'
          label='Гольф'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='volleyball'
          label='Воллейбол'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='boardGames'
          label='Настольные игры'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='diving'
          label='Дайвинг'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='ramp'
          label='Пандусы'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='dogPlayground'
          label='Площадка для собак'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='nursery'
          label='Детская комната'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='fireplace'
          label='Кострище'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='summerHouse'
          label='Беседка'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='grill'
          label='Гриль'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='wifi'
          label='Wi-Fi'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='laundry'
          label='Прачечная'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='sauna'
          label='Сауна'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='sportsGround'
          label='Спортивная площадка'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='playground'
          label='Детская площадка'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='beach'
          label='Пляж'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='indoorPool'
          label='Крытый бассейн'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='pharmacy'
          label='Аптека'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='miniZoo'
          label='Минизоопарк'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='store'
          label='Магазин'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='cafe'
          label='Кафе'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='restaurant'
          label='Ресторан'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='parking'
          label='Парковка'
          rules={[{ required: true, message: 'Укажите наличие или отсутствие данной опции!' }]}
        >
          <Select placeholder='Укажите наличие или отсутствие данной опции'>
            <Option value='true'>Есть</Option>
            <Option value='false'>Нет</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='upload'
          label='Фото'
          valuePropName='fileList'
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: 'Загрузите схему участка и фото глэмпинга!',
            },
          ]}
        >
          <Upload name='logo' beforeUpload={() => false} action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Загрузить схему и фото</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='coords'
          rules={[
            {
              message: 'Отметьте глэмпинг на карте!',
            },
          ]}
        >
          <Input style={{ visibility: 'hidden' }} value={placemark} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button className='item__button' type='primary' htmlType='submit'>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewLocation;
