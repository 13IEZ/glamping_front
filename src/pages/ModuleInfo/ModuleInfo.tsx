import './ModuleInfo.scss';

import React from 'react';

import {
  Button,
  Col,
  Row,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text} = Typography;

const ModuleInfo: React.FC = () => {

  return (
    <div className="ModuleInfo">
      <Typography>
        <Title>Белл тент Д-5</Title>
      </Typography>
      <Row>
        <Col span={12}>
        <img
          alt="example"
          src="https://глэмпинг.рф/upload/resize_cache/iblock/62a/380_253_2/62a3086c56463ef9dfddc1c1557759f1.jpg"
        />
        </Col>
        <Col span={12}>
          Белл тент - Это палатка для проживания,
          путешествий или отдыха. Дизайн белл-тента 
          представляет собой простую конструкцию. 
          Основным несущим элементов палатки является центральный шест. 
          Палатка двухслойная и выполнена из комбинации материалов. 
          Устойчивость палатки усиливается напряжением, 
          которое создают растяжки от стен до земли.
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Диаметр: 5 м,
          Площадь комнаты - 19 м2,
          Площадь крытой террасы - нет,
          Количество гостей - 3 человека,
          Вес - 75 кг,
          Объем – 1м3. 
          *Помост под палатку не входит в стоимость, компания выдает чертеж помоста, а заказчик изготавливает помост силами своих рабочих.
        </Col>
        <Col span={12}>
          <img
            alt="example"
            src="https://93.img.avito.st/image/1/yDUQuLaBZNxmHZbaDI_7ZvcbYNqyG2Ta1Xhg2mYdltqmH2jYphlkmA"
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
        <img
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWkFvwmOSmwLHwexUsUyKR4j9X5rvTNgYqQ&usqp=CAU"
        />
        </Col>
        <Col span={12}>
        Сезонность: 
        Данные модули можно обогревать различными система- ми отопления, 
        в зависимости от Вашего региона. 
        Компания Дикий Дом дает консультации при выборе отопителя.
        Модуль оснащен специальным клапаном, 
        который позволяет пользоваться как отопителем, так и кондиционером.
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Конструкция приходит заказчику в разобранном виде 
          (глэмпинг в количестве 15 штук легко умещается в фуру) 
          по указанным выше параметрам, упакованная в специальные материалы, 
          вместе со схемой сборки.
          Трое рабочих легко соберут модуль, 
          как конструктор за 6 часов по схеме сборки.
        </Col>
        <Col span={12}>
          <img
            alt="example"
            src="https://cdn-ru.bitrix24.kz/b10205869/landing/b8e/b8e7eff03143135a0a93bd1a27286e17/izmenennyy_1x.jpg"
          />
        </Col>
      </Row>
      <Typography>
        <Text strong>
          Цена: 800 000тг.
        </Text>
      </Typography>
      <Link to='/location'>
        <Button type='primary'>Заказать</Button>
      </Link>
    </div>
  );
}

export default ModuleInfo;