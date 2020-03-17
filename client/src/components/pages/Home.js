import React, { useContext, useEffect, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col sm="10"><Cards /></Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="main-footer">
        <Row>
          <Col></Col>
          <Col sm="10"><h6 className="p-c">Antonio's Magnet &bull; Ronald Antonio &copy; 2019, All Rights Reserved</h6></Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};


export default Home;
