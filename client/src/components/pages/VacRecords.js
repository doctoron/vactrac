import React, { Fragment } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Vaccinations from '../vaccinations/Vaccinations';
import VacForm from '../vaccinations/VacForm';
import VacFilter from '../vaccinations/VacFilter';


const VacRecords = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              <span><h2>Vaccination Records</h2></span>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <VacForm />
            </Col>
            <Col xs="6">
              <Vaccinations />
              <VacFilter />
            </Col>
          </Row>
        </Jumbotron>
      </Container >
    </Fragment>
  )
}
export default VacRecords;
