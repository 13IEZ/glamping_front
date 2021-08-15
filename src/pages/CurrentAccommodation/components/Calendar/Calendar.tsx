import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, Space, Button } from 'antd';
import './Calendar.scss';
import { useActions } from '../../../../hooks/useAction';

const { RangePicker } = DatePicker;

interface ICalendarProps {
  accommodationId?: string;
  reservedDates: any;
  user: any;
}

const Calendar: React.FC<ICalendarProps> = ({ accommodationId, reservedDates, user }) => {
  const { createReservation } = useActions();
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

  const [reservation, setReservation] = useState({});

  const onChange = (value: any, bookedDaysString: any) => {
    const newReservation = {
      startDate: bookedDaysString[0],
      endDate: bookedDaysString[1],
      user: user.user._id,
      accommodation: accommodationId,
    };
    setReservation(newReservation);
  };

  const book = async () => {
    await createReservation(reservation);
  };

  return (
    <div className='calendar'>
      <Space direction='vertical' size={12}>
        <RangePicker disabledDate={disabledDate} onChange={onChange} />
      </Space>
      <Button className='item__button' style={{ marginTop: 20 }} onClick={book} htmlType='submit'>
        Бронировать
      </Button>
    </div>
  );
};

export default Calendar;
