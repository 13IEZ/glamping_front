import React from 'react';
import { Typography } from 'antd';
import { CheckSquareOutlined } from '@ant-design/icons';
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
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
              <CheckSquareOutlined style={{ visibility: 'hidden' }} />
              Паркинг
            </Paragraph>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CurrentLocationDescription;
