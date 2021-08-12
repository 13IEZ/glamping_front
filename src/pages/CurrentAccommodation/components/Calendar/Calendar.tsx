import React from 'react';
import moment from 'moment';
import { DatePicker, Space, Button } from 'antd';
import './Calendar.scss';

const { RangePicker } = DatePicker;
interface ICalendarProps {
  accommodationId?: string;
}

const Calendar: React.FC<ICalendarProps> = ({ accommodationId }) => {
  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const onChange = (bookedDays: any, bookedDaysString: any) => {
    console.log(bookedDaysString);
  };
  console.log(accommodationId);
  const book = () => {
    // bookAccommodation(accommodationId, bookedDaysString);
  };

  return (
    <div className='calendar'>
      <Space direction='vertical' size={12}>
        <RangePicker disabledDate={disabledDate} onChange={onChange} />
      </Space>
      <Button className='item__button' style={{ marginTop: 20 }} onClick={book}>
        Бронировать
      </Button>
    </div>
  );
};

export default Calendar;
