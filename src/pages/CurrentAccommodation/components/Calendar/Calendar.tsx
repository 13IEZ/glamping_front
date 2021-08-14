import React from 'react';
import moment from 'moment';
import { DatePicker, Space, Button } from 'antd';
import './Calendar.scss';

const { RangePicker } = DatePicker;
interface ICalendarProps {
  accommodationId?: string;
  reservedDates: any;
}
const Calendar: React.FC<ICalendarProps> = ({ reservedDates }) => {
  const disabledDate = (current: any) => {
    // Can not select days before today and today
    for (let i = 0; i < reservedDates.length; i++) {
      if (
        (current && current < moment().endOf('day')) ||
        (current > moment(reservedDates[i].startDate) && current < moment(reservedDates[i].endDate).endOf('day'))
      )
        return true;
    }
    return false;
  };

  const onChange = (value: any, bookedDaysString: any) => {
    console.log(bookedDaysString);
  };

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
