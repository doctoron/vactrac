import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Vaccinations from '../vaccinations/Vaccinations';
import VacForm from '../vaccinations/VacForm';
import VacFilter from '../vaccinations/VacFilter';


const MyVac = () => {
  return (
    <Container fluid className="myvac">
      <Row>
        <Col lg="12">
          <span><h2>My VacTrack Records</h2></span>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <VacForm />
        </Col>
        <Col lg="auto">
          <VacFilter />
          <Vaccinations />
        </Col>
      </Row>
    </Container >
  )
}
export default MyVac;
