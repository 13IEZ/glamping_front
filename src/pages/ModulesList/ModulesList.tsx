import React from 'react';

import { Pagination } from 'antd';

import ModuleCard from '../../components/ModuleCard/ModuleCard';

const ModulesList: React.FC = () => {

  return (
    <div className="Reviews">
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
      <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
    </div>
  )
};

export default ModulesList;