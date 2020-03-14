import React, { useState, useContext, useEffect } from 'react';
import VaccineContext from '../../context/vaccinations/vaccineContext';

import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormText,
  FormGroup
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
        dateGiven: '',
        type: 'scheduled'
      });
    }
  }, [vaccineContext, current]);

  const [vaccine, setVaccine] = useState({
    vaccineName: '',
    dateDue: '',
    dateGiven: '',
    type: 'scheduled'
  });

  const { vaccineName, dateDue, dateGiven, type } = vaccine;

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
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <FormText><h3 className="text-primary">
                  {current ? 'Edit Vaccine' : 'Add Vaccine'}
                </h3></FormText>
                <Label for="vaccineName">Vaccine</Label>
                <Input
                  id="vaccineName"
                  type="text"
                  placeholder="Vaccine"
                  name="vaccineName"
                  value={vaccineName}
                  onChange={onChange}
                />
                <Label for="dateGiven">Date Given</Label>
                <Input
                  type="date"
                  placeholder="Date Given"
                  name="dateGiven"
                  value={dateGiven}
                  onChange={onChange}
                />
                <Label for="dateDue">Date Due</Label>
                <Input
                  type="date"
                  placeholder="Date Due"
                  name="dateDue"
                  value={dateDue}
                  onChange={onChange}
                />
                <div className="radio-container">
                  <Label for="type">Received or Scheduled?</Label> <br />
                  <Input
                    type="radio"
                    value="received"
                    name="received"
                    checked=
                    {type === 'received'}
                    onChange={onChange}
                  /> {''}
                Received {''}
                  <Input
                    type="radio"
                    value="scheduled"
                    name="type"
                    checked=
                    {type === 'scheduled'}
                    onChange={onChange}
                  /> Scheduled <br />   <br />
                </div>
                <Input
                  type="submit"
                  value={current ? 'Update Vaccination' : 'Add Vaccination'}
                  className="btn btn-primary btn-block"
                />
                {current && (
                  <Button className="btn-block" onClick={clearAll}>
                    Clear
                  </Button>
                )}
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default VacForm;
