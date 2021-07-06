import React from 'react';

import { Pagination, Select } from 'antd';

import ModuleCard from '../../components/ModuleCard/ModuleCard';

const { Option, OptGroup } = Select;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

const ModulesList: React.FC = () => {
  return (
    <div className='ModulesList'>
      <Select defaultValue='tent' style={{ width: 200 }} onChange={handleChange}>
        <OptGroup label='Type'>
          <Option value='tent'>Тент</Option>
          <Option value='module'>Модуль</Option>
          <Option value='multiframe'>Мультифрейм</Option>
          <Option value='geocupol'>Геокупол</Option>
          <Option value='binishell'>Бинишелл</Option>
          <Option value='ortocupol'>Ортокупол</Option>
          <Option value='yurt'>Юрта</Option>
          <Option value='camper'>Автодом</Option>
          <Option value='caravan'>Прицепной автодом</Option>
        </OptGroup>
      </Select>
      <Select defaultValue='name' style={{ width: 200 }} onChange={handleChange}>
        <OptGroup label='Name'>
          <Option value='name'>Name</Option>
        </OptGroup>
      </Select>
      <Select defaultValue='expensive' style={{ width: 200 }} onChange={handleChange}>
        <OptGroup label='Price'>
          <Option value='cheap'>Сначала дешёвые</Option>
          <Option value='expensive'>Сначала дорогие</Option>
        </OptGroup>
      </Select>
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
      <div className='example'>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
    </div>
  );
};

export default ModulesList;
