import React, { useContext, useRef, useEffect } from 'react';
import { Form, Input, Container } from 'reactstrap';

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
    <Container>
      <Form>
        <Input
          ref={text}
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
      </Form>
    </Container>
  )
}

export default VacFilter

