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
      <Roundabout />
      <Container>
        <Row>
          <Col></Col>
          <Col sm="10"><Cards /></Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};


export default Home;
