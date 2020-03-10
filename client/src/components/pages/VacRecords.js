import React, { Fragment } from 'react';
import Vaccinations from '../vaccinations/Vaccinations';
import VacForm from '../vaccinations/VacForm';
import VacFilter from '../vaccinations/VacFilter';


const VacRecords = () => {
  return (
    <Fragment>
      <div>
        <h1 className="py-1">Vaccination Records</h1>
      </div>
      <div className='grid-2'>
        <VacForm />
      </div>
      <div>
        <VacFilter />
        <Vaccinations />
      </div>
    </Fragment>

  )
}

export default VacRecords;
