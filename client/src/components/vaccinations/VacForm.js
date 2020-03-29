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
        dateDue: '',
        dateReceived: '',
        type: 'scheduled'
      });
    }
  }, [vaccineContext, current]);

  const [vaccine, setVaccine] = useState({
    vaccineName: '',
    dateDue: '',
    dateReceived: '',
    type: 'scheduled'
  });

  const { vaccineName, dateDue, dateReceived, type } = vaccine;

  const onChange = e =>
    setVaccine({ ...vaccine, [e.target.name]: e.target.value });

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
            <Input
              id="vaccineName"
              type="text"
              placeholder="Vaccine"
              name="vaccineName"
              value={vaccineName}
              onChange={onChange}
            />Vaccine Name
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="dateReceived">
            <Input
              type="date"
              placeholder="Date Received"
              name="dateReceived"
              value={dateReceived.substring(0, 10)}
              onChange={onChange}
            />Date Received
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="dateDue">
            <Input
              type="date"
              placeholder="Date Due"
              name="dateDue"
              value={dateDue.substring(0, 10)}
              onChange={onChange}
            />Date Due
          </Label>
        </FormGroup>

        <div className="radio-container">
          <FormGroup>
            <h5 className="p-3">Vaccination Received or Scheduled ?</h5>
            <Label check>
              Received
            </Label>
            <Input
              type="radio"
              name="type"
              value="received"
              checked={type === 'received'}
              onChange={onChange}
            />
            {' '}
          </FormGroup>
        </div>

        <FormGroup>
          <Label check>
            Scheduled
          </Label>
          <Input
            type="radio"
            name="type"
            value="scheduled"
            checked={type === 'scheduled'}
            onChange={onChange}
          />
          {' '}
        </FormGroup>

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
