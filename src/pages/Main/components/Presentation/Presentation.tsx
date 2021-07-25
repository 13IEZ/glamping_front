import './Presentation.scss';

import React from 'react';

const Presentation: React.FC = () => {
  return (
    <section className='presentation'>
      <div className='presentation-content'>
        <div className='container'>
          <div className='presentation-item'>
            <p className='presentation-title'>
              Мы – это группа компаний, учредители и члены Казахстанской ассоциации кемпингового туризма и караванинга.
            </p>
            <p className='presentation-list-title'>Группа компаний объединяет</p>
            <ul className='presentation-list'>
              <li>строительную компанию</li>
              <li>производителя кемпингового оборудования и поставщика европейских жилых туристических прицепов</li>
              <li>казахстанского туроператора</li>
              <li>консалтинговой компании</li>
              <li>учебный центр для сферы кемпинга и караваннинга</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
