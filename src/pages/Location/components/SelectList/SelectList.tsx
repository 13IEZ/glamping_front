import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
import './SelectList.scss';

const SelectList: React.FC<any> = props => {
  return (
    <div className='selectList-container'>
      <Select onChange={props.handleChange} className='selectList'>
        {props.coordinates.map((coordinate: any) => (
          <Option key={coordinate.coordId} value={coordinate.coordId}>
            {coordinate.hint}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectList;
