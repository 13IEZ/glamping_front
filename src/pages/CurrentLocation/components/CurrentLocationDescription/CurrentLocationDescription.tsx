import React from 'react';
import { Typography } from 'antd';
import { CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import './CurrentLocationDescription.scss';

const { Paragraph } = Typography;

interface IReviewItemProps {
  _id?: string;
  title?: string;
  description?: string;
  electricity?: boolean;
  water?: boolean;
  road?: boolean;
  pool?: boolean;
  biking?: boolean;
  hiking?: boolean;
  riding?: boolean;
  yoga?: boolean;
  motorbike?: boolean;
  alpinism?: boolean;
  trekking?: boolean;
  tennis?: boolean;
  cinema?: boolean;
  fishing?: boolean;
  aquapark?: boolean;
  golf?: boolean;
  volleyball?: boolean;
  boardGames?: boolean;
  diving?: boolean;
  ramp?: boolean;
  dogPlayground?: boolean;
  nursery?: boolean;
  fireplace?: boolean;
  summerHouse?: boolean;
  grill?: boolean;
  wifi?: boolean;
  laundry?: boolean;
  sauna?: boolean;
  sportsGround?: boolean;
  playground?: boolean;
  beach?: boolean;
  indoorPool?: boolean;
  pharmacy?: boolean;
  miniZoo?: boolean;
  store?: boolean;
  cafe?: boolean;
  restaurant?: boolean;
  parking?: boolean;
}

const CurrentLocationDescription: React.FC<IReviewItemProps> = props => {
  return (
    <div className='location-description'>
      <Paragraph> {props.title} </Paragraph>
      <Paragraph> {props.description} </Paragraph>
      <div className='infrastructure'>
        <Paragraph> Инфрастуктура: </Paragraph>
        <ul className='location-grid'>
          <li style={{ listStyle: 'none' }}>
            {props.electricity ? (
              <Paragraph>
                <CheckSquareOutlined />
                Электричество
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Электричество
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.road ? (
              <Paragraph>
                <CheckSquareOutlined />
                Подьездные пути
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Подьездные пути
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.water ? (
              <Paragraph>
                <CheckSquareOutlined />
                Вода
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Вода
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.pool ? (
              <Paragraph>
                <CheckSquareOutlined />
                Бассейн
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Бассейн
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.biking ? (
              <Paragraph>
                <CheckSquareOutlined />
                Езда на велосипеде
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Езда на велосипеде
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.hiking ? (
              <Paragraph>
                <CheckSquareOutlined />
                Пешие туры
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Пешие туры
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.riding ? (
              <Paragraph>
                <CheckSquareOutlined />
                Катание на лошадях
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Катание на лошадях
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.yoga ? (
              <Paragraph>
                <CheckSquareOutlined />
                Йога
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Йога
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.motorbike ? (
              <Paragraph>
                <CheckSquareOutlined />
                Мотоцикл
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Мотоцикл
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.alpinism ? (
              <Paragraph>
                <CheckSquareOutlined />
                Альпинизм
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Альпинизм
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.trekking ? (
              <Paragraph>
                <CheckSquareOutlined />
                Треккинг
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Треккинг
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.tennis ? (
              <Paragraph>
                <CheckSquareOutlined />
                Теннис
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Теннис
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.cinema ? (
              <Paragraph>
                <CheckSquareOutlined />
                Просмотр фильмов
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Просмотр фильмов
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.fishing ? (
              <Paragraph>
                <CheckSquareOutlined />
                Рыбалка
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Рыбалка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.aquapark ? (
              <Paragraph>
                <CheckSquareOutlined />
                Аквапарк
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Аквапарк
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.golf ? (
              <Paragraph>
                <CheckSquareOutlined />
                Гольф
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Гольф
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.volleyball ? (
              <Paragraph>
                <CheckSquareOutlined />
                Воллейболл
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Воллейболл
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.boardGames ? (
              <Paragraph>
                <CheckSquareOutlined />
                Настольные игры
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Настольные игры
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.diving ? (
              <Paragraph>
                <CheckSquareOutlined />
                Дайвинг
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Дайвинг
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.ramp ? (
              <Paragraph>
                <CheckSquareOutlined />
                Пандусы
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Пандусы
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.dogPlayground ? (
              <Paragraph>
                <CheckSquareOutlined />
                Площадка для собак
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Площадка для собак
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.nursery ? (
              <Paragraph>
                <CheckSquareOutlined />
                Детская комната
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Детская комната
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.fireplace ? (
              <Paragraph>
                <CheckSquareOutlined />
                Кострище
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Кострище
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.summerHouse ? (
              <Paragraph>
                <CheckSquareOutlined />
                Беседка
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Беседка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.grill ? (
              <Paragraph>
                <CheckSquareOutlined />
                Гриль
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Гриль
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.wifi ? (
              <Paragraph>
                <CheckSquareOutlined />
                Wi-Fi
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Wi-Fi
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.laundry ? (
              <Paragraph>
                <CheckSquareOutlined />
                Прачечная
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Прачечная
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.sauna ? (
              <Paragraph>
                <CheckSquareOutlined />
                Сауна
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Сауна
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.sportsGround ? (
              <Paragraph>
                <CheckSquareOutlined />
                Спортивная площадка
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Спортивная площадка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.playground ? (
              <Paragraph>
                <CheckSquareOutlined />
                Детская площадка
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Детская площадка
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.beach ? (
              <Paragraph>
                <CheckSquareOutlined />
                Пляж
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Пляж
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.indoorPool ? (
              <Paragraph>
                <CheckSquareOutlined />
                Крытый бассейн
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Крытый бассейн
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.pharmacy ? (
              <Paragraph>
                <CheckSquareOutlined />
                Аптека
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Аптека
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.miniZoo ? (
              <Paragraph>
                <CheckSquareOutlined />
                Минизоопарк
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Минизоопарк
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.store ? (
              <Paragraph>
                <CheckSquareOutlined />
                Магазин
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Магазин
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.cafe ? (
              <Paragraph>
                <CheckSquareOutlined />
                Кафе
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Кафе
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.restaurant ? (
              <Paragraph>
                <CheckSquareOutlined />
                Ресторан
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Ресторан
              </Paragraph>
            )}
          </li>
          <li style={{ listStyle: 'none' }}>
            {props.parking ? (
              <Paragraph>
                <CheckSquareOutlined />
                Паркинг
              </Paragraph>
            ) : (
              <Paragraph>
                <MinusSquareOutlined />
                Паркинг
              </Paragraph>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentLocationDescription;
