import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


const PickDate = (date) => {
  return (
    <DatePicker selected={date}
    />
  )
};

export default PickDate
