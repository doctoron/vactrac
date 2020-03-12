import React, { useContext, useRef, useEffect } from 'react';
import { Form, Input } from 'reactstrap';

import VaccineContext from '../../context/vaccinations/vaccineContext';

const VacFilter = () => {
  const vaccineContext = useContext(VaccineContext);
  const text = useRef('');

  const { filterVaccines, clearFilter, filtered } = vaccineContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      filterVaccines(e.target.value)
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Input
        ref={text}
        type="text"
        placeholder="My Tracked Vaccinations..."
        onChange={onChange}
      />
    </Form>
  )
}

export default VacFilter

