import React, { useState, useContext, useEffect } from 'react';
import VaccineContext from '../../context/vaccinations/vaccineContext';

import {
  Button,
  Form,
  Input,
  Label,
  FormText,
  FormGroup,
  Container
} from 'reactstrap';

const VacForm = () => {
  const vaccineContext = useContext(VaccineContext);

  const { addVaccine, updateVaccine, clearCurrent, current } = vaccineContext;

  useEffect(() => {
    if (current !== null) {
      setVaccine(current);
    } else {
      setVaccine({
        vaccineName: '',
        dateReceived: '',
        dateScheduled: '',
        type: 'scheduled'
      });
    }
  }, [vaccineContext, current]);

  const [vaccine, setVaccine] = useState({
    vaccineName: '',
    dateReceived: '',
    dateScheduled: '',
    type: 'scheduled'
  });

  const { vaccineName, dateScheduled, dateReceived, type } = vaccine;

  const onChange = e =>
    setVaccine({
      ...vaccine,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addVaccine(vaccine);
    } else {
      updateVaccine(vaccine);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };


  return (

    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <FormText><h3 className="text-primary">
            {current ? 'Edit Vaccine' : 'Add Vaccine'}
          </h3></FormText>
          <Label for="vaccineName">
            Vaccine Name
            <Input
              id="vaccineName"
              type="text"
              placeholder="Name of Vaccine"
              name="vaccineName"
              value={vaccineName}
              onChange={onChange}
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="dateReceived">
            Date Received
            <Input
              type="date"
              name="dateReceived"
              value={dateReceived}
              onChange={onChange}
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="dateScheduled">
            Date Scheduled
            <Input
              type="date"
              name="dateScheduled"
              value={dateScheduled}
              onChange={onChange}
            />
          </Label>
        </FormGroup>

        <div className="radio-container">
          <h5 className="t-c">Vaccination Scheduled or Received ?</h5>
          <FormGroup >
            <Label check>
              Received
            <Input
                type="radio"
                name="type"
                locale='yyyy-MM-dd'
                value="received"
                checked={type === 'received'}
                onChange={onChange}
              />
              {' '}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label check>
              Scheduled
          <Input
                type="radio"
                name="type"
                value="scheduled"
                checked={type === 'scheduled'}
                onChange={onChange}
              />
              {' '}
            </Label>
          </FormGroup>
        </div>

        <FormGroup>
          <br /><br /><br />
          <Input
            type="submit"
            value={current ? 'Update Vaccination' : 'Add Vaccination'}
            className="btn btn-primary btn-block"
          />
          {current && (
            <Button size="lg" className="btn-block" onClick={clearAll}>
              Clear
            </Button>
          )}
        </FormGroup>
      </Form>
    </Container >
  );
}
export default VacForm;
