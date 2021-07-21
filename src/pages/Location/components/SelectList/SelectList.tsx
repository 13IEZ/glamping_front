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
    <Select onChange={props.handleChange} className='select-list-container__select-list'>
      {coordinates.map((coordinate: any) => (
        <Option key={coordinate.coordId} value={coordinate.coordId}>
          {coordinate.hint}
        </Option>
      ))}
    </Select>
  );
};

export default SelectList;
