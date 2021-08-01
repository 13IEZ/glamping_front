import React from 'react';
import { Select } from 'antd';

import './SelectList.scss';
import { ILocation } from '../../../../store/types/locationsTypes';

const { Option } = Select;

interface ISelectListProps {
  onSelectorChange: (id: string) => void;
  locations: Array<ILocation> | [];
}

const SelectList: React.FC<ISelectListProps> = ({ onSelectorChange, locations }) => {
  const selectOptions = locations.map(location => (
    <Option key={location._id} value={location._id}>
      {location.title}
    </Option>
  ));

  return (
    <Select onChange={onSelectorChange} className='select-list-container__select-list'>
      {selectOptions}
    </Select>
  );
};

export default SelectList;
