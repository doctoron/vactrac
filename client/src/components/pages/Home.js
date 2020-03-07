import React, { useContext, useEffect, Fragment } from 'react';
import { Container, Row, Col, Card, CardFooter } from 'reactstrap';
import Cards from '../../components/cards/Cards';
import AuthContext from '../../context/auth/authContext';
import Roundabout from '../../components/roundabout/Roundabout';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Container>
        <Roundabout />
        <Row>
          <Col></Col>
          <Col sm="10"><Cards /></Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="main-footer">
        <Row>
          <Col></Col>
          <Col sm="10"><p className="p-c">Antonio's Magnet &copy; 2020, All Rights Reserved</p></Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};


export default Home;
