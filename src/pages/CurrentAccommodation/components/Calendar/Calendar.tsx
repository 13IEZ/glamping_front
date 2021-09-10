import './Calendar.scss';

import React, { useState } from 'react';

import { Button, DatePicker, Space } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';

const { RangePicker } = DatePicker;

interface ICalendarProps {
  accommodationId?: string;
  reservedDates: any;
}

const Calendar: React.FC<ICalendarProps> = ({ accommodationId, reservedDates }) => {
  const history = useHistory();
  const { createReservation } = useActions();
  const { user } = useTypedSelectorHook(state => state.users);

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
      accommodation: accommodationId,
    };
    setReservation(newReservation);
  };

  const book = async () => {
    if (user) {
      await createReservation(reservation);
    } else history.push('/login');
  };

  return (
    <div className='calendar'>
      <Space direction='vertical' size={12}>
        <RangePicker className='date' disabledDate={disabledDate} onChange={onChange} />
      </Space>
      <Button className='item__button' style={{ marginTop: 20 }} onClick={book} htmlType='submit'>
        Бронировать
      </Button>
    </div>
  );
};

export default Calendar;
