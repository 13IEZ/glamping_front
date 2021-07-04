import React from 'react';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ModuleCard: React.FC = () => {

  return (
    <>
      <Card 
        hoverable
        style={{ width: 1040 }}
        cover={<img alt="example" src="https://глэмпинг.рф/upload/resize_cache/iblock/62a/380_253_2/62a3086c56463ef9dfddc1c1557759f1.jpg"/>}
      >
        <Meta 
          title="Белл тент" 
          description="Белл тент - Это палатка для проживания, путешествий или отдыха. Дизайн белл-тента представляет собой простую конструкцию. Основным несущим элементов палатки является центральный шест. Палатка двухслойная и выполнена из комбинации материалов. Устойчивость палатки усиливается напряжением, которое создают растяжки от стен до земли." 
        />
        <Link to='/modules/info' >
          Прдробнее
        </Link>
      </Card>
    </>
  );
}

export default ModuleCard;