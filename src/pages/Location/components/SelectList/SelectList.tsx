import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
import './SelectList.scss';

const sortCoordinates = (arr: any) => {
  const result = arr.sort(function (a: any, b: any) {
    if (a.hint < b.hint) {
      return -1;
    }
    if (a.hint > b.hint) {
      return 1;
    }
    return 0;
  });
  return result;
};

const SelectList: React.FC<any> = props => {
  const coordinates = sortCoordinates(props.coordinates);
  return (
    <div className='selectList-container'>
      <Select onChange={props.handleChange} className='selectList'>
        {coordinates.map((coordinate: any) => (
          <Option key={coordinate.coordId} value={coordinate.coordId}>
            {coordinate.hint}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectList;
