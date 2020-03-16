import React, { useContext, useRef, useEffect } from 'react';
import VaccineContext from '../../context/vaccinations/vaccineContext';

const VacFilter = () => {
  const vaccineContext = useContext(VaccineContext);
  const text = useRef('');

  const { filterVaccines, clearFilter, filtered } = vaccineContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterVaccines(e.target.value)
    } else {
      clearFilter();
    }
    // console.log('Text', e.target.value);
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default VacFilter;

