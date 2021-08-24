import './Calendar.scss';

import React, { useState } from 'react';

import { Button, DatePicker, Space } from 'antd';
import moment from 'moment';

import { useActions } from '../../../../hooks/useAction';

const { RangePicker } = DatePicker;

interface ICalendarProps {
  pitchId?: string;
  reservedDates: any;
}

const Calendar: React.FC<ICalendarProps> = ({ pitchId, reservedDates }) => {
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
      accommodation: pitchId,
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
