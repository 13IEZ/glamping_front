import './Calendar.scss';

import React from 'react';

import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

interface ICalendarProps {
  pitchId?: string;
  reservedDates: any;
}

const Calendar: React.FC<ICalendarProps> = () => {
  return (
    <div className='calendar'>
      <Space direction='vertical' size={12}>
        <RangePicker />
      </Space>
    </div>
  );
};

export default Calendar;
