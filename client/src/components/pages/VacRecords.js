import React, { Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';


const VacRecords = () => {
  return (
    <Fragment>
      <div>
        <h1 className="py-1">Vaccination Records</h1>
      </div>
      <div className='grid-2'>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </Fragment>

  )
}

export default VacRecords;
