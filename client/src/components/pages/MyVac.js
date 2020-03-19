import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Vaccinations from '../vaccinations/Vaccinations';
import VacForm from '../vaccinations/VacForm';
import VacFilter from '../vaccinations/VacFilter';


const MyVac = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col xs="12">
            <span><h2>My VacTrack Records</h2></span>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <VacForm />
          </Col>
          <Col xs="4">
            <VacFilter />
            <Vaccinations />
          </Col>
        </Row>
      </Container >
    </Fragment>
  )
}
export default MyVac;
